import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';


const Sales = () =>{
    return(
        
        <div >
            <h1>HI FROM Sales</h1>
        </div>

    );
}

export default Sales

if( document.getElementById("sales")){
    ReactDOM.render(
      <React.StrictMode>
        <Sales />
      </React.StrictMode>,
      document.getElementById("sales")
    );
  }
  
  