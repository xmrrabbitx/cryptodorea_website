// save giveaway info into mysql DB
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from 'path';


export default async function createPost(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const articletName:string = req.body.articleTitle;

    let filePath =  path.join(process.cwd() + "/pages/blog/sampleOutput.txt");

    fs.writeFile(filePath,"okkkk",function(err){

        return res.status(400).json({error:"create file doesnt successful!"});
    });

}