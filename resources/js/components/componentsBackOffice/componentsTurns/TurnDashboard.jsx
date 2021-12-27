import React from "react";

/*REDUCER IMPORTS*/
import { useReducer, useEffect, useState} from 'react';
import { backofficeTurnDashboardReducer, FilteredTurns } from "../../../../../src/reducers/backofficeTurnDashboardReducer";
import backofficeTurnDashboardMapDispatch from "../../../backofficeTurnDashboardUses";

import TurnDashboardItem from "./TurnDashboardItem";

const TurnDashboard = ({}) =>{

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var yyyymax = parseInt(yyyy)+1;
    var minDate = yyyy + '-' + mm + '-' + dd;
    var maxDte = yyyymax + '-' + mm + '-' + dd;
    var pHolder = dd +'/' + mm + '/' + yyyy


    const [ backofficeTurnDashboardState, dispatch] = useReducer(backofficeTurnDashboardReducer,FilteredTurns);
    const {allShcheduled, todayScheduled,tomorrowScheduled, dashboardTurns} = backofficeTurnDashboardState;

    const getTodaySchedule = backofficeTurnDashboardMapDispatch(dispatch).getTodaySchedule;
    const getTomorrowSchedule = backofficeTurnDashboardMapDispatch(dispatch).getTomorrowSchedule;
    const filterDashboard = backofficeTurnDashboardMapDispatch(dispatch).filterDashboard;

    const [todayTurns, setTurns] = useState(todayScheduled)

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await todayScheduled;
          setTurns(res)
        }
        fetchPosts();      
    }, [todayScheduled])


    const [visibility, setDisplayed] = useState('hidden');
    const DateStyle = {
        visibility: visibility
    }

    let [todayFlag, setSwitch] = useState(true)

    const setActiveHeader =(id)=>{
        console.log(id)
        const allButtons =document.querySelectorAll(".schedule-header-item");
        allButtons.forEach(button =>{
            try{
                button.classList.remove("active");
                button.classList.remove("btn-danger");
                button.classList.add("btn-outline-danger");
            }catch(error){}

            if (button.id == id){
                button.classList.remove("btn-outline-danger");
                button.classList.add("btn-danger");
                button.classList.add("active");
            }
        
        })

        if (document.getElementById('get-tomorrow-shcedule').classList.contains('active')){
            today
            setDisplayed('inherit');
            setSwitch(false);
        }else{
            setDisplayed('hidden');
            setSwitch(true);
        }

    }


    let existentChairs =[];
    
    return(
        <div>
            <div className="row px-3">
                <div className="col-12 p-1">
                    <div className="row bg-dark shadow rounded p-0 mb-3">
                        <div className="col-12">
                            <div className="font-h1 fs-1"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row px-4 g-1">

                <div className="col-12">
                    <div className="row p-2 mb-3">
                        <div className="col-12 p-0">
                            <div className="font-h1 fs-1 fw-bold">Turnos</div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="row g-3">
                        <div className="col-12 col-xl-3">
                            <button className="btn btn-danger w-100 schedule-header-item" id="get-today-shcedule"
                            onClick={(e)=>{setActiveHeader("get-today-shcedule"); getTodaySchedule()}}>
                                <span className=" font-h1 fw-bold fs-3" >HOY</span></button>
                        </div>
                        <div className="col-12 col-xl-3">
                            <button className="btn btn-outline-danger w-100 schedule-header-item" id="get-tomorrow-shcedule"
                            onClick={(e)=>{setActiveHeader("get-tomorrow-shcedule"); getTomorrowSchedule()}}><span
                                className=" font-h1 fw-bold fs-3 "  >PROXIMAMENTE</span></button>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="row g-1 my-4">

                        { 
                            dashboardTurns.map((scheduledTurn)=>
                            <TurnDashboardItem key={scheduledTurn.id} scheduledTurn={scheduledTurn}/>
                            )
                        }

                    </div>
                    
                </div>

                <div className="col-12">
                    <div className="row rounded p-2 mb-3">

                        <div className="col-12 col-xl-3 p-0 mx-xl-2">
                            <div className="input-group m-0">
                                <select className="form-select p-2" id="inputChairSelect" onChange={(e)=>filterDashboard(document.getElementById("inputDateIni").value,document.getElementById("inputDateEnd").value, e.target.value, todayFlag)}>
                                    <option selected>Ver silla</option>

                                    { todayFlag ? 
                                        todayScheduled.map((scheduledTurn)=>{
                                        if (!existentChairs.includes(scheduledTurn.name)){
                                            existentChairs.push(scheduledTurn.name)
                                        }})
                                        :
                                        tomorrowScheduled.map((scheduledTurn)=>{
                                            if (!existentChairs.includes(scheduledTurn.name)){
                                                existentChairs.push(scheduledTurn.name)
                                            }})

                                    }                           
                                    {
                                        existentChairs.map((chairName)=>
                                        <option value={chairName}>{chairName} </option>
                                        )
                                    }
                                    

                                </select>
                                <label className="input-group-text btn btn-black border-black" for="inputChairSelect"><i
                                    className="bi bi-arrow-down"></i></label>
                            </div>
                        </div>

                        <div className="col-12 col-xl-2 p-0 mx-xl-2" style={DateStyle}>
                            <input className="form-control p-2" id="inputDateIni" type="date" name="trip-start"
                                onChange={(e)=>filterDashboard(e.target.value, document.getElementById("inputDateEnd").value, document.getElementById("inputChairSelect").value)}
                                // onFocus={(e) => e.currentTarget.type = "date"}
                                // onBlur={(e) => e.currentTarget.type = "text"}
                                // placeholder={pHolder}
                                min={minDate} max={maxDte} />
                            <label for="inputDateIni" className="form-label text-muted fs-9">Fecha de inicio</label>
                        </div>

                        <div className="col-12 col-xl-2 p-0 mx-xl-2" style={DateStyle}>
                            <input className="form-control p-2" id="inputDateEnd" type="date" name="trip-start" 
                                onChange={(e)=>filterDashboard(document.getElementById("inputDateIni").value, e.target.value, document.getElementById("inputChairSelect").value)}
                                // onFocus={(e) => e.currentTarget.type = "date"}
                                // onBlur={(e) => e.currentTarget.type = "text"}
                                // placeholder={pHolder}
                                min={minDate} max={maxDte} />
                            <label for="inputDateEnd" className="form-label text-muted fs-9">Fecha de Fin</label>
                        </div>

                        
                    </div>
                </div>

                <div className="col-12 p-0">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped bg-white aling-middle">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Motivo</th>
                                <th scope="col">Datos del cliente</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Fecha de salida</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>
                                    <div style={{ overflowWrap: "break-word", width: "150px" }}> Motivo 1 </div>
                                </td>
                                <td>
                                    <button className="btn btn-black" data-bs-toggle="modal" data-bs-target="#modalDataClient">Desplegar</button>
                                </td>
                                <td>00/00/0000</td>
                                <td>00:00</td>
                                <td>00/00/0000</td>
                                <td>
                                    <div className="d-flex justify-content-center">
                                    <button className="btn btn-outline-success p-1 me-1" data-bs-toggle="modal"
                                        data-bs-target="#modalAddProduct"><i className="bi bi-pencil fs-7"></i></button>
                                    <button className="btn btn-outline-danger  p-1 me-1"><i className="bi bi-gear"></i></button>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <input className="form-check-input p-2 m-auto" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-success fs-3 d-flex justify-content-center" title="ACTIVO">
                                    <i className="bi bi-check-circle-fill"></i>
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                <td className="" colspan="10">
                                    <div className="d-flex justify-content-end">
                                    <nav aria-label="Page navigation example m-0">
                                        <ul className="pagination m-0">
                                        <li className="page-item">
                                            <a className="page-link text-black" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link text-black" href="#">1</a></li>
                                        <li className="page-item">
                                            <a className="page-link text-black" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                        </ul>
                                    </nav>
                                    </div>
                                </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TurnDashboard