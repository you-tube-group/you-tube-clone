const app = require('./../server');
const db = app.get('db');

const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};


module.exports = {
  registerUser: (req, res) => {
    const user = req.body;
    // user.password = hashPassword(user.password);

    db.user_create([user.username, user.email, user.password], (err, user) => {
      if (err) return res.status(500).send(err);
      user = user[0]
      delete user.password;
      res.status(200).send(user);

    });
  }




//END OF EXPORT
}
