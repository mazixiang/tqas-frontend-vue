import axios from 'axios';
import urls from '@/api/urls';

export default async function getWorkload() {
  let tmpResponse = null;
  let workload = {};

  await axios.get(urls.getTeachingWorkload).then((response) => {
    tmpResponse = response;
    workload.teach = response.data.result;
  });

  await axios.get(urls.getLabWorkload).then((response) => {
    tmpResponse = response;
    workload.lab = response.data.result;
  });

  await axios.get(urls.getWorkWorkload).then((response) => {
    tmpResponse = response;
    workload.work = response.data.result;
  });

  await axios.get(urls.getIssueWorkload).then((response) => {
    tmpResponse = response;
    workload.issue = response.data.result;
  });

  await axios.get(urls.getPaperload).then((response) => {
    tmpResponse = response;
    workload.paper = response.data.result;
  });

  await axios.get(urls.getPatentWorkload).then((response) => {
    tmpResponse = response;
    workload.patent = response.data.result;
  });

  return {
    status: tmpResponse.data.status,
    data: workload,
  };
}
