import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';
// import '../../../css/main2.css';
import imagenes from '../../../img/images';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


const Header = () => {

  return(

    <div className="container-fluid">
      <div className="container-md bg-white">

        <Nav className="navbar navbar-expand-lg pt-0 bg-white font-h1 ">
          <div className="container-fluid">
            
            <Navbar className="navbar-brand text-dark bg-black p-1 pt-1 mt-0 rounded-0 rounded-circle rounded-top overflow-hidden" >
              <img src={imagenes.logo} alt="" width="70" height="70"></img>
            </Navbar>
            
            <Navbar.Toggle className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span> <i className="bi bi-list fs-1"></i></span>
            </Navbar.Toggle>

            <Navbar.Collapse className="collapse navbar-collapse bg-white text-center" id="navbarSupportedContent">
            
              <Nav className="navbar-nav me-auto mb-2 mb-lg-0 p-1 mx-auto header-menu">
                <Nav.Link className="nav-item mx-1 my-1  my-xl-0 menu-item">
                  <a className="nav-link link-black border-0 border-dark border-bottom" aria-current="page" href="index.html">Home</a>
                </Nav.Link>
                <Nav.Link className="nav-item mx-1 my-1  my-xl-0 menu-item">
                  <a className="nav-link link-black" href="shop.html">Shop</a>
                </Nav.Link>
                <Nav.Link className="nav-item mx-1 my-1 my-xl-0 menu-item">
                  <a className="nav-link btn btn-black rounded" href="turnos.html">Reserva tu turno</a>
                </Nav.Link>
              </Nav>

            </Navbar.Collapse>

            <form className="d-xl-flex d-block my-2">
              <div className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-black" type="submit"><i class="bi bi-search"></i></button>
                <button className="btn btn-black ms-2"><i class="bi bi-filter-left"></i></button>
              </div>
            </form>

          </div>
        </Nav>

      </div>
    </div>



  );
}

export default Header