import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../css/main.css';

import { ITEM_IMG } from '../../../constants/constImg';
import Carrousel from "./Carrousel";
import { useEffect } from "react";
import { ShowCustomer, ShowGlobalImg, UpdateGlobalImg } from "../../../helpers/CustomerHelpers";
import { useState } from "react";


const Settings = () => {

  const [allImg, setAllImg] = useState(null);
  const [allData, setAllData] = useState(null);

  async function saveSettingValue() {
    
    let name = document.getElementById("form-data-instagram");
    let phone = document.getElementById("form-data-instagram");
    let email = document.getElementById("form-data-instagram");
    let direction = document.getElementById("form-data-instagram");

    let instagram = document.getElementById("form-data-instagram");
    let facebook = document.getElementById("form-data-facebook");

    let formData = new FormData();

    
    

  }


  async function saveSliderImgs() {
    let allImages = [];
    let i = 1;

    sliderImgArray.forEach((item, index) => {
      allImages.push({
        //position: index+1,
        name: "slider_" + i++,
        file: document.getElementById(`backofice-settings-slider-imagen-editor-${index}`).files[0]
      })
    })

    let response = await UpdateGlobalImg(allImages);

  }

  useEffect(() => {
    async function fetch() {
      const data = await ShowCustomer();
      const img = await ShowGlobalImg();

      setAllImg(img);
      setAllData(data);
    }
    fetch();
  },[])

  return (

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
                <input type="text" className="form-control fs-8" id="form-data-name" placeholder="Nombre" aria-label="Recipient's username"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i
                  className="bi bi-grid"></i></span>
              </div>
            </div>

            <div className="col-12 col-xl-6 mb-3">
              <div className="input-group">
                <input type="text" className="form-control fs-8" id="form-data-direction" placeholder="Direccion" aria-label="Recipient's username"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i
                  className="bi bi-grid"></i></span>
              </div>
            </div>

            <div className="col-12 col-xl-6 mb-3">
              <div className="input-group">
                <input type="text" className="form-control fs-8" id="form-data-phone"  placeholder="Telefono" aria-label="Recipient's username"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i
                  className="bi bi-grid"></i></span>
              </div>
            </div>

            <div className="col-12 col-xl-6 mb-3">
              <div className="input-group">
                <input type="text" className="form-control fs-8" id="form-data-email" placeholder="Correo" aria-label="Recipient's username"
                  aria-describedby="basic-addon2" />
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
                <input type="text" className="form-control fs-8" id="form-data-facebook" placeholder="Facebook" aria-label="Recipient's username"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i
                  className="bi bi-grid"></i></span>
              </div>
            </div>

            <div className="col-12 col-xl-6 mb-3">
              <div className="input-group">
                <input type="text" className="form-control fs-8" id="form-data-instagram" placeholder="Instagram" aria-label="Recipient's username"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i
                  className="bi bi-grid"></i></span>
              </div>
            </div>

            <div className="col-12 col-xl-12 d-flex justify-content-end">
              <button className="btn btn-orangeWeb" onClick={() => saveSettingValue()}>Guardar</button>
            </div>

            <div className="col-12 col-xl-12 mb-3">


              <div className="row g-2">
                <div className="col-12 d-flex justify-content-start border-bottom">
                  <span className="fw-bold fs-2 font-h1"> Slider principal </span>
                </div>

                {

                  !allImg?

                  ""

                  :

                  <Carrousel img={allImg} />

                }

              </div>

            </div>

            <div className="col-12 col-xl-12 d-flex justify-content-end">
              <button className="btn btn-orangeWeb" onClick={() => saveSliderImgs()}>Guardar Cambios</button>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Settings

if (document.getElementById("settings")) {
  ReactDOM.render(
    <React.StrictMode>
      <Settings />
    </React.StrictMode>,
    document.getElementById("settings")
  );
}

