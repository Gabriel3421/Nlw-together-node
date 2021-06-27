import { request, Request, Response } from "express";
import { ListReceiveComplimentsService } from "../services/ListReceiveComplimentsService";

class ListReceiveComplimentController {
  async handler( req: Request, res: Response) {
    const { user_id } = request
    const listReceiveComplimentsService = new ListReceiveComplimentsService();
    const compliment = await listReceiveComplimentsService.execute(user_id)
    return res.status(200).send(compliment);
  }
}

export { ListReceiveComplimentController }