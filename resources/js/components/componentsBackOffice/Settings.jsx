import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';


const Settings = () =>{
    return(
        
        <div >
          <div className="row px-3">
          <div className="col-12 p-1">
            <div className="row bg-dark shadow rounded p-0 mb-3">
              <div className="col-12">
                <div className="font-h1 fs-1"></div>
              </div>
            </div>
          </div>
          </div>

          <div className="row px-4 g-1">

            <div className="col-12">
              <div className="row p-2 mb-3">
                <div className="col-12 p-0">
                  <div className="font-h1 fs-1 fw-bold">Configuracion</div>
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-8">
              <div className="row shadow-sm p-2">
                <div className="col-xl-12 mb-3 border-0 border-bottom">
                  <span className="fw-bold fs-4 font-h1">Ingresa datos de tu empresa</span>
                </div>

                <div className="col-12 col-xl-6 mb-3">
                  <div className="input-group">
                    <input type="text" className="form-control fs-8" placeholder="Nombre" aria-label="Recipient's username"
                      aria-describedby="basic-addon2"/>
                    <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i
                        className="bi bi-grid"></i></span>
                  </div>
                </div>

                <div className="col-12 col-xl-6 mb-3">
                  <div className="input-group">
                    <input type="text" className="form-control fs-8" placeholder="Direccion" aria-label="Recipient's username"
                      aria-describedby="basic-addon2"/>
                    <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i
                        className="bi bi-grid"></i></span>
                  </div>
                </div>

                <div className="col-12 col-xl-6 mb-3">
                  <div className="input-group">
                    <input type="text" className="form-control fs-8" placeholder="Telefono" aria-label="Recipient's username"
                      aria-describedby="basic-addon2"/>
                    <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i
                        className="bi bi-grid"></i></span>
                  </div>
                </div>

                <div className="col-12 col-xl-6 mb-3">
                  <div className="input-group">
                    <input type="text" className="form-control fs-8" placeholder="Correo" aria-label="Recipient's username"
                      aria-describedby="basic-addon2"/>
                    <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i
                        className="bi bi-grid"></i></span>
                  </div>
                </div>

                <div className="col-12 col-xl-12 mb-3">
                  <div className="input-group">
                    <textarea className="form-control" aria-label="With textarea"
                      placeholder="Describe tu empresa..."></textarea>
                  </div>
                </div>

                <div className="col-12 col-xl-12 mb-3 border-bottom">
                  <span className="fw-bold fs-4 font-h1">Redes sociales</span>
                </div>

                <div className="col-12 col-xl-6 mb-3">
                  <div className="input-group">
                    <input type="text" className="form-control fs-8" placeholder="Facebook" aria-label="Recipient's username"
                      aria-describedby="basic-addon2"/>
                    <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i
                        className="bi bi-grid"></i></span>
                  </div>
                </div>

                <div className="col-12 col-xl-6 mb-3">
                  <div className="input-group">
                    <input type="text" className="form-control fs-8" placeholder="Instagram" aria-label="Recipient's username"
                      aria-describedby="basic-addon2"/>
                    <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i
                        className="bi bi-grid"></i></span>
                  </div>
                </div>

                <div className="col-12 col-xl-12 d-flex justify-content-end">
                  <button className="btn btn-orangeWeb">Guardar</button>
                </div>

                <div className="col-12 col-xl-12 mb-3">
                  

                  <div className="row g-2">
                    <div className="col-12 d-flex justify-content-center border-bottom">
                      <span className="fw-bold fs-4 font-h1"> Slider principal </span>
                    </div>
                    <div className="col-12 col-xl-4">
                      <div className="d-flex">
                        <img src="asset/slider/img-1940x460.jpg" className="w-100" alt=""/>
                      </div>
                      <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile02"/>
                        <label className="input-group-text" for="inputGroupFile02">Upload</label>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4">
                      <div className="d-flex">
                        <img src="asset/slider/img-1940x460.jpg" className="w-100" alt=""/>
                      </div>
                      <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile02"/>
                        <label className="input-group-text" for="inputGroupFile02">Upload</label>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4">
                      <div className="d-flex">
                        <img src="asset/slider/img-1940x460.jpg" className="w-100" alt=""/>
                      </div>
                      <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile02"/>
                        <label className="input-group-text" for="inputGroupFile02">Upload</label>
                      </div>
                    </div>
                  </div>
                
                </div>

                  <div className="col-12 col-xl-12 d-flex justify-content-end">
                    <button className="btn btn-orangeWeb">Subir Imagenes</button>
                  </div>
            </div>

            </div>
          </div>
        </div>

    );
}

export default Settings

if( document.getElementById("settings")){
    ReactDOM.render(
      <React.StrictMode>
        <Settings />
      </React.StrictMode>,
      document.getElementById("settings")
    );
  }
  
  