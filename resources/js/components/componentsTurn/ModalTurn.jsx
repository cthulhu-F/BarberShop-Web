import React from "react";
import ReactDOM from "react-dom";

import Chair from "./chair";
  /*MODAL TURN IMPORTS*/
  import { useReducer } from 'react';
  import { turnReducer, turnStateData} from '../../../../src/reducers/turnReducer';
  import turnMapDispatcht from "../../turnUses";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
// import { Tabs,TabList, Tab, TabPanel } from "react-tabs";
import Button from "@restart/ui/esm/Button";
import "../../../css/ModalTurn.css"
import "../../../css/main.css"

import { useForm } from "react-hook-form";

// import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'


import { useState } from "react";
import swal from "sweetalert2";
import { parse } from "postcss";
import { min } from "lodash";
import { TabList } from "react-tabs";
import  { ShowConfigDay, ShowConfigTurn, CreateOrderTurn } from "../../helpers/TurnHelpers";
import { useEffect } from "react";


const ModalTurn = () => {

  const [turnState, dispatch] =useReducer(turnReducer,turnStateData);
  const {chairs, day, schedule, completeOrder,chairIsSelected, activeChairId, selecetDay, turnDuration, hourIsSelected, selectedHour ,userData, client_data} = turnState;

  const {name_client, phone_client, email_client, client_is_registered} = client_data;

  //API
  
  const readAllTurn = turnMapDispatcht(dispatch).readAllTurn;
  
  const readAllDay = turnMapDispatcht(dispatch).readAllDay;

  //END 

  const getChairs = turnMapDispatcht(dispatch).getChairs;

  // const getDays = turnMapDispatcht(dispatch).getDays;

  const getSchedule = turnMapDispatcht(dispatch).getSchedule;
  
  const setHour = turnMapDispatcht(dispatch).setHour;

  const saveTurn = turnMapDispatcht(dispatch).saveTurn;
  
  const setActiveChair =  turnMapDispatcht(dispatch).setActiveChair;

  const setUserData = turnMapDispatcht(dispatch).setUserData;

  const {register, handleSubmit, formState:{errors}} = useForm(); 

  const [value, setValue] = useState()

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var yyyymax = parseInt(yyyy)+1;
  var minDate = yyyy + '-' + mm + '-' + dd;
  var maxDte = yyyymax + '-' + mm + '-' + dd;
  var pHolder = dd +'/' + mm + '/' + yyyy


  const advancaTab = () =>{
    let key 
    const allTabs = document.querySelectorAll(".nav-link");
    allTabs.forEach(tab => 
      {if(tab.classList.contains("active")){
        key = tab.id.split('-')[3]
        }
      }
    );
    key = parseInt(key) + 1;
    document.getElementById(`controlled-tabs-tab-${key}`).click();
  }

  const onSubmit = (data) => {
    if (data){
      setUserData(data);
      advancaTab();
    }else{
      //console.log(data);
    }
  }

  const setTurnDataValidated = ()=>{

    if (!chairIsSelected || !hourIsSelected){
      let chairAlert=" silla";
      let hourAlert = " y horario";

      if (chairIsSelected){
        chairAlert= "";
        hourAlert=" horario";
      }
      if(hourIsSelected){
        hourAlert= "";
      }

      swal.fire({
        text: `Por favor selecicone${chairAlert} ${hourAlert}.`,
        timer:"1200", 
        position: "bottom",
        customClass : {
            container: "add-to-cart-alert-container",
            popup:"add-to-cart-alert",
        }
       });
    }

    if(chairIsSelected && hourIsSelected){
      advancaTab()
    }
  }

  const setTabMessage =()=>{
    if (client_is_registered){
      
      return "Actualizar datos";
    }
    else {
      return "Cargar datos";
    }
  }


  const alertAndsaveTurn = async (event)=>{
    event.preventDefault();

    let turnConfirmed = {
      //id: 1,
      name: chairs.find((chair)=>chair.id === activeChairId).name,
      name_client: client_data.name_client,
      email_client: client_data.email_client, 
      phone_client: client_data.phone_client, 
      date: selecetDay,
      time: selectedHour,
      turn_duration: turnDuration 
      //update_at: today, 
      //status: "ACTIVE"
    }

    let urlPDF = (
      "http://127.0.0.1:8000/api/ShiftInvoice?name=" + 
      turnConfirmed.name_client 
      + "&email=" +
      turnConfirmed.email_client
      + "&phone=" +
      turnConfirmed.phone_client
      + "&date=" +
      turnConfirmed.date
      + "&time=" +
      turnConfirmed.time
      );

    let response = await CreateOrderTurn(turnConfirmed);

    console.log(response);
    
    swal.fire({
      title: "Turno guradado con éxito!",
      html: `<span style="font-weight:700;" >Motivo:</span> ${chairs.find((chair)=>chair.id === activeChairId).name} <br><br>
      <span style="font-weight:700;" >Cliente:</span> ${client_data.name_client}<br><br>
      <span style="font-weight:700;" >Fecha:</span> ${selecetDay}<br><br>
      <span style="font-weight:700;" >Hora:</span> ${selectedHour}`,
      timer:5000})
      .then(()=>{}).then(()=>{
        window.open(urlPDF)
        window.location.href = ' ';
      })
    
  }


  const [selectedTab, setSelectedTab] = useState(0);
  const tabCount = 3;

  console.log(activeChairId);

  useEffect(()=>{
    async function ShowDay(){
      const resDay = await ShowConfigDay();
      const resTurn = await ShowConfigTurn();
      
      readAllDay(resDay);
      readAllTurn(resTurn);
    }
    ShowDay()

  },[])

  return(
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-gl">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title fs-3 font-h1" id="staticBackdropLabel"> Nuevo turno <i className="bi bi-scissors"></i>
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <Tabs defaultActiveKey="1" id="controlled-tabs" 
          selectedTabClassName="bg-dark text-white"
          defaultTab={selectedTab.toString()}
          >
            {/* <TabList>
              <Tab tabFor="0" id="tab0">Tab 1</Tab>
              <Tab tabFor="1" id="tab1">Tab 2</Tab>
              <Tab tabFor="2" id="tab2">Tab 3</Tab>
            </TabList> */}
            <Tab eventKey="1" title="Usuario"  tabId="0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-12" style={{margin:"20px 0px"}}>
                  <div className="border-0 border-bottom">
                    <span className="fw-bold fs-5 font-h1">
                      Datos de contacto
                    </span>
                  </div>
                </div>

                <div className="col-12" >
                  <div className="input-group mb-1">
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="Username"
                      aria-describedby="basic-addon1"
                      {...register("name",{
                        required:{
                            value:true,
                            message:"El campo es requerido", 
                        },
                        pattern:{
                            value: /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}/i,
                            message: "El formato no es correcto",
                        }
                    })}/>
                    <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                        className="bi bi-person"></i></span>
                  </div>
                  {errors.name && <span className={errors.name}>{errors.name.message}</span>}

                </div>

                <div className="col-12">
                  <div className="input-group mb-1">
                    {/* <PhoneInput
                      value={value}
                      onChange={setValue}
                      defaultCountry="US"
                      id="phone-input"
                      placeholder="+1 123 123 1234"
                      aria-describedby="basic-addon1"
                      className="form-control"
                    /> */}
                    <input type="tel" className="form-control" placeholder="Telefono" aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...register("phone",{
                    required:{
                        value:true,
                        message:"El campo es requerido", 
                    },
                    pattern:{
                      value: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/,
                      message: "El formato no es correcto",
                    }
                })}/>
                    <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                        className="bi bi-telephone"></i></span>
                  </div>
                  {errors.phone && <span className={errors.phone}>{errors.phone.message}</span>}

                </div>

                <div className="col">
                  <div className="input-group mb-1">
                    <input type="email" className="form-control" placeholder="Correo" aria-label="Username"
                      aria-describedby="basic-addon1"
                      {...register("email",{
                        required:{
                            value:true,
                            message:"El campo es requerido", 
                        },
                        pattern:{
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "El formato no es correcto",
                        }
                    })}/>
                    <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                        className="bi bi-envelope"></i></span>
                  </div>
                  {errors.email && <span className={errors.email}>{errors.email.message}</span>}

                </div>
                <div className="modal-footer" style={{margin:"20px 0px 0px 0px"}}>
                  <button className="btn btn-black" type="submit" value="submit"  className="btn w-100 btn-orangeWeb" onClick={()=>onSubmit()}>{setTabMessage()}</button>
                </div>
              </form>
            </Tab>
            <Tab eventKey="2" title="Turno" tabClassName="modal-turn-tab" disabled={!client_is_registered}  tabId="1">
                <div className="col-12" style={{margin:"20px 0px 0px 0px"}}>
                  <div className="border-0 border-bottom">
                    <span className="fw-bold fs-5 font-h1">
                      Seleccione su silla 
                    </span>
                  </div>
                </div>

            
                <div className="container mt-5">
                  <div className="row">
                      {chairs.filter(chair=>chair.status=="ACTIVE").map(chair=>
                          <Chair key={chair.id} data={chair} setActiveChair={setActiveChair} getSchedule={getSchedule} selecetDay={selecetDay} ></Chair>
                      )}
                  </div>
                </div>
              

                <div className="col-12" style={{margin:"20px 0px 0px 0px"}}> 
                  <div className="border-0 border-bottom">
                    <span className="fw-bold fs-5 font-h1">
                      Seleccione una fecha disponible
                    </span>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex">
                    <input className="form-control" type="date" name="trip-start"
                      // onFocus={(e) => e.currentTarget.type = "date"}
                      // onBlur={(e) => e.currentTarget.type = "text"}
                      // placeholder={pHolder}
                      min = {minDate} max={maxDte} 
                      onChange={(event)=>getSchedule(activeChairId,event.target.value)}
                      id="calendar-input"
                      style={{margin:"10px 0px"}}/>
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-group">
                    <select className="form-select border-0 border-start border-top border-bottom" id="inputGroupSelect02"
                    onChange={(event)=>setHour(event.target.value)}>
                      <option selected>Horarios</option>
                      {schedule.map((hour)=>
                        <option>{hour.turn}</option>
                      )}
                      
                    </select>
                    <label className="input-group-text bg-white border-0 border-end border-top border-bottom"
                      for="inputGroupSelect02"><i className="bi bi-clock"></i></label>
                  </div>
                </div>

                <div className="modal-footer" style={{margin:"20px 0px 0px 0px"}}>
                  <button type="button" className="btn login_btn btn-orangeWeb"  onClick={()=>setTurnDataValidated()}>Siguiente</button>
                </div>

            </Tab>
            <Tab eventKey="3" title="Confirmar" tabClassName="modal-turn-tab" disabled={!hourIsSelected || !chairIsSelected}  tabId="2" >
              <form >
                <div className="col-12" style={{margin:"20px 0px"}}>
                  <div className="border-0 border-bottom">
                    <span className="fw-bold fs-5 font-h1">
                      Datos del Turno
                    </span>
                  </div>
                </div>
                <div className="input-group mb-1">
                  <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                      className="bi bi-person"></i></span>
                  <input type="text" className="form-control" placeholder={client_data.name_client} aria-label="Username"
                      aria-describedby="basic-addon1" disabled={true}/>
                </div>

                <div className="input-group mb-1">   
                  <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                      className="bi bi-telephone"></i></span>       
                  <input type="text" className="form-control" placeholder={client_data.phone_client} aria-label="Username"
                      aria-describedby="basic-addon1" disabled={true}/>
                </div>

                <div className="input-group mb-1">
                  <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                          className="bi bi-envelope"></i></span>
                  <input type="text" className="form-control" placeholder={client_data.email_client} aria-label="Username"
                      aria-describedby="basic-addon1" disabled={true}/>
                </div>

                <div className="input-group mb-1">
                  <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                          className="bi bi-scissors"></i></span>
                  <input type="text" className="form-control" placeholder={chairs.find((chair)=>chair.id === activeChairId).name } aria-label="Username"
                      aria-describedby="basic-addon1" disabled={true}/>
                </div>

                <div className="input-group mb-1">
                  <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                          className="bi bi-calendar-check"></i></span>
                  <input type="text" className="form-control" placeholder={selecetDay} aria-label="Username"
                      aria-describedby="basic-addon1" disabled={true}/>
                </div>

                <div className="input-group mb-1">
                  <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                          className="bi bi-clock"></i></span>
                  <input type="text" className="form-control" placeholder={selectedHour} aria-label="Username"
                      aria-describedby="basic-addon1" disabled={true}/>
                </div>

                <div className="modal-footer" style={{margin:"20px 0px 0px 0px"}}>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" value="submit" className="btn btn-orangeWeb" onClick={(event)=>{alertAndsaveTurn(event)}}>Generar turno</button>
                     
                </div>
              </form>
            </Tab>
          </Tabs>
        </div>
        
      </div>
    </div>
  </div>



  );
}

export default ModalTurn

