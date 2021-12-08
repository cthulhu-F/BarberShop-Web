import React from "react";
import ReactDOM from "react-dom";

const ModalTurn = () => {

  return(

    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-gl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-3 font-h1" id="staticBackdropLabel"> Nuevo turno <i className="bi bi-scissors"></i>
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row g-2">

                <div className="col-12">
                  <div className="border-0 border-bottom">
                    <span className="fw-bold fs-5 font-h1">
                      Datos de contacto
                    </span>
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-group mb-1">
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="Username"
                      aria-describedby="basic-addon1"/>
                    <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                        className="bi bi-person"></i></span>
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-group mb-1">
                    <input type="number" className="form-control" placeholder="Telefono" aria-label="Username"
                      aria-describedby="basic-addon1"/>
                    <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                        className="bi bi-telephone"></i></span>
                  </div>
                </div>

                <div className="col">
                  <div className="input-group mb-1">
                    <input type="email" className="form-control" placeholder="Correo" aria-label="Username"
                      aria-describedby="basic-addon1"/>
                    <span className="input-group-text bg-black text-white border border-black" id="basic-addon1"><i
                        className="bi bi-envelope"></i></span>
                  </div>
                </div>

                <div className="col-12">
                  <div className="border-0 border-bottom">
                    <span className="fw-bold fs-5 font-h1">
                      Motivo de turno
                    </span>
                  </div>
                </div>

                <div className="col-12">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button collapsed bg-white text-black" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Seleccione un motivo...
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body p-1">
                        <ul className="list-group">
                          <li className="list-group-item border-0">
                            <input className="form-check-input me-1" name="motivo" type="radio" value="" aria-label="..."/>
                            Motivo 1
                          </li>
                          <li className="list-group-item border-0">
                            <input className="form-check-input me-1" name="motivo" type="radio" value="" aria-label="..."/>
                            Motivo 2
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="border-0 border-bottom">
                    <span className="fw-bold fs-5 font-h1">
                      Seleccione una fecha disponible
                    </span>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex">
                    <input className="form-control" type="date" name="trip-start" value="2021-12-06" min="2021-12-06"
                      max="2022-12-31"/>
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-group">
                    <select className="form-select border-0 border-start border-top border-bottom" id="inputGroupSelect02">
                      <option selected>Horarios</option>
                      <option value="1">00:00</option>
                    </select>
                    <label className="input-group-text bg-white border-0 border-end border-top border-bottom"
                      for="inputGroupSelect02"><i className="bi bi-clock"></i></label>
                  </div>
                </div>

              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-black">Generar turno</button>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default ModalTurn

if (document.getElementById("modalTurn")) {
  ReactDOM.render(
      <React.StrictMode>
          <ModalTurn />
      </React.StrictMode>,
      document.getElementById("modalTurn")
  );
}