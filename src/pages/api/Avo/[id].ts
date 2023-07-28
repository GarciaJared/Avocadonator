import { NextApiRequest, NextApiResponse } from "next";
import Database from "@database";
import data from "../../../../database/data"

const getAvocadoById = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new Database()
    const id = req.query.id
    const entry = await db.getById(id as string)

    res.statusCode = 200 //ok
    res.setHeader('Content-type', 'application/json')
    //PREGUNTAR A CHUY 
    res.end(JSON.stringify({ data: entry }))
}


export default getAvocadoById;

//Syntax es EXPRESS