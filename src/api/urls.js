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

  // admin 管理员
  queryAllAdmins: '/queryAllAdmins',
  queryAdminById: '/queryAdminById',
  addAdmin: '/addAdmin',
  deleteAdmin: '/deleteAdmin',
  updateAdmin: '/updateAdmin',

  // teacher 教师
  queryAllTeachers: '/queryAllTeachers',
  queryTeacherById: '/queryTeacherById',
  addTeacher: '/addTeacher',
  deleteTeacher: '/deleteTeacher',
  updateTeacher: 'updateTeacher',

  // workload 工作量
  getTeachingWorkload: '/getTeachingWorkload',
  getLabWorkload: '/getLabWorkload',
  getWorkWorkload: '/getWorkWorkload',
  getIssueWorkload: '/getIssueWorkload',
  getPatentWorkload: '/getPatentWorkload',
  getPaperWorkload: '/getPaperWorkload',

  // coefficient 系数
  updateCoefficient: '/updateCoefficient',
  getCoefficient: '/getCoefficient',

  // message 信息

  // teaching message 教学信息
  addTeachingMessage: '/addTeachingMessage',
  deleteTeachingMessage: '/deleteTeachingMessage',
  queryTeachingMessagesByOwnerId: '/queryTeachingMessagesByOwnerId',
  queryAllTeachingMessages: '/queryAllTeachingMessages',

  // lab message 实验信息
  addLabMessage: '/addLabMessage',
  deleteLabMessage: '/deleteLabMessage',
  queryLabMessageByOwnerId: '/queryLabMessageByOwnerId',
  queryAllLabMessages: '/queryAllLabMessages',

  // work message 著作信息
  getWorkMessage: '/getWorkMessage',
  deleteWorkMessage: '/deleteWorkMessage',
  queryWorkMessageByOwnerId: '/queryWorkMessageByOwnerId',
  queryAllWorkMessages: '/queryAllWorkMessages',
};

// 根据 base_url 和 paths 生成完整的 url

let urls = Object.fromEntries(
  Object.entries(paths).map(([key, value]) => [key, base_url + value])
);

export default urls;
