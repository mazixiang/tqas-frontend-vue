import axios from 'axios';
import urls from '@/api/urls';
import qs from 'qs';
import { v4 as uuid } from 'uuid';

function convertMessages(messages) {
  return messages.map((value) => {
    return {
      id: value.s_id,
      ownerId: value.s_ownerid,
      courseName: value.s_coursename,
      coursePeriod: value.s_courseperiod,
      className: value.s_classname,
      classSize: value.s_classsize,
    };
  });
}

async function addLabMessage(teachingMessage) {
  let tmpResponse = null;

  let id = uuid();

  let submitData = {
    id,
    ownerId: teachingMessage.ownerId,
    courseName: teachingMessage.courseName,
    coursePeriod: teachingMessage.coursePeriod,
    className: teachingMessage.className,
    classSize: teachingMessage.classSize,
  };

  await axios
    .post(urls.addLabMessage, qs.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
  };
}

async function deleteLabMessage(messageId) {
  let tmpResponse = null;

  let submitData = {
    t_id: messageId,
  };

  await axios
    .post(urls.deleteLabMessage, qs.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.response,
  };
}

async function queryLabMessagesByOwnerId(ownerId) {
  let tmpResponse = null;
  let messages = null;

  await queryAllLabMessages().then((response) => {
    tmpResponse = response;
    messages = response.data.slice();
  });

  let data = messages.filter((message) => message.ownerId === ownerId);

  return {
    status: tmpResponse.status,
    data,
  };
}

async function queryAllLabMessages() {
  let tmpResponse = null;
  await axios.get(urls.queryAllLabMessages).then((response) => {
    tmpResponse = response;
  });

  let messages = tmpResponse.data.result.slice();
  let data = convertMessages(messages);

  return {
    status: tmpResponse.data.status,
    data,
  };
}

export {
  addLabMessage,
  deleteLabMessage,
  queryLabMessagesByOwnerId,
  queryAllLabMessages,
};
