import * as express from "express";
import { Router } from "express";
import { SignupRequest } from "src/request/auth";

import {createUser ,login} from "../controller/user_controller";

const router: Router = express.Router();

router.post("/signup" , SignupRequest, createUser);
router.post("/login" , login);

export default router;
