import React from "react";
import { UpdateCategory } from "../../../helpers/ItemHelpers";

const ModalCategorySettings =({editableCateory, saveCategoryConfig})=>{


    function handleClickEvent(evt) {
        
        let switcher = evt.target;
        if (switcher.getAttribute("aria-checked") == "true") {
            switcher.setAttribute("aria-checked", "false");
        } else {
            switcher.setAttribute("aria-checked", "true");
        }
        
      }

    function setLabelMessage()  {
        if(editableCateory.status == "INACTIVE"){
            return "Categoría inhabilitado ¿Desea habilitar esta categoría?"
        } else{
            return  "¿Desea inhabilitar este categoría?" 
        } 
    }

    function saveConfigChanges (editableCateoryId){
        const parent = document.getElementById(`modalCategorySettings${editableCateoryId}`)
        const switcher = parent.querySelector("#category-inhabilitator");
        let previousValue;
        let prevMsjStatus;
        let NewMsjStatus;        

        if (switcher.getAttribute("aria-checked") == "true"){
            previousValue ="ACTIVE";
            prevMsjStatus = "ACTIVE";
            NewMsjStatus = "INACTIVE";
        }
        else{
            previousValue ="INACTIVE";
            prevMsjStatus = "INACTIVE";
            NewMsjStatus = "ACTIVE"
        }
        const nameInput = parent.querySelector('#editable-category-name')
        let newName = nameInput.value == "" ? nameInput.placeholder : nameInput.value

        if (previousValue == editableCateory.status || nameInput.value != ""){

            let nameAlert     =   nameInput.value == "" ? "" : ` <span style="font-weight:700;" >Nombre </span><br> ${nameInput.placeholder} ---> ${ nameInput.value} <br> <br>  `;
            let statusAlert     =   previousValue != editableCateory.status ? "" : `<span style="font-weight:700;" >Estado </span><br>  ${prevMsjStatus} ---> ${NewMsjStatus} <br><br>`;            

            swal.fire({
            title: "Atención",
            html: `Esta seguro que desea modificar los siguientes datos?<br><br> 
            ${nameAlert} ${statusAlert}`, 
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: '#d33',
            confirmButtonText: `Si, Modificar Categoria`   
            }).then(async (result) => {
                if (result.isConfirmed) {

                    let formData = new FormData();
                    
                    formData.append('id', editableCateory.id);
                    formData.append('status',  NewMsjStatus);
                    //saveCategoryConfig(previousValue, "status", editableCateoryId);
                    if (nameInput.value != ""){
                        formData.append('name', newName);
                        //saveCategoryConfig(newName, "name", editableCateoryId);
                    }

                    let response = await UpdateCategory(formData);

                }else{
                    swal.fire({
                        text: `Ningún dato ha sido modificado.`,
                        timer:"1500", 
                        position: "bottom",
                        customClass : {
                            container: "add-to-cart-alert-container",
                            popup:"add-to-cart-alert",
                        }
                       });
                }
            })
        } else{
            swal.fire({
                text: `Ningún dato ha sido modificado.`,
                timer:"1500", 
                position: "bottom",
                customClass : {
                    container: "add-to-cart-alert-container",
                    popup:"add-to-cart-alert",
                }
            });
        }

    
    }
    

    return (
        <div className="modal fade" id={`modalCategorySettings${editableCateory.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="modalCategorySettingsLabel" aria-hidden="true">
        <div className="modal-dialog modal-gl">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 class="modal-title fw-bold font-h1"> Configuraciónes de {editableCateory.name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <div className="row">
                        <div className="col-xl-3 mb-3">
                            <div className="input-group">
                            <span className="input-group-text bg-black text-white border border-black fs-9"
                                id="basic-addon1">{`ID: ${editableCateory.id}`}</span>
                            </div>
                        </div>

                        <div className="col-xl-8 mb-3">
                            <div className="input-group">
                            <input type="text" className="form-control fs-8" placeholder={editableCateory.name} 
                                aria-label="Recipient's username" aria-describedby="basic-addon2" disabled={true} id="editable-category-name"/>
                            <button className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"
                                onClick={()=> {
                                    if(document.getElementById(`modalCategorySettings${editableCateory.id}`).querySelector('#editable-category-name').disabled){
                                        document.getElementById(`modalCategorySettings${editableCateory.id}`).querySelector('#editable-category-name').disabled = false;
                                    }else{
                                        document.getElementById(`modalCategorySettings${editableCateory.id}`).querySelector('#editable-category-name').disabled= true;
                                    }
                                    }}>
                                <i class="bi bi-pencil"></i></button>
                            </div>
                        </div>

                        <div className="form-check form-switch">
                            <label className="form-check-label" for="category-inhabilitator">{setLabelMessage()}</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="category-inhabilitator" onClick={(e)=>{handleClickEvent(e);}}/>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>saveConfigChanges(editableCateory.id)}>Guardar cambios</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    );

}

export default ModalCategorySettings