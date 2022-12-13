const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb://db:27017/mydb', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  name: String,
  years: Number
});

const User = mongoose.model('users', userSchema);

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.json(users);
    }
  });
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
