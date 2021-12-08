import React from "react";
import ReactDOM from "react-dom";
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
    <div className="row bg-white justify-content-evenly font-p">
    <div className="col-12 col-xl-6 p-2">
      <div className="row">
        <div className="col-xl-12">
          <div className="container-fluid text-start">
            <img 
            src={urlImg(products[0].img).default}
            className="img-thumbnail border-0"
            style={{borderRadius: "20px"}}
            alt=""
            />
          </div>
        </div>
        <div className="col-xl-12">
         <div className="container-fluid">
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item border-0 bg-light  p-1 text-center mx-0" style={{width: "80px", height: "80px"}}>
                
            </li>
            <li className="list-group-item border-0 bg-light  p-1 text-center mx-0" style={{width: "80px", height: "80px"}}>
              
            </li>
            <li className="list-group-item border-0 bg-light  p-1 text-center mx-0" style={{width: "80px", height: "80px"}}>
              
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
            <span className="text-muted fs-6">SKU: 123456789</span>
          </li>
          <li className="list-group-item border-0">
            <span className="text-dark fw-bold fs-3">${products[0].price}</span>
          </li>
          <li className="list-group-item border-0">
            <ul className="list-group list-group-horizontal border-0 border-top border-bottom py-4">
              <Counter></Counter>
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





