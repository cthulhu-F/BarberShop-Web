const SliderItem = ({data, addOneToCart}) => {

  let {id, name, img, description, price, stock} = data;

  const urlImg = require.context('../../../asset/product', true);

  return(
          
              <div className="col border-0 my-2">
                <div className="card border-0 shadow-sm rounded">
                  <div className="w-100 text-center bg-light rounded">
                    <img 
                    src={urlImg(img).default}
                    className="card-img-top" 
                    style={{ maxWidth: "50%" }} 
                    alt="..."
                    />
                  </div>

                  <div className="card-body">
                    <span className="fs-7 fw-bold"><a className="text-decoration-none text-black" href={"/product/"+id}>{name}</a></span>
                    <div className="card-text text-muted fs-9">{description}</div>
                    <div className="d-flex justify-content-between mt-2">
                      <span className="fw-bold">{price}</span>
                      <button className="btn btn-black fs-7 py-1 px-2" onClick={()=>addOneToCart(id, true)}><i className="bi bi-cart-plus"></i></button>
                    </div>
                  </div>
                </div>
              </div>
  );

}

export default SliderItem