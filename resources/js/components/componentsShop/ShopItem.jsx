
const ShopItem = ({data, addOneToCart,cart}) => {

  // let {id, name, img, description, price, stock, quantity } = data;

  const urlImg = require.context('../../../asset/product', true);

  const compareCartQuantity = (id)=>{
    let existent = cart.find(item => item.id == data.id);
    return existent ? existent.quantity>existent.stock-1 : false;
  }

  const setAlert = (id)=>{
    let existent = cart.find(item => item.id == data.id);
    return existent ? existent.quantity<existent.stock-1 : false;
  }

  return(

      <div className="col border-0">
              <div className="card border-0 shadow-sm rounded pt-4" >
                <div className="w-100 text-center bg-light rounded">
                  <img 
                  src={urlImg(data.img).default}
                  className="card-img-top" 
                  style={{maxWidth: "50%"} }
                  alt="..."
                  />
                </div>
    
                <div className="card-body">
                  <span className="fs-7 fw-bold"><a className="text-decoration-none text-black" href={"/product/"+data.id}>{data.name}</a></span>
                  <div className="card-text text-muted fs-9">{data.description}</div>
                  <div className="d-flex justify-content-between mt-2">
                    <span className="fw-bold">${data.price}</span>
                    <button className="btn btn-black fs-7 py-1 px-2 " id={`add-one-item-${data.id}-to-cart`} disabled={compareCartQuantity(data.id)} onClick={()=>addOneToCart(data.id, setAlert(data.id))}><i className="bi bi-cart-plus"></i></button>
                  </div>
                </div>
              </div>
            </div>
  );
}

export default ShopItem