import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';
import { ITEM_IMG } from '../../constants/constImg';



const Home = () => {

  const urlImg = require.context('../../../asset/slider', true);


  /* 
  
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
      </div>

  */

  
  return(

    <div id="carouselExampleIndicators bg-light" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img 
            src={urlImg(ITEM_IMG.coverImg_1).default}
            class="d-block w-100"
            alt="..."
            />
          </div>
          <div class="carousel-item" >
            <img 
            src={urlImg(ITEM_IMG.coverImg_1).default}
            class="d-block w-100"
            alt="..."
            />
          </div>
          <div class="carousel-item" >
            <img 
            src={urlImg(ITEM_IMG.coverImg_1).default}
            class="d-block w-100"
            alt="..."
            />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    
  );
}

export default Home
