const express = require('express');
const router = express.Router();

router.post('/create', async (req, res) => {
  res.json({msg: 'create my profile'})
  res.status(501)
})

router.patch('/edit', async (req, res) => {
  res.json({msg: 'edit my profile'})
  res.status(501)
})

router.delete('/delete', async (req, res) => {
  res.json({msg: 'delete my profile'})
  res.status(501)
})

module.exports = router