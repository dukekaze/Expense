const sql = require("../config/db");

const getAllcategory = async (req, res) => {
  const data = await sql`SELECT * FROM categories`;

  res.status(200).json({ message: "success", categories: data });
};
const createCategory = async (req, res) => {
  const { email, description, password, category_img } = req.body;
  const data =
    await sql`INSERT INTO categories(email, description, password, category_img) 
   VALUES
    (${email}, 
    ${description}, 
    ${password}, 
    ${category_img});`;
  console.log("data", data);
  res.status(201).json({ message: "new category", user: data });
};

const updCategory = async (req, res) => {
  const { name } = req.body;
  const data = await sql`UPDATE categories SET name=${name}
  WHERE id=${id}`;
  res.status(201).json({ message: "update categories" });
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM categories WHERE id=${id}`;
  res.status(200).json({ message: "deleted", user: data });
};
module.exports = {
  getAllcategory,
  createCategory,
  updCategory,
  deleteCategory,
};
