require('dotenv').config();
const express = require('express');
const app = express();
const {pgSes} = require('./dataBase/index.js');
const session = require("express-session");
const path = require('path');
const router = require('./router/router.js')

const secret = process.env.NODE_ENV === 'dev' ? 'somesecret' : randomString.generate({
  length: 14,
  charset: 'alphanumeric'
});

//SET UP USER SESSION

const sessionConfig = {
  store: pgSes,
  name: 'SID',
  secret,
  resave: false,
  saveUninitialized: false,
}

app.use(express.json())
app.use(session(sessionConfig))

app.use('/api', router)


//SERVE REACT AFTER BUILD

/*
console.log(path.join(__dirname, '..', '..', 'public'));
app.use(express.static(path.join(__dirname, '..', '..', 'public')))
app.get('(/!*)?', async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});
*/

const PORT = process.env.PORT || 5000
app.listen(PORT, process.env.HOSTNAME || '0.0.0.0', () => {
  console.log(`Server Started at Port ${PORT}`)
});
