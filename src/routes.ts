import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { SessionController } from "./controllers/SessionController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { adminAuth } from "./middleware/adminAuth";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const sessionController = new SessionController();
const createComplimentController = new CreateComplimentController();

router.post('/users', createUserController.handler);
router.post('/session', sessionController.handler);
router.post('/compliments', createComplimentController.handler);
router.post('/tags', adminAuth, createTagController.handler);

export { router };