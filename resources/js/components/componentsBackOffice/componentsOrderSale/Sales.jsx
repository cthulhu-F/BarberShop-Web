import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../css/main.css';


import { useReducer,useState, useEffect } from "react";
import { orderSalesReducer, salesData } from "../../../../../src/reducers/backOfficeOrderSaleReducer";
import backofficeOrderSalesMapDispatch from "../../../backofficeOrderSaleUses";

import SaleListItem from "./SaleListItem";
import Pagination from "../componentsTurns/Pagination";

const Sales = () =>{

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  const yyyymin = parseInt(yyyy)-1;
  const yyyymax = parseInt(yyyy)+1;
  const minDate = yyyymin + '-' + mm + '-' + dd;
  const maxDte = yyyymax + '-' + mm + '-' + dd;

  const[orderSalesState, dispatch] = useReducer(orderSalesReducer,salesData);
  const{sales, dashboardSales} = orderSalesState;

  const setSaleStatus = backofficeOrderSalesMapDispatch(dispatch).setSaleStatus
  const filterDashboard = backofficeOrderSalesMapDispatch(dispatch).filterDashboard


  /* PAGINATION*/
    
  const [pagintaionSales, setSalesPagination] = useState(dashboardSales)
  const [currentPage, setCurrentPage] = useState(1)
  const [salesPerPage] = useState(2)
  
  useEffect(() => {
      const fetchSales = async () => {
      const res = await dashboardSales;
      setSalesPagination(res)
      }
      fetchSales();      
  }, [dashboardSales, sales])

  const indexOfLastSale = currentPage * salesPerPage;
  const indexOfFirstSale = indexOfLastSale - salesPerPage;
  const currentSales = pagintaionSales.slice(indexOfFirstSale, indexOfLastSale)
  const howManyPages = Math.ceil(pagintaionSales.length/salesPerPage)

      /* PAGINATION END*/
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
            <div className="col-12">
              <div className="row p-2 mb-3">
                <div className="col-12 p-0">
                  <div className="font-h1 fs-1 fw-bold">Orden de ventas</div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row rounded p-2 mb-3">
                <div className="col-12 col-xl-4 my-2 my-xl-0 p-0">
                  <div className="d-flex">
                    <input className="form-control p-2 me-2" type="search" id="inputSaleSearch" placeholder="Busca una orden de venta"
                      aria-label="Search" onChange={(e)=>filterDashboard(document.getElementById("inputDateIniFilterSales").value,document.getElementById("inputDateEndFilterSales").value,e.target.value)}/>
                    <button className="btn btn-black pt-0 pb-0 ps-2 pe-2" type="submit"><i className="bi bi-search"></i></button>
                  </div>
                </div>

                <div className="col-12 col-xl-2 p-0 mx-xl-2">
                  <input className="form-control p-2" id="inputDateIniFilterSales" type="date" name="trip-start"
                    onChange={(e)=>filterDashboard(e.target.value, document.getElementById("inputDateEndFilterSales").value, document.getElementById("inputSaleSearch").value)}
                    min={minDate} max={maxDte}/>
                  <label for="inputDateIniFilterSales" className="form-label text-muted fs-9">Fecha de inicio</label>
                </div>

                <div className="col-12 col-xl-2 p-0 mx-xl-2">
                  <input className="form-control p-2" id="inputDateEndFilterSales" type="date" name="trip-start" 
                    onChange={(e)=>filterDashboard(document.getElementById("inputDateIniFilterSales").value, e.target.value, document.getElementById("inputSaleSearch").value)}
                    min={minDate} max={maxDte}/>
                  <label for="inputDateEndFilterSales" className="form-label text-muted fs-9">Fecha de Fin</label>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-hover table-striped bg-white aling-middle">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Resumen</th>
                      <th scope="col">Total</th>
                      <th scope="col">Datos del cliente</th>
                      <th scope="col">Fecha</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                  {currentSales.map(sale=>
                    <SaleListItem key={sale.id} sale={sale} setSaleStatus={setSaleStatus}/>
                  )
                  }
                  </tbody>
                  <tfoot>
                    <tr>
                    <td className="" colspan="10">
                        <div className="d-flex justify-content-end">
                        <nav aria-label="Page navigation example m-0">
                            <Pagination setCurrentPage={setCurrentPage} pages={howManyPages}/>

                        </nav>
                        </div>
                    </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

          </div>

        </div>

    );
}

export default Sales

if( document.getElementById("sales")){
    ReactDOM.render(
      <React.StrictMode>
        <Sales />
      </React.StrictMode>,
      document.getElementById("sales")
    );
  }
  
  