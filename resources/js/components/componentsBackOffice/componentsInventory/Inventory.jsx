import React from "react";
import ReactDOM from "react-dom";
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

const Inventory = () =>{

    const [inventoryState, dispatch] = useReducer(backofficeInventoryReducer,ProductsData);
    const {allProducts, allCategories, filteredBysearch,newProductSqueleton} = inventoryState;

    const saveProductConfig = backofficeInventoryMapDispatch(dispatch).saveProductConfig;
    const filterProducts =backofficeInventoryMapDispatch(dispatch).filterProducts;
    const saveCategoryConfig = backofficeInventoryMapDispatch(dispatch).saveCategoryConfig;
    const createNewCategory = backofficeInventoryMapDispatch(dispatch).createNewCategory;

  
   
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

          <ProductsDashboard allProducts={allProducts} allCategories={allCategories}
          saveProductConfig={saveProductConfig}  filteredBysearch={filteredBysearch}
          filterProducts={filterProducts} newProductSqueleton={newProductSqueleton}/>

           <CategoriesDashboard allCategories={allCategories} saveCategoryConfig={saveCategoryConfig} createNewCategory={createNewCategory}/>
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
  
  