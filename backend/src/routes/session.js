import express from "express";
import Joi from "joi";
import User from "../models/user";
import { signIn } from "../validations/user";
import { parseError, sessionizeUser } from "../util/helpers";
import { SESS_NAME } from "../config";

const sessionRouter = express.Router();