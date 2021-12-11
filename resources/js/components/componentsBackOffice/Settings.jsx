import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';


const Settings = () =>{
    return(
        
        <div >
            <h1>HI FROM Settings</h1>
        </div>

    );
}

export default Settings

if( document.getElementById("settings")){
    ReactDOM.render(
      <React.StrictMode>
        <Settings />
      </React.StrictMode>,
      document.getElementById("settings")
    );
  }
  
  