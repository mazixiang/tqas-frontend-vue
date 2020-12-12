import axios from 'axios';
import urls from '@/api/urls';
import { v4 as uuid } from 'uuid';

function convertMessages(messages) {
  return messages.map((value) => {
    return {
      id: value.id,
      ownerId: value.ownerId,
      phase: value.periodical,
      rank: value.pRank,
    };
  });
}

async function addPatentMessage(patentMessage) {
  let tmpResponse = null;

  let id = uuid();

  let submitData = {
    id,
    ownerId: patentMessage.ownerId,
    periodical: patentMessage.phase,
    pRank: patentMessage.rank,
  };

  await axios
    .post(urls.addPatentMessage, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
  };
}

async function deletePatentMessage(messageId) {
  let tmpResponse = null;

  let submitData = {
    id: messageId,
  };

  await axios
    .post(urls.deletePatentMessage, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.response,
  };
}

async function queryPatentMessagesByOwnerId(ownerId) {
  let tmpResponse = null;

  let submitData = {
    ownerId: ownerId,
  };

  await axios
    .post(urls.queryPatentMessagesByOwnerId, JSON.stringify(submitData))
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

async function queryAllPatentMessages() {
  let tmpResponse = null;
  await axios.get(urls.queryAllPatentMessages).then((response) => {
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
  addPatentMessage,
  deletePatentMessage,
  queryPatentMessagesByOwnerId,
  queryAllPatentMessages,
};
