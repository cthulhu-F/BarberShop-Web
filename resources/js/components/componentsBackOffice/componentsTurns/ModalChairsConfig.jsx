import React from "react"


const ModalChairsConfig = ({editableChair, saveChairConfig})=>{

    function handleClickEvent(evt) {
        
        let switcher = evt.target;
        if (switcher.getAttribute("aria-checked") == "true") {
            switcher.setAttribute("aria-checked", "false");
        } else {
            switcher.setAttribute("aria-checked", "true");
        }
        
      }
   
    function setLabelMessage()  {
        if(editableChair.status == "NONACTIVE"){
            return "¿Desea habilitar esta silla?"
        } else{
            return  "¿Desea inhabilitar esta silla?" 
        } 
    }

    function checkChairStatus(){
        const switcher = document.getElementById("chair-inhabilitator");
        if(editableChair.status == "NONACTIVE"){
            switcher.checked = true;
            switcher.setAttribute("aria-checked", "true")
        }
        if(editableChair.status == "ACTIVE"){ try {
            switcher.checked = false;
            switcher.setAttribute("aria-checked", "false")
        }catch(error){}
        }
    }

    checkChairStatus();

    function saveConfigChanges (){
        const switcher = document.getElementById("chair-inhabilitator");
        let previousValue;
        if (switcher.getAttribute("aria-checked") == "true"){
            previousValue ="ACTIVE";
        }
        else{
            previousValue ="NONACTIVE";
        }
        saveChairConfig(previousValue, document.getElementById('editable-chair-name-2').value);
    }

    return (
        <div className="modal fade" id="modalChairConfig" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="modalChairConfigLabel" aria-hidden="true">
            <div className="modal-dialog modal-gl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 class="modal-title">Configuraciones de {editableChair.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className="row">
                            <div className="col-xl-3 mb-3">
                                <div className="input-group">
                                <span className="input-group-text bg-black text-white border border-black fs-9"
                                    id="basic-addon1">{`ID: ${editableChair.id}`}</span>
                                </div>
                            </div>

                            <div className="col-xl-8 mb-3">
                                <div className="input-group">
                                <input type="text" className="form-control fs-8" placeholder={editableChair.name} 
                                    aria-label="Recipient's username" aria-describedby="basic-addon2" disabled={true} id="editable-chair-name-2"/>
                                <button className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"
                                    onClick={()=> {
                                        if(document.getElementById('editable-chair-name-2').disabled){
                                            document.getElementById('editable-chair-name-2').disabled = false;
                                        }else{
                                            document.getElementById('editable-chair-name-2').disabled= true;
                                        }
                                        }}>
                                    <i class="bi bi-pencil"></i></button>
                                </div>
                            </div>

                            <div className="form-check form-switch">
                                <label className="form-check-label" for="chair-inhabilitator">{setLabelMessage()}</label>
                                <input className="form-check-input" type="checkbox" role="switch" id="chair-inhabilitator" onClick={(e)=>{handleClickEvent(e);}}/>

                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={()=>saveConfigChanges()}>Save changes</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalChairsConfig