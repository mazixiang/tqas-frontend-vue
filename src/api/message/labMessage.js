import axios from 'axios';
import urls from '@/api/urls';
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

  let s_id = uuid();

  let submitData = {
    s_id,
    s_ownerid: teachingMessage.ownerId,
    s_coursename: teachingMessage.courseName,
    s_courseperiod: teachingMessage.coursePeriod,
    s_classname: teachingMessage.className,
    s_classsize: teachingMessage.classSize,
  };

  await axios
    .post(urls.addLabMessage, JSON.stringify(submitData))
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
    s_id: messageId,
  };

  await axios
    .post(urls.deleteLabMessage, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.response,
  };
}

async function queryLabMessagesByOwnerId(ownerId) {
  let tmpResponse = null;

  let submitData = {
    s_ownerid: ownerId,
  };

  await axios
    .post(urls.queryLabMessagesByOwnerId, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  let messages = tmpResponse.data.result.slice();

  let data = convertMessages(messages);

  return {
    status: tmpResponse.data.status,
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
