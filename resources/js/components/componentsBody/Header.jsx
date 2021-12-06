import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';
import imagenes from '../../../img/images';
import { Link } from 'react-router-dom';



const Header = () => {

  return(
    <div className="header-container row"> 
        <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-6 row header-logo-container">
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2"></div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <img class="header-logo" width="150px" height="150px" src={imagenes.logo}></img>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4"></div>
        </div>
    
    
        <ul className="header-menu col-xl-4 col-lg-4 col-md-6 row col-sm-6 col-6 navbar navbar-expand-lg" >
            <li className="menu-item col-xl-4 col-lg-4 col-md-4 col-sm-4" ><a href="{{ route('home') }}">Home</a></li>
            <li className="menu-item col-xl-4 col-lg-4 col-md-4 col-sm-4" ><a href="#">Shop</a></li>
            <li className="menu-item col-xl-4 col-lg-4 col-md-4 col-sm-4" ><a href="{{ route('calendar') }}">Calendar</a></li>
        </ul>

        <div className="col-xl-1 col-lg-1 col-md-6 row col-sm-6"></div>
    </div>


  );
}

export default Header