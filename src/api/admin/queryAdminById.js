import axios from 'axios';
import urls from '@/api/urls';

export default async function queryAdminById(id) {
  let submitData = { a_id: id };

  let tmpResponse = null;

  await axios
    .post(urls.queryAdminById, JSON.stringify(submitData))
    .then((response) => {
      console.log(response);
      tmpResponse = response;
    });

  let tmpTarget = tmpResponse.data.result;
  console.log(tmpResponse);
  console.log(tmpTarget);
  return {
    status: tmpResponse.data.status,
    data: tmpResponse.data.result,
    target: {
      id: tmpTarget.id,
      name: tmpTarget.name,
      gender: tmpTarget.gender,
      password: tmpTarget.password,
      emailAddress: tmpTarget.emailAddress,
      phoneNumber: tmpTarget.phoneNumber,
    },
  };
}
