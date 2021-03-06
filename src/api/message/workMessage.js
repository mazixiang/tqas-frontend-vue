import axios from 'axios';
import urls from '@/api/urls';
import qs from 'qs';
import { v4 as uuid } from 'uuid';

function convertMessages(messages) {
  return messages.map((value) => {
    return {
      id: value.zId,
      ownerId: value.zOwnerId,
      date: value.zDate,
      rank: value.zRank,
    };
  });
}

async function addWorkMessage(workMessage) {
  let tmpResponse = null;

  let id = uuid();

  let submitData = {
    id,
    ownerId: workMessage.ownerId,
    date: workMessage.date,
    zrank: workMessage.rank,
  };

  await axios
    .post(urls.addWorkMessage, qs.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
  };
}

async function deleteWorkMessage(messageId) {
  let tmpResponse = null;

  let submitData = {
    z_id: messageId,
  };

  await axios
    .post(urls.deleteWorkMessage, qs.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.response,
  };
}

async function queryWorkMessagesByOwnerId(ownerId) {
  let tmpResponse = null;
  let messages = null;

  await queryAllWorkMessages().then((response) => {
    tmpResponse = response;
    messages = response.data.slice();
  });

  let data = messages.filter((message) => message.ownerId === ownerId);

  return {
    status: tmpResponse.status,
    data,
  };
}

async function queryAllWorkMessages() {
  let tmpResponse = null;
  await axios.get(urls.queryAllWorkMessages).then((response) => {
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
  addWorkMessage,
  deleteWorkMessage,
  queryWorkMessagesByOwnerId,
  queryAllWorkMessages,
};
