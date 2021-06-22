import { Request, Response } from "express";
import { CreateTagsService } from "../services/CreateTagService";

class CreateTagController {
  async handler( req: Request, res: Response) {
    const { name } = req.body;
    const createTagService = new CreateTagsService();
    const tag = await createTagService.execute(name)
    return res.status(200).send(tag);
  }
}

export { CreateTagController }