import axios from 'axios';
import urls from '@/api/urls';
import qs from 'qs';

export default async function login(adminData) {
  let submitData = {
    username: adminData.id,
    password: adminData.password,
  };

  let tmpResponse = null;

  await axios
    .post(urls.adminLogin, qs.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
  };
}
