

const createUser = `
CREATE TABLE IF NOT EXISTS "user"
(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  password VARCHAR(100),
  first_name VARCHAR(25),
  last_name VARCHAR(25),
  dob VARCHAR(25),
  rank VARCHAR(25)
)`;

const userAdditionalData = `
CREATE TABLE IF NOT EXISTS "user_profile"
(
    user_id INT,
    username VARCHAR(25),
    about VARCHAR(500),
    age VARCHAR(3),
    login_history VARCHAR(25),
    uploaded_photos VARCHAR(25),
    comments VARCHAR(25),
    interactions VARCHAR(25),
    posts VARCHAR(25),
    pages_read VARCHAR(25),
    reports_blocks VARCHAR(25),
    profanity_filtered VARCHAR(25),
    CONSTRAINT fk_user
      FOREIGN KEY(user_id)
        REFERENCES "user"(id)
)`

const userSecurity = `
CREATE TABLE IF NOT EXISTS "security"
(
    user_id INT,
    login_attempts VARCHAR(25),
    last_login_region VARCHAR(50),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const userNotifications = `
CREATE TABLE IF NOT EXISTS "user_notifications"
(
    user_id INT,
    interaction VARCHAR(25),
    rank_change VARCHAR(25),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const initiateDB = async (client) => {
  const promises = []
  try {
    await client.query(createUser)
    const additionalData = client.query(userAdditionalData)
    const security = client.query(userSecurity)
    const userNotify = client.query(userNotifications)
    promises.push(additionalData, security, userNotify)
    await Promise.all(promises)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

module.exports = {
  initiateDB
}