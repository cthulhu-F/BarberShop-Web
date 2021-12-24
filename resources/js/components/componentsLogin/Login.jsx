
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import LoginCss from "../../../css/login.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';
import { ITEM_IMG } from '../../constants/constImg';
import { useForm } from "react-hook-form";
import  { Authorization} from "../../helpers/AuthHelpers";
import swal from'sweetalert2';


const passwordVisible = (iconId, inputId) => {

    const enableClass = "bi-eye-fill";
    const dissableClass = "bi-eye-slash-fill";

    const indiacator = document.getElementById(iconId);
    const inputField = document.getElementById(inputId);

    if (inputField.type == "password") {
        inputField.type = "text";
        indiacator.classList.replace(dissableClass, enableClass);
    }

    else {
        inputField.type = "password";
        indiacator.classList.replace(enableClass, dissableClass);
    }
}

const Login = () => {

    const onSubmit =  async evento => {

        let post = {
            email: evento.email,
            password: evento.password
        }    

        let validate = await Authorization(post);

        console.log(validate.data);

        if(validate.data != 'Unauthenticated'){      
            window.location.replace(validate.data)
        } else {
            swal.fire({
                icon: 'error',
                title: 'Error de autenticacion',
                text: 'El usuario o contraseña ingresados no existe',
                showConfirmButton: false,
              })
        }
    }


    const { register, handleSubmit, formState: { errors } } = useForm();

    const urlImg = require.context('../../../asset/marca', true);

    return (
        <div className="container h-100">
            <div className="d-flex justify-content-center align-self-center h-100">
                <div className="user_card">
                    <div className="d-flex justify-content-center">
                        <div className="brand_logo_container">
                            <img src={urlImg(ITEM_IMG.logo).default} className="brand_logo" alt="Logo" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center form_container">
                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="bi bi-person-fill" ></i></span>
                                </div>
                                <input type="text" name="" className="form-control input_user" placeholder="e-mail"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "El campo es requerido",
                                        },
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "El formato no es correcto",
                                        }
                                    })} />
                            </div>

                            {errors.email && <span className={errors.email && LoginCss.mensajeError}>{errors.email.message}</span>}


                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="bi bi-eye-slash-fill" id="password-icon" onClick={() => passwordVisible("password-icon", "password-input-field")}></i></span>
                                </div>
                                <input type="password" name="" className="form-control input_pass" placeholder="password" id="password-input-field"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "El campo es requerido",
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "La contraseña debe tener al menos 6 carácteres",
                                        }
                                    })} />
                            </div>
                            {errors.password && <span className={errors.password}>{errors.password.message}</span>}

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                    <label className="custom-control-label" for="customControlInline"> Remember me</label>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button type="submit" value="submit" className="btn login_btn" onClick={() => onSubmit()}>Login</button>
                            </div>

                            
                        </form>
                    </div>

                    <div className="mt-4" >
                        <div className="d-flex justify-content-center links">
                            <a href="#">Forgot your password?</a>
                        </div>

                        <div className="non-login-section">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?
                            </div>
                            <div className="d-flex justify-content-center links ">
                                <button href="#" className="btn btn-light sing-up-button"> Sign Up</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login

/*
if (document.getElementById("login")) {
    ReactDOM.render(
        <React.StrictMode>
            <Login/>
        </React.StrictMode>,
        document.getElementById("login")
    );
  }
  */
