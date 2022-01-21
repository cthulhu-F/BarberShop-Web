import { start } from '@popperjs/core';
import { useEffect, useState } from 'react';

const style = {
    backgroundColor: "#000000 !important",
    borderRadius: "0px 0px 250px 250px",
    height: "220px",
}

import { ShowCustomer, ShowGlobalImg } from '../../helpers/CustomerHelpers';

const Footer = () => {

    const urlImg = require.context('../../../asset/marca', true);
    const[img, setImg] = useState(null);
    const[data, setData] = useState(null);

    const bgBlack = { backgroundColor: "#000" }

    useEffect(() => {
        async function fetch() {
            const resImg = await ShowGlobalImg();

            setImg(resImg);
        }
        fetch();
    }, [])

    useEffect(() => {
        async function fetch() {
            const resData = await ShowCustomer();
            console.log(resData);
            
            setData(resData);
        }
        fetch()
    },[])

    return (
        <div className="container-md">
            <section className="">
                <div className="container">
                    <div className="row g-3">
                        <div className="row pt-0">

                            <div className="col-12 col-xl-3 d-flex justify-content-xl-start justify-content-center">
                                <a className="navbar-brand text-dark p-3 rounded-top  rounded-circle overflow-hidden bg-black" href="#">
                                    {
                                        !img ?

                                            ""

                                            :

                                            <img
                                                src={urlImg(img[0].url).default}
                                                alt=""
                                                width="200"
                                                height="200"
                                            ></img>

                                    }
                                </a>
                            </div>

                            <div className="col-12 col-xl-3 d-flex justify-content-center">
                                <ul className="list-group bg-black p-1">
                                    <li className="list-group-item border-0 bg-black p-1"><a className="text-decoration-none link-white" href="">Quienes somos</a></li>
                                    <li className="list-group-item border-0 bg-black p-1"><a className="text-decoration-none link-white" target="_blank" href="/termsAndConditions">Terminos y condiciones</a></li>
                                </ul>
                            </div>

                            <div className="col-12 col-xl-3 d-flex justify-content-center">
                                <ul className="list-group bg-black p-1">
                                    <li className="list-group-item border-0 border-white border-bottom bg-black p-1">
                                        <a className="text-decoration-none  link-white" href="">Home</a>
                                    </li>

                                    <li className="list-group-item border-0 border-white border-bottom bg-black p-1">
                                        <a className="text-decoration-none link-white" href="">Shop</a>
                                    </li>

                                    <li className="list-group-item border-0 bg-black p-1">
                                        <a className="text-decoration-none btn btn-light m-0 fs-6" href="">
                                            <i className="bi bi-scissors"></i>
                                            Reserva tu turno
                                            <i className="bi bi-scissors"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12 col-xl-3 d-flex justify-content-xl-center justify-content-center">
                                <ul className="list-group bg-black p-0">

                                    <li className="list-group-item  text-xl-start p-0 border-0 bg-black py-1">
                                        <a className="text-decoration-none link-white row" href="">
                                            <i className="bi bi-geo-alt col-2"></i>
                                            <p className="col-10">
                                                {
                                                    !data? 

                                                    ""

                                                    :

                                                    data[0].direction

                                                }
                                            </p>
                                        </a>
                                    </li>

                                    <li className="list-group-item text-xl-start p-0 border-0 bg-black py-1">
                                        <a className="text-decoration-none link-white row" href="">
                                            <i className="bi bi-telephone col-2"></i>
                                            <p className="col-10"> {
                                                    !data? 

                                                    ""

                                                    :

                                                    data[0].phone

                                                }</p>
                                        </a>
                                    </li>

                                    {/*
                                    <li className="list-group-item bg-black text-xl-start p-0 border-0  py-1">
                                        <a className="text-decoration-none link-white row" href="">
                                            <i className="bi bi-envelope col-3"></i>
                                            <p className="col-9" > {
                                                    !data? 

                                                    ""

                                                    :

                                                    "" //data[0].email

                                                }</p>
                                        </a>
                                            </li>
                                    */}


                                    <li className="list-group-item bg-black text-xl-start p-0 border-0  py-1">
                                        <a className="text-decoration-none link-white row" 
                                        href= {
                                            !data? 

                                            ""

                                            :

                                            data[0].social_networks.instagram

                                            }
                                        >
                                            <i className="bi bi-instagram col-2"></i>
                                            <p className="col-10" > Instagram </p>
                                        </a>
                                    </li>

                                    <li className="list-group-item bg-black text-xl-start p-0 border-0  py-1">
                                        <a className="text-decoration-none link-white row" 
                                        href={
                                            !data? 

                                            ""

                                            :

                                            data[0].social_networks.facebook

                                            }
                                        >
                                            <i className="bi bi-facebook col-2"></i>
                                            <p className="col-10" > Facebook</p>
                                        </a>
                                    </li>
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
                </div>
            </section>
        </div>

    );
}

export default Footer