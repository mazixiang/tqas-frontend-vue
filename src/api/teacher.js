import axios from 'axios';
import urls from '@/api/urls';

function convertData(teacherData) {
  return {
    t_id: teacherData.id,
    t_name: teacherData.email,
    t_gender: teacherData.gender,
    t_password: teacherData.password,
    t_email: teacherData.emailAddress,
    t_phone: teacherData.phoneNumber,
  };
}

async function addTeacher(teacherData) {
  let submitData = convertData(teacherData);

  let tmpResponse = null;
  await axios
    .post(urls.addTeacher, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
  };
}

async function deleteTeacher(id) {
  let submitData = { t_id: id };

  let tmpResponse = null;

  await axios
    .post(urls.deleteTeacher, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
      console.log(response);
    });

  return {
    status: tmpResponse.data.status,
  };
}

async function queryAllTeachers() {
  let tmpResponse = null;

  await axios.get(urls.queryAllAdmins).then((response) => {
    console.log(response);
    tmpResponse = response;
  });

  return {
    status: tmpResponse.data.status,
    data: tmpResponse.data.result,
  };
}

async function queryTeacherById(id) {
  let submitData = { t_id: id };

  let tmpResponse = null;

  await axios
    .post(urls.queryAdminById, JSON.stringify(submitData))
    .then((response) => {
      console.log(response);
      tmpResponse = response;
    });

  let tmpTarget = tmpResponse.data.result;

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

async function teacherLogin(teacherData) {
  let submitData = {
    t_id: teacherData.id,
    t_password: teacherData.password,
  };

  let tmpResponse = null;

  await axios
    .post(urls.teacherLogin, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
      console.log(response);
    });

  return {
    status: tmpResponse.data.status,
  };
}

async function updateTeacher(newTeacher) {
  let submitData = convertData(newTeacher);

  let tmpResponse = null;

  axios.post(urls.updateAdmin, JSON.stringify(submitData)).then((response) => {
    tmpResponse = response;
  });

  return {
    status: tmpResponse.data.status,
  };
}

export {
  addTeacher,
  deleteTeacher,
  queryAllTeachers,
  queryTeacherById,
  teacherLogin,
  updateTeacher,
};
