import * as express from "express";
import { Router } from "express";

import {createUser ,login} from "../controller/user_controller";

const router: Router = express.Router();

router.post("/signup" , createUser);
router.post("/login" , login);

export default router;
