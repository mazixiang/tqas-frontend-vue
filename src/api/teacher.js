import axios from 'axios';
import urls from '@/api/urls';
import qs from 'qs';

function convertToSubmitData(teacherData) {
  return {
    t_id: teacherData.id,
    t_name: teacherData.name,
    t_gender: teacherData.gender,
    t_password: teacherData.password,
    t_email: teacherData.emailAddress,
    t_phone: teacherData.phoneNumber,
  };
}

function convertFromServerData(serverData) {
  return {
    id: serverData.t_id,
    name: serverData.t_name,
    gender: serverData.t_gender,
    password: serverData.t_password,
    emailAddress: serverData.t_email,
    phoneNumber: serverData.t_phone,
  };
}

async function addTeacher(teacherData) {
  let submitData = convertToSubmitData(teacherData);

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

  await axios.get(urls.queryAllTeachers).then((response) => {
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
    .post(urls.queryTeacherById, JSON.stringify(submitData))
    .then((response) => {
      console.log(response);
      tmpResponse = response;
    });

  let data = convertFromServerData(tmpResponse.data.result);

  return {
    status: tmpResponse.data.status,
    data,
  };
}

async function teacherLogin(teacherData) {
  let submitData = {
    username: teacherData.id,
    password: teacherData.password,
  };

  let tmpResponse = null;

  await axios
    .post(urls.teacherLogin, qs.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
  };
}

async function updateTeacher(newTeacher) {
  let submitData = convertToSubmitData(newTeacher);

  let tmpResponse = null;

  axios
    .post(urls.updateTeacher, JSON.stringify(submitData))
    .then((response) => {
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
