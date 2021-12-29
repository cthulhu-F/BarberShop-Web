import React from "react"

import swal from "sweetalert2";

import "../../../../css/ModalProductEditor.css"

 

const ModalProductEditor = ({editableProduct, saveProductConfig,allCategories, newProduct =false})=>{

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var todayString =  dd +'/'+ mm + '/'+yyyy;


    const urlImg = require.context('../../../../asset/product', true);

    
    function saveConfigChanges(){
        const parent = document.getElementById(`modalProductEditor${editableProduct.id}`)
        const nameField = parent.querySelector("#backofice-product-name-editor");
        const descriptionField = parent.querySelector("#backofice-product-description-editor");
        const categoryField = parent.querySelector("#backofice-product-category-editor");
        const stockField = parent.querySelector("#backofice-product-stock-editor");
        const priceField = parent.querySelector("#backofice-product-price-editor");

        const currentCategoryId =  editableProduct.categories_id;
        const selectedCategroyId = categoryField.options[categoryField.selectedIndex].id

        const currentCategoryName = allCategories.find(category=> category.id ==currentCategoryId).name
        const selectedCategoryName = allCategories.find(category=> category.id ==selectedCategroyId).name

        if (nameField.value != "" || descriptionField.value != "" || selectedCategroyId != currentCategoryId   || stockField.value != ""  || priceField.value !="" ) {

            let nameAlert     =   nameField.value == "" ? "" : ` <span style="font-weight:700;" >Nombre </span><br> ${nameField.placeholder} ---> ${nameField.value} <br> <br>  `;
            let descriptionAlert     =   descriptionField.value == "" ? "" : `<span style="font-weight:700;" >Descripción </span><br>  ${descriptionField.placeholder} ---> ${descriptionField.value} <br><br>`;
            let categoryAlert =
            selectedCategroyId == currentCategoryId
                ? ""
                : `<span style="font-weight:700;" >Categoría </span><br> ${currentCategoryName} ---> ${selectedCategoryName}<br><br>`;
            let stockAlert     =   stockField.value == "" ? "" : `<span style="font-weight:700;" >Stock </span><br>  ${stockField.placeholder} ---> ${stockField.value} <br><br>`;
            let priceAlert     =   priceField.value == "" ? "" : `<span style="font-weight:700;" >Precio </span><br>  ${priceField.placeholder} ---> ${priceField.value} <br><br>`;

        
            swal.fire({
            title: "Atención",
            html: `Esta seguro que desea modificar los siguientes datos?<br><br> 
            ${nameAlert} ${descriptionAlert} ${categoryAlert}${stockAlert}${priceAlert}`, 
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: '#d33',
            confirmButtonText: `Si, Modificar!`   
            }).then((result) => {
                if (result.isConfirmed) {
                    if (nameField.value != ""){
                        saveProductConfig(nameField.value, "name", editableProduct.id);}
                        nameField.value ="";

                    if (descriptionField.value != ""){
                        saveProductConfig(descriptionField.value, "description", editableProduct.id);}
                        descriptionField.value ="";

                    if (selectedCategroyId != currentCategoryId){
                        saveProductConfig(selectedCategroyId, "categories_id", editableProduct.id);}
                        // RESET CATEGORY SELECTOR 

                    if (stockField.value != ""){
                        saveProductConfig(stockField.value, "stock", editableProduct.id);}
                        stockField.value ="";

                    if (priceField.value != ""){
                        saveProductConfig(priceField.value, "price", editableProduct.id);}
                        priceField.value ="";
                    
                    saveProductConfig(todayString, "updated_at", editableProduct.id);

                    swal.fire({
                        text: 'Datos modificados con éxito',
                        timer:"1500", 
                        position: "bottom",
                        customClass : {
                        container: "add-to-cart-alert-container",
                        popup:"add-to-cart-alert",
                        }
                    })
                }else{
                    swal.fire({
                        text: `Ningún dato ha sido modificado.`,
                        timer:"1500", 
                        position: "bottom",
                        customClass : {
                            container: "add-to-cart-alert-container",
                            popup:"add-to-cart-alert",
                        }
                       });
                }
            })
        } else{
            swal.fire({
                text: `Ningún dato ha sido modificado.`,
                timer:"1500", 
                position: "bottom",
                customClass : {
                    container: "add-to-cart-alert-container",
                    popup:"add-to-cart-alert",
                }
            });
        }

    }

    function createPreview(file) {
        var imgCodified = URL.createObjectURL(file);
        const parent = document.getElementById(`modalProductEditor${editableProduct.id}`)
        const imgViewer = parent.querySelector("#backofice-product-imagen-editor-viewer");
        imgViewer.style.backgroundImage = `url(${imgCodified})`;
    }


    const validateSizeFile= (event)=>{
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
            createPreview(file)
        }
    }

 



    return (
        <div className="modal fade" id={`modalProductEditor${editableProduct.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="modalProductEditorLabel" aria-hidden="true">
            <div className="modal-dialog modal-gl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 class="modal-title fw-bold font-h1"> Editar {editableProduct.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <div className="row shadow-sm p-2">
                                <div className="col-xl-3 mb-3">
                                    <div className="input-group">
                                    <span className="input-group-text bg-black text-white border border-black fs-9"
                                        id="basic-addon1">{`ID: ${editableProduct.id}`}</span>
                                    </div>
                                </div>

                                <div className="col-xl-9 mb-3">
                                    <div className="input-group">
                                    <input type="text" className="form-control fs-8" placeholder={editableProduct.name} 
                                        aria-label="Recipient's username" aria-describedby="basic-addon2" disabled={true} id="backofice-product-name-editor"/>
                                    <button className="input-group-text fs-8 bg-black text-white border-black" id="basic-addon2"
                                        onClick={()=> {
                                            if(document.getElementById(`modalProductEditor${editableProduct.id}`).querySelector('#backofice-product-name-editor').disabled){
                                                document.getElementById(`modalProductEditor${editableProduct.id}`).querySelector('#backofice-product-name-editor').disabled = false;
                                            }else{
                                                document.getElementById(`modalProductEditor${editableProduct.id}`).querySelector('#backofice-product-name-editor').disabled= true;
                                            }
                                            }}>
                                        <i class="bi bi-pencil"></i></button>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between mb-1 col-xl-12 mb-3"  >
                                    <span className="me-2 p-2 fw-bold ">Descripción</span>
                                </div>

                                <div className="d-flex justify-content-between mb-1 col-xl-12 mb-3"  >
                                    <textarea type="text" placeholder={editableProduct.description} className="form-control w-100" style={{height:"150px"}} id="backofice-product-description-editor"/>
                                </div>


                                <div className="d-flex justify-content-between mb-1 col-xl-12 mb-3">
                                    <span className="me-2 p-2 fw-bold">Caregoría</span>
                                    <select className="w-50 form-select p-2" id="backofice-product-category-editor">

                                        {allCategories.map(category=>
                                            <option key={category.id} id={category.id} > {category.name}</option>
                                        )}
                                            
                                    </select>
                                </div>

                                <div className="d-flex justify-content-between mb-1 col-xl-12 mb-3" >
                                    <span className="me-2 p-2 fw-bold">Stock</span>

                                    <input type="number"  className="form-control w-50" id="backofice-product-stock-editor"
                                    placeholder={editableProduct.stock}/>
                                </div>

                                <div className="d-flex justify-content-between mb-1 col-xl-12 mb-3" >
                                    <span className="me-2 p-2 fw-bold">Precio</span>

                                    <input type="number"  className="form-control w-50" id="backofice-product-price-editor"
                                    placeholder={`$${editableProduct.price}`}/>
                                </div>

                                <div className="d-flex justify-content-between mb-1 col-xl-12 mb-3"  >
                                    <span className="me-2 p-2 fw-bold ">Imágen</span>

                                </div>

                                <div className="d-flex justify-content-center mb-1 col-xl-12 mb-3 text-darx fs-1"  >
                                
                                            <div style={{ backgroundImage: `url(${urlImg(editableProduct.img).default})`,}} id="backofice-product-imagen-editor-viewer"
                                            className="img-responsive"
                                            onClick={()=>{ document.getElementById(`modalProductEditor${editableProduct.id}`).querySelector("#backofice-product-imagen-editor").click()}}>
                                                <div className="bg-light"  id="backofice-product-imagen-editor-viewer-overlay" style={{
                                                    opacity:"0",
                                                    height:"100%",
                                                    width:"100%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"}}>
                                                    <i class="bi bi-plus-circle-fill"></i>
                                                </div>

                                            </div>
                                </div>
                                <div className="d-flex justify-content-center mb-1 col-xl-12 mb-3" >
                                    <input type="file" accept="image/png, image/jpeg, image/jpg" className="form-control w-100" 
                                        id="backofice-product-imagen-editor" onChange={(e)=>validateSizeFile(e)} style={{display:"none"}} />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        {
                            newProduct 
                            
                            ? 
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={()=>console.log('newproduct')}>Crear Producto</button>

                            :
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={()=>saveConfigChanges()}>Guardar cambios</button>

                        }
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalProductEditor