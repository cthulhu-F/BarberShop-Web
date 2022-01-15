import axios from "axios";
import swal from'sweetalert2';

export const CreateUser = async (userData) => {

  console.log(userData);

  const data = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/Register',
    data: userData
  }).then((response) => {
    return response
  }).catch((response) => {
    return response
  });

  return data.data
}

export const ShowUserRole = async () => {

  let USER_ITEM = {
    user: "",
    role: "",
    roleUser: ""
  }

  const dataUser = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowUser',
  })

  const dataRole = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowRole',
  })

  const dataRoleUser = await axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/ShowRoleUser',
  })

  USER_ITEM.user = dataUser.data;
  USER_ITEM.role = dataRole.data;
  USER_ITEM.roleUser = dataRoleUser.data;

  console.log(USER_ITEM);

  return USER_ITEM

}