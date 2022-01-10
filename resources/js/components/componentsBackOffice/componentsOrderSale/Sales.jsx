import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../css/main.css';


import { useReducer, useState, useEffect } from "react";
import { orderSalesReducer, salesData } from "../../../../../src/reducers/backOfficeOrderSaleReducer";
import backofficeOrderSalesMapDispatch from "../../../backofficeOrderSaleUses";

import SaleListItem from "./SaleListItem";
import Pagination from "../componentsTurns/Pagination";
import { ShowOrderSale } from "../../../helpers/SaleHelpers";

import LoadTable from "../../componentsLoaders/LoadTable";
import LoadTablePagination from "../../componentsLoaders/LoadTablePagination";

const Sales = () => {

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  const yyyymin = parseInt(yyyy) - 1;
  const yyyymax = parseInt(yyyy) + 1;
  const minDate = yyyymin + '-' + mm + '-' + dd;
  const maxDte = yyyymax + '-' + mm + '-' + dd;

  const [orderSalesState, dispatch] = useReducer(orderSalesReducer, salesData);
  const { sales, dashboardSales } = orderSalesState;

  const readAllData = backofficeOrderSalesMapDispatch(dispatch).readAllData;
  const setSaleStatus = backofficeOrderSalesMapDispatch(dispatch).setSaleStatus;
  const filterDashboard = backofficeOrderSalesMapDispatch(dispatch).filterDashboard;


  function filter(min, max, searchValue) {

    const dateMin = min.split('-');
    const dateYyyy = dateMin[0];
    const dateMm = dateMin[1];
    const dateDd = dateMin[2];
    const compartaiveMin = parseInt(dateYyyy + dateMm + dateDd);

    const dateMax = max.split('-');
    const dateYyyyMax = dateMax[0];
    const dateMmMax = dateMax[1];
    const dateDdMax = dateMax[2];
    const compartaiveMax = parseInt(dateYyyyMax + dateMmMax + dateDdMax);

    let filteredByName;


    let FilteredBydate = sales.filter(sale =>
      parseInt(sale.created_at.split('-')[2] + sale.created_at.split('-')[1] + sale.created_at.split('-')[0]) >= compartaiveMin &&
      parseInt(sale.created_at.split('-')[2] + sale.created_at.split('-')[1] + sale.created_at.split('-')[0]) <= compartaiveMax
    );

    console.log(FilteredBydate.length);

    if (searchValue != "") {

      if (FilteredBydate.length != 0) {

        filteredByName = FilteredBydate.filter(
          function (sale) {
            const id = toString(sale.id)
            const name_item = sale.resumen[0].name_item;
            const description = sale.description
            const name_client = sale.dataClient.name_client;
            const email_client = sale.dataClient.email_client;
            const phone_client = sale.dataClient.phone_client;
            const search = (id + " " + name_item + " " + description + " " + name_client + " " + email_client + " " + phone_client).toUpperCase()
            const stringsearched = searchValue.toUpperCase()
            return search.indexOf(stringsearched) > -1
          })
        } else {

          filteredByName = sales.filter(
            function (sale) {
              const id = toString(sale.id)
              const name_item = sale.resumen.name_item;
              const description = sale.description
              const name_client = sale.dataClient.name_client;
              const email_client = sale.dataClient.email_client;
              const phone_client = sale.dataClient.phone_client;
              const search = (id + " " + name_item + " " + description + " " + name_client + " " + email_client + " " + phone_client).toUpperCase()
              const stringsearched = searchValue.toUpperCase()
              return search.indexOf(stringsearched) > -1
            })

        }

      } else {

        filteredByName = FilteredBydate


      }

      console.log("Resultado");
      console.log(filteredByName);

      setSalesPagination(filteredByName);

    }


    /* PAGINATION*/

    const [pagintaionSales, setSalesPagination] = useState(dashboardSales)
    const [currentPage, setCurrentPage] = useState(1)
    const [salesPerPage] = useState(10)

    let indexOfLastSale
    let indexOfFirstSale
    let currentSales
    let howManyPages

    if (sales) {

      indexOfLastSale = currentPage * salesPerPage;
      indexOfFirstSale = indexOfLastSale - salesPerPage;
      currentSales = pagintaionSales.slice(indexOfFirstSale, indexOfLastSale)
      howManyPages = Math.ceil(pagintaionSales.length / salesPerPage)

    }

    /* PAGINATION END*/

    useEffect(() => {
      const fetch = async () => {
        const data = await ShowOrderSale()

        console.log(data);
        readAllData(data);
        setSalesPagination(data);
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
                <div className="font-h1 fs-1 fw-bold">Orden de ventas</div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="row rounded p-2 mb-3">
              <div className="col-12 col-xl-4 my-2 my-xl-0 p-0">
                <div className="d-flex">
                  <input className="form-control p-2 me-2" type="search" id="inputSaleSearch" placeholder="Busca una orden de venta"
                    aria-label="Search" onChange={(e) => filter(document.getElementById("inputDateIniFilterSales").value, document.getElementById("inputDateEndFilterSales").value, e.target.value)} />
                  <button className="btn btn-black pt-0 pb-0 ps-2 pe-2" type="submit"><i className="bi bi-search"></i></button>
                </div>
              </div>

              <div className="col-12 col-xl-2 p-0 mx-xl-2">
                <input className="form-control p-2" id="inputDateIniFilterSales" type="date" name="trip-start"
                  onChange={(e) => filterDashboard(e.target.value, document.getElementById("inputDateEndFilterSales").value, document.getElementById("inputSaleSearch").value)}
                  min={minDate} max={maxDte} />
                <label for="inputDateIniFilterSales" className="form-label text-muted fs-9">Fecha de inicio</label>
              </div>

              <div className="col-12 col-xl-2 p-0 mx-xl-2">
                <input className="form-control p-2" id="inputDateEndFilterSales" type="date" name="trip-start"
                  onChange={(e) => filterDashboard(document.getElementById("inputDateIniFilterSales").value, e.target.value, document.getElementById("inputSaleSearch").value)}
                  min={minDate} max={maxDte} />
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
                  </tr>
                </thead>
                <tbody>
                  {
                    !sales ?

                      <LoadTable td={6} />

                      :

                      currentSales.map(sale =>
                        <SaleListItem key={sale.id} sale={sale} setSaleStatus={setSaleStatus} />
                      )

                  }
                </tbody>
                <tfoot>

                  {

                    !sales ?

                      <LoadTablePagination colspan={10} />

                      :

                      <tr>
                        <td className="" colspan="10">
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

    );
  }

  export default Sales

  if (document.getElementById("sales")) {
    ReactDOM.render(
      <React.StrictMode>
        <Sales />
      </React.StrictMode>,
      document.getElementById("sales")
    );
  }

