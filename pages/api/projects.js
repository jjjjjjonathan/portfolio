// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../utils/db";

export default async function handler(req, res) {

  const { rows } = await db.query(`SELECT projects.*, STRING_AGG(skills.name, ',') AS skill_names, STRING_AGG(skills.id::text, ',') AS skill_ids
  FROM projects
  INNER JOIN project_skills ON projects.id = project_skills.project_id
  INNER JOIN skills ON skills.id = project_skills.skill_id
  GROUP BY projects.id;`);

  const projects = rows.map((row) => ({
    ...row,
    skill_names: row.skill_names.split(','),
    skill_ids: row.skill_ids.split(',').map((id) => parseInt(id, 10))
  }));

  res.status(200).json(projects);
}
