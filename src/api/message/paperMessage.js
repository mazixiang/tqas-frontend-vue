import axios from 'axios';
import urls from '@/api/urls';
import qs from 'qs';
import { v4 as uuid } from 'uuid';

function convertMessages(messages) {
  return messages.map((value) => {
    return {
      id: value.pId,
      ownerId: value.pOwnerId,
      periodical: value.pPhase,
      rank: value.pRank,
    };
  });
}

async function addPaperMessage(paperMessage) {
  let tmpResponse = null;

  let id = uuid();

  let submitData = {
    id,
    ownerId: paperMessage.ownerId,
    phase: paperMessage.periodical,
    prank: paperMessage.rank,
  };

  await axios
    .post(urls.addPaperMessage, qs.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
  };
}

async function deletePaperMessage(messageId) {
  let tmpResponse = null;

  let submitData = {
    p_id: messageId,
  };

  await axios
    .post(urls.deletePaperMessage, qs.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.response,
  };
}

async function queryPaperMessagesByOwnerId(ownerId) {
  let tmpResponse = null;
  let messages = null;

  await queryAllPaperMessages().then((response) => {
    tmpResponse = response;
    messages = response.data.slice();
  });

  let data = messages.filter((message) => message.ownerId === ownerId);

  return {
    status: tmpResponse.status,
    data,
  };
}

async function queryAllPaperMessages() {
  let tmpResponse = null;
  await axios.get(urls.queryAllPaperMessages).then((response) => {
    tmpResponse = response;
  });

  let messages = tmpResponse.data.result.slice();
  let data = convertMessages(messages);
  console.log(data);

  return {
    status: tmpResponse.data.status,
    data,
  };
}

export {
  addPaperMessage,
  deletePaperMessage,
  queryPaperMessagesByOwnerId,
  queryAllPaperMessages,
};
