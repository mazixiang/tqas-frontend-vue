import axios from 'axios';
import urls from '@/api/urls';
import qs from "qs";
import { v4 as uuid } from 'uuid';

function convertMessages(messages) {
  return messages.map((value) => {
    return {
      id: value.id,
      ownerId: value.ownerId,
      phase: value.phase,
      rank: value.tRank,
    };
  });
}

async function addIssueMessage(paperMessage) {
  let tmpResponse = null;

  let id = uuid();

  let submitData = {
    id,
    ownerId: paperMessage.ownerId,
    phase: paperMessage.phase,
    tRank: paperMessage.rank,
  };

  await axios
    .post(urls.addIssueMessage, qs.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
  };
}

async function deleteIssueMessage(messageId) {
  let tmpResponse = null;

  let submitData = {
    id: messageId,
  };

  await axios
    .post(urls.deleteIssueMessage, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.response,
  };
}

async function queryIssueMessagesByOwnerId(ownerId) {
  let tmpResponse = null;

  let submitData = {
    ownerId: ownerId,
  };

  await axios
    .post(urls.queryIssueMessagesByOwnerId, JSON.stringify(submitData))
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

async function queryAllIssueMessages() {
  let tmpResponse = null;
  await axios.get(urls.queryAllIssueMessages).then((response) => {
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
  addIssueMessage,
  deleteIssueMessage,
  queryIssueMessagesByOwnerId,
  queryAllIssueMessages,
};
