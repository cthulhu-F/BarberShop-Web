import 'bootstrap/dist/css/bootstrap.min.css';
import imagenes from '../../../img/images';


const Footer = () => {

    return(
        <div className="footer-container row">         
            <ul className="footer-menu-items col-xl-4" >
                <li className="menu-item" ><a href="{{ route('home') }}">Home</a></li>
                <li className="menu-item" ><a href="{{ route('shop.index') }}">Shop</a></li>
                <li className="menu-item" ><a href="{{ route('calendar') }}">Calendar</a></li>
            </ul>

            <div className="footer-menu-items col-xl-4">
                <img class="footer-logo" width="400px" height="400px" src={imagenes.logo}></img>
            </div>

            <ul className="footer-menu-rrss col-xl-4" >
                <li className="menu-item" id="rrss" ><a href="{{ route('home') }}">Whatsapp</a></li>
                <li className="menu-item" id="rrss" ><a href="{{ route('shop.index') }}">Facebook</a></li>
                <li className="menu-item" id="rrss" ><a href="{{ route('calendar') }}">Instagram</a></li>
            </ul>
        </div>

      );
}

export default Footer