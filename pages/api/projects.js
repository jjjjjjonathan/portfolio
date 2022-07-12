// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { supabase } from "../../utils/supabaseClient";
import db from "../../utils/db";

export default async function handler(req, res) {

  const { rows } = await db.query(`SELECT projects.*, STRING_AGG(skills.name, ',') AS skills
  FROM projects
  INNER JOIN project_skills ON projects.id = project_skills.project_id
  INNER JOIN skills ON skills.id = project_skills.skill_id
  GROUP BY projects.id;`);

  res.status(200).json(rows);
}
