import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../css/main.css';

import ProductsDashboard from "./ProductsDashboard";
import CategoriesDashboard from "./CategoriesDashboard";

const ColumnTitleStyle ={
  overflowWrap: "break-word",
   width: "100px",
}

import { backofficeInventoryReducer, ProductsData } from "../../../../../src/reducers/backOfficeInventoryReducer";
import backofficeInventoryMapDispatch from "../../../backOfficeInventoryUses";
import { useReducer } from "react";
import { ShowAllProducts, ShowAllCategories } from "../../../helpers/ItemHelpers";

const Inventory = () =>{

    const [inventoryState, dispatch] = useReducer(backofficeInventoryReducer,ProductsData);
    const {allProducts, allCategories, filteredBysearch,newProductSqueleton} = inventoryState;

    const readAllData = backofficeInventoryMapDispatch(dispatch).readAllData;
    const saveProductConfig = backofficeInventoryMapDispatch(dispatch).saveProductConfig;
    const filterProducts =backofficeInventoryMapDispatch(dispatch).filterProducts;
    const saveCategoryConfig = backofficeInventoryMapDispatch(dispatch).saveCategoryConfig;
    const createNewCategory = backofficeInventoryMapDispatch(dispatch).createNewCategory;

    function filterProductsAll(value, categorie){

    let filteredProducts = allProducts.filter(
        function (product) {
            const id = toString(product.id)
            const name = product.name
            const sku = toString(product.sku)
            const description = product.description
            const price = toString(product.price)
            const created_at = toString(product.created_at)
            const updated_at = toString(product.updated_at)
            const search = (id + " " + name + " " + sku + " " + description + " " + price + " " + created_at + " " + updated_at).toUpperCase()
            const stringsearched = value.toUpperCase()
            return search.indexOf(stringsearched) > -1
      })
      
      if (categorie > 0) {
        filteredProducts = filteredProducts.filter(product => product.categories_id == categorie)
      }

      setAllData({
          allProducts: filteredProducts,
          allCategories: allCategories
      })   
      
    }

    const[allData, setAllData] = useState({
      filterData: filteredBysearch,
      allProducts: allProducts,
      allCategories: allCategories
    });

    useEffect(() => {
      const fetch = async () => {
      const dataProducts = await ShowAllProducts();
      const dataCategories = await ShowAllCategories();
      

      readAllData(dataProducts, dataCategories);


      setAllData({
          allProducts: dataProducts,
          allCategories: dataCategories
      })  
      //const res = await filteredBysearch;
      //setProductsPagination(dataProducts)
      }
      fetch();      
    },[])
  
   
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

          <ProductsDashboard allProducts={allData.allProducts} allCategories={allData.allCategories}
          saveProductConfig={saveProductConfig}  filteredBysearch={allData.filterData}
          filterProductsAll={filterProductsAll}  newProductSqueleton={newProductSqueleton} />

          <CategoriesDashboard allCategories={allData.allCategories} saveCategoryConfig={saveCategoryConfig} createNewCategory={createNewCategory}/>
          
          </div>
        </div>

    );
}

export default Inventory

if( document.getElementById("inventory")){
    ReactDOM.render(
      <React.StrictMode>
        <Inventory />
      </React.StrictMode>,
      document.getElementById("inventory")
    );
  }
  
  