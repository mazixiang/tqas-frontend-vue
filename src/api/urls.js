// test_url 是开发使用的 Mock Server URL
// server_url 是实际使用的 Tomcat Server URL
let base_urls = {
  test_url: 'https://9017726d-aa51-4c85-aa24-6862ccefd556.mock.pstmn.io',
  server_url: 'http://localhost:7999',
};

let base_url = base_urls.test_url;

let paths = {
  login: '/login',
  adminLogin: '/admin/login',
  register: '/register',
  queryAllAdmins: '/queryAllAdmins',
  queryAdminById: '/queryAdminById',
  deleteAdmin: '/deleteAdmin',
  queryAllTeachers: '/queryAllTeachers',
};

// 根据 base_url 和 paths 生成完整的 url

let urls = Object.fromEntries(
  Object.entries(paths).map(([key, value]) => [key, base_url + value])
);

export default urls;
