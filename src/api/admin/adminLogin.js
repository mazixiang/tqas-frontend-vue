import axios from 'axios';
import urls from '@/api/urls';

export default async function login(adminData) {
  let submitData = {
    username: adminData.username,
    password: adminData.password,
  };

  let tmpResponse = null;

  await axios
    .post(urls.adminLogin, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
      console.log(response);
      // return {
      //   status: response.data.status,
      // };
    });

  return {
    status: tmpResponse.data.status
  };
}
