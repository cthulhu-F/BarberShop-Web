import axios from "axios";

export const Authorization = async (post) => {

  let access = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/auth/Login',
    data: post
  }).then(
    result => {
      return result.data.access_token;
    }).catch(
      result => {
        return "ERROR";
      }
    );

  sessionStorage.setItem("TOKEN", access)

  return await access;
}

export const getToken = async () => {
  let token = sessionStorage.getItem("TOKEN");
  return token; 
}

export const clearToken = async () => {
  sessionStorage.clear()
}

export const VerifyAuth = async () => {

  let token = await getToken();
  let config = { headers: { Authorization: 'Bearer ' + token } }

  let key = await axios.get('http://127.0.0.1:8000/api/Profile', config
  ).then((res) => {
    return res
  }).catch((res) => {
    return res;
  });

  return key
  
}


export default (Authorization, getToken, VerifyAuth);









