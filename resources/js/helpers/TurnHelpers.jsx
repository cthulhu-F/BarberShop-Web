import axios from "axios";
import swal from'sweetalert2';

export const UpdateOrderTurn = async (put) => {

  const data = await axios({
    method: 'put',
    url: 'http://127.0.0.1:8000/api/UpdateOrderTurn',
    data: {
      id: put.id,
      status: put.status
    }
  });

  return data.data
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

export const UpdateCondigTurn = async (status, id) => {
  console.log(status);
  console.log(id);

  
  const data = await axios({
    method: 'put',
    url: 'http://127.0.0.1:8000/api/UpdateConfigTurn',
    data: {
      id: id, 
      status: status
    }
  });

  return data.data

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


export const ShowConfigTurn = async (configDay, configTurn) => {
  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowConfigTurn',
  })

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