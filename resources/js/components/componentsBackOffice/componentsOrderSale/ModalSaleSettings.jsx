import React from "react";

import swal from "sweetalert2";
import { UpdateOrderSale } from "../../../helpers/SaleHelpers";


const ModalSaleSettings = ({sale,setSaleStatus}) =>{

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var yyyymax = parseInt(yyyy)+1;
    var minDate = yyyy + '-' + mm + '-' + dd;
    var maxDte = yyyymax + '-' + mm + '-' + dd;


    const setNewStatusConfirmed = (sale) =>{
        const parent = document.getElementById(`modalSaleSettings${sale.id}`)
        const childSelector = parent.querySelector("#set-sale-status-by-input")
        let selectedKey = childSelector.options[childSelector.selectedIndex].id

        let previousState = childSelector.querySelector(`#${sale.status}`).value;
        let newState = childSelector.querySelector(`#${selectedKey}`).value;

        if (selectedKey != sale.status){
            swal.fire({
                title: "Atención",
                html: `¿Está seguro que desea modificar el estado de ${previousState} a ${newState}?`, 
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#000',
                cancelButtonColor: '#d33',
                confirmButtonText: `Si, Modificar!`   
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        
                        let formData = new FormData();
                        formData.append('id', sale.id);
                        formData.append('status', selectedKey);

                        let response = await UpdateOrderSale(formData);

                    }else{
                        swal.fire({
                            text: `Ningún dato ha sido modificado.`,
                            timer:"1500", 
                            position: "bottom",
                            customClass : {
                                container: "add-to-cart-alert-container",
                                popup:"add-to-cart-alert",
                            }
                        });
                    }
                })
        }
    

    } 
    
    return(
        <div className="modal fade" id={`modalSaleSettings${sale.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="modalSaleSettingsLabel" aria-hidden="true">
            <div className="modal-dialog modal-gl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 class="modal-title fw-bold font-h1">Estado del pedido {sale.id}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div class="modal-body">


                        <div className="col-12" id="timeFin-container">

                            <div className="d-flex justify-content-between mb-1" >
                                <span className="me-2 p-2 fw-bold">Modificar</span>

                                <select className="form-select p-2" id="set-sale-status-by-input">
                                    <option key="ACTIVE" id="ACTIVE">Programado</option>
                                    <option key="NONACTIVE" id="CANCEL">Cancelado</option>
                                    <option key="CONFIRMED" id="COMPLETED">Confirmado</option>
                                </select>
                            </div>

                            <div className="d-flex justify-content-between mb-1" >
                                <span className="me-2 p-2 fw-bold">Índice</span>

                                <div className="p-2">
                                    <span className="form-check-label text-secondary">
                                    Programado <i class="bi bi-dash-circle-fill"></i></span>
                                </div>
                                <div className="p-2">

                                    <span className="form-check-label text-danger" >
                                        Cancelado <i class="bi bi-x-circle-fill"></i></span>
                                </div>
                                <div className="p-2">
                                    <span className="form-check-label text-success">
                                        Confirmado <i className="bi bi-check-circle-fill"></i></span>
                                    
                                </div>  
                            </div>

                        

                        </div>
                      
                    </div>
                    <div class="modal-footer" >
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                        onClick={(e)=>{
                            setNewStatusConfirmed( 
                            sale );
                    
                        }}>Modificar estado</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ModalSaleSettings