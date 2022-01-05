import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../css/main.css';

import { ITEM_IMG } from '../../../constants/constImg';


const urlImg = require.context('../../../../asset/slider', true);

const sliderImgsObj = ITEM_IMG.sliderImgs;

const sliderImgArray =  Object.values(sliderImgsObj)

const Settings = () =>{

  function createPreview(file,index) {
    var imgCodified = URL.createObjectURL(file);
    const imgViewer = document.querySelector(`#backofice-settings-slider-imagen-editor-viewer-${index}`);
    imgViewer.style.backgroundImage = `url(${imgCodified})`;
}

  const validateSizeFile= (event, index)=>{
    const MAX_BYTES_SIZE = 1000000; // 1MB = 1 millón de bytes

    if (event.target.files.length <= 0) return;

    const file = event.target.files[0];
    const supportedImages = ["image/jpeg", "image/png", "image/jpg"];

    let incorrectFormatMsj;
    if (supportedImages.indexOf(file.type) == -1) {
        incorrectFormatMsj = "<br> <br> Formatos aceptados .jpeg / .png / .jpg"
    }

    if (file.size > MAX_BYTES_SIZE && supportedImages.indexOf(file.type) == -1) {
        const mbSize = MAX_BYTES_SIZE / 1000000;
        swal.fire({
            html: `El tamaño máximo es ${mbSize} MB. ${incorrectFormatMsj}`,
            timer:"1500", 
            position: "bottom",
            customClass : {
            container: "add-to-cart-alert-container",
            popup:"add-to-cart-alert",
            }
        })
        element.value = "";
    } else {
        createPreview(file, index)
    }
  }

  function saveSliderImgs (){
    let allImages = [];
    sliderImgArray.forEach((item,index)=>{
      allImages.push({
        position: index+1,
        file: document.querySelector(`#backofice-settings-slider-imagen-editor-${index}`).files[0]
      })
    })
    console.log(allImages)
  }

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

            <div className="col-12 col-xl-12">
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
                    <div className="col-12 d-flex justify-content-start border-bottom">
                      <span className="fw-bold fs-2 font-h1"> Slider principal </span>
                    </div>

                    
                    {/* <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                            className="d-block w-100"
                            alt="Wild Landscape"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                            className="d-block w-100"
                            alt="Camera"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                            className="d-block w-100"
                            alt="Exotic Fruits"
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-mdb-target="#carouselExampleControls"
                        data-mdb-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-mdb-target="#carouselExampleControls"
                        data-mdb-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div> */}



                      {sliderImgArray.map((img, index)=>
                    // console.log(urlImg(img).default)
                    
                      <div className="d-flex justify-content-center mb-1 col-xl-12 mb-3 text-darx fs-1 row" key={index} >
                        <div className="col-12 col-xl-12 mb-3 border-bottom">
                          <span className="fw-bold fs-4 font-h1">Imagen {index+1}</span>
                        </div>
                        <div className="col-12 mb-3">
                          <div style={{ backgroundImage: `url(${urlImg(img).default})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            paddingTop:"23.7%",
                            width:"100%",
                            borderRadius:"10px",
                            border:"solid 2px #000"}}
                            id={`backofice-settings-slider-imagen-editor-viewer-${index}`}
                          className="img-responsive w-100"
                          onClick={()=>document.getElementById(`backofice-settings-slider-imagen-editor-${index}`).click()}>
                              <div id="backofice-settings-slider-imagen-editor-viewer-overlay" style={{
                                  opacity:"0.8",
                                  backgroundColor:"#00000000 !important",
                                  height: "100%",
                                  width:"100%",
                                  display: "flex",
                                  alignItems: "flex-end",
                                  justifyContent: "center"}}>
                                  <i class="bi bi-plus-circle-fill fs-4"></i>
                              </div>

                          </div>
                        </div>

                        <div>
                          <input type="file" accept="image/png, image/jpeg, image/jpg" className="form-control w-100" 
                            id={`backofice-settings-slider-imagen-editor-${index}`} onChange={(e)=>validateSizeFile(e,index)} style={{display:"none"}}/>
                        
                        </div>
                      </div>
                    )}


                     
                     

                    
                  </div>
                
                </div>

                  <div className="col-12 col-xl-12 d-flex justify-content-end">
                    <button className="btn btn-orangeWeb" onClick={()=>saveSliderImgs()}>Guardar Cambios</button>
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
  
  