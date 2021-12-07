import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';
import { ITEM_PRODUCTS } from '../../constans/ConstItem';
import SliderItem from './SliderItem';

const Slider = () => {

  let SliderProducts_1 = ITEM_PRODUCTS.products.slice(0, 4);

  let SliderProducts_2 = ITEM_PRODUCTS.products.slice(4, 8);

  return(

    <div id="carouselExampleIndicators" className="carousel slide my-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner px-5 py-2 px-xl-5">
        <div className="carousel-item active">
        <div className="row row-cols-1 row-cols-xl-4 bg-light">

        {SliderProducts_1.map((item) => <SliderItem key={item.id} data={item} />)}
        
        </div>
        </div>
        <div className="carousel-item">
        <div className="row row-cols-1 row-cols-xl-4 bg-light">

        {SliderProducts_2.map((item) => <SliderItem key={item.id} data={item} />)}
        
        </div>
        </div>
        </div>

        <button className="carousel-control-prev btn-carousel bg-light" type="button"
          data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{width: "60px"}}>

        </button>

        <button className="carousel-control-next btn-carousel bg-light" type="button"
          data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{width: "60px"}}>

        </button>

      </div>

  );
}

export default Slider
