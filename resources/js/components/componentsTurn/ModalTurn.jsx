import React from "react";
import ReactDOM from "react-dom";

import Chair from "./chair";
  /*MODAL TURN IMPORTS*/
  import { useReducer } from 'react';
  import { turnReducer, turnStateData} from '../../../../src/reducers/turnReducer';
  import turnMapDispatcht from "../../turnUses";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import "../../../css/ModalTurn.css"

import { useForm } from "react-hook-form";

// import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'


import { useState } from "react";
import swal from "sweetalert";


const ModalTurn = () => {

  const [turnState, dispatch] =useReducer(turnReducer,turnStateData);
  const {chairs, day, schedule, completeOrder,chairIsSelected, activeChairId, dayIsSelected, selecetDay, hourIsSelected, selectedHour ,userData, client_data} = turnState;

  const {name_client, phone_client, email_client} = client_data;

  const getChairs = turnMapDispatcht(dispatch).getChairs;

  // const getDays = turnMapDispatcht(dispatch).getDays;

  const getSchedule = turnMapDispatcht(dispatch).getSchedule;
  
  const setHour = turnMapDispatcht(dispatch).setHour;

  const saveTurn = turnMapDispatcht(dispatch).saveTurn;
  
  const setActiveChair =  turnMapDispatcht(dispatch).setActiveChair;

  const setUserData = turnMapDispatcht(dispatch).setUserData;

  const setTurnData =  turnMapDispatcht(dispatch).setTurnData;



  const {register, handleSubmit, formState:{errors}} = useForm(); 



  const [value, setValue] = useState()


  const setTodaY = ()=>{
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();

    // todaystring = mm + '/' + dd + '/' + yyyy;
    // console.log(today)

    document.getElementById("calendar-input").valueAsDate = new Date()
  }

  const onSubmit = data => {
    if (data){
      setUserData(data);
    }else{
      console.log(data);
    }
  }

  const setTurnDataValidated = ()=>{

    if (!chairIsSelected || !dayIsSelected || !hourIsSelected){
      let chairAlert="-Silla \n";
      let dayAlert = "-Fecha \n";
      let hourAlert = "-Horario \n";

      if (chairIsSelected){
        chairAlert= "";
      }
      if(dayIsSelected){
        dayAlert= "";
      }
      if(hourIsSelected){
        hourAlert= "";
      }
      swal(`por favor, selecicone: \n ${chairAlert} ${dayAlert} ${hourAlert}`);
    }

    if (chairIsSelected, dayIsSelected,hourIsSelected){
      setTurnData();
    }
  }




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
          <Tabs defaultActiveKey="first" id="controlled-tabs"  selectedTabClassName="bg-dark text-white">
            <Tab eventKey="first" title="Usuario" >
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-12" >
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
                        value: /[0-9]{9,12}/,
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
                <div className="modal-footer">
                  <button className="btn btn-black" type="submit" value="submit"  className="btn login_btn" onClick={()=>onSubmit()}>Siguiente</button>
                </div>
              </form>
            </Tab>
            <Tab eventKey="second" title="Turno" tabClassName="modal-turn-tab">
                <div className="col-12">
                  <div className="border-0 border-bottom">
                    <span className="fw-bold fs-5 font-h1">
                      Seleccione su silla 
                    </span>
                  </div>
                </div>

            
                <div className="container mt-5">
                  <div className="row">
                      {chairs.map(chair=>
                        <Chair key={chair.id} data={chair} setActiveChair={setActiveChair} getSchedule={getSchedule} selecetDay={selecetDay} ></Chair>
                      )}
                  </div>
                </div>
              

                <div className="col-12">
                  <div className="border-0 border-bottom">
                    <span className="fw-bold fs-5 font-h1">
                      Seleccione una fecha disponible
                    </span>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex">
                    <input className="form-control" type="date" name="trip-start"
                      onChange={(event)=>getSchedule(activeChairId,event.target.value)}
                       max="2022-12-31" id="calendar-input"/>
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

                <div className="modal-footer">
                  <button type="button" className="btn btn-black" onClick={()=>setTurnDataValidated()}>Siguiente</button>
                </div>

            </Tab>
            <Tab eventKey="third" title="Confirmar" tabClassName="modal-turn-tab">
              <div className="input-group mb-1">
                <input type="text" className="form-control" placeholder={client_data.name_client} aria-label="Username"
                    aria-describedby="basic-addon1" disabled={true}/>
                <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                    className="bi bi-person"></i></span>
              </div>

              <div className="input-group mb-1">          
                <input type="text" className="form-control" placeholder={client_data.phone_client} aria-label="Username"
                    aria-describedby="basic-addon1" disabled={true}/>
                <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                    className="bi bi-telephone"></i></span>
              </div>

              <div className="input-group mb-1">
                <input type="text" className="form-control" placeholder={client_data.email_client} aria-label="Username"
                    aria-describedby="basic-addon1" disabled={true}/>
                <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                        className="bi bi-envelope"></i></span>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-black">Generar turno</button>
              </div>
            </Tab>
          </Tabs>
        </div>
        
      </div>
    </div>
  </div>



  );
}

export default ModalTurn

if (document.getElementById("modalTurn")) {
  ReactDOM.render(
      <React.StrictMode>
          <ModalTurn />
      </React.StrictMode>,
      document.getElementById("modalTurn")
  );
}