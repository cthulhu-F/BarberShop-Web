import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';


const Users = () =>{
    return(
        
        <div >
            <h1>HI FROM Users</h1>
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
  
  