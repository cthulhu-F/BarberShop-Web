import React from "react";

const ModalUserSettings =({editableUser, saveUserConfig, roles,changeUserRole, roleUser})=>{


    function handleClickEvent(evt) {
        
        let switcher = evt.target;
        if (switcher.getAttribute("aria-checked") == "true") {
            switcher.setAttribute("aria-checked", "false");
        } else {
            switcher.setAttribute("aria-checked", "true");
        }
        
      }

    function setLabelMessage()  {
        if(editableUser.status == "NONACTIVE"){
            return "Usuario inhabilitado ¿Desea habilitar este usuario?"
        } else{
            return  "¿Desea inhabilitar este usuario?" 
        } 
    }

    function saveConfigChanges (editableUserId){
        const parent = document.getElementById(`modalUserSettings${editableUserId}`)
        const switcher = parent.querySelector("#user-inhabilitator");
        let previousValue;
        let prevMsjStatus;
        let NewMsjStatus;        

        const roleField = parent.querySelector("#backofice-user-role-editor");
        const currentRoleId =  roleUser.find(role => role.user_id == editableUser.id).role_id;
        const selectedRoleId = roleField.options[roleField.selectedIndex].id
        console.log(roles.find(role=> role.id ==currentRoleId))
        const currentRoleName = roles.find(role=> role.id ==currentRoleId).description
        const selectedRoleName = roles.find(role=> role.id ==selectedRoleId).description

        if (switcher.getAttribute("aria-checked") == "true"){
            previousValue ="ACTIVE";
            prevMsjStatus = "Activo";
            NewMsjStatus = "Inactivo";
        }
        else{
            previousValue ="NONACTIVE";
            prevMsjStatus = "Inactivo";
            NewMsjStatus = "Activo"
        }
        const nameInput = parent.querySelector('#editable-user-name')
        let newName = nameInput.value == "" ? nameInput.placeholder : nameInput.value

        if (previousValue == editableUser.status || nameInput.value != "" || selectedRoleId != currentRoleId  ){

            let nameAlert     =   nameInput.value == "" ? "" : ` <span style="font-weight:700;" >Nombre </span><br> ${nameInput.placeholder} ---> ${ nameInput.value} <br> <br>  `;
            let statusAlert     =   previousValue != editableUser.status ? "" : `<span style="font-weight:700;" >Estado </span><br>  ${prevMsjStatus} ---> ${NewMsjStatus} <br><br>`;            
            let roleAlert = selectedRoleId == currentRoleId
                ? ""
                : `<span style="font-weight:700;" >Categoría </span><br> ${currentRoleName} ---> ${selectedRoleName}<br><br>`;
           
            swal.fire({
            title: "Atención",
            html: `Esta seguro que desea modificar los siguientes datos?<br><br> 
            ${nameAlert} ${statusAlert} ${roleAlert}`, 
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: '#d33',
            confirmButtonText: `Si, Modificar Usuario`   
            }).then((result) => {
                if (result.isConfirmed) {
                    saveUserConfig(previousValue, "status", editableUserId);
                    if (nameInput.value != "") {
                        saveUserConfig(newName, "name", editableUserId);
                        nameInput.value="";
                    }
                    if (selectedRoleId != currentRoleId){
                        // saveUserConfig(selectedRoleId, "role_id", editableUser.id);
                        changeUserRole(selectedRoleId, editableUser.id)
                    }
                        // RESET CATEGORY SELECTOR 
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
    

    return (
        <div className="modal fade" id={`modalUserSettings${editableUser.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="modalUserSettingsLabel" aria-hidden="true">
        <div className="modal-dialog modal-gl">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 class="modal-title fw-bold font-h1"> Configuraciónes de {editableUser.name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <div className="row">
                        <div className="col-xl-3 mb-3">
                            <div className="input-group">
                            <span className="input-group-text bg-black text-white border border-black fs-9"
                                id="basic-addon1">{`ID: ${editableUser.id}`}</span>
                            </div>
                        </div>

                        <div className="col-xl-8 mb-3">
                            <div className="input-group">
                            <input type="text" className="form-control fs-8" placeholder={editableUser.name} 
                                aria-label="Recipient's username" aria-describedby="basic-addon2" disabled={true} id="editable-user-name"/>
                            <button className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"
                                onClick={()=> {
                                    if(document.getElementById(`modalUserSettings${editableUser.id}`).querySelector('#editable-user-name').disabled){
                                        document.getElementById(`modalUserSettings${editableUser.id}`).querySelector('#editable-user-name').disabled = false;
                                    }else{
                                        document.getElementById(`modalUserSettings${editableUser.id}`).querySelector('#editable-user-name').disabled= true;
                                    }
                                    }}>
                                <i class="bi bi-pencil"></i></button>
                            </div>
                        </div>



                        <div className="d-flex justify-content-between mb-1 col-xl-12 mb-3">
                            <span className="me-2 p-2 fw-bold">Role</span>
                            <select className="w-50 form-select p-2" id="backofice-user-role-editor">

                                {roles.map(role=>
                                    <option key={role.id} id={role.id} > {role.description}</option>
                                )}
                                    
                            </select>
                        </div>

                        <div className="form-check form-switch d-flex justify-content-between mb-1 col-xl-12 mb-3">
                            <label className="form-check-label fw-bold" for="user-inhabilitator">{setLabelMessage()}</label>
                            <input className="form-check-input " type="checkbox" role="switch" id="user-inhabilitator" onClick={(e)=>{handleClickEvent(e);}}/>
                        </div>



                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>saveConfigChanges(editableUser.id)}>Guardar cambios</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    );

}

export default ModalUserSettings