// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from "../../utils/supabaseClient";

export default async function handler(req, res) {

  let { data, error, status } = await supabase
    .from('skills')
    .select('id, name');

  res.status(200).json(data);
}