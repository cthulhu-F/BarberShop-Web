import React from "react";
import ModalUserSettings from "./ModalUserSettings";
import ModalUserEditor from "./ModalUserEditor";

const UserListItem = ({user, saveUserConfig, users, roles, roleUser,changeUserRole}) =>{

    const ColumnTitleStyle ={
        overflowWrap: "break-word",
         width: "150px",
      }


    function checkUserStatus(userid){
    const parent = document.getElementById(`modalUserSettings${userid}`)
    const switcher = parent.querySelector("#user-inhabilitator");
    const user = users.find(user => user.id==userid)
    if(user.status == "NONACTIVE"){
        switcher.checked = true;
        switcher.setAttribute("aria-checked", "true")
    }
    if(user.status == "ACTIVE"){ try {
        switcher.checked = false;
        switcher.setAttribute("aria-checked", "false")
    }catch(error){}
    }
    }


    function setDefaultRole(userid, roleId){
        const parent = document.getElementById(`modalUserSettings${userid}`)
        const roleField = parent.querySelector("#backofice-user-role-editor");
        roleField.value = roleField.querySelector(`[id='${roleId}']`).value;
    }

    function activateFormAlerts(userid){
        const parent = document.getElementById(`modalUserEditor${userid}`)
        parent.querySelector("#backofice-user-name-editor-setter").click().click();
    }

    //console.log(roles.find(role=>role.id == roleUser.find(role => role.user_id == user.id).role_id).description)

    return (
        <tr>
        <th scope="row">1</th>
        <td><div style={ColumnTitleStyle}> {user.name} </div></td>
        <td><div style={ColumnTitleStyle}> {user.email} </div></td>
        <td><button className="btn btn-black"><i className="bi bi-eye"></i></button></td>
        <td><div style={ColumnTitleStyle}>
            {roles.find(role=>role.id == roleUser.find(role => role.user_id == user.id).role_id).description}
            </div></td>
        <td>
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-success p-1 me-1" data-bs-toggle="modal"
            data-bs-target={`#modalUserEditor${user.id}`} onClick={()=>activateFormAlerts(user.id)}><i className="bi bi-pencil fs-7"></i></button>
            <button className="btn btn-outline-danger p-1 me-1" data-bs-toggle="modal"
            data-bs-target={`#modalUserSettings${user.id}`} onClick={()=>{checkUserStatus(user.id); setDefaultRole(user.id, roleUser.find(role => role.user_id == user.id).role_id)}}><i className="bi bi-gear"></i></button>
          </div>
        </td>
        <td>
        {
            user.status == "ACTIVE"
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
        <ModalUserSettings editableUser={user} saveUserConfig={saveUserConfig} roles={roles} changeUserRole={changeUserRole} roleUser={roleUser}/>
        <ModalUserEditor editableUser={user} saveUserConfig={saveUserConfig} roles={roles} />
      </tr>
    );
}

export default UserListItem