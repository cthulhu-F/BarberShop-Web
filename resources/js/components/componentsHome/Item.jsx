import React from "react";
import ReactDOM from "react-dom";
import ItemProducts from './itemProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ITEM_PRODUCTS } from '../../constans/ConstItem';

import Counter from "../../counter";




const Item = () => {
  let URL = window.location.pathname;
  URL = URL.split('/');
  let URLproduct = URL[2];

  const urlImg = require.context('../../../asset/product', true);

  let products = ITEM_PRODUCTS.products.filter(function (item) {
    const itemDataCut = String(item.id).toUpperCase();
    const textDataCut = String(URLproduct).toUpperCase();
    return itemDataCut.indexOf(textDataCut) > -1
  });


  return (
    <div className="container-fluid bg-light min-vh 100">
      <div className="container-md">

        <div className="row bg-white justify-content-evenly font-p">
          <div className="col-12 col-xl-6 p-2">
            <div className="row">
              <div className="col-xl-12">
                <div className="container-fluid text-start">
                  <img
                    src={urlImg(products[0].img).default}
                    className="img-thumbnail border-0"
                    style={{ borderRadius: "20px" }}
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-xl-12">
                <div className="container-fluid">
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item border-0 bg-light  p-1 text-center mx-0" >

                    </li>
                    <li className="list-group-item border-0 bg-light  p-1 text-center mx-0" >

                    </li>
                    <li className="list-group-item border-0 bg-light  p-1 text-center mx-0" >

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 p-1 bg-white">
            <div className="container-fluid">

              <ul className="list-group">
                <li className="list-group-item border-0 border-bottom font-h1">
                  <span className="fw-bold fs-3">{products[0].name}</span>
                </li>
                <li className="list-group-item border-0">
                  <div>
                    <span className="text-muted fs-5">
                    {products[0].description} </span>
                  </div>
                </li>
                <li className="list-group-item border-0">
                  <span className="text-muted fs-6">Stock: {products[0].stock} </span>
                </li>
                <li className="list-group-item border-0">
                  <span className="text-dark fw-bold fs-3">{products[0].price}</span>
                </li>
                <li className="list-group-item border-0">
                  <ul className="list-group list-group-horizontal border-0 border-top border-bottom py-4">
                    {/* <li className="list-group-item border-0 p-0 pe-1 w-50 d-flex">
                      <button className="btn btn-white border rounded-0 rounded-start fs-3 px-1 px-xl-3 fw-bold " style={{ zIndex: "2"}}><i className="bi bi-dash"></i></button>
                      <input className="form-control h-100 border-0 border-top border-bottom rounded-0 bg-white text-center fs-3" placeholder="1" type="number" disabled />
                      <button className="btn btn-white border rounded-0 rounded-end fs-3 px-1 px-xl-3 fw-bold" style={{zIndex: "2"}}><i className="bi bi-plus"></i></button>
                    </li> */}
                    <Counter></Counter>
                    {/* <li className="counter"></li> */}
                    <li className="list-group-item border-0  p-0 ps-1 w-50">
                      <button className="btn btn-dark h-100 w-100 fs-3"><i className="bi bi-cart-plus"></i></button>
                    </li>
                  </ul>
                </li>
                <li className="list-group-item border-0">
                  <ul className="list-group list-group-horizontal border-0 py-1">
                    <li className="list-group-item border-0 p-0 pe-1">
                      <button className="btn fs-4 p-0 m-0"><i className="bi bi-facebook"></i></button>
                    </li>
                    <li className="list-group-item border-0 p-0 pe-1">
                      <button className="btn fs-4 p-0 m-0"><i className="bi bi-instagram"></i></button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-xl-12 mt-2 bg-light">
            <div className="row row-cols-xl-4 row-cols-2">

              <div className="col-12 col-xl-12 p-2 my-2 d-flex justify-content-xl-start justify-content-center">
                <span className="fw-bold fs-3 font-h1">Productos relacionados</span>
              </div>

              {products.map((item) => <ItemProducts key={item.id} data={item} />)}

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Item;

if (document.getElementById("item")) {
  ReactDOM.render(
      <React.StrictMode>
          <Item/>
      </React.StrictMode>,
      document.getElementById("item")
  );
}





