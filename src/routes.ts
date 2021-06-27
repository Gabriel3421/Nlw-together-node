import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { SessionController } from "./controllers/SessionController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListReceiveComplimentController } from "./controllers/ListReceiveComplimentController";
import { ListSendComplimentController } from "./controllers/ListSendComplimentController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";
import { adminAuth } from "./middleware/adminAuth";
import { auth } from "./middleware/auth";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const sessionController = new SessionController();
const createComplimentController = new CreateComplimentController();
const listSendComplimentController = new ListSendComplimentController();
const listReceiveComplimentController = new ListReceiveComplimentController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();

router.post('/users', createUserController.handler);
router.get('/users', auth, listUserController.handler);
router.get('/users/compliments/send', auth, listSendComplimentController.handler);
router.get('/users/compliments/receive', auth, listReceiveComplimentController.handler);
router.post('/session', sessionController.handler);
router.post('/compliments', auth, createComplimentController.handler);
router.post('/tags', auth, adminAuth, createTagController.handler);
router.get('/tags', auth, listTagsController.handler);

export { router };