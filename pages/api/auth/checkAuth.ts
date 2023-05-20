// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

type Data = {
    verifyStatus: any
}

export default function checkAuth(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

   const secretKey:any = req.query.secretKey
   const authCookie:any = req.query.authCookie
  
   const verify = jwt.verify(authCookie,secretKey)

  return res.status(200).json({ verifyStatus: verify })
}
