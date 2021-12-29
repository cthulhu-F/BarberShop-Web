import axios from "axios"


export const CreateOrderTurn = async (post) => {
  console.log(post);

  const data = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/CreateOrderTurn',
    data: post
  }).then((response) => {
    console.log(response);
  }).catch((response) => {
    console.log(response);
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