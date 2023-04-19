

const createUser = `
CREATE TABLE IF NOT EXISTS "user"
(
  id SERIAL PRIMARY KEY,
  email VARCHAR(100),
  password VARCHAR(255),
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  dob VARCHAR(25),
  rank VARCHAR(25),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
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

const createTimeStampFunction = `
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;`

const createTrigger = `
CREATE OR REPLACE TRIGGER set_timestamp
BEFORE UPDATE ON "user"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
`

const initiateDB = async (client) => {
  const promises = []
  try {
    await client.query(createUser)
    const additionalData = client.query(userAdditionalData)
    const userNotify = client.query(userNotifications)
    const addFunction = client.query(createTimeStampFunction)
    const addTrigger = client.query(createTrigger)
    promises.push(additionalData, userNotify, addFunction, addTrigger)
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