import axios from 'axios';
import urls from '@/api/urls';
import qs from 'qs';
import { v4 as uuid } from 'uuid';

function convertMessages(messages) {
  return messages.map((value) => {
    return {
      id: value.paId,
      ownerId: value.pOwnerId,
      phase: value.paPeriodical,
      rank: value.paRank,
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
  let messages = null;

  await queryAllPatentMessages().then((response) => {
    tmpResponse = response;
    messages = response.data.slice();
  });

  let data = messages.filter((message) => message.ownerId === ownerId);

  return {
    status: tmpResponse.status,
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
