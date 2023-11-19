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
           
                return res.status(403).json({error:"file existed!!"});

            }else{

            const blogTempelate = `
            
import Head from 'next/head'
import 'react-quill/dist/quill.snow.css';

export default function postBlog(props:any){
                                
    return(
    
        <>
            <Head>
                <title>${articletName}</title>
                <meta name="description" content="crypto dorea description must be here" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/doreaLogo.ico" />
            </Head>
            <div dangerouslySetInnerHTML={{__html: \`${content}\` }} />
            
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

