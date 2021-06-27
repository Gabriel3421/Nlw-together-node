import { request, Request, Response } from "express";
import { ListSendComplimentsService } from "../services/ListSendComplimentsService";

class ListSendComplimentController {
  async handler( req: Request, res: Response) {
    const { user_id } = request
    const listSendComplimentsService = new ListSendComplimentsService();
    const compliment = await listSendComplimentsService.execute(user_id)
    return res.status(200).send(compliment);
  }
}

export { ListSendComplimentController }