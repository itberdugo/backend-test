import {Router } from "express";
import { documentTypeRepository } from "../controllers/DocumentTypeController.js";

const route = Router();

route.get("/", (req, res) => documentTypeRepository.findAll());


export default route;