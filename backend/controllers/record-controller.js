const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  try {
    const transaction = await sql`SELECT * FROM records`;

    res.status(200).json({ transaction });
  } catch (error) {
    res.status(400).json({ message: "failed", error });
  }
};
const recordInfo = async (req, res) => {
  // const data = await sql`SELECT * FROM records`;
  // console.log("records:", data);
  // res.status(200).json({ message: "records", user: data });
  try {
    const [income, expense] =
      await sql`SELECT transaction_type, SUM(amount) FROM records GROUP BY transaction_type`;
    res.status(200).json({ income, expense });
  } catch (error) {
    res.status(400).json({ message: "failed", error });
  }
};

const takeChartData = async (req, res) => {
  try {
    const donutChart =
      await sql`select sum(r.amount), c.name cat_name from records r inner join categories c on r.cid=c.id where r.transaction_type='EXP' group by cat_name`;

    const barChart =
      await sql`select to_char(date_trunc('month, r.created_at), 'Mon) as month, 
      sum(case when r.transaction_type='EXP' then r.amount else 0 end) as total_exp,
      sum(case when r.transaction_type='INC' then r.amount else 0 end) as total_inc from records r group by date_trunc('month', created_at)
      order by date_trunc('month', r.created_at);`;
    res
      .status(200)
      .json({ message: "success", donut: donutChart, bar: barChart });
  } catch (error) {
    res.status(400).json({ message: "failed", error });
  }
};
// const createRecord = async (req, res) => {
//   const { name, amount, transaction_type, description } = req.body;
//   const transaction =
//     await sql`insert into records(name, amount, transaction_type, description)
//     values
//     (${name},
//     ${amount},
//     ${transaction_type},
//     ${description});`;

//   res.status(201).json({ transaction });
// };
// const updateRecord = async (req, res) => {
//   const { name, amount, transaction_type } = req.body;
//   const transaction =
//     await sql`UPDATE records SET name=${name}, amount=${amount}, transaction_type=${transaction_type}
//   WHERE id=${id}`;
//   res.status(201).json({ transaction });
// };
// const deleteRecord = async (req, res) => {
//   const { id } = req.params;
//   const data = await sql`DELETE FROM records WHERE id=${id}`;
//   res.status(200).json({ message: "deleted", user: data });
// };

module.exports = {
  recordInfo,
  getAllRecord,
  takeChartData,
};
