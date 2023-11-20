// save user email addresses info into mysql DB
import type { NextApiRequest, NextApiResponse } from 'next'
import {connect} from "../db"

export default async function getEmailsPre(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const emailAddress:string = req.body.emailAddress;

    const db = await connect();

    if(emailAddress){

        const hasSpecialChars = (str:string) => {
          const regex = /[`!#%^*+\\[\]{};':"\\|<>\/?~]/;
         
          return regex.test(str);
        }

        if(hasSpecialChars(emailAddress)){

          return res.status(404).json({error:"special characters are not allowed in email address, please enter another email address!"})
          
      }else{

        const Checkemailspre:any = await db.query(
          "select * from emailspre where email_address = ?",
          [emailAddress]
      );
        if(Checkemailspre[0].length > 0){
          console.log("okkk")
        }else{
      

            const emailspre:any = await db.query(
              'insert into emailspre (email_address,created_at) VALUES(?,NOW())',
              [emailAddress]
          );

          if (emailspre[0].affectedRows > 0) {

            return res.status(200).json({success:"thank you, we will contact with you!"})
              
          }else{
            return res.status(403).json({error:"something went wrong! try again..."})
          }
        }
      }
    }
}