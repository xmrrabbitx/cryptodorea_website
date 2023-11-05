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

    if(articletName && content){

        const hasSpecialChars = (str:string) => {
          const regex = /[`!#%^*_+\-\[\]{};':"\\|<>\/?~]/;
         
          return regex.test(str);
        }

    const articleTitle = articletName.replace(/[\`!#%^*_+\\-\\[\]{};':"\\|<>?\/~]/g, '');
   
    if(hasSpecialChars(articleTitle)){

            return res.status(404).json({error:"special characters are not allowed!"})
            
        }else{

            const removeWhiteSpace = articleTitle.trim()
            const filename = removeWhiteSpace.replace(/\s+/g, '-')

            const Blog:any = await db.query(
                'insert into blog_posts (article_name,created_at) SELECT (?) AS article_name, NOW() WHERE NOT EXISTS (SELECT * FROM blog_posts where article_name = ?)',
                [filename,filename]
            );
            
            let filePath = path.join(process.cwd() + "/pages/blog/" + filename + "/index.tsx");

            if (fs.existsSync(filePath)) {
                console.log("exists")
                return res.status(403).json({error:"file existed!!"});

            }else{

                console.log("not existed")
            const blogTempelate = `export default function postBlog(props:any){
                                
                return(
    
                            <>
                                <title>${articletName}</title>
                                ${content}
                            </>
                )
                    
                }
    
                export async function getServerSideProps(context:any) {
    
                    // console.log(context.req.cookies['user'])
                
                    return {
                    props:{}
                    }
                    
                }
                `;

                let directoryPath =  path.join(process.cwd() + "/pages/blog/" + filename);
                fs.mkdirSync(directoryPath);
                fs.writeFile(filePath,blogTempelate,function(err){

                    return res.status(400).json({error:"create file doesnt successful!"});
                });

                return res.status(200).json({success:"successful"});
            }

           
        }
    }
        
}

