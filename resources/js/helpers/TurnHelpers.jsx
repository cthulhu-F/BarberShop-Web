import axios from "axios";
import swal from'sweetalert2';

//START API RESOURCE ORDER TURN

export const UpdateOrderTurn = async (formData, selectItem) => {


  if(selectItem == false){

    const data = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/UpdateOrderTurn',
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

  } else {

   const data = selectItem.map(async (item) => {

    formData.append('id', item);

    const data = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/UpdateOrderTurn',
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

   })


  }
}

export const ShowOrderTurn = async () => {
  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowOrderTurn',
  })

  return data.data
}

export const ShowActiveTurn = async () => {
  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowActiveTurn',
  })

  return data.data
}

export const CreateOrderTurn = async (post) => {

  const data = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/CreateOrderTurn',
    data: post
  }).then((response) => {
    return response
  }).catch((response) => {
    return response
  })

  return data
}

//END API RESOURCE ORDER TURN

//START API RESOURCE CONFIG TURN

export const UpdateConfigTurn = async (formData, selectItem) => {

  if(selectItem == false){

    const data = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/UpdateConfigTurn',
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

  } else {

    const data = selectItem.map(async (item) => {

      formData.append('id', item);

      const data = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/UpdateConfigTurn',
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

    })

  }
  
  

}

export const CreateConfigTurn = async (chair, day) => {

  let dayJSON = {
    days: JSON.stringify(day),
    name: chair.name
  };

  const resDay = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/CreateConfigDay',
    data: dayJSON
  }).then((response) => {
    return response
  }).catch((response) => {
    return response
  });

  const resTurn = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/CreateConfigTurn',
    data: chair
  }).then((response) => {
    return response
  }).catch((response) => {
    return response
  });

  return resTurn.data

}

export const ShowConfigTurn = async (configDay, configTurn) => {
  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowConfigTurn',
  })

  return data.data
}

//END API RESOURCE CONFIG DAY

export const UpdateConfigDay = async (day) => {

  let dayId = day.id;
  let dayJSON =  JSON.stringify(day.days)

  const data = await axios({
    method: 'put',
    url: 'http://127.0.0.1:8000/api/UpdateConfigDay',
    data: {
      id: dayId, 
      days: dayJSON
    }
  });

  return data.data

}


export const ShowConfigDay = async () => {
  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowConfigDay',
  })

  let dataDecode = [];
  data.data.map((item) => {
    item.days = JSON.parse(item.days);
    dataDecode.push(item)
  })

  return dataDecode
}


export default (
  CreateOrderTurn, 
  ShowConfigTurn, 
  ShowConfigTurn, 
  CreateConfigTurn
  );