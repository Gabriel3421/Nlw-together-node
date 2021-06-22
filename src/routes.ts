import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { adminAuth } from "./middleware/adminAuth";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post('/users', createUserController.handler);
router.post('/tags', adminAuth, createTagController.handler);

export { router };