import axios from "axios"

export const UpdateOrderTurn = async (put) => {
  console.log(put);

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

export const CreateOrderTurn = async (post) => {
  console.log(post);

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

export const ShowConfigTurn = async () => {
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

  let revenew = [];
  data.data.map((item) => {
    item.days = JSON.parse(item.days);
    revenew.push(item)
  })

  return revenew
}


export default (CreateOrderTurn, ShowConfigTurn, ShowConfigTurn);