import React from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";



const Carrousel = ({ imgArray, img }) => {

    //console.log(imgArray);
    console.log(img);

    const [index2, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const urlImg = require.context('../../../../asset/marca', true);

    function createPreview(file, index) {
        var imgCodified = URL.createObjectURL(file);
        const imgViewer = document.querySelector(`#backofice-settings-slider-imagen-editor-viewer-${index}`);
        imgViewer.style.backgroundImage = `url(${imgCodified})`;
    }

    const validateSizeFile = (event, index) => {
        const MAX_BYTES_SIZE = 1000000; // 1MB = 1 millón de bytes

        if (event.target.files.length <= 0) return;

        const file = event.target.files[0];
        const supportedImages = ["image/jpeg", "image/png", "image/jpg"];

        let incorrectFormatMsj;
        if (supportedImages.indexOf(file.type) == -1) {
            incorrectFormatMsj = "<br> <br> Formatos aceptados .jpeg / .png / .jpg"
        }

        if (file.size > MAX_BYTES_SIZE && supportedImages.indexOf(file.type) == -1) {
            const mbSize = MAX_BYTES_SIZE / 1000000;
            swal.fire({
                html: `El tamaño máximo es ${mbSize} MB. ${incorrectFormatMsj}`,
                timer: "1500",
                position: "bottom",
                customClass: {
                    container: "add-to-cart-alert-container",
                    popup: "add-to-cart-alert",
                }
            })
            element.value = "";
        } else {
            createPreview(file, index)
        }
    }



    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">

                {img.map((img, index) =>

                    img.name != 'logo_1' ?

                        img.name != 'slider_1' ?

                            <div className="carousel-item" key={index}>

                                <div style={{
                                    backgroundImage: `url(${urlImg(img.url).default})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    paddingTop: "23.7%",
                                    width: "100%",
                                    borderRadius: "10px",
                                    border: "solid 2px #000"
                                }}
                                    id={`backofice-settings-slider-imagen-editor-viewer-${index}`}
                                    className="img-responsive w-100"
                                    onClick={() => document.getElementById(`backofice-settings-slider-imagen-editor-${index}`).click()}>
                                    <div id="backofice-settings-slider-imagen-editor-viewer-overlay" style={{
                                        opacity: "0.8",
                                        backgroundColor: "#00000000 !important",
                                        height: "100%",
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "center"
                                    }}>
                                        {/* <i className="bi bi-plus-circle-fill fs-1"></i> */}
                                    </div>
                                </div>

                                <div>
                                    <input type="file" accept="image/png, image/jpeg, image/jpg" className="form-control w-100"
                                        id={`backofice-settings-slider-imagen-editor-${index}`} onChange={(e) => validateSizeFile(e, index)} style={{ display: "none" }} />
                                </div>

                            </div>

                            :

                            <div className="carousel-item active" key={index}>

                                <div style={{
                                    backgroundImage: `url(${urlImg(img.url).default})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    paddingTop: "23.7%",
                                    width: "100%",
                                    borderRadius: "10px",
                                    border: "solid 2px #000"
                                }}
                                    id={`backofice-settings-slider-imagen-editor-viewer-${index}`}
                                    className="img-responsive w-100"
                                    onClick={() => document.getElementById(`backofice-settings-slider-imagen-editor-${index}`).click()}>
                                    <div id="backofice-settings-slider-imagen-editor-viewer-overlay" style={{
                                        opacity: "0.8",
                                        backgroundColor: "#00000000 !important",
                                        height: "100%",
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "center"
                                    }}>
                                        {/* <i className="bi bi-plus-circle-fill fs-1"></i> */}
                                    </div>
                                </div>

                                <div>
                                    <input type="file" accept="image/png, image/jpeg, image/jpg" className="form-control w-100"
                                        id={`backofice-settings-slider-imagen-editor-${index}`} onChange={(e) => validateSizeFile(e, index)} style={{ display: "none" }} />
                                </div>

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

export default Carrousel
