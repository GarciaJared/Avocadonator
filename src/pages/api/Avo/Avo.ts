import { NextApiRequest, NextApiResponse } from "next";
import DataBase from "@database";
import data from "../../../../database/data"

const allAvos = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const db = new DataBase();
  const allEntries = await db.getAll();
  const length = allEntries.length
  res.status(200).json({ data: allEntries, length });
}

export default allAvos;
//NODE 
//TOTAL DE AGUACATES