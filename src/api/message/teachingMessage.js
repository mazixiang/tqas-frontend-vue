import axios from 'axios';
import urls from '@/api/urls';
import { v4 as uuid } from 'uuid';

function convertMessages(messages) {
  return messages.map((value) => {
    return {
      id: value.tm_id,
      ownerId: value.tm_ownerid,
      courseName: value.tm_coursename,
      coursePeriod: value.tm_courseperiod,
      className: value.tm_classname,
      classSize: value.tm_classsize,
    };
  });
}

async function addTeachingMessage(teachingMessage) {
  let tmpResponse = null;

  let tm_id = uuid();

  let submitData = {
    tm_id,
    tm_ownerid: teachingMessage.ownerId,
    tm_coursename: teachingMessage.courseName,
    tm_courseperiod: teachingMessage.coursePeriod,
    tm_classname: teachingMessage.className,
    tm_classsize: teachingMessage.classSize,
  };

  await axios
    .post(urls.addTeachingMessage, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
  };
}

async function deleteTeachingMessage(messageId) {
  let tmpResponse = null;

  let submitData = {
    tm_id: messageId,
  };

  await axios
    .post(urls.deleteTeachingMessage, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.response,
  };
}

async function queryTeachingMessagesByOwnerId(ownerId) {
  let tmpResponse = null;

  let submitData = {
    tm_ownerid: ownerId,
  };

  await axios
    .post(urls.queryTeachingMessagesByOwnerId, JSON.stringify(submitData))
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

async function queryAllTeachingMessages() {
  let tmpResponse = null;
  await axios.get(urls.queryAllTeachingMessages).then((response) => {
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
  addTeachingMessage,
  deleteTeachingMessage,
  queryTeachingMessagesByOwnerId,
  queryAllTeachingMessages,
};
