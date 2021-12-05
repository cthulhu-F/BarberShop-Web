import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';
import imagenes from '../../../img/images';


const Header = () => {

  return(
    <div className="header-container row"> 
        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 row header-logo-container">
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2"></div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <img class="header-logo" width="150px" height="150px" src={imagenes.logo}></img>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4"></div>
        </div>
    
        <ul className="header-menu col-xl-3 col-lg-3 col-md-6 row col-sm-6 " >
            <li className="menu-item col-xl-4 col-lg-4 col-md-4 col-sm-4" ><a href="{{ route('home') }}">Home</a></li>
            <li className="menu-item col-xl-4 col-lg-4 col-md-4 col-sm-4" ><a href="{{ route('shop.index') }}">Shop</a></li>
            <li className="menu-item col-xl-4 col-lg-4 col-md-4 col-sm-4" ><a href="{{ route('calendar') }}">Calendar</a></li>
        </ul>
    </div>


  );
}

export default Header