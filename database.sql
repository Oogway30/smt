const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: "127.0.0.1", // Replace with your MySQL server host
    user: "root", // Replace with your MySQL username
    password: "Goney1234", // Replace with your MySQL password
    database: "notesapp",
  })
  .promise();

module.exports = async function createUser(email,password) {
  try {
    const result = await pool.query(
      "INSERT INTO information (email,password) VALUES (?,?)",
      [email, password]
    );
    return "User creation succesfull!";
  } catch (err) {
    return err;
  }
};
