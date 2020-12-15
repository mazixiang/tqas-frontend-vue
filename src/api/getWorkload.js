import axios from 'axios';
import urls from '@/api/urls';

async function getWorkload(ownerId) {
  let tmpResponse = null;
  let workload = {
    teach: 0,
    lab: 0,
    work: 0,
    issue: 0,
    paper: 0,
    patent: 0,
  };

  await axios
    .post(urls.getTeachingWorkload, JSON.stringify({ tm_ownerid: ownerId }))
    .then((response) => {
      tmpResponse = response;
      workload.teach = response.data.result;
    });

  await axios
    .post(urls.getLabWorkload, JSON.stringify({ s_ownerid: ownerId }))
    .then((response) => {
      tmpResponse = response;
      workload.lab = response.data.result;
    });
  await axios
    .post(urls.getWorkWorkload, JSON.stringify({ z_ownerid: ownerId }))
    .then((response) => {
      tmpResponse = response;
      workload.work = response.data.result;
    });
  await axios
    .post(urls.getIssueWorkload, JSON.stringify({ ownerId }))
    .then((response) => {
      tmpResponse = response;
      workload.issue = response.data.result;
    });
  await axios
    .post(urls.getPaperWorkload, JSON.stringify({ ownerId }))
    .then((response) => {
      tmpResponse = response;
      workload.paper = response.data.result;
    });
  await axios
    .post(urls.getPatentWorkload, JSON.stringify({ ownerId }))
    .then((response) => {
      tmpResponse = response;
      workload.patent = response.data.result;
    });

  return {
    status: tmpResponse.data.status,
    data: workload,
  };
}

export default getWorkload;
