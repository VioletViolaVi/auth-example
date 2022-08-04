const db = require("../database/connect");

class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.password = data.password;
  }

  static getOneByUsername(username) {
    return new Promise(async (resolve, reject) => {
      try {
        const userData = await db.query(`SELECT * FROM user_account WHERE username = $1;`, [
          username
        ]);
        const user = new User(userData.rows[0]);
        resolve(user);
      } catch (err) {
        console.log(err);
        reject("Unable to locate user.");
      }
    });
  }
}

module.exports = User;
