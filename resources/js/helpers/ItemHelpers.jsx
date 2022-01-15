import axios from 'axios';
import swal from'sweetalert2';

//START API RESOURCE CATEGORY

export const CreateCategory = async (formData) => {

  const data = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/CreateCategory',
    data: formData
  }).then((response) => {

    return swal.fire({
      text: response.data.message,
      timer: "2000",
      position: "bottom",
      showConfirmButton: false,
      customClass: {
          container: "add-to-cart-alert-container",
          popup: "add-to-cart-alert",
      }
    });

  }).catch((response) => {
    return response
  });

}

export const UpdateCategory = async (formData) => {

  const data = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/UpdateCategory',
    data: formData
  }).then((response) => {
    return swal.fire({
      text: response.data.message,
      timer: "2000",
      position: "bottom",
      showConfirmButton: false,
      customClass: {
          container: "add-to-cart-alert-container",
          popup: "add-to-cart-alert",
      }
    });
  }).catch((response) => {
    return response
  });

}

export const ShowAllCategories = async () => {
  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowCategorie',
  });

  return data.data
}

//END API RESOURCE CATEGORY

//START API RESOURCE PRODUCT

export const ShowAllProducts = async () => {
  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowItem',
  })

  return data.data
}

export const CreateProduct = async (formData) => {
  
  const data = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/CreateProduct',
    data: formData
  }).then((response) => {

    return swal.fire({
      text: response.data.message,
      timer: "2000",
      position: "bottom",
      showConfirmButton: false,
      customClass: {
          container: "add-to-cart-alert-container",
          popup: "add-to-cart-alert",
      }
    });

  }).catch((response) => {
    return response
  });

  return data.data

}

export const UpdateProduct = async (formData) => {

  const data = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/UpdateProduct',
    data: formData
  }).then((response) => {
    return swal.fire({
      text: response.data.message,
      timer: "1500",
      position: "bottom",
      showConfirmButton: false,
      customClass: {
          container: "add-to-cart-alert-container",
          popup: "add-to-cart-alert",
      }
  })
  }).catch((response) => {
    return response
  });

}

//END API RESOURCE PRODUCT


export default (
  CreateCategory, 
  UpdateCategory, 
  ShowAllCategories,
  ShowAllProducts,
  CreateProduct,
  UpdateProduct
)

