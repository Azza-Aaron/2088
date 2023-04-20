

const emailAvailableQuery = (email) => {
  return{
    text: `SELECT id FROM public."user" WHERE email = $1`,
    values: email
  }
}

const newUserQuery = (user) => {
  return{
    text: `INSERT INTO public."user" (first_name, last_name, dob, email, password)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id`,
    values: user
  }
}

module.exports = {
  newUserQuery,
  emailAvailableQuery
}