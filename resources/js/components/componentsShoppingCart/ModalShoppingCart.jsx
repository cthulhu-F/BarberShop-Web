import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';

import swal from'sweetalert2';


const ModalShoppingCart = ({ data, deleteFromCart, addOneToCart, cleanCart}) => {
  const urlImg = require.context('../../../asset/product', true);

  console.log(data);

  let shoppingCartItem = data;

  const buttonsStyle = {
    display: 'unset',
  };

  const cleanCartConfirmed = ()=>{
    if(data.length !== 0 ){
      swal.fire({ 
        title: "Vaciar carrito",
        text: "¿Desea vaciar su carrito?",
        icon:"warning",
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: "Sí, vaciar",
      }).then((result) =>{
        if (result.isConfirmed){
          cleanCart();
        }
      })
    } else {
      swal.fire({ 
        title: "El carrito se encuentra vacio",
        icon:"error",
        showCancelButton: false,
        showConfirmButton: false
      })
    }
  }
  

  return (
    <div className="modal fade" id="shoppingCartModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-gl">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title fs-4" id="exampleModalLabel">Carrito <i
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
                        data.length !== 0 ?
                        shoppingCartItem.filter(item=>item.quantity>0).map((item) => (
                          <tr>
                            <td>
                              <div className="d-flex" style={{ height: "50px" }}>
                                  <img 
                                    src={urlImg(item.img).default}
                                    className="rounded" 
                                    alt={item.name}
                                  />
                              </div>
                            </td>
                            <td className="">
                              <div className="fs-7"> {item.name}  </div>
                              <div className="text-muted fs-7">  </div>
                            </td>
                            <td className="">
                              <div className="fs-7"> {item.quantity}  </div>
                              <div className="text-muted fs-7">  </div>
                            </td>
                            <td className="">{item.price}</td>
                            <td className="">{item.price * item.quantity}</td>
                            <td>
                              <div className="d-flex">
                              <button className="btn btn-danger p-1 fs-7 me-1" onClick={()=> deleteFromCart(item.id, true)}style={buttonsStyle}><i className="bi bi-trash"></i></button>
                              <button className="btn btn-dark p-1 fs-7 me-1" onClick={()=> deleteFromCart(item.id)} style={buttonsStyle}><i class="bi bi-dash-lg"></i></button>
                              <button className="btn btn-dark p-1 fs-7" onClick={()=> addOneToCart(item.id)} disabled={item.quantity >= item.stock} style={buttonsStyle}><i class="bi bi-plus-lg"></i></button>
                              </div>
                            </td>
                          </tr>
                        ))
                        :
                        (
                          <tr>
                            <td colSpan={6}><div className="w-100 aling-middle text-center text-muted">No hay datos</div></td>
                          </tr>
                        )
                      }


                    </tbody>
                    <tfoot></tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <div className="row w-100">
                <div className="col-12 col-xl-6">
                <button type="button" className="btn btn-danger w-100 my-1" data-bs-dismiss="modal" onClick={()=>cleanCartConfirmed()}>Vaciar carrito </button>
                </div>
                <div className="col-12 col-xl-6">
                <a href="/shoppingCart" className="btn btn-black w-100 my-1">Completar compra</a>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

}

export default ModalShoppingCart
