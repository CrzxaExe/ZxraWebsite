const mongoose = require('mongoose');
const express = require('express');
const config = require('./config.json');
const ejs = require('ejs');
const app = express();
const port = 3000;

mongoose.connect(config.mongo).then((connected) => {
  console.log("Connected")
}), { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true };

app.get('/', (req,res) => {
  res.sendFile('./index.html', {root: __dirname})
});

app.listen(port, () => {
  console.log("Setting Website")
})