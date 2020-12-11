import axios from 'axios';
import urls from '@/api/urls';

export default async function addAdmin(adminData) {
  let submitData = {
    id: adminData.id,
    name: adminData.email,
    gender: adminData.gender,
    password: adminData.password,
    emailAddress: adminData.emailAddress,
    phoneNumber: adminData.phoneNumber,
  };

  let tmpResponse = null;
  await axios
    .post(urls.addAdmin, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
  };
}
