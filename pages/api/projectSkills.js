// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from "../../utils/supabaseClient";

export default async function handler(req, res) {

  let { data, error, status } = await supabase
    .from('project_skills')
    .select('project_id, skill_id');

  res.status(200).json(data);
}