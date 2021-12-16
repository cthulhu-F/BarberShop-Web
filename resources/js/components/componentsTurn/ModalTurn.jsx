import React from "react";
import ReactDOM from "react-dom";

import Chair from "./chair";
  /*MODAL TURN IMPORTS*/
  import { useReducer } from 'react';
  import { turnReducer, turnStateData} from '../../../../src/reducers/turnReducer';
  import turnMapDispatcht from "../../turnUses";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Fade from "react-bootstrap";
import "../../../css/ModalTurn.css"




const ModalTurn = () => {

  const [turnState, dispatch] =useReducer(turnReducer,turnStateData);
  const {chairs, day, schedule, completeOrder,activeChairId, selecetDay} = turnState;

  const getChairs = turnMapDispatcht(dispatch).getChairs;

  // const getDays = turnMapDispatcht(dispatch).getDays;

  const getSchedule = turnMapDispatcht(dispatch).getSchedule;

  const saveTurn = turnMapDispatcht(dispatch).saveTurn;
  
  const setActiveChair =  turnMapDispatcht(dispatch).setActiveChair;



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
          <Tabs defaultActiveKey="first" transition={Fade} id="controlled-tabs"  selectedTabClassName="bg-dark text-white">
            <Tab eventKey="first" title="Usuario" >
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
                  aria-describedby="basic-addon1"/>
                <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                    className="bi bi-person"></i></span>
              </div>
            </div>

            <div className="col-12">
              <div className="input-group mb-1">
                <input type="number" className="form-control" placeholder="Telefono" aria-label="Username"
                  aria-describedby="basic-addon1"/>
                <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                    className="bi bi-telephone"></i></span>
              </div>
            </div>

            <div className="col">
              <div className="input-group mb-1">
                <input type="email" className="form-control" placeholder="Correo" aria-label="Username"
                  aria-describedby="basic-addon1"/>
                <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                    className="bi bi-envelope"></i></span>
              </div>
            </div>
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
                        <Chair key={chair.id} data={chair} setActiveChair={setActiveChair} getSchedule={getSchedule} selecetDay={selecetDay}></Chair>
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
                    <input className="form-control" type="date" name="trip-start" onChange={(event)=>getSchedule(activeChairId,event.target.value)} min="2021-12-06"
                      max="2022-12-31"/>
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-group">
                    <select className="form-select border-0 border-start border-top border-bottom" id="inputGroupSelect02">
                      <option selected>Horarios</option>
                      {schedule.map((hour)=>
                        <option>{hour.turn}</option>
                      )}
                      
                    </select>
                    <label className="input-group-text bg-white border-0 border-end border-top border-bottom"
                      for="inputGroupSelect02"><i className="bi bi-clock"></i></label>
                  </div>
                </div>

            </Tab>
            <Tab eventKey="third" title="Confirmar" tabClassName="modal-turn-tab">

            </Tab>
          </Tabs>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" className="btn btn-black">Generar turno</button>
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
