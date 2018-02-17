const _ = require('lodash');
const { flow, filter, map, mean } = require('lodash/fp');

const enrollment = [
  { enrolled: 2, grade: 100 },
  { enrolled: 2, grade: 80 },
  { enrolled: 1, grade: 89 },
];

// lodash 3.x
// const avg = _.chain(enrollment)
//   .filter(student => student.enrollment > 1)
//   .pluck('grade')
//   .average()
//   .value();

// lodash 4.x + fp
const avg = flow(
  filter(s => s.enrolled > 1),
  map(s => s.grade),
  mean,
);

console.log(avg(enrollment));
