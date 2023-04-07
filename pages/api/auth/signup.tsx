import { NextApiRequest, NextApiResponse } from "next";
import {connect} from "../db"
import bcrypt from "bcrypt" 
import lodash from "lodash"
import _ from "lodash";

interface Data {
    username:string,
    email:string,
    password:string
}

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse

) {
    const salt = bcrypt.genSaltSync(10);
    
    const {username, email, password}:Data = req.body;

    if(_.isEmpty(username) || _.isEmpty(email) || _.isEmpty(password)){

        res.status(404).json({ error: `one or more feild are empty!` });
    }

    const hashedPassword = bcrypt.hashSync(password, salt);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){

        res.status(404).json({ error: "email format is wrong!" });
       
    }

    const db = await connect();
    
    const check:any = await db.query(
        "select * from users where email = ?",
        [email]
    );
    
    if(Array.isArray(check[0]) && check[0].length){
    
        res.status(409).json({ error: "the user is existed!" });

    }else{

        try{

                const user = db.query(
                    "INSERT INTO users (username,password,email) VALUES(?, ?, ?)",
                    [username,hashedPassword,email]
                )
                res.status(200).json({user});
        
        }catch (error) {
            res.status(500).json({ error: "Unable to register user" });
        }
    
    }
    
      
    
}