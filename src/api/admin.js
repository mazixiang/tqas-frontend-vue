import axios from 'axios';
import urls from '@/api/urls';
import qs from 'qs';

function convertToSubmitData(admin) {
  return {
    a_id: admin.id,
    a_name: admin.name,
    a_gender: admin.gender,
    a_password: admin.password,
    a_email: admin.emailAddress,
    a_phone: admin.phoneNumber,
  };
}

function convertAdmin(admin) {
  return {
    id: admin.a_id,
    name: admin.a_name,
    gender: admin.a_gender,
    password: admin.a_password,
    emailAddress: admin.a_email,
    phoneNumber: admin.a_phone,
  };
}

function convertAdmins(admins) {
  return admins.map((admin) => convertAdmin(admin));
}

async function addAdmin(adminData) {
  let submitData = convertToSubmitData(adminData);

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

async function adminLogin(adminData) {
  let submitData = {
    username: adminData.id,
    password: adminData.password,
  };

  let tmpResponse = null;

  await axios
    .post(urls.adminLogin, qs.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
  };
}

async function deleteAdmin(id) {
  let submitData = { a_id: id };

  let tmpResponse = null;

  await axios
    .post(urls.deleteAdmin, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
      console.log(response);
    });

  return {
    status: tmpResponse.data.status,
  };
}

async function queryAdminById(id) {
  let submitData = { a_id: id };

  let tmpResponse = null;

  await axios
    .post(urls.queryAdminById, JSON.stringify(submitData))
    .then((response) => {
      console.log(response);
      tmpResponse = response;
    });

  let admin = convertAdmin(tmpResponse.data.result);

  return {
    status: tmpResponse.data.status,
    data: admin,
  };
}

async function queryAllAdmins() {
  let tmpResponse = null;

  await axios.get(urls.queryAllAdmins).then((response) => {
    console.log(response);
    tmpResponse = response;
  });

  let admins = convertAdmins(tmpResponse.data.result.slice());

  return {
    status: tmpResponse.data.status,
    data: admins,
  };
}

async function updateAdmin(newAdmin) {
  console.log(newAdmin);
  let submitData = convertToSubmitData(newAdmin);

  let tmpResponse = null;

  await axios
    .post(urls.updateAdmin, JSON.stringify(submitData))
    .then((response) => {
      console.log(response);
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
  };
}

export {
  addAdmin,
  adminLogin,
  deleteAdmin,
  queryAdminById,
  queryAllAdmins,
  updateAdmin,
};
