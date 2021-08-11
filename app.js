const express = require("express");
const mongoose = require('mongoose')
const GuestUser = require('./models/guestUser')

const app = express();
const dbURI = 'mongodb://localhost:27017/wedCeylon'


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => console.log("connected to db"))
.catch((err) => console.log(err));

app.listen(3000);

app.get('/', (req, res) => {
  res.send("server is up and running");
})

app.get('/add-user', (req, res) => {
  const user = new GuestUser({
    username: "new_user",
    email: "new_user@wedceylon.test",
    address: "test address"
  });

  res.send("succesfully added");
})