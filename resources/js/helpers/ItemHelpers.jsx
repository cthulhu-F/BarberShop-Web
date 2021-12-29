import axios from 'axios';



export const ShowAllProducts = async () => {
  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/Item',
  })

  return data.data
}

const CreateNewProduct = async () => {
  
}


export default ShowAllProducts;