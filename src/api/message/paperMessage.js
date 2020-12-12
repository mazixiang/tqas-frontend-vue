import axios from 'axios';
import urls from '@/api/urls';
import { v4 as uuid } from 'uuid';

function convertMessages(messages) {
  return messages.map((value) => {
    return {
      id: value.id,
      ownerId: value.ownerId,
      periodical: value.phase,
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
    pRank: paperMessage.rank,
  };

  await axios
    .post(urls.addPaperMessage, JSON.stringify(submitData))
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
    id: messageId,
  };

  await axios
    .post(urls.deletePaperMessage, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.response,
  };
}

async function queryPaperMessagesByOwnerId(ownerId) {
  let tmpResponse = null;

  let submitData = {
    ownerId: ownerId,
  };

  await axios
    .post(urls.queryPaperMessagesByOwnerId, JSON.stringify(submitData))
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

async function queryAllPaperMessages() {
  let tmpResponse = null;
  await axios.get(urls.queryAllPaperMessages).then((response) => {
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
  addPaperMessage,
  deletePaperMessage,
  queryPaperMessagesByOwnerId,
  queryAllPaperMessages,
};
