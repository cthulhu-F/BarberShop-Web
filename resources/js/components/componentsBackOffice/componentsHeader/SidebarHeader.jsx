import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../css/main.css';


const SidebarHeader = () =>{

    let URL = window.location.pathname;
    URL = URL.split('/');
    let URLpage = URL[2];
 
    let defaultClases ="nav-item rounded-pill rounded-end ms-0 ms-xl-3 p-0 pe-2 ps-3 p-xl-3 fs-5 my-1 my-xl-2";
  

    let menuItems = [
        {slug: "home", classes: defaultClases,},
        {slug: "turns", classes: defaultClases,},
        {slug: "sales", classes: defaultClases,},
        {slug: "inventory", classes: defaultClases,},
        {slug: "users", classes: defaultClases,},
        {slug: "settings",classes: defaultClases,},
    ]

    menuItems.forEach(item=>{
      if (URLpage == item.slug){
        item.classes += " navbar-link-active-primary ";

      } else {
        item.classes += " navbar-link-primary ";
      } 
    })

    function findCalsses(slug){
      let item = menuItems.find(product=> product.slug === slug);
      let exportClasses = item ? item.classes : '';
      return exportClasses;
    }
    

    return(
        
            <div>
                <div className="d-flex flex-column flex-shrink-0 py-2">
                    <a href="home" className="d-flex justify-content-center text-decoration-none text-white fs-4 p-2 fw-bold">
                    <i className="bi bi-box  ms-1 mx-xl-2 me-xl-2"></i>
                    <div className="d-none d-xl-inline text-color-gradient">BACK OFFICE</div>
                    </a>
                </div>
        
                <ul className="nav nav-pills flex-column m-0 ps-1 ps-xl-0">
        
                    <li
                    className={findCalsses("turns")}>
                    <a href="turns" className="text-decoration-none text-white" aria-current="page">
                        <i className="bi bi-journal-arrow-up fs-4 mx-0 mx-xl-1"></i>
                        <span className="d-none d-xl-inline">Turnos</span>
                    </a>
                    </li>
        
        
                    <li
                    className={findCalsses("sales")}>
                    <a href="sales" className="text-decoration-none text-white" aria-current="page">
                        <i className="bi bi-journal-check fs-4 mx-0 mx-xl-1"></i>
                        <span className="d-none d-xl-inline">Orden de ventas</span>
                    </a>
                    </li>
        
        
                    <li
                    className={findCalsses("inventory")}>
                    <a href="inventory" className="text-decoration-none text-white" aria-current="page">
                        <i className="bi bi-journals fs-4 mx-0 mx-xl-1"></i>
                        <span className="d-none d-xl-inline">Inventario</span>
                    </a>
                    </li>
        
                    <li
                    className={findCalsses("users")}>
                    <a href="users" className="text-decoration-none text-white" aria-current="page">
                        <i className="bi bi-person-lines-fill fs-4 mx-0 mx-xl-1"></i>
                        <span className="d-none d-xl-inline">Usuarios</span>
                    </a>
                    </li>
        
                    <li
                    className={findCalsses("settings")}>
                    <a href="settings" className="text-decoration-none text-white" aria-current="page">
                        <i className="bi bi-gear fs-4 mx-0 mx-xl-1"></i>
                        <span className="d-none d-xl-inline">Configuracion</span>
                    </a>
                    </li>
        
                </ul>
            </div>
            
       
    );
}

export default SidebarHeader


  
  