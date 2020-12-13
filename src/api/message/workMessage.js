import axios from 'axios';
import urls from '@/api/urls';
import qs from 'qs';
import { v4 as uuid } from 'uuid';

function convertMessages(messages) {
  return messages.map((value) => {
    return {
      id: value.z_id,
      ownerId: value.z_ownerid,
      date: value.z_date,
      rank: value.z_rank,
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

  let submitData = {
    z_ownerid: ownerId,
  };

  await axios
    .post(urls.queryWorkMessagesByOwnerId, JSON.stringify(submitData))
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
