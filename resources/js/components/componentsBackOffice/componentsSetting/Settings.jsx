import React from "react";
import ReactDOM from "react-dom";

import { ITEM_IMG } from '../../../constants/constImg';
import Carrousel from "./Carrousel";
import { useEffect } from "react";
import { ShowCustomer, ShowGlobalImg, UpdateCustomer, UpdateGlobalImg } from "../../../helpers/CustomerHelpers";
import { useState } from "react";


const Settings = () => {

  const [allImg, setAllImg] = useState(null);
  const [allData, setAllData] = useState(null);

  async function saveSettingValue() {

    let name = document.getElementById("form-data-name");
    let phone = document.getElementById("form-data-phone");
    let email = document.getElementById("form-data-email");
    let direction = document.getElementById("form-data-direction");
    let information = document.getElementById("form-data-information");
    let terms = document.getElementById("form-data-terms");

    let instagram = document.getElementById("form-data-instagram");
    let facebook = document.getElementById("form-data-facebook");

    let valueFacebook;
    let valueInstagram;

    facebook.value != ""? valueFacebook = facebook.value : valueFacebook = allData[0].social_networks.facebook
    instagram.value != ""? valueInstagram = instagram.value : valueInstagram = allData[0].social_networks.instagram

    let redesJson = JSON.stringify({
      facebook: valueFacebook,
      instagram: valueInstagram
    });

    let formData = new FormData();

    formData.append('id', 1);
    formData.append('social_networks', redesJson);

    name.value != "" ? formData.append("name", name.value) : ""
    phone.value != "" ? formData.append("phone", phone.value) : ""
    email.value != "" ? formData.append("email", email.value) : ""
    direction.value != "" ? formData.append("direction", direction.value) : ""
    information.value != "" ? formData.append("information", information.value) : ""
    terms.value != "" ? formData.append("terms", terms.value) : ""

    let response = await UpdateCustomer(formData);

  }


  async function saveSliderImgs() {
    let allImages = [];
    let i = 1;

    allImg.forEach((item, index) => {
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
  }, [])

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
                <input
                  type="text"
                  className="form-control fs-8"
                  id="form-data-name"
                  placeholder={
                    !allData ?
                      "Nombre"
                      :
                      allData[0].name
                  }
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i class="bi bi-person"></i></span>
              </div>
            </div>

            <div className="col-12 col-xl-6 mb-3">
              <div className="input-group">
                <input 
                type="text" 
                className="form-control fs-8" 
                id="form-data-direction" 
                placeholder={
                  !allData?

                  "Direccion"

                  :

                  allData[0].direction

                } 
                aria-label="Recipient's username"
                aria-describedby="basic-addon2" 
                />
                <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i class="bi bi-geo-alt"></i></span>
              </div>
            </div>

            <div className="col-12 col-xl-6 mb-3">
              <div className="input-group">
                <input type="text" className="form-control fs-8" id="form-data-phone" 
                placeholder={
                  !allData?

                  "Telefono"

                  :

                  allData[0].phone

                }  
                aria-label="Recipient's username"
                aria-describedby="basic-addon2" />
                <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i class="bi bi-telephone"></i></span>
              </div>
            </div>

            <div className="col-12 col-xl-6 mb-3">
              <div className="input-group">
                <input type="text" className="form-control fs-8" id="form-data-email" 
                placeholder={
                  !allData?

                  "Correo"

                  :

                  allData[0].email

                } 
                aria-label="Recipient's username"
                aria-describedby="basic-addon2" />
                <span className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"><i class="bi bi-envelope"></i></span>
              </div>
            </div>

            <div className="col-12 col-xl-12 mb-3">

              <div className="input-group">
                <textarea className="form-control" style={{height: "200px"}} id="form-data-information" aria-label="With textarea"
                placeholder={
                  !allData?

                  "Describe a tu empresa..."

                  :

                  allData[0].information

                } 
                >
                </textarea>
              </div>

            </div>

            <div className="col-12 col-xl-12 mb-3 border-bottom">
              <span className="fw-bold fs-4 font-h1"> Redacte los terminos y condiciones de tu web </span>
            </div>

            <div className="col-12 col-xl-12 mb-3">

              <div className="input-group">
                <textarea className="form-control" style={{height: "200px"}} id="form-data-terms" aria-label="With textarea"
                placeholder="Terminos y condiciones...">
                </textarea>
              </div>

              <div className="w-100 d-flex justify-content-end my-2">
                <a href="/termsAndConditions" target="a_blanck" className="btn btn-success">Ir a terminos y condiciones</a>
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

                  !allImg ?

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

