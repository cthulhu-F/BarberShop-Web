import React from "react"
import { UpdateProduct } from "../../../helpers/ItemHelpers";


const ModalProductSettings = ({editableProduct, saveProductConfig})=>{

    function handleClickEvent(evt) {
        
        let switcher = evt.target;
        if (switcher.getAttribute("aria-checked") == "true") {
            switcher.setAttribute("aria-checked", "false");
        } else {
            switcher.setAttribute("aria-checked", "true");
        }
        
      }
   
    function setLabelMessage()  {
        if(editableProduct.status == "INACTIVE"){
            return "Producto inhabilitado ¿Desea habilitar esta producto?"
        } else{
            return  "¿Desea inhabilitar este producto?" 
        } 
    }



    function saveConfigChanges (){
        const parent = document.getElementById(`modalProductSettings${editableProduct.id}`)
        const switcher = parent.querySelector("#product-inhabilitator");
        let previousValue;
        let prevMsjStatus;
        let NewMsjStatus;
        console.log(switcher.checked)
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
        const nameInput = parent.querySelector('#editable-product-name-2')
        let newName = nameInput.value == "" ? nameInput.placeholder : nameInput.value


        if (previousValue == editableProduct.status || nameInput.value != ""){

            let nameAlert     =   nameInput.value == "" ? "" : ` <span style="font-weight:700;" >Nombre </span><br> ${nameInput.placeholder} ---> ${ nameInput.value} <br> <br>  `;
            let statusAlert     =   previousValue != editableProduct.status ? "" : `<span style="font-weight:700;" >Estado </span><br>  ${prevMsjStatus} ---> ${NewMsjStatus} <br><br>`;            

            swal.fire({
            title: "Atención",
            html: `Esta seguro que desea modificar los siguientes datos?<br><br> 
            ${nameAlert} ${statusAlert}`, 
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: '#d33',
            confirmButtonText: `Si, Modificar Producto`   
            }).then(async (result) => {
                if (result.isConfirmed) {

                    let formData = new FormData();

                    //saveProductConfig(previousValue, "status", editableProduct.id);
                    formData.append('id', editableProduct.id);
                    formData.append('status', NewMsjStatus);

                    if (nameInput.value != "") {
                        formData.append('name', newName);
                        //saveProductConfig(newName, "name", editableProduct.id);
                    }

                    let response = await UpdateProduct(formData)

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
        <div className="modal fade" id={`modalProductSettings${editableProduct.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="modalProductSettingsLabel" aria-hidden="true">
            <div className="modal-dialog modal-gl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 class="modal-title fw-bold font-h1"> Configuraciónes de {editableProduct.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className="row">
                            <div className="col-xl-3 mb-3">
                                <div className="input-group">
                                <span className="input-group-text bg-black text-white border border-black fs-9"
                                    id="basic-addon1">{`ID: ${editableProduct.id}`}</span>
                                </div>
                            </div>

                            <div className="col-xl-8 mb-3">
                                <div className="input-group">
                                <input type="text" className="form-control fs-8" placeholder={editableProduct.name} 
                                    aria-label="Recipient's username" aria-describedby="basic-addon2" disabled={true} id="editable-product-name-2"/>
                                <button className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"
                                    onClick={()=> {
                                        if(document.getElementById(`modalProductSettings${editableProduct.id}`).querySelector('#editable-product-name-2').disabled){
                                            document.getElementById(`modalProductSettings${editableProduct.id}`).querySelector('#editable-product-name-2').disabled = false;
                                        }else{
                                            document.getElementById(`modalProductSettings${editableProduct.id}`).querySelector('#editable-product-name-2').disabled= true;
                                        }
                                        }}>
                                    <i class="bi bi-pencil"></i></button>
                                </div>
                            </div>

                            <div className="form-check form-switch">
                                <label className="form-check-label" for="product-inhabilitator">{setLabelMessage()}</label>
                                <input className="form-check-input" type="checkbox" role="switch" id="product-inhabilitator" onClick={(e)=>{handleClickEvent(e);}}/>

                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>saveConfigChanges()}>Save changes</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalProductSettings