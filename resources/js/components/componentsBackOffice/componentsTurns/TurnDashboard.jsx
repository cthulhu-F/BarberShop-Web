import React from "react";

/*REDUCER IMPORTS*/
import { useReducer, useEffect, useState} from 'react';
import { backofficeTurnDashboardReducer, FilteredTurns } from "../../../../../src/reducers/backofficeTurnDashboardReducer";
import backofficeTurnDashboardMapDispatch from "../../../backofficeTurnDashboardUses";

import TurnDashboardItem from "./TurnDashboardItem";
import Pagination from "./Pagination";
import TurnDashboardListItem from "./TurnDashboardListItem";
import ModalTurn from "../../componentsTurn/ModalTurn";

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

    const editTurnSchedule = backofficeTurnDashboardMapDispatch(dispatch).editTurnSchedule;

    const orderByDate = backofficeTurnDashboardMapDispatch(dispatch).orderByDate;

    const setTurnStatus = backofficeTurnDashboardMapDispatch(dispatch).setTurnStatus;


    // const [todayTurns, setTurns] = useState(todayScheduled)

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //       const res = await todayScheduled;
    //       setTurns(res)
    //     }
    //     fetchPosts();      
    // }, [todayScheduled])


    let [todayFlag, setTodayFlagSwitch] = useState(true)

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
            // today
            setTodayFlagSwitch(false);
        }else{
            setTodayFlagSwitch(true);
        }

    }


    let existentChairs =[];

    /* PAGINATION*/
    
    const [pagintaionTurns, setTurnsPagination] = useState(dashboardTurns)
    const [currentPage, setCurrentPage] = useState(1)
    const [turnsPerPage] = useState(5)
    
    useEffect(() => {
        const fetchTurns = async () => {
        const res = await dashboardTurns;
        setTurnsPagination(res)
        }
        fetchTurns();      
    }, [dashboardTurns])

    const indexOfLastTurn = currentPage * turnsPerPage;
    const indexOfFirstTurn = indexOfLastTurn - turnsPerPage;
    const currentTurns = pagintaionTurns.slice(indexOfFirstTurn, indexOfLastTurn)
    const howManyPages = Math.ceil(pagintaionTurns.length/turnsPerPage)

        /* PAGINATION END*/


    /*ORDER TURNS BY DATE */
    
    /*ORDER TURNS BY DATE */

    
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
                            <div className="font-h1 fs-1 fw-bold">Turnos Programados</div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="row g-3 rounded p-2 mb-3" style={{display:"flex", alignItems: "flex-end"}}>
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

                        <div className="col-12 col-xl-4"></div>
                        <div className="col-12 col-xl-2 my-2 p-0">
                            <div className="text-center">
                                <button className="btn btn-black w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Agregar Turno
                                </button>
                            </div>
                        </div>
                        <ModalTurn/>
                    </div>
                </div>

                <div className="col-12">
                    <div className="row g-1 my-4">

                        { 
                            todayFlag

                            ? todayScheduled.map((scheduledTurn)=>
                            <TurnDashboardItem key={scheduledTurn.id} scheduledTurn={scheduledTurn} setTurnStatus={setTurnStatus}/>
                            )

                            : tomorrowScheduled.map((scheduledTurn)=>
                            <TurnDashboardItem key={scheduledTurn.id} scheduledTurn={scheduledTurn} setTurnStatus={setTurnStatus}/>
                            )
                        }

                    </div>
                    
                </div>

                <div className="col-12">
                    <div className="row rounded p-2 mb-3">

                   
                        
                    </div>
                </div>


                <div className="col-12">
                    <div className="row p-2 mb-3 d-flex align-items-end">
                        <div className="col-12 p-0 col-xl-4 p-0 mx-xl-2">
                            <div className="font-h1 fs-1 fw-bold">Todos los turnos</div>
                        </div>
                  
                        <div className="col-12 col-xl-3 p-0 mx-xl-2">
                            <div className="input-group m-0">
                                <select className="form-select p-2" id="inputChairSelect" onChange={(e)=>filterDashboard(document.getElementById("inputDateIni").value,document.getElementById("inputDateEnd").value, e.target.value, todayFlag)}>
                                    <option selected>Ver silla</option>

                                    { 
                                        allShcheduled.map((scheduledTurn)=>{
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

                        <div className="col-12 col-xl-2 p-0 mx-xl-2" >
                            <label for="inputDateIni" className="form-label text-muted fs-9">Fecha de inicio</label>
                            <input className="form-control p-2" id="inputDateIni" type="date" name="trip-start"
                                onChange={(e)=>filterDashboard(e.target.value, document.getElementById("inputDateEnd").value, document.getElementById("inputChairSelect").value)}
                                // onFocus={(e) => e.currentTarget.type = "date"}
                                // onBlur={(e) => e.currentTarget.type = "text"}
                                // placeholder={pHolder}
                                min={minDate} max={maxDte} />
                        </div>

                        <div className="col-12 col-xl-2 p-0 mx-xl-2">
                            <label for="inputDateEnd" className="form-label text-muted fs-9">Fecha de Fin</label>
                            <input className="form-control p-2" id="inputDateEnd" type="date" name="trip-start" 
                                onChange={(e)=>filterDashboard(document.getElementById("inputDateIni").value, e.target.value, document.getElementById("inputChairSelect").value)}
                                // onFocus={(e) => e.currentTarget.type = "date"}
                                // onBlur={(e) => e.currentTarget.type = "text"}
                                // placeholder={pHolder}
                                min={minDate} max={maxDte} />
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
                                <th scope="col">Hora de salida</th>
                                <th scope="col"></th>
                                <th scope="col" className="row">
                                    {/* <td className="col-3">
                                        <input className="form-check-input" type="checkbox" role="switch" key="ACTIVE" id="filter-by-active"/>
                                        <label className="form-check-label text-secondary" for="filter-by-active"><i class="bi bi-dash-circle-fill"></i></label>
                                    </td>
                                    <td className="col-3">
                                        <input className="form-check-input" type="checkbox" role="switch" key="NONACTIVE" id="filter-by-nonactive"/>
                                        <label className="form-check-label text-danger" for="filter-by-nonactive"><i class="bi bi-x-circle-fill"></i></label>
                                    </td>
                                    <td className="col-3"> 
                                        <input className="form-check-input" type="checkbox" role="switch" key="CONFIRMED" id="completed"/>
                                        <label className="form-check-label text-success" for="filter-by-completed"><i className="bi bi-check-circle-fill"></i></label>
                                    </td> */}
                                </th>
                                
                                <th scope="col"></th>
                                
                                </tr>
                            </thead>

                            
                            <tbody>
                                {currentTurns.map((turn)=>
                                    <TurnDashboardListItem key={turn.id} turn={turn} editTurnSchedule={editTurnSchedule} orderByDate={orderByDate} setTurnStatus={setTurnStatus}/>
                                )}
                                
                            </tbody>
                            <tfoot>
                                <tr>
                                <td className="" colspan="10">
                                    <div className="d-flex justify-content-end">
                                    <nav aria-label="Page navigation example m-0">
                                        <Pagination setCurrentPage={setCurrentPage} pages={howManyPages}/>

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