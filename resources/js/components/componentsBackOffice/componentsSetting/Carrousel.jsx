import React from "react";

import { Carousel } from "react-bootstrap";
import { useState } from "react";



const Carrousel = ({imgArray})=>{

    const [index2, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const urlImg = require.context('../../../../asset/slider', true);

    function createPreview(file,index) {
        var imgCodified = URL.createObjectURL(file);
        const imgViewer = document.querySelector(`#backofice-settings-slider-imagen-editor-viewer-${index}`);
        imgViewer.style.backgroundImage = `url(${imgCodified})`;
    }
    
      const validateSizeFile= (event, index)=>{
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
                timer:"1500", 
                position: "bottom",
                customClass : {
                container: "add-to-cart-alert-container",
                popup:"add-to-cart-alert",
                }
            })
            element.value = "";
        } else {
            createPreview(file, index)
        }
      }

      
  
    return (
        <div>
            <Carousel activeIndex={index2} onSelect={handleSelect} variant="dark">
                {imgArray.map((img,index)=>
                    <Carousel.Item >
                    <div className="d-flex justify-content-center mb-1 col-xl-12 mb-3 text-darx fs-1 row" key={index} >
                            
                                <div className="col-12 mb-3">
                                <div style={{ backgroundImage: `url(${urlImg(img).default})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    paddingTop:"23.7%",
                                    width:"100%",
                                    borderRadius:"10px",
                                    border:"solid 2px #000"}}
                                    id={`backofice-settings-slider-imagen-editor-viewer-${index}`}
                                className="img-responsive w-100"
                                onClick={()=>document.getElementById(`backofice-settings-slider-imagen-editor-${index}`).click()}>
                                    <div id="backofice-settings-slider-imagen-editor-viewer-overlay" style={{
                                        opacity:"0.8",
                                        backgroundColor:"#00000000 !important",
                                        height: "100%",
                                        width:"100%",
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "center"}}>
                                        {/* <i className="bi bi-plus-circle-fill fs-1"></i> */}
                                    </div>

                                </div>
                                </div>

                                <div>
                                <input type="file" accept="image/png, image/jpeg, image/jpg" className="form-control w-100" 
                                    id={`backofice-settings-slider-imagen-editor-${index}`} onChange={(e)=>validateSizeFile(e,index)} style={{display:"none"}}/>
                                
                                </div>
                            </div>
                    <Carousel.Caption>
                        <i className="bi bi-plus-circle-fill fs-4"></i>
                        <div className="col-12 col-xl-12 mb-3 border-bottom">
                            <span className="fw-bold fs-4 font-h1">Imagen {index+1}</span>
                        </div>
                        
                    </Carousel.Caption>
                    </Carousel.Item>
                    
                    )}
                
            </Carousel>
            <style>{`
                .carousel-indicators {
                    display : none;
                    `}
            </style>
        </div>
      
    );
  }

export default Carrousel
