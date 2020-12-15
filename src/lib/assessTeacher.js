import getWorkload from '@/api/getWorkload';
import { getCoefficient } from '@/api/coefficient';

export default async function assessTeacher(teacherId) {
  let coefficients = null;

  await getCoefficient().then((response) => {
    coefficients = response.data;
  });

  let workloads = null;

  await getWorkload(teacherId).then((response) => {
    workloads = response.data;
  });

  console.log(coefficients);
  console.log(workloads);

  let score = 0;
  let keys = Object.keys(coefficients);

  console.log(keys);

  // for (let key in keys) {
  //   console.log(key);
  //   console.log(coefficients[key]);
  //   console.log(workloads[key]);
  //   score += coefficients[key] * workloads[key];
  // }

  keys.forEach(key=> {
    score += coefficients[key] * workloads[key];
  })

  return score;
}
