import { NextApiRequest, NextApiResponse } from "next";
import {connect} from "../db"
import bcrypt from "bcrypt" 
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

    const hasSpecialChars = (str:string) => {
        const regex = /[ `!#%^*_+\-\[\]{};':"\\|<>\/?~]/;
       
        return regex.test(str);
      }
      const hasSpecialCharsPass = (str:string) => {
        const regex = /[ `$^&*\[\]"\\|,<>\/?~]/;
        return regex.test(str);
      }
      
    const {username, email, password}:Data = req.body;

    if(_.isEmpty(username) || _.isEmpty(email) || _.isEmpty(password)){

        return res.status(404).json({ error: `one or more fields are empty!` });
    }
    else if(hasSpecialChars(username) || hasSpecialChars(email)){ 
                                                                    
        return res.status(404).json({ error: `Please remove unneccessary special characters, allowed characters are: @$.()=,` });

    }
    else if(!hasSpecialCharsPass(password)){
       return res.status(404).json({ error: `the password is weak, please add some special characters to your password` });
    }

    const hashedPassword = bcrypt.hashSync(password, salt);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){

        return res.status(404).json({ error: "Email format is wrong!" });
       
    }
    

    const db = await connect();
    
    const user:any = await db.query(
        "select email from users where email = ?",
        [email]
    );
    
    if(Array.isArray(user[0]) && user[0].length){
    
        return res.status(409).json({ error: "the user is existed! please provide another email address" });

    }else{

        try{

                const user = db.query(
                    "INSERT INTO users (username,password,email) VALUES(?, ?, ?)",
                    [username,hashedPassword,email]
                )

                return res.status(200).json({status:"Registration successfull"});
        
        }catch (error) {
            return res.status(500).json({ error: "Unable to register user" });
        }
    
    }
    
      
    
}