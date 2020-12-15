import axios from 'axios';
import urls from '@/api/urls';
import qs from 'qs';
import { v4 as uuid } from 'uuid';

function convertMessages(messages) {
  return messages.map((value) => {
    return {
      id: value.toId,
      ownerId: value.toOwnerId,
      phase: value.toPhase,
      rank: value.toRank,
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
    t_id: messageId,
  };

  await axios
    .post(urls.deleteIssueMessage, qs.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.response,
  };
}

async function queryIssueMessagesByOwnerId(ownerId) {
  let tmpResponse = null;
  let messages = null;

  await queryAllIssueMessages().then((response) => {
    tmpResponse = response;
    messages = response.data.slice();
  });

  let data = messages.filter((message) => message.ownerId === ownerId);

  return {
    status: tmpResponse.status,
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
