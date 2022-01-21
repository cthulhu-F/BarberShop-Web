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

export const UpdateCategory = async (formData, selectCategory) => {

  
  if(selectCategory == false){

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

  }else{
   const data = selectCategory.map(async (category) => {
    
    formData.append('id', category);

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
   
  })

  }

  

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

export const ShowUnitProduct = async (id) => {

  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowUnitItem?id='+id,
  })

  return data.data
}

export const ShowActiveProducts = async () => {
  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowActiveItem',
  })

  return data.data
}

export const ShowAllProducts = async () => {
  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowAllItem',
  })

  return data.data
}

export const CreateProducts = async (formData) => {
  
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

export const UpdateProducts = async (formData, selectProduct) => {

  if(selectProduct == false){

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

  } else {

   const data = selectProduct.map(async (product) => {

    formData.append('id', product);

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

   });



  }

  

}

//END API RESOURCE PRODUCT


export default (
  CreateCategory, 
  UpdateCategory, 
  ShowAllCategories,
  ShowActiveProducts,
  ShowAllProducts,
  CreateProducts,
  UpdateProducts
)

