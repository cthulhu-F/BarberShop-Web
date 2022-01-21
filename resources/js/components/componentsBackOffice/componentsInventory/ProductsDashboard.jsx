import React from "react";
import { useEffect, useState } from "react";
import Pagination from "../componentsTurns/Pagination";

import ModalProductSettings from "./ModalProductSettings";
import ModalProductEditor from "./ModalProductEditor";
import LoadTable from "../../componentsLoaders/LoadTable";
import LoadTablePagination from "../../componentsLoaders/LoadTablePagination";

const ProductsDashboard = ({ allProducts, allCategories, saveProductConfig, filteredBysearch, filterProductsAll, newProductSqueleton }) => {

  const ColumnTitleStyle = {
    overflowWrap: "break-word",
    width: "100px",
  }

  const urlImg = require.context('../../../../asset/product', true);

  /* PAGINATION*/

  const [paginationProducts, setProductsPagination] = useState(allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(15);

  let indexOfLastProduct;
  let indexOfFirstProduct;
  let currentProducts;
  let howManyPages;



  if (allProducts) {

    indexOfLastProduct = currentPage * productsPerPage;
    indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    howManyPages = Math.ceil(allProducts.length / productsPerPage)

  }

  /* PAGINATION END*/


  function checkproductStatus(productid) {
    const parent = document.getElementById(`modalProductSettings${productid}`)
    const switcher = parent.querySelector("#product-inhabilitator");
    const product = allProducts.find(product => product.id == productid)
    if (product.status == "INACTIVE") {
      switcher.checked = true;
      switcher.setAttribute("aria-checked", "true")
    }
    if (product.status == "ACTIVE") {
      try {
        switcher.checked = false;
        switcher.setAttribute("aria-checked", "false")
      } catch (error) { }
    }
  }

  function setDefaultCategory(productid, categoryId) {
    const parent = document.getElementById(`modalProductEditor${productid}`)
    const selector = parent.querySelector("#backofice-product-category-editor");
    selector.value = selector.querySelector(`[id='${categoryId}']`).value;
  }

  function getCategoryId(name) {
    return name != "Todas las categorías" ? allCategories.find(category => category.name == name).id : -1
  }

  const [selectProduct, setSelectProduct] = useState([]);

  function selectProductSetting(id, event) {
    let arrayProduct = selectProduct;

    if (event.target.checked) {
      arrayProduct = [...arrayProduct, id];
      setSelectProduct(arrayProduct.splice(" "));
    } else {
      let deleteArray = arrayProduct.filter(function(product) {
        return id !== product;
      })
      setSelectProduct(deleteArray);
    }
  }

  return (
    <div>
      <div className="col-12">
        <div className="row p-2 mb-3">
          <div className="col-12 p-0">
            <div className="font-h1 fs-1 fw-bold">Inventario</div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="row rounded p-2 mb-3">
          <div className="col-12 col-xl-4 my-2 p-0">


            {
              !allProducts ?

                ""

                :

                <div className="d-flex">

                  <input className="form-control p-2 me-2" type="search" placeholder="Busca tu producto"
                    aria-label="Search" onChange={(e) => filterProductsAll(e.target.value, getCategoryId(document.getElementById("backofice-product-category-filter").value))}
                    id="backofice-product-text-filter" />
                  <button className="btn btn-black p-2" type="submit"><i className="bi bi-search"></i></button>


                </div>

            }


          </div>
          <div className=" col-xl-6 mb-3 my-2">

            {
              !allProducts ?

                ""

                :

                <select className="w-50 form-select p-2" id="backofice-product-category-filter" onChange={
                  (e) => filterProductsAll(document.getElementById("backofice-product-text-filter").value, getCategoryId(e.target.value))
                }>
                  <option key="-1" id="-1" selected>Todas las categorías</option>
                  {allCategories.map(category =>
                    <option key={category.id} id={category.id} > {category.name}</option>
                  )}

                </select>

            }

          </div>

          <div className="col-12 col-xl-2 my-2 p-0">

            {
              !allProducts ?

                ""

                :

                <div className="text-center d-xl-flex justify-content-end">
                  <button className="btn btn-black w-100 p-2" data-bs-toggle="modal" data-bs-target={`#modalProductEditor${newProductSqueleton.id}`}>
                    Agregar producto
                  </button>
                </div>

            }

          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="row  p-1 mb-3">
          <div className="col-12 p-0">

            <div className="table-responsive">
              <table className="table table-hover table-striped bg-white">
                <thead className="font-h1 aling-middle">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col"></th>
                    <th scope="col">Nombre</th>
                    <th scope="col">SKU</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Precio</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody className="font-p aling-middle">

                  {
                    !allProducts ?

                      <LoadTable td={9} />

                      :

                      currentProducts.map((product) =>
                        <tr>
                          <th scope="row">{product.id}</th>
                          <td>
                            <div className="d-flex " style={{ height: "50px", }}>
                              <img
                                src={urlImg(product.img).default}
                                className="rounded"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <div style={ColumnTitleStyle}> {product.name} </div>
                          </td>
                          <td>
                            <div style={ColumnTitleStyle}> {product.sku} </div>
                          </td>
                          <td>
                            <div style={ColumnTitleStyle}> {product.description}</div>
                          </td>
                          <td>
                            <div style={ColumnTitleStyle}> {allCategories.find(category => category.id == product.categories_id).name} </div>
                          </td>
                          <td>
                            <div style={ColumnTitleStyle}> {product.stock} </div>
                          </td>
                          <td>
                            <div style={ColumnTitleStyle}> {product.price}  </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <button className="btn btn-outline-success p-1 me-1" data-bs-toggle="modal"
                                data-bs-target={`#modalProductEditor${product.id}`} onClick={() => { setDefaultCategory(product.id), product.categories_id }}><i className="bi bi-pencil fs-7"></i></button>
                              <button className="btn btn-outline-danger  p-1 me-1" data-bs-toggle="modal"
                                data-bs-target={`#modalProductSettings${product.id}`} onClick={() => checkproductStatus(product.id)}><i className="bi bi-gear"></i></button>
                            </div>
                          </td>

                          <td>
                            {
                              product.status == "ACTIVE"
                                ?
                                <div className="text-success fs-3 d-flex justify-content-center" title="ACTIVO">
                                  <i className="bi bi-check-circle-fill"></i>
                                </div>
                                :
                                <div className="text-danger fs-3 d-flex justify-content-center" title="INACTIVO">
                                  <i class="bi bi-x-circle-fill"></i>
                                </div>
                            }

                          </td>

                          <td>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={(event) => selectProductSetting(product.id, event)} />
                              <label class="form-check-label" for="flexCheckDefault">
                              </label>
                            </div>
                          </td>

                          <ModalProductSettings key={product.id + "setting"} editableProduct={product} saveProductConfig={saveProductConfig} selectProduct={selectProduct} />
                          <ModalProductEditor key={product.id + "editor"} editableProduct={product} saveProductConfig={saveProductConfig} allCategories={allCategories} selectProduct={selectProduct} />

                        </tr>

                      )
                  }


                  {
                    !allProducts ?

                      ""

                      :

                      <ModalProductEditor key={newProductSqueleton.id} editableProduct={newProductSqueleton} saveProductConfig={saveProductConfig} allCategories={allCategories} newProduct={true} />

                  }




                </tbody>
                <tfoot>
                  {
                    !allProducts ?

                      <LoadTablePagination colspan={11} />

                      :

                      <tr>
                        <td className="" colspan="11">
                          <div className="d-flex justify-content-end">
                            <nav aria-label="Page navigation example m-0">
                              <Pagination setCurrentPage={setCurrentPage} pages={howManyPages} />
                            </nav>
                          </div>
                        </td>
                      </tr>

                  }

                </tfoot>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductsDashboard