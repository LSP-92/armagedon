const csv = require('csvtojson');

const path = require('path');
const csvFilePath = path.join(__dirname, '..', 'initData', 'OrbitalParameters_PHAs.csv');

module.exports = () => {
  return csv().fromFile(csvFilePath);
};
