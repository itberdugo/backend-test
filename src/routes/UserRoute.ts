import {Router } from "express";
import { UserController} from "../controllers/UserController.js";
import { userRepository } from "../repositories/UserRepositoryImp.js";
import { UserServices } from "../services/UserServices.js";

const userService = new UserServices(userRepository)
const userController = new UserController(userService)
const route = Router();

route.post("/", (req, res) => userController.save(req, res));
route.get("/", (req, res) => userController.findAll(req, res));
route.get("/:id", (req, res) => userController.findById(req, res));
route.put("/:id", (req, res) => userController.update(req, res));
route.delete("/:id", (req, res) => userController.delete(req, res));

export default route;