// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from '../../../lib/queryAPI';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {prompt, chatId, model, session} = req.body;

    if(!prompt) {
        res.status(400).json({answer:"Please provide a prompt!"})
    }

    if(!chatId) {
        res.status(400).json({answer:"Please provide a correct chatID!"})
    }

    // ChatGPT query
    const response = await query(prompt, chatId, model)
   const message:Message = {
    text: response || "Chat",
   }
    
  res.status(200).json({ answer: 'John Doe' })
}
