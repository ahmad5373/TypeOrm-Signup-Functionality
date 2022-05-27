import * as express from "express";
import { Router } from "express";
import { SigninRequest, SignupRequest } from "../request";

import {createUser ,login} from "../controller/user_controller";

const router: Router = express.Router();

router.post("/signup" , SignupRequest, createUser);
router.post("/login" , SigninRequest,login);

export default router;
