const sql = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data =
      await sql`INSERT INTO users(email, name , password, profile_image)
  VALUES
  (${email},
  ${name},
  ${hashedPassword},
  'url');`;
    console.log("data", data);
    res.status(201).json({ message: "new user registered" });
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  const [user] = await sql`select *from users where email=${email}`;

  if (!user) {
    res.status(404).json({ message: "user not found" });
  } else {
    const isCheck = bcrypt.compareSync(password, user.password);
    if (!isCheck) {
      res.status(400).json({ message: "Your password is incorrect." });
    } else {
      const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
        expiresIn: "1h",
      });

      res.status(200).json({ message: "Success", token });
    }
  }
};

module.exports = { signup, signin };
