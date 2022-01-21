import { useEffect, useState } from 'react';
import { ShowGlobalImg } from '../../helpers/CustomerHelpers';



const Home = () => {

  const urlImg = require.context('../../../asset/marca', true);

  const [img, setImg] = useState(null);

  useEffect(() => {
    async function fetch() {
      const resImg = await ShowGlobalImg()
      setImg(resImg);
    }
    fetch();
  },[])

  return (



    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        {
        
        !img?

        ""

        :
        
        img.map((img, index) =>

          img.name != 'logo_1' ?

            img.name != 'slider_1' ?

              <div className="carousel-item">
                <img
                  src={urlImg(img.url).default}
                  className="d-block w-100"
                  style={{height: "460px"}}
                  alt={img.name}
                />
              </div>

              :

              <div className="carousel-item active">
                <img
                  src={urlImg(img.url).default}
                  className="d-block w-100"
                  style={{height: "460px"}}
                  alt={img.name}
                />
              </div>

            :

            ""

        )}
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