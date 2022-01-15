import axios from "axios";
import swal from'sweetalert2';

export const UpdateOrderSale = async (formData) => {

  const data = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/UpdateOrderSale',
    data: formData
  }).then((results)=> {

    swal.fire({
      text: results.data.message,
      timer:"1500", 
      position: "bottom",
      showConfirmButton: false,
      customClass : {
      container: "add-to-cart-alert-container",
      popup:"add-to-cart-alert",
      }
  })


  });

  
  return data.data

}

export const ShowOrderSale = async () => {

    const data = await axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/ShowOrderSale',
    })
  
    let dataDecode = [];
    data.data.map((item) => {
      item.resumen = JSON.parse(item.resumen);
      item.dataClient = JSON.parse(item.dataClient);
      dataDecode.push(item)
    })
  
    return dataDecode

}