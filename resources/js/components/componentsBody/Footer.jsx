import { start } from '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagenes from '../../../img/images';

const style= {
    backgroundColor: "#000000 !important",
    borderRadius: "0px 0px 250px 250px",
    height: "220px",
}

const Footer = () => {

    return(
        <footer class="text-center text-lg-start bg-dark text-muted font-h1">
            <div className="container-md">
                <section className="">
                    <div className="container">
                        <div className="row g-3">

                        <div className="col-12 col-xl-3 d-flex justify-content-xl-center justify-content-center footer-column" style={{alignSelf:"start", margin:"0px 0px 30px 0px"}}>
                            <a className="w-100 d-flex justify-content-center" style={style} href="#">
                            <img src={imagenes.logo} alt=""  style={style} ></img>
                            </a>
                        </div>

                        <div className="col-12 col-xl-3 d-flex justify-content-center footer-column">
                            <ul className="list-group bg-dark p-1">
                                <li className="list-group-item border-0 bg-dark p-1"><a className="text-decoration-none link-white" href="">Informacion</a></li>
                                <li className="list-group-item border-0 bg-dark p-1"><a className="text-decoration-none link-white" href="">Quienes somos</a></li>
                                <li className="list-group-item border-0 bg-dark p-1"><a className="text-decoration-none link-white" href="">Terminos y condiciones</a></li>
                            </ul>
                        </div>

                        <div className="col-12 col-xl-3 d-flex justify-content-center footer-column">
                            <ul className="list-group bg-dark p-1">
                                <li className="list-group-item border-0 border-white border-bottom bg-dark p-1">
                                    <a className="text-decoration-none  link-white" href="">Home</a>
                                </li>

                                <li className="list-group-item border-0 border-white border-bottom bg-dark p-1">
                                    <a className="text-decoration-none link-white" href="">Shop</a>
                                </li>

                                <li className="list-group-item border-0 bg-dark p-1 footer-button">
                                    <a className="text-decoration-none btn btn-light m-0 fs-6" href="">
                                        <i className="bi bi-scissors"></i>
                                        Reserva tu turno
                                        <i className="bi bi-scissors"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-xl-3 d-flex justify-content-xl-center justify-content-center footer-column">
                            <ul className="list-group bg-dark p-1">

                                <li className="list-group-item  text-xl-start p-0 border-0 bg-dark py-1">
                                    <a className="text-decoration-none link-white row" href="">
                                        <i className="bi bi-geo-alt col-3"></i>
                                        <p className="col-9">Direccion</p>
                                    </a>
                                </li>

                                <li className="list-group-item text-xl-start p-0 border-0 bg-dark py-1">
                                    <a className="text-decoration-none link-white row" href="">
                                        <i className="bi bi-telephone col-3"></i>
                                        <p className="col-9"> Telefono</p>
                                    </a>
                                </li>

                                <li className="list-group-item bg-dark text-xl-start p-0 border-0  py-1">
                                    <a className="text-decoration-none link-white row" href="">
                                        <i className="bi bi-envelope col-3"></i>
                                        <p className="col-9" >Correo</p>
                                    </a>
                                </li>


                                <li className="list-group-item bg-dark text-xl-start p-0 border-0  py-1">
                                    <a className="text-decoration-none link-white row" href="">
                                        <i className="bi bi-instagram col-3"></i>
                                        <p className="col-9" >Instagram</p>
                                    </a>
                                </li>

                                <li className="list-group-item bg-dark text-xl-start p-0 border-0  py-1">
                                    <a className="text-decoration-none link-white row" href="">
                                        <i className="bi bi-facebook col-3"></i>
                                        <p className="col-9" >Facebook</p>
                                    </a>
                                </li>

                                {/* <li className="list-group-item bg-dark text-xl-start p-xl-0 border-0 pt-2">
                                    <a className="text-decoration-none btn p-xl-0 link-white row" href="">
                                        <i className="bi bi-instagram col-3"></i>
                                        <p className="col-9">Instagram</p>
                                    </a>  
                                </li> */}

                                {/* <li className="list-group-item bg-dark text-xl-start p-xl-0 border-0">
                                    <a className="text-decoration-none btn p-xl-0  link-white row" href="">
                                        <i className="bi bi-facebook col-3"></i>
                                        <p className="col-9">Facebook</p>
                                    </a> 
                                </li> */}
                            </ul>
                        </div>

                        <div className="col-12">
                            <div className="text-center p-2 fs-8 text-title text-muted">
                            © 2021 Copyright:
                            <a className="text-decoration-none text-muted fw-bold" href="https://mdbootstrap.com/">Todos los derechos
                                reservados</a>
                            </div>
                        </div>

                        </div>

                    </div>
                </section>      
            </div>

        </footer>
    );
}

export default Footer