const csv = require('csvtojson');

const path = require('path')
const csvFilePath = path(__dirname, 'initData', 'OrbitalParameters_PHAs.csv')

module.exports = csv().fromFile(csvFilePath);
