import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';

const ModalShoppingCart = () => {

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
                         <th scope="col">Precio</th>
                         <th scope="col">SubTotal</th>
                         <th scope="col"></th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td>
                           <div className="d-flex" style={{height: "50px"}}>
                             
                           </div>
                         </td>
                         <td className="pt-3">
                           <div className="fs-7"> Producto 1  </div>
                           <div className="text-muted fs-7"> x1 </div>
                         </td>
                         <td className="pt-3">$10.99</td>
                         <td className="pt-3">$10.99</td>
                         <td className="pt-3">
                           <button className="btn btn-danger p-1 fs-7"><i className="bi bi-trash"></i></button>
                         </td>
                       </tr>
                     </tbody>
                     <tfoot></tfoot>
                   </table>
                 </div>
               </div>
             </div>
           </div>
           <div className="modal-footer">
             <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Vaciar carrito </button>
             <a href="/shoppingCart" className="btn btn-black">Completar compra</a>
           </div>
         </div>
       </div>
     </div>
    );

}

export default ModalShoppingCart

if (document.getElementById("modalShoppingCart")) {
  ReactDOM.render(
      <React.StrictMode>
          <ModalShoppingCart />
      </React.StrictMode>,
      document.getElementById("modalShoppingCart")
  );
}