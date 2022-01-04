import React, {useEffect} from "react";
import Chair from "../../componentsTurn/chair";


const MotiveSetter =({editableChair, turnsPerday, setActiveDay,editableDay,
  saveChairSchedule, addCount, restCount, setStartHour, setEndHour, switchDayStatus}) =>{

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

    
    function handleClickEvent(element) {
      if (element.getAttribute("aria-checked") == "true") {
        element.setAttribute("aria-checked", "false");
      } else {
        element.setAttribute("aria-checked", "true");
      }
      switchDayStatus(editableDay[1]);
    }

    function handleClickEventGlobalSetting(element) {
      if (element.getAttribute("aria-checked") == "true") {
        element.setAttribute("aria-checked", "false");
      } else {
        element.setAttribute("aria-checked", "true");
      }
    }

  function checkDayStatus(){
      const switcher = document.getElementById("desactivate-day");
      if(editableDay[1] == "NONACTIVE"){
          switcher.checked = true;
          switcher.setAttribute("aria-checked", "true")
      }
      else{ try {
          switcher.checked = false;
          switcher.setAttribute("aria-checked", "false")
      }catch(error){}
      }
  }

  function resolveAfterRender() {
    return new Promise(resolve => {
      setTimeout(() => {
        checkDayStatus();
      }, 0);
    });
  }

  async function asyncCheckDayStatus() {
    await resolveAfterRender();
  }

  asyncCheckDayStatus();


  useEffect(() => {
    let day = editableDay.map((day) => {
      switch (day){
        case "mo":
          return "mo"
        case "tu":
          return "tu" 
        case "we":
          return "we" 
        case "th":
          return "th"
        case "fr":
          return "fr"
        case "sa":
          return "sa" 
        case "su":
          return "su"
        }
      }
    )

    let dayActive = document.getElementById(day[0]);
    let labelMessage = document.getElementById("labelMessage");
    let allDays = document.querySelectorAll('.day-item');

    allDays.forEach(day =>{
      try{
          day.classList.add("btn-platinum");
          day.classList.remove("bg-danger");
          day.classList.remove("text-white");
          day.classList.remove("bg-dark");
      }catch(error){}
    })

    if(editableDay[1] == "NONACTIVE"){
      labelMessage.innerHTML = "Día inhabilitado ¿Desea habilitar este dia?"
      dayActive.classList.remove("btn-platinum");
      dayActive.classList.add("bg-danger","text-white");
    }
    
    else{
      dayActive.classList.remove("btn-platinum");
      dayActive.classList.add("bg-dark", "text-white");
      labelMessage.innerHTML = "¿Desea inhabilitar este día?";
    }

    }, [editableDay[1], editableDay])




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
                        <button className="btn btn-platinum fw-bold bg-dark text-white day-item" onClick={(event)=>setActiveDay(event.target.id)} id="mo">LU</button>
                        <button className="btn btn-platinum fw-bold day-item" onClick={(event)=>setActiveDay(event.target.id)} id="tu">MA</button>
                        <button className="btn btn-platinum fw-bold day-item" onClick={(event)=>setActiveDay(event.target.id)} id="we">MI</button>
                        <button className="btn btn-platinum fw-bold day-item" onClick={(event)=>setActiveDay(event.target.id)} id="th">JU</button>
                        <button className="btn btn-platinum fw-bold day-item" onClick={(event)=>setActiveDay(event.target.id)} id="fr">VI</button>
                        <button className="btn btn-platinum fw-bold day-item" onClick={(event)=>setActiveDay(event.target.id)} id="sa">SA</button>
                        <button className="btn btn-platinum fw-bold day-item" onClick={(event)=>setActiveDay(event.target.id)} id="su">DO</button>
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
                            placeholder={editableDay[1].split('/')[0] == "NONACTIVE" ? "--:--" : editableDay[1].split('/')[0]}
                            disabled ={editableDay[1]=="NONACTIVE"}/>
                        </div>
                        
                        <div className="d-flex justify-content-between mb-1">
                          <span className="me-2 p-2">Hora de Fin</span>
                          <input type="text" className="form-control w-50" id="timeFin"
                            onFocus={(e) => e.currentTarget.type = "time"}
                            onBlur={(e) => e.currentTarget.type = "text"}
                            onChange={(e) =>setEndHour(e.target.value)}
                            placeholder={editableDay[1].split('/')[1] == null ? "--:--" : editableDay[1].split('/')[1]}
                            disabled ={editableDay[1]=="NONACTIVE"}/></div>
                        </div>

                      <div className="col-12 mb-2">
                        <span className="form-text">¿Cuantos turnos por dia deseas dar?</span>
                      </div>

                      <div className="col-12 d-flex">
                        <button className="btn btn-white border rounded-0 rounded-start fs-6 px-1 px-xl-3 fw-bold " style={{zIndex: 2}} disabled={editableDay[1]=="NONACTIVE"} onClick={()=>restCount()}><i className="bi bi-dash"></i></button>
                      <input className="form-control h-100 border-0 border-top border-bottom rounded-0 bg-white text-center fs-6" placeholder={editableDay[1]=="NONACTIVE" ? "-":editableDay[1].split("/")[2]} type="number" disabled />
                      <button className="btn btn-white border rounded-0 rounded-end fs-6 px-1 px-xl-3 fw-bold" style={{zIndex: 2}} disabled={editableDay[1]=="NONACTIVE"} onClick={()=>addCount()}><i className="bi bi-plus"></i></button>
                      </div>

                      <div className="col-12 d-flex">
                        <div className="form-check form-switch">
                          <label className="form-check-label" for="flexSwitchCheckDefault">¿Quieres aplicar estos cambios para todos los dias?</label>
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" aria-checked={false} onClick={(e)=>{handleClickEventGlobalSetting(e.target)}}/>
                        </div>
                        
                      </div>

                      <div className="col-12 d-flex">
                        <div className="form-check form-switch">
                            <label className="form-check-label" for="desactivate-day" id="labelMessage"></label>
                            <input className="form-check-input" type="checkbox" role="switch" id="desactivate-day" onClick={(e)=>{handleClickEvent(e.target)}}/>
                          </div>
                      </div>

                      <div className="col-12 d-flex justify-content-between">
                        <div className="input-group w-50">
                          <input type="text" className="form-control" placeholder={editableDay[1]} disabled={editableDay[1] =="NONACTIVE"} aria-label="Recipient's username" aria-describedby="basic-addon2" id="turn-data-string"/>
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