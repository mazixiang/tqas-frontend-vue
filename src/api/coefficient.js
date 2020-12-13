import moment from 'moment';
import axios from 'axios';
import urls from '@/api/urls';

async function getCoefficient() {
  let tmpResponse = null;

  await axios.get(urls.getCoefficient).then((response) => {
    tmpResponse = response;
    console.log(response);
  });

  let target = {
    teach: tmpResponse.data.result.teach_coe,
    lab: tmpResponse.data.result.lab_coe,
    work: tmpResponse.data.result.work_coe,
    paper: tmpResponse.data.result.paper_coe,
    issue: tmpResponse.data.result.issue_coe,
    patent: tmpResponse.data.result.patents_coe,
  };

  return {
    status: tmpResponse.data.status,
    data: target,
  };
}

async function updateCoefficient(newCoefficient, adminId) {
  let submitData = {
    teach_coe: newCoefficient.teach,
    lab_coe: newCoefficient.lab,
    work_coe: newCoefficient.work,
    paper_coe: newCoefficient.paper,
    issue_coe: newCoefficient.issue,
    patents_coe: newCoefficient.patent,
    date: moment().format('YYYY-MM-DD'),
    adminId: adminId,
  };

  let tmpResponse = null;

  await axios
    .post(urls.updateCoefficient, JSON.stringify(submitData))
    .then((response) => {
      tmpResponse = response;
    });

  return {
    status: tmpResponse.data.status,
  };
}

export { getCoefficient, updateCoefficient };
