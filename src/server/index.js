const express = require('express');
const os = require('os');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);
app.use(express.json());
app.use(express.static('dist'));

app.post('/api/signup', (req, res) => {
  res.json(req.body);
});

app.get('/api/getUsername', (req, res) => {
  res.json({ username: os.userInfo().username });
});

app.listen(process.env.PORT || 8080, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${process.env.PORT || 8080}`);
});
