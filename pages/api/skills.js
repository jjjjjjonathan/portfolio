import db from "../../utils/db";

export default async function handler(req, res) {

  const { rows } = await db.query(`SELECT skills.* FROM skills;`);

  res.status(200).json(rows);
}