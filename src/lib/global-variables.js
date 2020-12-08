// test_url 是开发使用的 Mock Server URL
// server_url 是实际使用的 Tomcat Server URL
let base_urls = {
  test_url: 'https://9017726d-aa51-4c85-aa24-6862ccefd556.mock.pstmn.io',
  server_url: '',
};

let base_url = base_urls.test_url;

let paths = {
  login: '/login',
  register: '/register',
};

let urls = {
  login: base_url + paths.login,
  register: base_url + paths.register,
};

export default urls;
