import React from "react";
import ReactDOM from "react-dom";

// bg-dark text-white

const setActive = (id)=>{
    let allChairs = document.querySelectorAll('.chair-item');

    allChairs.forEach(chair =>{
        if (chair.id ==id ){
            chair.classList.add("bg-dark","text-white");
        }
        else {
            try{
                chair.classList.remove("bg-dark","text-white");
            }
            catch(error){
            }
        }
    })    
};


const Chair = ({data, setActiveChair, getSchedule, selecetDay}) =>{
    let {id, name, status} = data;


    return(
        <div className="col-md-4 " style={{marginBottom:"20px"}} >
            <button className="card p-4 chair-item text-dark text-decoration-none" style={{alignItems: "center"}}  id={id} onClick={()=>{setActive(id); setActiveChair(id); getSchedule(id,selecetDay )}}>
                <div className="d-flex flex-row mb-3">
                    <i className="bi bi-scissors"></i>
                    <div className="d-flex flex-column ml-2">
                        <span>{name}</span>
                    </div>
                </div>
            </button>
        </div>
    );


}

export default Chair