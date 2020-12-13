import axios from 'axios';
import urls from '@/api/urls';
import qs from 'qs';
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
    .post(urls.addTeachingMessage, qs.stringify(submitData))
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
    t_id: messageId,
  };

  await axios
    .post(urls.deleteTeachingMessage, qs.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.response,
  };
}

async function queryTeachingMessagesByOwnerId(ownerId) {
  let tmpResponse = null;
  let messages = null;

  await queryAllTeachingMessages().then((response) => {
    tmpResponse = response;
    messages = response.data.slice();
  });

  let data = messages.filter((message) => message.ownerId === ownerId);

  return {
    status: tmpResponse.status,
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
