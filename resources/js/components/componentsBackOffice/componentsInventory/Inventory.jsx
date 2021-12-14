import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../css/main.css';


const ColumnTitleStyle ={
  overflowWrap: "break-word",
   width: "100px",
}

const Inventory = () =>{
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
                  <div className="font-h1 fs-1 fw-bold">Inventario</div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row rounded p-2 mb-3">
                <div className="col-12 col-xl-4 my-2 p-0">
                  <div className="d-flex">
                    <input className="form-control p-2 me-2" type="search" placeholder="Busca tu producto"
                      aria-label="Search"/>
                    <button className="btn btn-black p-2" type="submit"><i className="bi bi-search"></i></button>
                  </div>
                </div>
                <div className="col-12 col-xl-6"></div>
                <div className="col-12 col-xl-2 my-2 p-0">
                  <div className="text-center d-xl-flex justify-content-end">
                    <button className="btn btn-black w-100 p-2" data-bs-toggle="modal" data-bs-target="#modalAddProduct">
                      Agregar producto
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row  p-1 mb-3">
                <div className="col-12 p-0">

                  <div className="table-responsive">
                    <table className="table table-hover table-striped bg-white">
                      <thead className="font-h1 aling-middle">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col"></th>
                          <th scope="col">Nombre</th>
                          <th scope="col">SKU</th>
                          <th scope="col">Descripcion</th>
                          <th scope="col">Categoria</th>
                          <th scope="col">Stock</th>
                          <th scope="col">Precio</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody className="font-p aling-middle">
                        <tr>
                          <th scope="row">1</th>
                          <td>
                            <div className="d-flex " style={{height: "50px",}}>
                              <img src="asset/product/img-product.jpg" className=" rounded" alt=""/>
                            </div>
                          </td>
                          <td>
                            <div style={ColumnTitleStyle}> Producto </div>
                          </td>
                          <td>
                            <div style={ColumnTitleStyle}> 123456789 </div>
                          </td>
                          <td>
                            <div style={ColumnTitleStyle}> Descripcion del producto
                              productoproductoproducto </div>
                          </td>
                          <td>
                            <div style={ColumnTitleStyle}> Peluqueria </div>
                          </td>
                          <td>
                            <div style={ColumnTitleStyle}> 500 </div>
                          </td>
                          <td>
                            <div style={ColumnTitleStyle}> $10.99 </div>
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
                          <td className="" colspan="11">
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

            <div className="col-12">
              <div className="row p-2 mb-3">
                <div className="col-12">
                  <div className="font-h1 fw-bold fs-1">Categoria</div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row mb-3">
                <div className="col-12 col-xl-8  pe-xl-3 p-0 mb-3">
                  <div className="h-100 p-xl-2 px-3">
                    <div className="table-responsive">
                      <table className="table table-hover table-striped bg-white aling-middle">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>
                              <div style={{overflowWrap: "break-word", width: "150px"}}> Categoria </div>
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
                      <span className="fw-bold fs-5 font-h1">Agregar nueva categoria</span>
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
                      <div className="row g-2">
                        <div className="col-12">
                          <button className="btn btn-orangeWeb w-100"> Agregar </button>
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

export default Inventory

if( document.getElementById("inventory")){
    ReactDOM.render(
      <React.StrictMode>
        <Inventory />
      </React.StrictMode>,
      document.getElementById("inventory")
    );
  }
  
  