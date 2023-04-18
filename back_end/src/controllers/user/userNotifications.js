const express = require('express');
const router = express.Router();
const {authGuard} = require("../../middleware/verification");

router.get('/new', async (req, res) => {
  res.json({msg: 'get new notification'})
  res.status(501)
})

router.delete('/delete', async (req, res) => {
  res.json({msg: 'delete notification'})
  res.status(501)
})

module.exports = router