import { NextApiRequest, NextApiResponse } from "next";
import {connect} from "../db"


export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse

) {

    const {username, password} = req.body;

    const db = await connect();

    try{
       
        const user = db.query(
            "INSERT INTO user (username,password) VALUES(?, ?)",
            [username,password]
        )
        res.status(200).json({user});
    }catch (error) {
        res.status(500).json({ error: "Unable to register user" });
      }
    

    
      
    
}