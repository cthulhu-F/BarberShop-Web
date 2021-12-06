import 'bootstrap/dist/css/bootstrap.min.css';
import imagenes from '../../../img/images';


const Footer = () => {

    return(
        <div className="footer-container row">         
            <ul className="footer-menu-items col-xl-4 col-lg-4 col-md-4 col-sm-4 " >
                <li className="menu-item " ><a href="{{ route('home') }}">Home</a></li>
                <li className="menu-item" ><a href="{{ route('calendar') }}">Calendar</a></li>
                <li className="menu-item" ><a href="{{ route('shop.index') }}">Shop</a></li>

            </ul>

            <div className="footer-logo-container col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <img class="footer-logo" width="400px" height="400px" src={imagenes.logo}></img>
            </div>

            <ul className="footer-menu-rrss col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <li className="menu-item footer-button" id="rrss">
                    <a className="row" href="{{ route('home') }}">
                        <i class="bi bi-whatsapp col-3 " ></i>
                        <p className="col-9 footer-button-text" >Whatsapp</p>
                    </a>
                </li>
                <li className="menu-item footer-button" id="rrss" >
                    <a className="row" href="{{ route('shop.index') }}">
                        <i class="bi-facebook col-3"></i>
                        <p className="col-9 footer-button-text" >Facebook</p>
                    </a>
                </li>
                <li className="menu-item footer-button" id="rrss" >
                    <a className="row" href="{{ route('calendar') }}">
                        <i class="bi bi-instagram col-3"></i>
                        <p className="col-9 footer-button-text" >Instagram</p>
                    </a>
                </li>
            </ul>
            
        </div>

      );
}

export default Footer