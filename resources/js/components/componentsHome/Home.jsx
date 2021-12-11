import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';
import { ITEM_IMG } from '../../constans/constImg';



const Home = () => {

  const urlImg = require.context('../../../asset/clients', true);

  
  return(
    <div className="row g-2">

        <div className="col-12 col-xl-12">
          <div className="d-flex justify-content-center border-0 border-bottom">
          <span className="fw-bold fs-3 text-black font-h1">Nuestros clientes</span>
          </div>
        </div>

        <div className="col-12 col-xl-6 ">

          <div className="row g-1 justify-content-end">

            <div className="col-12 col-xl-12 p-0">
              <div className="w-100 d-flex justify-content-end" style={{height: "600px"}}>
                <img 
                src={urlImg(ITEM_IMG.coverImg_1).default}
                className="img-fluid rounded" 
                alt=""
                />
              </div>
            </div>

            <div className="col-12 col-xl-12 p-0">
              <div className="w-100 d-flex justify-content-end" style={{height: "300px"}}>
                <img 
                src={urlImg(ITEM_IMG.coverImg_2).default}
                className="img-fluid rounded" 
                alt=""
                />
              </div>
            </div>

          </div>

        </div>

        <div className="col-12 col-xl-6">

          <div className="row g-1 justify-content-start">

            <div className="col-12 col-xl-12 p-0">
              <div className="w-100 d-flex" style={{height: "300px"}}>
                <img 
                src={urlImg(ITEM_IMG.coverImg_3).default}
                className="img-fluid rounded" 
                alt=""
                />
              </div>
            </div>

            <div className="col-12 col-xl-12 p-0">
              <div className="w-100 d-flex" style={{height: "600px"}}>
                <img 
                src={urlImg(ITEM_IMG.coverImg_4).default}
                className="img-fluid rounded" 
                alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* <ModalShoppingCart data={cart} deleteFromCart={deleteFromCart} addOneToCart={addOneToCart} addToCart={addToCart} cleanCart={cleanCart}  /> */}

      </div>
  );
}

export default Home
