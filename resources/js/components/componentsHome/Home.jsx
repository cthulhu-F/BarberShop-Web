import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemProducts from './itemProducts';
import { ITEM_PRODUCTS } from '../../constans/ConstItem';

const Home = () => {

  const products = ITEM_PRODUCTS.products;


  return (
    <div className="container-fluid bg-light p-2">
      <div className="container-md">

        <div className="row row-cols-2 row-cols-xl-4 g-3 g-xl-5 font-p">

        <div className="col-12 col-xl-12 d-flex justify-content-center ">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-dark" type="submit"><i className="bi bi-search"></i></button>
            <button className="btn btn-dark mx-2"><i className="bi bi-filter-left"></i></button>
          </form>
        </div>


        <div className="col-12 col-xl-12 border-0">
          <div className="w-100 text-center fw-bold font-h1">
            10 Resultados encontrados
          </div>
        </div>

        {products.map((item) => <ItemProducts key={item.id} data={item} />)}

        </div>
      </div>
    </div>
  );
}

export default Home




