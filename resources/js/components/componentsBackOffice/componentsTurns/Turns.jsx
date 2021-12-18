import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../css/main.css';

const Turns = () =>{
    const axios = require('axios');

    let store = JSON.parse(localStorage.getItem('login'))

      
   
  axios.interceptors.request.use(function(config){
    const token = store.token;

    if(token){
      config.headers.Authorization = 'Bearer ${token}';
    }

    return config;
  })
    


    /*

    let store = JSON.parse(localStorage.getItem('login'))

    console.log(store);
  
    if(store.login !== true){
        window.location.replace('/login')
    }

    */
    





    return(
        
        <div >
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
                  <button className="btn btn-danger w-100"><span className=" font-h1 fw-bold fs-3">HOY</span></button>
                </div>
                <div className="col-12 col-xl-3">
                  <button className="btn btn-outline-danger w-100"><span
                      className=" font-h1 fw-bold fs-3 ">PROXIMAMENTE</span></button>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row g-1 my-4">
                <div className="col-12 col-xl-3 shadow-sm border mx-xl-2 my-2">
                  <div className="d-block">
                    <div className="d-flex justify-content-between bg-light p-2">
                      <div className="font-h1 fw-bold fs-5 pt-2 pb-2">Motivo 1</div>
                      <button className="btn border-0 fs-5"><i className="bi bi-x"></i></button>
                    </div>
                  </div>
                  <div className="d-block bg-white px-2 py-3 border-0 rounded">
                    <div className="d-flex"><span className="fw-bold me-1">Fecha:</span><span>10/12/2021</span></div>
                    <div className="d-flex"><span className="fw-bold me-1">Hora:</span><span>19:12</span></div>
                  </div>
                  <div className="d-flex bg-light px-2 py-3">
                    <button className="btn btn-black" data-bs-toggle="modal" data-bs-target="#modalDataClient"><span className="d-none d-xl-inline">Cliente</span> <i
                        className="bi bi-person"></i> </button>
                    <button className="btn btn-orangeWeb mx-2"><span className="d-none d-xl-inline">Completar</span><i
                        className="bi bi-check"></i></button>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-12">
              <div className="row rounded p-2 mb-3">

                <div className="col-12 col-xl-2 p-0 mx-xl-2">
                  <input className="form-control p-2" id="inputDateIni" type="date" name="trip-start" value="2021-11-26"
                    min="2018-01-01" max="2022-12-01"/>
                  <label for="inputDateIni" className="form-label text-muted fs-9">Fecha de inicio</label>
                </div>

                <div className="col-12 col-xl-2 p-0 mx-xl-2">
                  <input className="form-control p-2" id="inputDateIni" type="date" name="trip-start" value="2021-11-26"
                    min="2018-01-01" max="2022-12-01"/>
                  <label for="inputDateIni" className="form-label text-muted fs-9">Fecha de Fin</label>
                </div>

                <div className="col-12 col-xl-3 p-0 mx-xl-2">
                  <div className="input-group m-0">
                    <select className="form-select p-2" id="inputGroupSelect02">
                      <option selected>Seleccione el motivo de su turno...</option>
                      <option value="1">Motivo 1</option>
                      <option value="2">Motivo 2</option>
                      <option value="3">Motivo 3</option>
                    </select>
                    <label className="input-group-text btn btn-black border-black" for="inputGroupSelect02"><i
                        className="bi bi-arrow-down"></i></label>
                  </div>
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
                            <tr>
                              <th scope="row">1</th>
                              <td>
                                <div style={{ overflowWrap: "break-word", width: "150px"}}> Motivo </div>
                              </td>
                              <td>
                                <div style={{ overflowWrap: "break-word", width: "150px"}}>
                                LU MA MI JU VI
                                </div>
                              </td>
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

                  <div className="col-12 col-xl-4 ps-3 mb-3">

                    <div className="row shadow-sm p-2">
                      <div className="col-xl-12 mb-3">
                        <span className="fw-bold fs-5 font-h1">Agrega los motivos de tus turnos</span>
                      </div>

                      <div className="col-xl-3 mb-3">
                        <div className="input-group">
                          <span className="input-group-text bg-black text-white border border-black fs-9"
                            id="basic-addon1">ID</span>
                          <span className="input-group-text bg-black text-white border border-black fs-9"
                            id="basic-addon1">1</span>
                        </div>
                      </div>

                      <div className="col-xl-9 mb-3">
                        <div className="input-group">
                          <input type="text" className="form-control fs-8" placeholder="Nombre"
                            aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                          <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i
                              className="bi bi-grid"></i></span>
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <div className="row g-3">

                          <div className="col-12 mb-2">
                            <span className="form-text">Dias disponibles</span>
                          </div>

                          <div className="col-12">
                            <button className="btn btn-platinum fw-bold">LU</button>
                            <button className="btn btn-platinum fw-bold">MA</button>
                            <button className="btn btn-platinum fw-bold">MI</button>
                            <button className="btn btn-platinum fw-bold">JU</button>
                            <button className="btn btn-platinum fw-bold">VI</button>
                          </div>

                          <div className="col-12 mb-2">
                            <span className="form-text">Horarios disponible</span>
                          </div>

                          <div className="col-12">
                            <div className="d-flex justify-content-between mb-1">
                              <span className="me-2 p-2">Hora de inicio</span>
                              <input type="time" className="form-control w-50" id="timeFin" value="00:00"/>
                            </div>
                            
                            <div className="d-flex justify-content-between mb-1">
                              <span className="me-2 p-2">Hora de Fin</span>
                              <input type="time" className="form-control w-50" id="timeFin" value="00:00"/>
                            </div>
                          </div>

                          <div className="col-12 mb-2">
                            <span className="form-text">¿Cuantos turnos por dia deseas dar?</span>
                          </div>

                          <div className="col-12 d-flex">
                            <button className="btn btn-white border rounded-0 rounded-start fs-6 px-1 px-xl-3 fw-bold " style={{zIndex: 2}}><i className="bi bi-dash"></i></button>
                          <input className="form-control h-100 border-0 border-top border-bottom rounded-0 bg-white text-center fs-6" placeholder="1" type="number" disabled />
                          <button className="btn btn-white border rounded-0 rounded-end fs-6 px-1 px-xl-3 fw-bold" style={{zIndex: 2}}><i className="bi bi-plus"></i></button>
                          </div>

                          <div className="col-12 d-flex">
                            <div className="form-check form-switch">
                              <label className="form-check-label" for="flexSwitchCheckDefault">¿Quieres aplicar estos cambios para todos los dias?</label>
                              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            </div>
                          </div>

                          <div className="col-12 d-flex justify-content-between">
                            <div className="input-group w-50">
                              <input type="text" className="form-control" placeholder="00:00/00:00/10" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <span className="input-group-text p-0" id="basic-addon2">
                              <button className="input-group-text btn btn-black">
                                <i className="bi bi-files"></i>
                              </button>
                            </span>
                            </div>
                            <button className="btn btn-orangeWeb">
                              Guardar
                            </button>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Turns

if( document.getElementById("turns")){
    ReactDOM.render(
      <React.StrictMode>
        <Turns />
      </React.StrictMode>,
      document.getElementById("turns")
    );
  }
  
  