// test_url 是开发使用的 Mock Server URL
// server_url 是实际使用的 Tomcat Server URL
let base_urls = {
  test_url: 'https://9017726d-aa51-4c85-aa24-6862ccefd556.mock.pstmn.io',
  server_url: 'http://localhost:7999',
};

let base_url = base_urls.server_url;

let paths = {
  // 注册登录
  teacherLogin: '/login',
  adminLogin: '/adminLogin',
  register: '/register',

  // admin 管理员
  queryAllAdmins: '/queryAllAdmin.hrb',
  queryAdminById: '/queryByIDAdmin.hrb',
  addAdmin: '/insertAdmin.hrb',
  deleteAdmin: '/deleteAdmin.hrb',
  updateAdmin: '/updateAdmin.hrb',

  // teacher 教师
  queryAllTeachers: '/queryAllTeacher.hrb',
  queryTeacherById: '/queryByIDTeacher.hrb',
  addTeacher: '/insertTeacher.hrb',
  deleteTeacher: '/deleteTeacher.hrb',
  updateTeacher: '/updateTeacher.hrb',

  // workload 工作量
  getTeachingWorkload: '/teachMessage.hrb',
  getLabWorkload: '/testMessage.hrb',
  getWorkWorkload: '/bookMessage.hrb',
  getIssueWorkload: '/topicMessage.hrb',
  getPatentWorkload: '/patentMessage.hrb',
  getPaperWorkload: '/paperMessage.hrb',

  // coefficient 系数
  updateCoefficient: '/updateCoeModify.hrb',
  getCoefficient: '/queryTheCoe.hrb',

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
  addWorkMessage: '/addWorkMessage',
  deleteWorkMessage: '/deleteWorkMessage',
  queryWorkMessageByOwnerId: '/queryWorkMessageByOwnerId',
  queryAllWorkMessages: '/queryAllWorkMessages',

  // paper message 论文信息
  addPaperMessage: '/addPaperMessage',
  deletePaperMessage: '/deletePaperMessage',
  queryPaperMessageByOwnerId: '/queryPaperMessageByOwnerId',
  queryAllPaperMessages: '/queryAllPaperMessages',

  // issue message 课题信息
  addIssueMessage: '/addIssueMessage',
  deleteIssueMessage: '/deleteIssueMessage',
  queryIssueMessageByOwnerId: '/queryIssueMessageByOwnerId',
  queryAllIssueMessages: '/queryAllIssueMessages',

  // patent message 专利信息
  addPatentMessage: '/addPatentMessage',
  deletePatentMessage: '/deletePatentMessage',
  queryPatentMessageByOwnerId: '/queryPatentMessageByOwnerId',
  queryAllPatentMessages: '/queryAllPatentMessages',
};

// 根据 base_url 和 paths 生成完整的 url

let urls = Object.fromEntries(
  Object.entries(paths).map(([key, value]) => [key, base_url + value])
);

export default urls;
