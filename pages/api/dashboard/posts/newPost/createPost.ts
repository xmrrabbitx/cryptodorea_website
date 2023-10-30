// save giveaway info into mysql DB
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import {connect} from "../../../db"

export default async function createPost(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const articletName:string = req.body.articleTitle;

    const db = await connect();

    if(articletName){

        const hasSpecialChars = (str:string) => {
          const regex = /[`!#%^*_+\-\[\]{};':"\\|<>\/?~]/;
         
          return regex.test(str);
        }
    
        if(hasSpecialChars(articletName)){

            return res.status(404).json({error:"special characters are not allowed!"})
            
        }else{

            const Blog:any = await db.query(
                "insert into blog_posts  (article_name,created_at) VALUES (?,NOW())",
                [articletName]
            );

            return res.status(200).json({success:"successful"});
        }
    }
        
}

