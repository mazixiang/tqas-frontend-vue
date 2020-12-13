import axios from 'axios';
import urls from '@/api/urls';
import qs from 'qs';
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
    prank: patentMessage.rank,
  };

  await axios
    .post(urls.addPatentMessage, qs.stringify(submitData))
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
    p_id: messageId,
  };

  await axios
    .post(urls.deletePatentMessage, qs.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
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
