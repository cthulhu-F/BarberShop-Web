import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';


const BackOfficeHome = () =>{
    return(
        
        <div >
            <h1>HI FROM BackOfficeHome</h1>
        </div>

    );
}

export default BackOfficeHome

if( document.getElementById("backoffice-home")){
    ReactDOM.render(
      <React.StrictMode>
        <BackOfficeHome />
      </React.StrictMode>,
      document.getElementById("backoffice-home")
    );
  }
  
  