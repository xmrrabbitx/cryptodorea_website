// save user email addresses info into mysql DB
import type { NextApiRequest, NextApiResponse } from 'next'
import * as React from 'react'; 
import { renderToString } from 'react-dom/server'
import {connect} from "../db"
import fs from "fs"
import path from 'path';
var nodemailer = require("nodemailer");
//import welcomeEmail from "../../components/email/welcomeEmail"
//../../../../public/logos/doreaLogo.svg

require('dotenv').config()

//const welcomeEmailTempelate:any = renderToString(welcomeEmail());


export default async function sendWelcomeEmail(
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
           
            return res.status(404).json({error:"we already got you..."})
        
          }else{
      
            const emailspre:any = await db.query(
              'insert into emailspre (email_address,created_at) VALUES(?,NOW())',
              [emailAddress]
          );
   
          if (emailspre[0].affectedRows > 0) {

            let filePath = path.join(process.cwd() + "/pages/components/email/welcomeEmail/email.html");

            var welcomeEmailTempelate = fs.readFileSync(filePath,"utf-8") 


            var transporter = nodemailer.createTransport({
              port: 465,
              host: "smtp.gmail.com",
              service: "gmail",
              auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
              },
            });
          
            var mailOptions = {
              from: 'hadi.mirzaie300@gmail.com',
              to: emailAddress,
              subject: "🎉 Welcome to Crypto Dorea!",
              html: welcomeEmailTempelate,
              attachments: [{
                filename: 'doreaLogo.png',
                path:'./public/logos/doreaLogo.png',
                cid: 'doreaLogo'
              }]
            };
          
            transporter.sendMail(mailOptions, function (error:any, info:any) {
              if (error) {
                throw new Error(error);
              } else {
                console.log("Email Sent");
                return true;
              }
            });

            return res.status(200).json({success:"thank you, we will contact with you!"})
              
          }else{
            return res.status(403).json({error:"something went wrong! try again..."})
          }
        }
      }
    }
}