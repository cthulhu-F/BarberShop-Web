import React, { useState,  useEffect } from "react";
import MotiveSetter from "./MotiveSetter";

/*MODAL TURN IMPORTS*/
import { useReducer } from 'react';
import { backofficeTurnReducer, BackofficeTurnData} from '../../../../../src/reducers/backOfficeTurnReducer';
import backofficeTurnMapDispatch from "../../../backOfficeTurnUses";

import Pagination from "./Pagination";
import ModalChairsConfig from "./ModalChairsConfig";


const MotiveSetterAndViewer= ()=>{

    const [backOfficeTurnState, dispatch] =useReducer(backofficeTurnReducer,BackofficeTurnData);
    const {allChairsSchedule, allChairs, editableChair, turnsPerday, editableDay} = backOfficeTurnState;
  
  
    const setEditableChair = backofficeTurnMapDispatch(dispatch).setEditableChair;
  
    const setActiveDay =backofficeTurnMapDispatch(dispatch).setActiveDay;
    const saveChairSchedule = backofficeTurnMapDispatch(dispatch).saveChairSchedule; 
  
    const addCount = backofficeTurnMapDispatch(dispatch).addCount;
    const restCount = backofficeTurnMapDispatch(dispatch).restCount; 
  
    const setStartHour =backofficeTurnMapDispatch(dispatch).setStartHour;
    const setEndHour =backofficeTurnMapDispatch(dispatch).setEndHour;

    const saveChairConfig = backofficeTurnMapDispatch(dispatch).saveChairConfig;
  

    /* PAGINATION*/
    const [posts, setPosts] = useState(allChairsSchedule)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(2)
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await allChairsSchedule;
        setPosts(res)
      }
      fetchPosts();      
    }, [allChairsSchedule])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const howManyPages = Math.ceil(posts.length/postsPerPage)

     /* PAGINATION END*/


  // function checkChairStatus(){
  // const switcher = document.getElementById("chair-inhabilitator");
  //   if(editableChair.status == "NONACTIVE"){
  //       switcher.checked = true;
  //   }
  // }

    return(
        <div>
          <div className="col-12">
            <div className="row p-2 mb-3">
              <div className="col-12 p-0">
                <div className="font-h1 fs-1 fw-bold">Configura los turnos</div>
              </div>
            </div>
          </div>

        
          <div className="col-12">
          <div className="row">
            <div className="row mb-3">
           
              <div className="col-12 col-xl-8  pe-xl-3 p-0 mb-3">
                <div className="h-100 p-xl-2 px-3">
                  <div className="table-responsive">
                    <table className="table table-hover table-striped bg-white aling-middle">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Dias disponibles</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                      {currentPosts.map((chair)=>
                        <tr>
                          <th scope="row">
                            {chair.id}
                          </th>
                          <td>
                            <div style={{ overflowWrap: "break-word", width: "150px"}}> {allChairs.find(chair2=>chair2.configDay_id == chair.id).name} </div>
                          </td>
                          <td>
                            <div style={{ overflowWrap: "break-word", width: "200px"}}>
                              {Object.entries(chair.days).filter(day => day[1] != "NONACTIVE").map(activeDay=>(activeDay[0] + ' ').toUpperCase())}
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <button className="btn btn-outline-success p-1 me-1" data-bs-toggle="modal"
                                data-bs-target="#modalAddProduct" onClick={()=>{setEditableChair(chair.id); setActiveDay(0)}}><i className="bi bi-pencil fs-7"></i></button>
                              <button type="button" className="btn btn-outline-danger p-1 me-1"
                              data-bs-toggle="modal" data-bs-target="#modalChairConfig"><i className="bi bi-gear"
                              onClick={()=>{setEditableChair(chair.id); setActiveDay(0)}}></i></button>
                            </div>
                          </td>
                          <td>
                            {chair.status == "ACTIVE" ?
                               <div className="text-success fs-3 d-flex justify-content-center" title="ACTIVO">
                                <i className="bi bi-check-circle-fill"></i>
                              </div>
                            :
                              <div className="text-danger fs-3 d-flex justify-content-center" title="INACTIVO">
                                <i class="bi bi-x-circle-fill"></i>
                              </div>
                            }
                          </td>
                        </tr>
                        
                      )}
                      
                      </tbody>
                      <tfoot>
                        <tr>
                          <td className="" colspan="10">
                            <div className="d-flex justify-content-end">
                              <nav aria-label="Page navigation example m-0">
                                <Pagination setCurrentPage={setCurrentPage} pages ={howManyPages}/>
                              </nav>
                            </div>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
           

              <div className="col-12 col-xl-4 ps-3 mb-3">

               <MotiveSetter editableChair={editableChair} turnsPerday={turnsPerday}
               setActiveDay={setActiveDay} editableDay={editableDay}
               saveChairSchedule={saveChairSchedule} addCount={addCount}
               restCount= {restCount} setStartHour={setStartHour} setEndHour={setEndHour} />
              </div>

            </div>
          </div>
        </div>
          <ModalChairsConfig editableChair={editableChair} saveChairConfig={saveChairConfig} />
      </div>
    );
}

export default MotiveSetterAndViewer