const db = require('../db');

const users = db.get('users');

const addUser = ({ username, password }) => {
  users.insert({ username, password });
};

exports.addUser = addUser;
