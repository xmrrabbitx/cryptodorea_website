// save user email addresses info into mysql DB
import type { NextApiRequest, NextApiResponse } from 'next'
import * as React from 'react'; 
import { renderToString } from 'react-dom/server'
import fs from "fs"
import path from 'path';
var nodemailer = require("nodemailer");
//import welcomeEmail from "../../components/email/welcomeEmail"
//../../../../public/logos/doreaLogo.svg

require('dotenv').config()

//const welcomeEmailTempelate:any = renderToString(welcomeEmail());


export default async function test(
  req: NextApiRequest,
  res: NextApiResponse
) {
   
    const emailAddress:string = req.body.emailAddress;

    if(emailAddress){


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
                return true;
              }
            });

            return res.status(200).json({success:"thank you, we will contact with you!"})
              
          
        
      }
    
}