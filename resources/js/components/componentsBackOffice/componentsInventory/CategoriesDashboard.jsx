import React from "react";
import ModalCategorySettings from "./ModalCategorySettings";

const CategoriesDashboard = ({allCategories, saveCategoryConfig, createNewCategory})=>{

    function checkCategoryStatus(categoryId){
        const parent = document.getElementById(`modalCategorySettings${categoryId}`)
        const switcher = parent.querySelector("#category-inhabilitator");
        const category = allCategories.find(category => category.id==categoryId)
        if(category.status == "NONACTIVE"){
            switcher.checked = true;
            switcher.setAttribute("aria-checked", "true")
        }
        if(category.status == "ACTIVE"){ try {
            switcher.checked = false;
            switcher.setAttribute("aria-checked", "false")
        }catch(error){}
        }
    }


    function validateNewCategoryName () {
        const inputNameField = document.getElementById("backoffice-new-category-input")

    
        if (inputNameField.value !=""){
            createNewCategory(inputNameField.value)
        }
    }
    

    return(
    <div>
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

                        {allCategories.map((category)=>
                            <tr>
                                <th scope="row">{category.id}</th>
                                <td>
                                <div style={{overflowWrap: "break-word", width: "150px"}}> {category.name} </div>
                                </td>
                                <td>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-outline-danger  p-1 me-1"  data-bs-toggle="modal"
                                            data-bs-target={`#modalCategorySettings${category.id}`} onClick={()=>checkCategoryStatus(category.id)}><i className="bi bi-gear"></i></button>
                                </div>
                                </td>
                    
                                <td>
                                {
                                    category.status == "ACTIVE"
                                    ?
                                        <div className="text-success fs-3 d-flex justify-content-center" title="ACTIVO">
                                            <i className="bi bi-check-circle-fill"></i>
                                        </div>
                                    : 
                                        <div className="text-danger fs-3 d-flex justify-content-center" title="INACTIVO">
                                            <i class="bi bi-x-circle-fill"></i>
                                        </div>
                                }
                                </td>

                                <ModalCategorySettings key={category.id} editableCateory={category} saveCategoryConfig={saveCategoryConfig}/>
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
                      <span className="fw-bold fs-5 font-h1">Agregar nueva categoria</span>
                    </div>


                    <div className="col-xl-12 mb-3">
                      <div className="input-group  w-100">
                        <input type="text" className="form-control fs-8 w-100" placeholder="Nombre"
                          aria-label="Recipient's username" aria-describedby="basic-addon2"
                          id="backoffice-new-category-input"/>
        
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="row g-2">
                        <div className="col-12">
                          <button className="btn btn-orangeWeb w-100" onClick={()=> validateNewCategoryName()}> Agregar </button>
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

export default CategoriesDashboard