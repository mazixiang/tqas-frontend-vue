import axios from 'axios';
import urls from '@/api/urls';

export default async function queryAllAdmins() {
  let tmpResponse = null;

  await axios.get(urls.queryAllAdmins).then((response) => {
    console.log(response);
    tmpResponse = response;
    // switch (response.data.status) {
    // case 'success':
    //   this.admins = response.data.data.slice();
    //   break;
    // case 'err-user-not-login':
    //   this.$router.push('/login');
    //   break;

    // }
  });

  return {
    status: tmpResponse.data.status,
    data: tmpResponse.data.data,
  };
}
