// save giveaway info into mysql DB
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from 'path';


export default async function createPost(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const articletName:string = req.body.articleTitle;

    let filePath =  path.join(process.cwd() + "/pages/blog/index.tsx");

    let s = `import { useState, useEffect } from 'react';

    export default function Sample(props:any){
    
        return(
    
            <>
                    hahahaha
            </>
    
        )
    
    }`;

    fs.writeFile(filePath,s,function(err){

        return res.status(400).json({error:"create file doesnt successful!"});
    });

    return res.status(200).json({succ:process.cwd()});
}