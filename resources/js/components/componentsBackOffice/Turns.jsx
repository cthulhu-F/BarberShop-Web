import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';


const Turns = () =>{
    return(
        
        <div >
            <h1>HI FROM Turns</h1>
        </div>

    );
}

export default Turns

if( document.getElementById("turns")){
    ReactDOM.render(
      <React.StrictMode>
        <Turns />
      </React.StrictMode>,
      document.getElementById("turns")
    );
  }
  
  