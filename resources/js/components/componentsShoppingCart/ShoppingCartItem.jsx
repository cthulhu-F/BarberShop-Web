const ShoppingCartItem =(data, deleteFromCart, addOneToCart)=>{

    let {id, name,quantity, price} = data.data;
    console.log(data.data);

    return(
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
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex" style={{height: "50px"}}>
                              
                            </div>
                          </td>
                          <td className="pt-3">
                            <div className="fs-7"> {name}  </div>
                            <div className="text-muted fs-7">  </div>
                          </td>
                          <td className="pt-3">
                            <div className="fs-7"> {quantity}  </div>
                            <div className="text-muted fs-7">  </div>
                          </td>
                          <td className="pt-3">{price}</td>
                          <td className="pt-3">{price*quantity}</td>
                          <td className="pt-3 row">
                            <button className="btn btn-danger p-1 fs-7 col-2" onClick={()=>data.deleteFromCart(id, true)}><i className="bi bi-trash"></i></button>
                            <div class="col-2"></div>
                            <button className="btn btn-dark p-1 fs-7 col-2" onClick={()=>data.deleteFromCart(id)}><i class="bi bi-dash-lg"></i></button>
                            <div class="col-2"></div>
                            <button className="btn btn-dark p-1 fs-7 col-2" onClick={()=>data.addOneToCart(id)} ><i class="bi bi-plus-lg"></i></button>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot></tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
    );
}
export default ShoppingCartItem