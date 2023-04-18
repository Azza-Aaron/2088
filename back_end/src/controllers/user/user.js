const express = require('express');
const router = express.Router();
const {authGuard} = require("../../middleware/verification");

router.post('/create', async (req, res) => {
  res.json({msg: 'create'})
  res.status(501)
})

router.post('/login', async (req, res) => {
  res.json({msg: 'login'})
  res.status(501)
})

router.get('/logout', async (req, res) => {
  res.json({msg: 'logout'})
  res.status(501)
})

router.patch('/edit', async (req, res) => {
  res.json({msg: 'edit'})
  res.status(501)
})

router.delete('/delete', async (req, res) => {
  res.json({msg: 'delete'})
  res.status(501)
})

module.exports = router