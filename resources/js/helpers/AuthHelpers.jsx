import axios from "axios";

export const Authorization = async (post) => {

  let access = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/Login',
    data: post
  }).then(
    result => {
      return result;
    }).catch(
      result => {
        return result;
      }
    );

  return await access;
}

export default (Authorization);









