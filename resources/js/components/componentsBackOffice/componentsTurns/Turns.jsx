import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../css/main.css';

import MotiveSetterAndViewer from "./MotiveSetterAndViewer";


const Turns = () =>{


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
                      className=" font-h1 fw-bold fs-3 "  >PROXIMAMENTE</span></button>
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

          <MotiveSetterAndViewer
          />
            
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
  
  