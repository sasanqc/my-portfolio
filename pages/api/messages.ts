// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@/database/connectMongo";
import Message from "@/database/messages";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await connectMongo();
      const message = await Message.create(req.body);
      await message.save();
      res.status(201).json(message);
      return;
    } catch (error) {
      res.status(400).json({ message: "Couldn't Submit message" });
    }
  } else {
    res.status(400).json({ message: "Bad Request" });
  }
}
