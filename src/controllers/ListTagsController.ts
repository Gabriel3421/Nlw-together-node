import { request, Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";

class ListTagsController {
  async handler( req: Request, res: Response) {
    const listTagsService = new ListTagsService();
    const tags = await listTagsService.execute()
    return res.status(200).send(tags);
  }
}

export { ListTagsController }