// save giveaway info into mysql DB
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import {connect} from "../../../db"
import path from 'path';

export default async function createPost(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const articletName:string = req.body.articleTitle;
    const content:string = req.body.content;


    const db = await connect();

    if(articletName){

        const hasSpecialChars = (str:string) => {
          const regex = /[`!#%^*_+\-\[\]{};':"\\|<>\/?~]/;
         
          return regex.test(str);
        }
    
        if(hasSpecialChars(articletName)){

            return res.status(404).json({error:"special characters are not allowed!"})
            
        }else{

            const BlogName:any = await db.query(
                "select * from blog_posts where  article_name = ?",
                [articletName]
            );

            console.log(BlogName[0])

            const Blog:any = await db.query(
                "insert into blog_posts  (article_name,created_at) VALUES (?,NOW())",
                [articletName]
            );
            
            const formatFileName = articletName.split(' ');
            const filename = formatFileName.join('-');

            let filePath = path.join(process.cwd() + "/pages/blog/" + filename + "/" + filename + ".tsx");
    
            if (fs.existsSync(filePath)) {

                return res.status(403).json({error:"file existed!!"});

            }else{
                let directoryPath =  path.join(process.cwd() + "/pages/blog/" + filename);
                fs.mkdirSync(directoryPath);
                fs.writeFile(filePath,content,function(err){

                    return res.status(400).json({error:"create file doesnt successful!"});
                });

                return res.status(200).json({success:"successful"});
            }

           
        }
    }
        
}

