import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../css/main.css';

import MotiveSetterAndViewer from "./MotiveSetterAndViewer";
import TurnDashboard from "./TurnDashboard";


const Turns = () =>{


    return(
        
        <div >

          <TurnDashboard/>
          <MotiveSetterAndViewer/>
        </div>
    );
}

export default Turns


  
  