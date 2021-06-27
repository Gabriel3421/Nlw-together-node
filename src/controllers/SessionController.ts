import { Request, Response } from "express";
import { SessionService } from "../services/SessionService";

class SessionController {
  async handler( req: Request, res: Response) {
    const { email, password } = req.body;
    const sessionService = new SessionService();
    const token = await sessionService.execute({ email, password})
    return res.status(200).send({token});
  }
}

export { SessionController }