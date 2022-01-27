import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';
import { ITEM_IMG } from '../../constants/constImg';

import { Helmet } from 'react-helmet';

const Home = () => {

  const urlImg = require.context('../../../asset/slider', true);


  return (



    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <Helmet>
          <title data-react-helmet="true" > Brothers Barbershop</title>
          <meta name="description" content="
            Vistá nuestra página y solicitá un turno 100% online. En Brothers Barbershop tambíen podés comprar tus productos favoritos.
          "/>    
          <meta name="keywords" content="
            barbería, peluquería, cortes de cabello, cortes de barba, república dominicana, barbería online, productos de belleza, cuidado facial, cuidado del cabello
          "/>
          <meta http-equiv="expires" content="86400"/>    
        </Helmet>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={urlImg(ITEM_IMG.coverImg_1).default}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={urlImg(ITEM_IMG.coverImg_1).default}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={urlImg(ITEM_IMG.coverImg_1).default}
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>


  );
}

export default Home