import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../css/main.css';
import { useReducer, useState } from "react";

import { userReducer,usersData } from "../../../../../src/reducers/backOfficeUserReducer";
import UserListItem from "./UserListItem";
import backofficeUserDispatch from "../../../backOfficeUserUses";

import ModalUserEditor from "./ModalUserEditor";
import { useEffect } from "react";
import { ShowUserRole } from "../../../helpers/UserHelpers";
import LoadTable from "../../componentsLoaders/LoadTable";


const Users = () =>{

  const [usersState, dispatch] = useReducer(userReducer,usersData);
  const {users, roles,roleUser, filteredUsers} = usersState;

  const readAllData = backofficeUserDispatch(dispatch).readAllData;
  const saveUserConfig = backofficeUserDispatch(dispatch).saveUserConfig;
  const changeUserRole = backofficeUserDispatch(dispatch).changeUserRole;
  const createNewUser = backofficeUserDispatch(dispatch).createNewUser;
  const filterByName = backofficeUserDispatch(dispatch).filterByName;


  function setNewUserRole(userid, roleId){
    const parent = document.getElementById(`modalUserEditor${userid}`)
    const roleField = parent.querySelector("#backofice-user-role-editor");
    roleField.value = roleField.querySelector(`[id='${roleId}']`).value;
  }

  const[filterUser, setFilterUser] = useState(filteredUsers);

  useEffect(() => {
    async function fetch() {
      let ITEM_USER = await ShowUserRole();
      readAllData(ITEM_USER.user, ITEM_USER.role, ITEM_USER.roleUser);
      setFilterUser(ITEM_USER.user);
    }

    fetch();
  },[])

  

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
                      aria-label="Search" onChange={(e)=>filterByName(e.target.value)}/>
                    <button className="btn btn-black p-2" type="submit"><i className="bi bi-search"></i></button>
                  </div>
                </div>
                <div className="col-12 col-xl-6"></div>
                <div className="col-12 col-xl-2 my-2 p-0">
                  <div className="text-center d-xl-flex justify-content-end">
                    <button className="btn btn-black w-100 p-2" data-bs-toggle="modal"
                    onClick={()=>{setNewUserRole("NewUser",2)}} data-bs-target={`#modalUserEditorNewUser`} >
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

                    { 

                      !filterUser?

                      <LoadTable td={7}/>

                      :

                      filterUser.map((user)=>
                        <UserListItem key={user.id} user={user} saveUserConfig={saveUserConfig} users={users} roles={roles} roleUser={roleUser} changeUserRole={changeUserRole}/>
                      
                      )
                      
                    }

                    {
                      !filterUser?
                      ""
                      :
                      <ModalUserEditor  roles={roles} newUser={true} createNewUser={createNewUser}/>
                    }

                    

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
  
  