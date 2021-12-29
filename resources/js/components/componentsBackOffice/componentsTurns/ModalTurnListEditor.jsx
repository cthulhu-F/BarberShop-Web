import React from "react";


const ModalTurnListEditor = ({turn, editTurnSchedule}) =>{

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var yyyymax = parseInt(yyyy)+1;
    var minDate = yyyy + '-' + mm + '-' + dd;
    var maxDte = yyyymax + '-' + mm + '-' + dd;
    var pHolder = dd +'/' + mm + '/' + yyyy


    let date;
    let time;
    let duration;

    function setInputAsVariables(id){
        const listItemInputs = document.getElementById(`modalTurnItemInput${turn.id}`)
        date = listItemInputs.querySelector("#backofice-turn-date-editor");
        time = listItemInputs.querySelector("#backofice-turn-time-editor");
        duration = listItemInputs.querySelector("#backofice-turn-duration-editor");
    }

    function convertTelToWppLink(tel){
        tel =  tel.replace(/\D/g, "")
        return tel.split(" ").join("");
    }


    const setTurnDataValidated = (event,turn, orderByDate)=>{
        event.preventDefault();

        if (date.value != "" || time.value != "" || duration.value != "" ){

            let dateAlert     =   date.value == "" ? "" : ` <span style="font-weight:700;" >Fecha </span><br> ${date.placeholder} ---> ${date.value.split('-')[2]+'/'+date.value.split('-')[1]+'/'+date.value.split('-')[0]} <br> <br>  `;
            let timeAlert     =   time.value == "" ? "" : `<span style="font-weight:700;" >Horario </span><br>  ${time.placeholder} ---> ${time.value} <br><br>`;
            let durationAlert =   duration.value == "" ? "" : `<span style="font-weight:700;" >Duración </span><br> ${duration.placeholder} ---> ${duration.value}<br><br>`;
            
            let wppDateAlert     =   date.value == "" ? "" : `_Nueva fecha programada_%0A${date.placeholder} ---> *${date.value.split('-')[2]+'/'+date.value.split('-')[1]+'/'+date.value.split('-')[0]}*.%0A%0A`;
            let wppTimeAlert     =   time.value == "" ? "" : `_Nuevo horario programado_%0A${time.placeholder} ---> *${time.value}*.%0A%0A`;
            let wppTurationAlert =   duration.value == "" ? "" : `_Nueva duración estimada_%0A${duration.placeholder} ---> *${duration.value}*.%0A%0A`;
    


            let msjUrl =`Hola ${turn.name_client}, desde BrothersBarberShop queremos notificarle que por razones de fuerza mayor hemos tenido que modificar la programación de su turno. La nueva programación es la siguiente%0A%0A${wppDateAlert}${wppTimeAlert}${wppTurationAlert}Sepa disculpar las molestias, si no dispone de ese horario libre por favor notifíquenos, de lo contrario te esperamos el día ${turn.date} a las ${turn.time}.%0AMuchas gracias!`

            msjUrl = msjUrl.split(" ").join("%20");
            let clienWppLink = convertTelToWppLink(turn.phone_client);

            swal.fire({
            title: "Atención",
            html: `Esta seguro que desea modificar los siguientes datos?<br><br> 
            ${dateAlert} ${timeAlert} ${durationAlert}`, 
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: '#d33',
            confirmButtonText: `Si, Modificar y notificar a ${turn.name_client}!`   
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(`https://wa.me/${clienWppLink}?text=${msjUrl}`, '_blank');
                    editTurnSchedule(
                        date.value == "" ? date.placeholder : date.value,
                        time.value == "" ? time.placeholder : time.value,
                        duration.value == "" ? duration.placeholder : duration.value,
                        turn);
                    orderByDate();
                    swal.fire({
                        text: 'Datos modificados con éxito',
                        timer:"1500", 
                        position: "bottom",
                        customClass : {
                        container: "add-to-cart-alert-container",
                        popup:"add-to-cart-alert",
                        }
                    })
                }else{
                    swal.fire({
                        text: `Ningún dato ha sido modificado.`,
                        timer:"1500", 
                        position: "bottom",
                        customClass : {
                            container: "add-to-cart-alert-container",
                            popup:"add-to-cart-alert",
                        }
                       });
                }
            })
        } else{
            swal.fire({
                text: `Ningún dato ha sido modificado.`,
                timer:"1500", 
                position: "bottom",
                customClass : {
                    container: "add-to-cart-alert-container",
                    popup:"add-to-cart-alert",
                }
            });
        }

    }

    return(
        <div className="modal fade" id={`modalTurnConfig${turn.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="modalTurnConfigLabel" aria-hidden="true">
            <div className="modal-dialog modal-gl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 class="modal-title fw-bold font-h1">Programación del turno {turn.id}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div class="modal-body" id={`modalTurnItemInput${turn.id}`}>


                        <div className="col-12" id="timeFin-container">

                            <div className="d-flex justify-content-between mb-1" >
                                <span className="me-2 p-2 fw-bold">Fecha</span>

                                <input className="form-control  w-50" type="text" name="trip-start"
                                onFocus={(e) => e.currentTarget.type = "date"}
                                onBlur={(e) => e.currentTarget.type = "text"}
                                placeholder={turn.date}
                                min = {minDate} max={maxDte} 
                                id="backofice-turn-date-editor"
                                style={{margin:"10px 0px"}}/>
                            </div>
                        

                            <div className="d-flex justify-content-between mb-1" >
                                <span className="me-2 p-2 fw-bold">Hora de inicio</span>

                                <input type="text" className="form-control w-50" id="backofice-turn-time-editor"
                                onFocus={(e) => e.currentTarget.type = "time"}
                                onBlur={(e) => e.currentTarget.type = "text"}
                                
                                placeholder={turn.time}
                                />
                            </div>
                        
                            <div className="d-flex justify-content-between mb-1">
                                <span className="me-2 p-2 fw-bold">Duración</span>
                                <input type="text" className="form-control w-50" id="backofice-turn-duration-editor"
                                onFocus={(e) => e.currentTarget.type = "time"}
                                onBlur={(e) => e.currentTarget.type = "text"}
                                
                                placeholder={turn.turn_duration}
                           /></div>
                        </div>
                      
                    </div>
                    <div class="modal-footer" >
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                        onClick={(e)=>{
                            e.preventDefault();
                            setInputAsVariables(turn.id);
                            setTurnDataValidated(e, turn);
                          
                                
                        }}>Modificar programación</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ModalTurnListEditor