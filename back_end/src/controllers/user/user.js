const express = require('express');
const router = express.Router();
const {authGuard} = require("../../middleware/verification");
const {testUserInput, createNewUser} = require('../../utils/user/new')

router.post('/create', async (req, res) => {
  const user = await testUserInput(req.body)
  if(!user){
    res.json({msg: 'invalid entry'})
    res.status(400)
    return
  }
  console.log('creating user ', user)
  const id = await createNewUser(user)
  res.json({msg: 'create', id: id})
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