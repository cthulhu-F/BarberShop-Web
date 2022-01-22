import axios from "axios";
import swal from 'sweetalert2';

export const UpdateOrderSale = async (formData, selectItem) => {

  if (selectItem == false) {

    const data = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/UpdateOrderSale',
      data: formData
    }).then((results) => {

      return swal.fire({
        text: results.data.message,
        timer: "1500",
        position: "bottom",
        showConfirmButton: false,
        customClass: {
          container: "add-to-cart-alert-container",
          popup: "add-to-cart-alert",
        }
      })
    }).catch((results) => {
      return results
    });

  } else {

    const data = selectItem.map(async (item) => {

      formData.append('id', item);

      const data = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/UpdateOrderSale',
        data: formData
      }).then((results) => {

        return swal.fire({
          text: results.data.message,
          timer: "1500",
          position: "bottom",
          showConfirmButton: false,
          customClass: {
            container: "add-to-cart-alert-container",
            popup: "add-to-cart-alert",
          }
        })
      }).catch((results) => {
        return swal.fire({
          text: 'Se a producido un error! vuelva a intentarlo mas tarde.',
          timer: "1500",
          position: "bottom",
          showConfirmButton: false,
          customClass: {
            container: "add-to-cart-alert-container",
            popup: "add-to-cart-alert",
          }
        })
      });



    })

  }

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