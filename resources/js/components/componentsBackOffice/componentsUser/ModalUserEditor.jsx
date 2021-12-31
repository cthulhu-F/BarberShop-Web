import React from "react"

import swal from "sweetalert2";

 

const ModalUserEditor = ({editableUser, saveUserConfig,roles, newUser =false})=>{

    if (newUser) {
        editableUser = {
            id : "NewUser",
            name : "Nuevo usuario",
            email : "example@gmail.com",
            phone : "+1 (201) 555 0123",
            role_id : 2,
        }
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var todayString =  dd +'/'+ mm + '/'+yyyy;


    const urlImg = require.context('../../../../asset/product', true);

    
    function saveConfigChanges(){
        const parent = document.getElementById(`modalUserEditor${editableUser.id}`)
        const nameField = parent.querySelector("#backofice-user-name-editor");
        const emailField = parent.querySelector("#backofice-user-email-editor");
        const phoneField = parent.querySelector("#backofice-user-phone-editor");



        if (nameField.value != "" || emailField.value != ""  || phoneField.value != ""  ) {

            let nameAlert           =   nameField.value == "" ? "" : ` <span style="font-weight:700;" >Nombre </span><br> ${nameField.placeholder} ---> ${nameField.value} <br> <br>  `;
            let emailAlert    =   emailField.value == "" ? "" : `<span style="font-weight:700;" >Descripción </span><br>  ${emailField.placeholder} ---> ${emailField.value} <br><br>`;
            let phoneAlert          =   phoneField.value == "" ? "" : `<span style="font-weight:700;" >Stock </span><br>  ${phoneField.placeholder} ---> ${phoneField.value} <br><br>`;

        
            swal.fire({
            title: "Atención",
            html: `Esta seguro que desea modificar los siguientes datos?<br><br> 
            ${nameAlert} ${emailAlert} ${phoneAlert}`, 
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: '#d33',
            confirmButtonText: `Si, Modificar!`   
            }).then((result) => {
                if (result.isConfirmed) {
                    if (nameField.value != ""){
                        saveUserConfig(nameField.value, "name", editableUser.id);}
                        nameField.value ="";

                    if (emailField.value != ""){
                        saveUserConfig(emailField.value, "email", editableUser.id);}
                        emailField.value ="";

                    if (phoneField.value != ""){
                        saveUserConfig(phoneField.value, "phone", editableUser.id);}
                        phoneField.value ="";

        
                    
                    saveUserConfig(todayString, "updated_at", editableUser.id);

                    swal.fire({
                        text: 'Datos modificados con éxito',
                        timer:"1500", 
                        position: "bottom",
                        customClass : {
                        container: "add-to-cart-alert-container",
                        popup:"add-to-cart-alert",
                        }
                    })
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




 
    const creeateNewUser = () =>{
        const parent = document.getElementById(`modalUserEditor${editableUser.id}`)
        const nameField = parent.querySelector("#backofice-user-name-editor");
        const emailField = parent.querySelector("#backofice-user-email-editor");
        const phoneField = parent.querySelector("#backofice-user-phone-editor");
        const roleField = parent.querySelector("#backofice-user-role-editor");

        const selectedRoleId = roleField.options[roleField.selectedIndex].id

        if (nameField.value == "" || emailField.value == "" || phoneField.value == "" ) {

            let nameAlert     =   nameField.value != "" ? "" : ` <span style="font-weight:700;" >Nombre </span><br><br>  `;
            let emailAlert     =   emailField.value != "" ? "" : `<span style="font-weight:700;" >Descripción </span><br><br>`;
            let phoneAlert     =   phoneField.value != "" ? "" : `<span style="font-weight:700;" >Stock </span><br><br>`;

        
            swal.fire({
            title: "Atención",
            html: `Para crear un nuevo usuario debe completar los siguientes campos<br><br> 
            ${nameAlert} ${emailAlert} ${phoneAlert}`, 
            icon: 'warning'});
        }else{

            // saveUserConfig(nameField.value, "name", editableUser.id);
            // nameField.value ="";
            // saveUserConfig(emailField.value, "description", editableUser.id);
            // emailField.value ="";
            // saveUserConfig(selectedRoleId, "categories_id", editableUser.id);
            // saveUserConfig(phoneField.value, "stock", editableUser.id);
            // phoneField.value ="";
        
            // saveUserConfig(todayString, "updated_at", editableUser.id);

            swal.fire({
                text: `${editableUser.name} creado con éxito.`,
                timer:"2000", 
                position: "bottom",
                customClass : {
                    container: "add-to-cart-alert-container",
                    popup:"add-to-cart-alert",
                }
            });
        }
    }



    return (
        <div className="modal fade" id={`modalUserEditor${editableUser.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="modalUserEditorLabel" aria-hidden="true">
            <div className="modal-dialog modal-gl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 class="modal-title fw-bold font-h1">{newUser ? `Crear nuevo usuario` :`Editar ${editableUser.name}`}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <div className="row shadow-sm p-2">
                                <div className="col-xl-3 mb-3">
                                    <div className="input-group">
                                    <span className="input-group-text bg-black text-white border border-black fs-9"
                                        id="basic-addon1">{`ID: ${ newUser ? "" :editableUser.id}`}</span>
                                    </div>
                                </div>

                                <div className="col-xl-9 mb-3">
                                    <div className="input-group">
                                    <input type="text" className="form-control fs-8" placeholder={editableUser.name} 
                                        aria-label="Recipient's username" aria-describedby="basic-addon2" disabled={true} id="backofice-user-name-editor"/>
                                    <button className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"
                                        onClick={()=> {
                                            if(document.getElementById(`modalUserEditor${editableUser.id}`).querySelector('#backofice-user-name-editor').disabled){
                                                document.getElementById(`modalUserEditor${editableUser.id}`).querySelector('#backofice-user-name-editor').disabled = false;
                                            }else{
                                                document.getElementById(`modalUserEditor${editableUser.id}`).querySelector('#backofice-user-name-editor').disabled= true;
                                            }
                                            }}>
                                        <i class="bi bi-pencil"></i></button>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between mb-1 col-xl-12 mb-3"  >
                                    <span className="me-2 p-2 fw-bold ">Email</span>
                               

                                    <input type="text" placeholder={editableUser.email} className="form-control w-50"  id="backofice-user-email-editor"/>
                                    
                                </div>

                                <div className="d-flex justify-content-between mb-1 col-xl-12 mb-3" >
                                    <span className="me-2 p-2 fw-bold">Teléfono</span>

                                    <input type="number"  className="form-control w-50" id="backofice-user-phone-editor"
                                    placeholder={editableUser.phone}/>
                                </div>


                               { newUser
                               ?
                                <div className="d-flex justify-content-between mb-1 col-xl-12 mb-3">
                                    <span className="me-2 p-2 fw-bold">Role</span>
                                    <select className="w-50 form-select p-2" id="backofice-user-role-editor">

                                        {roles.map(role=>
                                            <option key={role.id} id={role.id} > {role.name}</option>
                                        )}
                                            
                                    </select>
                                </div>
                                : ""
                                }
                            
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        {
                            newUser 
                            
                            ? 
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={()=>creeateNewUser()}>Crear Producto</button>

                            :
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={()=>saveConfigChanges()}>Guardar cambios</button>

                        }
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUserEditor