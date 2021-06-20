import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handler( req: Request, res: Response) {
    const { name, email, admin } = req.body;
    const createUserService = new CreateUserService();
    try {
      const user = await createUserService.execute({ name, email, admin})
      return res.status(200).send(user);

    } catch (err) {
      return res.status(400).send({ error:  err.message})
    }

  }
}

export { CreateUserController }