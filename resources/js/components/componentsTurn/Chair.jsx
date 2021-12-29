import React from "react";
import ReactDOM from "react-dom";



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
    let {id, name, status, configDay_id} = data;



    return(
        <div className="col-md-4" style={{marginBottom:"20px"}} >
            <button className="chair-item btn p-4 text-dark text-decoration-none d-flex justify-content-center aling-middle" id={id} onClick={()=>{setActive(id); setActiveChair(id); getSchedule(id,selecetDay )}}>
                <div className="d-flex">
                    <i className="bi bi-scissors"></i>
                    <div className="">
                        <span>{name}</span>
                </div>
                </div>
            </button>
        </div>
    );


}

export default Chair