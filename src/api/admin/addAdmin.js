import axios from 'axios';
import urls from '@/api/urls';

export default async function addAdmin(adminData) {
  let submitData = {
    a_id: adminData.id,
    a_name: adminData.email,
    a_gender: adminData.gender,
    a_password: adminData.password,
    a_email: adminData.emailAddress,
    a_phone: adminData.phoneNumber,
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
