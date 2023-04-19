const {userSchema} = require ('../schema/user')
const {saltHash} = require("../bcrypt/hashPassword")
const moment = require("moment");
const {client} = require("../../dataBase/index.js")
const {newUserQuery} = require("../../model/user.js")

const testUserInput = async (request) => {
  try{
    if(!moment(request.dob, 'DD/MM/YYYY').isValid()){
      console.log('not a date')
      return false
    }
    await userSchema.validate(request, { abortEarly: false });
    console.log('schema valid')
    const password = await saltHash(request.password)
    return [request.firstName, request.lastName, request.dob, request.email, password]
  } catch (e) {
    console.log(e)
    return false
  }
}

const createNewUser = async (user) => {
  try {
    const response = await client.query(newUserQuery(user))
    console.log(response)
    if(!response.rowCount){
      return false
    }
    return response.rows[0].id
  } catch (e) {
    console.log(e)
    return false
  }
}

module.exports = {
  testUserInput,
  createNewUser
}