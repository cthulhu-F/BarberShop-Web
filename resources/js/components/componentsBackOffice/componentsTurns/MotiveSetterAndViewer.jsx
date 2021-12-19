import React from "react";


const MotiveSetterAndViewer= ({allChairsSchedule, allChairs})=>{

  // console.log(allChairsSchedule)
  console.log(allChairs)
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
                      {allChairsSchedule.map((chair)=>
                        <tr>
                          <th scope="row">
                            {chair.id}
                          </th>
                          <td>
                            <div style={{ overflowWrap: "break-word", width: "150px"}}> {allChairs.find(chair2=>chair2.configDay_id == chair.id).name} </div>
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
                      )}
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
    );
}

export default MotiveSetterAndViewer