import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ITEM_PRODUCTS } from '../../constans/ConstItem';
import ShopItem from "./ShopItem";

const Shop = () => {

  const products = ITEM_PRODUCTS.products;

  console.log(products);

  return (
    <div className="container-fluid bg-light p-3 min-vh-100">
        <div className="container-md ">
    
          <div className="row row-cols-2 row-cols-xl-4 g-3 g-xl-5 font-p">
    
            <div className="col-12 col-xl-12 border-0">
              <div className="w-100 text-center fw-bold font-h1">
                {products.length} Resultados encontrados
              </div>
            </div>
    
            {products.map((item) => <ShopItem  key={item.id} data={item} />)}
    
          </div>
          </div>
        </div>
  );
}

export default Shop

if (document.getElementById("shop")) {
  ReactDOM.render(
      <React.StrictMode>
          <Shop />
      </React.StrictMode>,
      document.getElementById("shop")
  );
}




