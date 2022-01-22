import React from "react";

import ModalSaleData from "./ModalSaleData";
import ModalSaleSettings from "./ModalSaleSettings";

const SaleListItem = ({ sale, setSaleStatus, selectItem, selectItemTable }) => {

    const setCurrentStatus = (saleStatus, saleId) => {
        let parent = document.getElementById(`modalSaleSettings${saleId}`)
        let selectorDefault = parent.querySelector("#set-sale-status-by-input");

        selectorDefault.value = selectorDefault.querySelector(`#${saleStatus}`).value;
    }

    return (
        <tr>
            <th scope="row">{sale.id}</th>
            <td><button className="btn btn-black" data-bs-toggle="modal" data-bs-target={`#saleResumenModal${sale.id}`}>Desplegar</button></td>
            <td>
                <div style={{ overflowWrap: "break-word", width: "150px" }}> {sale.total} </div>
            </td>
            <td><button className="btn btn-black" data-bs-toggle="modal" data-bs-target={`#modalSaleDataClient${sale.id}`}>Desplegar</button></td>

            <td>{sale.created_at.split('-')[0] + "-" + sale.created_at.split('-')[1] + "-" + sale.created_at.split('-')[2]}</td>
            <td>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-danger  p-1 me-1" data-bs-toggle="modal" data-bs-target={`#modalSaleSettings${sale.id}`} onClick={() => setCurrentStatus(sale.status, sale.id)}><i className="bi bi-gear"></i></button>
                </div>
            </td>
            <td>
                {
                    sale.status == "COMPLETED"
                        ?
                        <div className="text-success fs-3 d-flex justify-content-center" title="CONFIRMADO">
                            <i className="bi bi-check-circle-fill"></i>
                        </div>
                        : sale.status == "INACTIVE"
                            ?
                            <div className="text-danger fs-3 d-flex justify-content-center" title="INACTIVO">
                                <i class="bi bi-x-circle-fill"></i>
                            </div>
                            :
                            <div className="text-secondary fs-3 d-flex justify-content-center" title="ACTIVO">
                                <i class="bi bi-dash-circle-fill"></i>
                            </div>
                }

            </td>

            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={(event) => selectItem(sale.id, event)} />
                    <label class="form-check-label" for="flexCheckDefault">
                    </label>
                </div>
            </td>


            <div className="modal fade" id={`modalSaleDataClient${sale.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="modalDataClientLabel" aria-hidden="true">
                <div className="modal-dialog modal-gl">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title font-h1 fw-bold fs-5 pt-2 pb-2">Datos de {sale.dataClient.name_client}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>

                        <div className="modal-body">

                            <div className="d-block bg-white px-2 py-3 border-0 rounded container">

                                <div className="input-group mb-1 row">
                                    <span className="input-group-text bg-black text-white border border-black col-1" id="basic-addon1"><i
                                        className="bi bi-person"></i></span>
                                    <button type="button" class="btn btn-light col-11">{sale.dataClient.name_client}</button>
                                </div>


                                <div className="input-group mb-1 row">
                                    <span className="input-group-text bg-black text-white border border-black col-1" id="basic-addon1">
                                        <i className="bi bi-telephone"></i>
                                    </span>
                                    <button type="button" class="btn btn-light col-11">{sale.dataClient.phone_client}</button>
                                </div>

                                <div className="input-group mb-1 row">
                                    <span className="input-group-text bg-black text-white border border-black col-1" id="basic-addon1"><i
                                        className="bi bi-envelope"></i></span>
                                    <button type="button" class="btn btn-light col-11">{sale.dataClient.email_client}</button>
                                </div>


                            </div>

                        </div>

                        <div className="modal-footer justify-content-between">
                            <a className="col-3" href={`tel:${sale.phone_client}`} style={{ color: "#fff", fontWeight: "600", textDecoration: "inherit" }} >
                                <span className="input-group-text bg-black text-white border border-black" id="basic-addon1">
                                    Llamar
                                </span>
                            </a>
                            <button type="button col-3" className="btn btn-dark" data-bs-dismiss="modal">Ok</button>
                        </div>
                    </div>
                </div>
            </div>

            <ModalSaleData key={sale.id} sale={sale} />
            <ModalSaleSettings key={sale.id} sale={sale} setSaleStatus={setSaleStatus} selectItemTable={selectItemTable} />

        </tr>

    );
}

export default SaleListItem