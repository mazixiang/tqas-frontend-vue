import axios from 'axios';
import urls from '@/api/urls';

export default async function (newAdmin) {
  let submitData = {
    a_id: newAdmin.id,
    a_name: newAdmin.name,
    a_gender: newAdmin.gender,
    a_password: newAdmin.password,
    a_email: newAdmin.emailAddress,
    a_phone: newAdmin.phoneNumber,
  };

  let tmpResponse = null;

  axios.post(urls.updateAdmin, JSON.stringify(submitData)).then((response) => {
    tmpResponse = response;
  });

  return {
    status: tmpResponse.data.status,
  };
}
