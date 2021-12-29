
import React from "react";
import ModalTurn from "../../componentsTurn/ModalTurn";

import ModalTurnListEditor from "./ModalTurnListEditor";
import ModalTurnListSettings from "./ModalTurnListSettings";



const TurnDashboardListItem = ({turn,editTurnSchedule,orderByDate, setTurnStatus}) =>{

    const addTime = (initial, aditional) =>{
        let initialTime = initial.split(":");
        let aditionalTime = aditional.split(":");
    
        let hours = parseInt(initialTime[0])  + parseInt(aditionalTime[0]);
        let minutes = parseInt(initialTime[1]) + parseInt(aditionalTime[1]);
        let newHours = Math.floor(minutes/60);
    
        hours+= newHours;
        minutes-= newHours*60;
    
        if (minutes <10){
            minutes = "0"+minutes;
        }
    
        if (hours <10){
            hours = "0"+hours;
        }
        return(hours +':'+minutes);
    }


    const setCurrentStatus = (turnStatus, turnId)=>{
        let parent = document.getElementById(`modalTurnSettings${turnId}`)
        let selectorDefault =  parent.querySelector("#set-turn-status-by-input");

        selectorDefault.value = selectorDefault.querySelector(`#${turnStatus}`).value;
      }
   

    return (
        <tr>
        <th scope="row">{turn.id}</th>
        <td>
            <div style={{ overflowWrap: "break-word", width: "150px" }}> {turn.name} </div>
        </td>
        <td>
            <button className="btn btn-black" data-bs-toggle="modal" data-bs-target={`#modalDataClientList${turn.id}`}>Desplegar</button>
        </td>
        <td>{turn.date}</td>
        <td>{turn.time}</td>
        <td>{addTime(turn.time, turn.turn_duration)}</td>
        <td>
            <div className="d-flex justify-content-center">
            <button className="btn btn-outline-success p-1 me-1" data-bs-toggle="modal"
                data-bs-target={`#modalTurnConfig${turn.id}`}><i className="bi bi-pencil fs-7"></i></button>
            <button className="btn btn-outline-danger  p-1 me-1" data-bs-toggle="modal"
                data-bs-target={`#modalTurnSettings${turn.id}`} onClick={()=>setCurrentStatus(turn.status,turn.id)} ><i className="bi bi-gear"></i></button>
            </div>
        </td>
        <td>
            {
            turn.status == "CONFIRMED"
            ?
                <div className="text-success fs-3 d-flex justify-content-center" title="CONFIRMADO">
                <i className="bi bi-check-circle-fill"></i>
                </div>
            : turn.status == "NONACTIVE"
                ?
                    <div className="text-danger fs-3 d-flex justify-content-center" title="INACTIVO">
                    <i class="bi bi-x-circle-fill"></i>
                    </div>
                :
                    <div className="text-secondary fs-3 d-flex justify-content-center" title="ACTIVO">
                    <i class="bi bi-dash-circle-fill"></i>
                    </div>
            }

        </td>

        <ModalTurnListEditor key={turn.id+"editor"} turn={turn} editTurnSchedule={editTurnSchedule}orderByDate={orderByDate}/>
        <ModalTurnListSettings key={turn.id+"setting"} turn={turn} editTurnSchedule={editTurnSchedule}orderByDate={orderByDate} setTurnStatus={setTurnStatus}/>

        <div className="modal fade" id={`modalDataClientList${turn.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="modalChairConfigLabel" aria-hidden="true">
            <div className="modal-dialog modal-gl">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title font-h1 fw-bold fs-5 pt-2 pb-2">Datos de {turn.name_client}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>

                    <div className="modal-body">

                    <div className="d-block bg-white px-2 py-3 border-0 rounded container">
                        
                        <div className="input-group mb-1 row">
                            <span className="input-group-text bg-black text-white border border-black col-1" id="basic-addon1"><i
                                className="bi bi-person"></i></span>
                            <button type="button" class="btn btn-light col-11">{turn.name_client}</button>  
                        </div>


                        <div className="input-group mb-1 row">
                            <span className="input-group-text bg-black text-white border border-black col-1" id="basic-addon1">
                                <i className="bi bi-telephone"></i>
                            </span>
                            <button type="button" class="btn btn-light col-11">{turn.phone_client}</button>  
                        </div>
                        
                        <div className="input-group mb-1 row">
                            <span className="input-group-text bg-black text-white border border-black col-1" id="basic-addon1"><i
                                className="bi bi-envelope"></i></span>
                            <button type="button" class="btn btn-light col-11">{turn.email_client}</button>  
                        </div>

                    
                    </div>

                    </div>

                    <div className="modal-footer justify-content-between">
                        <a className="col-3" href={`tel:${turn.phone_client}`} style={{color:"#fff", fontWeight:"600", textDecoration:"inherit"}} >
                            <span className="input-group-text bg-black text-white border border-black" id="basic-addon1">
                                    Llamar 
                            </span>
                        </a>
                        <button type="button col-3" className="btn btn-dark" data-bs-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div>

        </tr>
        
    );
}

export default TurnDashboardListItem