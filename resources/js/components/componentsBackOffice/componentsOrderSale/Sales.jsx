import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../css/main.css';


const Sales = () =>{
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
                  <div className="font-h1 fs-1 fw-bold">Orden de ventas</div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row rounded p-2 mb-3">
                <div className="col-12 col-xl-4 my-2 my-xl-0 p-0">
                  <div className="d-flex">
                    <input className="form-control p-2 me-2" type="search" placeholder="Busca una orden de venta"
                      aria-label="Search"/>
                    <button className="btn btn-black pt-0 pb-0 ps-2 pe-2" type="submit"><i className="bi bi-search"></i></button>
                  </div>
                </div>

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
              </div>
            </div>

            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-hover table-striped bg-white aling-middle">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Resumen</th>
                      <th scope="col">Total</th>
                      <th scope="col">Datos del cliente</th>
                      <th scope="col">Fecha</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td><button className="btn btn-black" data-bs-toggle="modal" data-bs-target="#modalResume">Desplegar</button></td>
                      <td>
                        <div style={{ overflowWrap: "break-word", width: "150px"}}> $10.99 </div>
                      </td>
                      <td><button className="btn btn-black" data-bs-toggle="modal" data-bs-target="#modalDataClient">Desplegar</button></td>
                      <td>10/10/2021</td>
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

                  </tfoot>
                </table>
              </div>
            </div>

          </div>

        </div>

    );
}

export default Sales

if( document.getElementById("sales")){
    ReactDOM.render(
      <React.StrictMode>
        <Sales />
      </React.StrictMode>,
      document.getElementById("sales")
    );
  }
  
  