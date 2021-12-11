import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';


const Inventory = () =>{
    return(
        
        <div >
            <h1>HI FROM inventory</h1>
        </div>

    );
}

export default Inventory

if( document.getElementById("inventory")){
    ReactDOM.render(
      <React.StrictMode>
        <Inventory />
      </React.StrictMode>,
      document.getElementById("inventory")
    );
  }
  
  