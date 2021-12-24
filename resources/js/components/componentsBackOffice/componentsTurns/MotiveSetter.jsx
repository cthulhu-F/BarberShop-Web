import React from "react";
import Chair from "../../componentsTurn/chair";


const MotiveSetter =({editableChair, turnsPerday, setActiveDay,editableDay,
  saveChairSchedule, addCount, restCount, setStartHour, setEndHour}) =>{

    function myCopyFunction() {
      var copyText = document.getElementById("turn-data-string");
      copyText.select();
      copyText.setSelectionRange(0, 99999); 
      if (copyText.value ==""){
        navigator.clipboard.writeText(copyText.placeholder);
      }else{
        navigator.clipboard.writeText(copyText.value);

      }
    }

    
    function handleClickEvent(evt) {
      document.querySelectorAll(".switch").forEach(function(theSwitch) {
        theSwitch.addEventListener("click", handleClickEvent, false);
      });

      let el = evt.target;

      if (el.getAttribute("aria-checked") == "true") {
          el.setAttribute("aria-checked", "false");
      } else {
          el.setAttribute("aria-checked", "true");
      }
    }

    return(
        <div>
             <div className="row shadow-sm p-2">
                  <div className="col-xl-12 mb-3">
                    <span className="fw-bold fs-5 font-h1">Agrega los motivos de tus turnos</span>
                  </div>

                  <div className="col-xl-3 mb-3">
                    <div className="input-group ">
                      <span className="input-group-text bg-black text-white border border-black fs-9 rounded"
                        id="basic-addon1">{`ID: ${editableChair.id}`}</span>
                    </div>
                  </div>

                  <div className="col-xl-9 mb-3">
                    <div className="input-group">
                      <input type="text" className="form-control fs-8" placeholder={editableChair.name} 
                        aria-label="Recipient's username" aria-describedby="basic-addon2" disabled={true} id="editable-chair-name"/>
                      <button className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"
                        onClick={()=> {
                            if(document.getElementById('editable-chair-name').disabled){
                                document.getElementById('editable-chair-name').disabled = false;
                            }else{
                                document.getElementById('editable-chair-name').disabled= true;
                            }
                            }}>
                          <i class="bi bi-pencil"></i></button>
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <div className="row g-3">

                      <div className="col-12 mb-2">
                        <span className="form-text">Dias disponibles </span>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-platinum fw-bold bg-dark text-white day-item" onClick={(event)=>setActiveDay(event.target.id)} id="0">LU</button>
                        <button className="btn btn-platinum fw-bold day-item" onClick={(event)=>setActiveDay(event.target.id)} id="1">MA</button>
                        <button className="btn btn-platinum fw-bold day-item" onClick={(event)=>setActiveDay(event.target.id)} id="2">MI</button>
                        <button className="btn btn-platinum fw-bold day-item" onClick={(event)=>setActiveDay(event.target.id)} id="3">JU</button>
                        <button className="btn btn-platinum fw-bold day-item" onClick={(event)=>setActiveDay(event.target.id)} id="4">VI</button>
                        <button className="btn btn-platinum fw-bold day-item" onClick={(event)=>setActiveDay(event.target.id)} id="5">SA</button>
                        <button className="btn btn-platinum fw-bold day-item" onClick={(event)=>setActiveDay(event.target.id)} id="6">DO</button>
                      </div>

                      <div className="col-12 mb-2">
                        <span className="form-text">Horarios disponible</span>
                      </div>

                      <div className="col-12" id="timeFin-container">
                        <div className="d-flex justify-content-between mb-1" >
                          <span className="me-2 p-2">Hora de inicio</span>

                          <input type="text" className="form-control w-50" id="timeFin"
                            onFocus={(e) => e.currentTarget.type = "time"}
                            onBlur={(e) => e.currentTarget.type = "text"}
                            onChange={(e) =>setStartHour(e.target.value)}
                            placeholder={editableDay[1].split('/')[0]}/>
                        </div>
                        
                        <div className="d-flex justify-content-between mb-1">
                          <span className="me-2 p-2">Hora de Fin</span>
                          <input type="text" className="form-control w-50" id="timeFin"
                            onFocus={(e) => e.currentTarget.type = "time"}
                            onBlur={(e) => e.currentTarget.type = "text"}
                            onChange={(e) =>setEndHour(e.target.value)}
                            placeholder={editableDay[1].split('/')[1]}/></div>
                        </div>

                      <div className="col-12 mb-2">
                        <span className="form-text">¿Cuantos turnos por dia deseas dar?</span>
                      </div>

                      <div className="col-12 d-flex">
                        <button className="btn btn-white border rounded-0 rounded-start fs-6 px-1 px-xl-3 fw-bold " style={{zIndex: 2}} onClick={()=>restCount()}><i className="bi bi-dash"></i></button>
                      <input className="form-control h-100 border-0 border-top border-bottom rounded-0 bg-white text-center fs-6" placeholder={turnsPerday} type="number" disabled />
                      <button className="btn btn-white border rounded-0 rounded-end fs-6 px-1 px-xl-3 fw-bold" style={{zIndex: 2}} onClick={()=>addCount()}><i className="bi bi-plus"></i></button>
                      </div>

                      <div className="col-12 d-flex">
                        <div className="form-check form-switch">
                          <label className="form-check-label" for="flexSwitchCheckDefault">¿Quieres aplicar estos cambios para todos los dias?</label>
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" aria-checked={false} onClick={(e)=>{handleClickEvent(e)}}/>
                        </div>
                      </div>

                      <div className="col-12 d-flex justify-content-between">
                        <div className="input-group w-50">
                          <input type="text" className="form-control" placeholder={editableDay[1]} aria-label="Recipient's username" aria-describedby="basic-addon2" id="turn-data-string"/>
                        <span className="input-group-text p-0" id="basic-addon2">
                          <button className="input-group-text btn btn-black" onClick={()=>myCopyFunction()}>
                            <i className="bi bi-files"></i>
                          </button>
                        </span>
                        </div>
                        <button className={editableChair.status =="NONACTIVE" ? "btn btn-danger": "btn btn-orangeWeb"} onClick={()=>saveChairSchedule(document.getElementById('flexSwitchCheckDefault').getAttribute("aria-checked"), document.getElementById('editable-chair-name').value)}
                        >
                          Guardar
                        </button>
                      </div>
                      {editableChair.status =="NONACTIVE" ? 
                      <div style ={{backgroundColor:"red", color:"#fff", fontWeight:"600", width:"100%"}}>
                        SILLA INHABILITADA, AÚN PUEDES GUARDAR TUS CAMBIOS PERO TUS CLIENTES NO PODRÁN SELECCIONAR ESTA SILLA.
                      </div> 
                      :
                      ""
                      }

                    </div>
                  </div>

                </div>
        </div>
    );
}

export default MotiveSetter;