import React from "react";

const ModalSaleData = ({sale}) =>{
    const saleResume = sale.resumen;

    return(
        <div className="modal fade" id={`saleResumenModal${sale.id}`} tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-gl">
          <div className="modal-content">
  
            <div className="modal-header">
              <h5 className="modal-title fs-4" id="exampleModalLabel">Resumen <i
                className="bi bi-cart"></i></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
  
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  <div className="table-responsive font-p">
                    <table className="table table-hover">
                      <thead className="font-h1">
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Precio</th>
                          <th scope="col">SubTotal</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody style={{verticalAlign: "middle"}}>
  
                        {
                          saleResume.filter(item=>item.cant_item>0).map((item) => (
                            <tr>
                              <td>
                                <div className="d-flex" style={{ height: "50px" }}>
  
                                </div>
                              </td>
                              <td className="">
                                <div className="fs-7"> {item.name_item}  </div>
                                <div className="text-muted fs-7">  </div>
                              </td>
                              <td className="">
                                <div className="fs-7"> {item.cant_item}  </div>
                                <div className="text-muted fs-7">  </div>
                              </td>
                              <td className="">{item.price_item}</td>
                              <td className="">{item.total_item}</td>
        
                            </tr>
                          ))
                        }

                            <tr>
                              <td>
                                <div className="d-flex" style={{ height: "50px" }}>
  
                                </div>
                              </td>
                              <td className="">
                                <div className="fs-7 fw-bold"> Total  </div>
                                <div className="text-muted fs-7">  </div>
                              </td>
                              <td className="">
                                <div className="fs-7"></div>
                                <div className="text-muted fs-7">  </div>
                              </td>
                              <td className=""></td>
                              <td className="fw-bold">{sale.total}</td>
        
                            </tr>
  
  
                      </tbody>
                      <tfoot></tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="modal-footer">
            </div>
  
          </div>
        </div>
      </div>
    );
}

export default ModalSaleData