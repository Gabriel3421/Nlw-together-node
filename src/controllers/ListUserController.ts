import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

class ListUserController {
  async handler( req: Request, res: Response) {
    const listUsersService = new ListUsersService();
    const users = await listUsersService.execute()
    return res.status(200).send(users);
  }
}

export { ListUserController }