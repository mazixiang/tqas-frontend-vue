import axios from 'axios';
import urls from '@/api/urls';

export default async function (newAdmin) {
  let submitData = {
    id: newAdmin.id,
    name: newAdmin.name,
    gender: newAdmin.gender,
    password: newAdmin.password,
    emailAddress: newAdmin.emailAddress,
    phoneNumber: newAdmin.phoneNumber,
  };

  let tmpResponse = null;

  axios.post(urls.updateAdmin, JSON.stringify(submitData)).then((response) => {
    tmpResponse = response;
  });

  return {
    status: tmpResponse.data.status,
  };
}
