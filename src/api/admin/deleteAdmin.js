import axios from 'axios';
import urls from '@/api/urls';

export default async function deleteAdmin(id) {
  let submitData = { admin_id: id };

  let tmpResponse = null;

  await axios
    .post(urls.deleteAdmin, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
      console.log(response);
    });

  return {
    status: tmpResponse.data.status
  }
}
