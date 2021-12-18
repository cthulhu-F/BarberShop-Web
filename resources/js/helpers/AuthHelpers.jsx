import axios from "axios";
import { result } from "lodash";




export const Authorization = async (post) => {

  let status = status

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

  localStorage.setItem('login', JSON.stringify(access))

  return await access;

}

export const getToken = async () => {
  let tokenStatus = await JSON.parse(localStorage.getItem('login'))
  return await tokenStatus;
}



export function InitInterceptors() {
  axios.interceptors.request.use(config => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        //deleteToken();
        window.location = "/";
      } else {
        return Promise.reject(error);
      }
    }
  );
}




export default (Authorization, getToken, InitInterceptors);









