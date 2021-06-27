import { request, Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
  async handler( req: Request, res: Response) {
    const { tag_id, user_receiver, message } = req.body;
    const { user_id } = request
    const reateComplimentService = new CreateComplimentService();
    const compliment = await reateComplimentService.execute({ tag_id, user_receiver, message, user_sender: user_id })
    return res.status(200).send(compliment);
  }
}

export { CreateComplimentController }