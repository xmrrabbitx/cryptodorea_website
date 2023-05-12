import { NextApiRequest, NextApiResponse } from "next";
import {connect} from "../db"
import bcrypt from "bcrypt" 
import _ from "lodash";
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
require('dotenv').config();
const crypto = require('crypto');

interface Data {
    email:string,
    password:string
}

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse

) {

    const  {email, password}:Data = req.body;

      const hasSpecialCharsPass = (str:string) => {
        const regex = /[ `$%^&*\[\]"\\|,<>\/?~]/;
        return regex.test(str);
      }
      

    if(_.isEmpty(email) || _.isEmpty(password)){

        return res.status(404).json({ error: `one or more fields are empty!` });
    }
    else if(!hasSpecialCharsPass(password)){ 
                                                                    
        return res.status(404).json({ error: `Please remove unneccessary special characters` });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){

        return res.status(404).json({ error: "Email format is wrong!" });
       
    }

    const db = await connect();
    
    const User:any = await db.query(
        "select * from users where email = ?",
        [email]
    );
    
    const user = User[0][0]
    const compare = bcrypt.compare(password,user["password"])
    compare.then(data=>{

        //const secret = crypto.randomBytes(64).toString('hex');
    
        const secretKey:any = process.env.JwtSecretKey

        const tokenObj = {username:user["username"],email:user["email"]}
        
      const jwtToken = jwt.sign(tokenObj,secretKey, { expiresIn: '1h' });
        
       return res.status(200).json({ status: "login successful",  token:jwtToken });

    })
    
    return false

}