import axios from 'axios';
import urls from '@/api/urls';

export default async function logout() {
  let tmpResponse = null;

  await axios.post(urls.logout).then((response) => {
    tmpResponse = response;
  });

  return {
    status: tmpResponse.data.status,
  };
}
