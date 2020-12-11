import axios from 'axios';
import urls from '@/api/urls';

export default async function queryAdminById(id) {
  let submitData = { admin_id: id };

  let tmpResponse = null;

  axios
    .post(urls.queryAdminById, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
    data: tmpResponse.data.data,
  };
}
