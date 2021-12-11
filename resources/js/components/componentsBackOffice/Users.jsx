import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';


const ColumnTitleStyle ={
  overflowWrap: "break-word",
   width: "150px",
}

const Users = () =>{
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
                <div className="col-12">
                  <div className="font-h1 fs-1 fw-bold">Usuarios</div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row p-2 mb-3">
                <div className="col-12 col-xl-4 my-2 p-0">
                  <div className="d-flex">
                    <input className="form-control p-2 me-2" type="search" placeholder="Nombre de usuario..."
                      aria-label="Search"/>
                    <button className="btn btn-black p-2" type="submit"><i className="bi bi-search"></i></button>
                  </div>
                </div>
                <div className="col-12 col-xl-6"></div>
                <div className="col-12 col-xl-2 my-2 p-0">
                  <div className="text-center d-xl-flex justify-content-end">
                    <button className="btn btn-black w-100 p-2"
                    data-bs-toggle="modal" data-bs-target="#modalAddUser">
                      Agregar usuario
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-hover table-striped bg-white aling-middle">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                      <th scope="col">Role</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td><div style={ColumnTitleStyle}> Axel </div></td>
                      <td><div style={ColumnTitleStyle}> admaxelfranco@protonmail.com </div></td>
                      <td><button className="btn btn-black"><i className="bi bi-eye"></i></button></td>
                      <td><div style={ColumnTitleStyle}> administrador </div></td>
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
                  <tfoot></tfoot>
                </table>
              </div>
            </div>

          </div>
        </div>

    );
}

export default Users

if( document.getElementById("users")){
    ReactDOM.render(
      <React.StrictMode>
        <Users />
      </React.StrictMode>,
      document.getElementById("users")
    );
  }
  
  