import React from "react";

const TurnDashboardItem = ({scheduledTurn}) =>{



    return (
        <div className="col-12 col-xl-3 shadow-sm border mx-xl-2 my-2">
            <div className="d-block">
                <div className="d-flex justify-content-between bg-light p-2">
                    <div className="font-h1 fw-bold fs-5 pt-2 pb-2">{scheduledTurn.name} <i className="bi bi-scissors"></i></div>
                    <button className="btn border-0 fs-5"><i className="bi bi-x"></i></button>
                </div>
            </div>
            <div className="d-block bg-white px-2 py-3 border-0 rounded">
                <div className="d-flex"><span className="fw-bold me-1">Fecha:</span><span>{scheduledTurn.date}</span></div>
                <div className="d-flex"><span className="fw-bold me-1">Hora:</span><span>{scheduledTurn.time}</span></div>
                <div className="d-flex"><span className="fw-bold me-1">Cliente:</span><span>{scheduledTurn.name_client}</span></div>

            </div>
            <div className="d-flex bg-light px-2 py-3">
                <button className="btn btn-black" data-bs-toggle="modal" data-bs-target={`#modalDataClient${scheduledTurn.id}`}><span className="d-none d-xl-inline">Cliente</span> <i
                    className="bi bi-person"></i> </button>
                <button className="btn btn-orangeWeb mx-2"><span className="d-none d-xl-inline">Completar</span><i
                    className="bi bi-check"></i></button>
            </div>




            <div className="modal fade" id={`modalDataClient${scheduledTurn.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="modalChairConfigLabel" aria-hidden="true">
                <div className="modal-dialog modal-gl">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title font-h1 fw-bold fs-5 pt-2 pb-2">Datos de {scheduledTurn.name_client}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>

                        <div className="modal-body">

                        <div className="d-block bg-white px-2 py-3 border-0 rounded container">
                            
                            <div className="input-group mb-1 row">
                                <span className="input-group-text bg-black text-white border border-black col-1" id="basic-addon1"><i
                                    className="bi bi-person"></i></span>
                                <button type="button" class="btn btn-light col-11">{scheduledTurn.name_client}</button>  
                            </div>


                            <div className="input-group mb-1 row">
                                <span className="input-group-text bg-black text-white border border-black col-1" id="basic-addon1">
                                    <i className="bi bi-telephone"></i>
                                </span>
                                <button type="button" class="btn btn-light col-11">{scheduledTurn.phone_client}</button>  
                            </div>
                            
                            <div className="input-group mb-1 row">
                                <span className="input-group-text bg-black text-white border border-black col-1" id="basic-addon1"><i
                                    className="bi bi-envelope"></i></span>
                                <button type="button" class="btn btn-light col-11">{scheduledTurn.email_client}</button>  
                            </div>

                        
                        </div>

                        </div>

                        <div className="modal-footer justify-content-between">
                            <a className="col-3" href={`tel:${scheduledTurn.phone_client}`} style={{color:"#fff", fontWeight:"600", textDecoration:"inherit"}} >
                                <span className="input-group-text bg-black text-white border border-black" id="basic-addon1">
                                        Llamar 
                                </span>
                            </a>
                            <button type="button col-3" className="btn btn-dark" data-bs-dismiss="modal">Ok</button>
                        </div>
                    </div>
                </div>
            </div>

    </div>
    );
}

export default TurnDashboardItem