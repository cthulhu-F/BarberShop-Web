import axios from "axios";
import swal from'sweetalert2';

export const Authorization = async (dataForm) => {

  let access = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/Login',
    data: dataForm
  }).then(
    result => {
      return result
    }).catch(
      result => {
        return  swal.fire({
          icon: 'error',
          title: 'Error de conexion',
          text: 'Error de conexion, vuelva a intentar mas tarde',
          showConfirmButton: false,
        })
      }
    );

  return await access;
}

export default (Authorization);









