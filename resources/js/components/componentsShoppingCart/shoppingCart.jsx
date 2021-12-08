import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';


const ShoppingCart = () => {

  return(

    <div className="row g-3">

    <div className="col-12 mb-3">
      <span className="fs-3 font-h1">Mi carrito</span>
    </div>

    <div className="col-12 col-xl-8">
      <div className="row font-h1 fw-bold my-2 d-none d-xl-flex justify-content-left">
        <div className="col-1"></div>
        <div className="col-3">PRODUCTO</div>
        <div className="col-3">CANTIDAD</div>
        <div className="col-2">PRECIO</div>
        <div className="col-2">SUBTOTAL</div>
        <div className="col-1"></div>
      </div>

    <div className="row g-2 g-xl-3 my-1 py-2 border-0 border-bottom">
          <div className="col-6 col-xl-1">
            <div className="d-flex" style={{height: "50px"}}>
            </div>
          </div>

          <div className="col-6 col-xl-3">
            <div className="d-block fs-7">
              Producto 1
            </div>
            <div className="d-block fs-7 text-muted">
              Descripcion afas safasfasfasfsaa as afsf  fasfasfasf
            </div>
          </div>

          <div className="col-12 col-xl-3">
                    <div className="d-flex">
                      <button className="btn btn-white border rounded-0 rounded-start fs-7 px-1 px-xl-3 fw-bold " style={{zIndex: "2"}}><i className="bi bi-dash"></i></button>
                    <input className="form-control border-0 border-top border-bottom rounded-0 bg-white text-center fs-7" placeholder="1" type="number" disabled/>
                    <button className="btn btn-white border rounded-0 rounded-end fs-7 px-1 px-xl-3 fw-bold" style={{zIndex: "2"}}><i className="bi bi-plus"></i></button>
                    </div>
          </div>


          <div className="col-6 col-xl-2"><span className="fs-7">$10.999999</span></div>
          <div className="col-5 col-xl-2"><span className="fs-7 fw-bold">$10.999999</span></div>
          <div className="col-1 col-xl-1 d-inline"><button className="btn btn-danger p-1 fs-7"><i className="bi bi-trash"></i></button></div>
        </div>


    </div>


    <div className="col-12 col-xl-4">
      <div className="row g-4">
        <div className="col-6 col-xl-4">
          <div className="">TOTAL</div>
        </div>
        <div className="col-6 col-xl-8">
          <div className="text-end"> $10.9999999</div>
        </div>
        <div className="col-6 col-xl-4">
          <div className="fw-bold">SUBTOTAL</div>
        </div>
        <div className="col-6 col-xl-8">
          <div className="text-end fw-bold"> $10.9999999</div>
        </div>
        <div className="col-12 col-xl-12">
          <div className="text-center border-0 border-bottom font-h1 fs-5">Seleccionar metodo de pago</div>
        </div>
        <div className="col-12">
          <button className="w-100 btn btn-orangeWeb">  Finalizar compra </button>
        </div>

      </div>
    </div>
  </div>

    );}

export default ShoppingCart

if (document.getElementById("shoppingCart")) {
    ReactDOM.render(
        <React.StrictMode>
            <ShoppingCart />
        </React.StrictMode>,
        document.getElementById("shoppingCart")
    );
  }