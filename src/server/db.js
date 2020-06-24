const monk = require('monk');

const db = monk('localhost:27017/big-boring');

module.exports = db;
