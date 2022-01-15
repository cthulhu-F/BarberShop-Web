import axios from "axios";
import swal from'sweetalert2';

//START API RESOURCE CUSTOMER

export const UpdateCustomer = async (formData) => {

  const response = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/UpdateCustomer',
    data: formData
  }).then((results) => {
    return  swal.fire({
      text: results.data.message,
      timer:"1500", 
      position: "bottom",
      showConfirmButton: false,
      customClass : {
      container: "add-to-cart-alert-container",
      popup:"add-to-cart-alert",
      }
  })
  }).catch((results) => {
    return swal.fire({
      icon: 'error',
      title: 'Error de conexion',
      text: 'Error de conexion, vuelva a intentar mas tarde',
      showConfirmButton: false,
    })
  })
  
}

export const ShowCustomer = async () => {

  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowCustomer',
  });

  let dataDecode = [];
  
  data.data.map((item) => {
    item.social_networks = JSON.parse(item.social_networks);
    dataDecode.push(item)
  })

  return data.data

}

//END API RESOURCE CUSTOMER

//START API RESOURCE GLOBAL IMG

export const UpdateGlobalImg = async (allImg) => {

  let data = allImg.map(async (data) => {
    
    let formData = new FormData();

    console.log(data);

    formData.append('name', data.name);
    formData.append('img', data.file);

    const response = await axios({
      method: 'post',
      url: 'http:/127.0.0.1:8000/api/UpdateGlobalImg',
      data: formData
    }).then((results) => {
      return  swal.fire({
        text: results.data.message,
        timer:"1500", 
        position: "bottom",
        showConfirmButton: false,
        customClass : {
        container: "add-to-cart-alert-container",
        popup:"add-to-cart-alert",
        }
    })
    }).catch((results) => {
      return results
    })

  });

  return data.data
}

export const ShowGlobalImg = async () => {

  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowGlobalImg',
  });
  
  return data.data

}


//END API RESOURCE GLOBAL IMG


export default (
  ShowCustomer,

  UpdateGlobalImg,
  ShowGlobalImg
)