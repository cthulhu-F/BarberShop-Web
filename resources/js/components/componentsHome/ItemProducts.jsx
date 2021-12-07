const ItemProducts = ({data}) => {

  
  let {id, name, img, description, price, stock } = data;


  const urlImg = require.context('../../../asset/product', true);

  return(
    <div className="col border-0">
          <div className="card p-2 border-0 shadow-sm" style={{borderRadius : "20px"}}>

            <div className="w-100 text-center">
              <img 
              src={urlImg(img).default} 
              className="card-img-top" 
              style={{ maxWidth: "30%" }}
              alt="..."
              />
            </div>

            <div className="card-body">
              <span className="fs-7 fw-bold"><a className=" text-dark text-decoration-none" href={"/product/"+ id}>{name}</a></span>
              <div className="card-text text-muted fs-9">{description}</div>
              <div className="d-flex justify-content-between">
                <span className="fw-bold">{price}</span>
                <button className="btn btn-dark rounded-circle fs-7 py-1 px-2"><i className="bi bi-cart-plus"></i></button>
              </div>
            </div>
          </div>
    </div>
  );
}

export default ItemProducts