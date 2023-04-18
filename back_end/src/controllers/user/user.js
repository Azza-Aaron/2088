const express = require('express');
const router = express.Router();
const {authGuard} = require("../../middleware/verification");
const bcrypt = require('bcrypt')

async function saltHash(password) {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

router.post('/create', async (req, res) => {
  //const hashedPassword = await saltHash(req.body.password)
  console.log('creating user ')
  res.json({msg: 'create'})
  res.status(501)
})

router.post('/login', async (req, res) => {
  try {
/*    if(await bcrypt.compare(req.body.password, user.password))
      {
      console.log('password matches')
      req.session.user = {
        name: user.username,
        id: user.id,
        somethingNew: 'new stuff here',
        verified: true
      }
      res.status(200)
      res.json({msg: 'login'})
      res.status(501)
      }*/
  } catch (e) {

  }
})

router.use(authGuard)

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