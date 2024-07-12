import { Router } from "express";
import noteController from "../controller/note-controller";

const noteRouter = Router();

noteRouter.route("/").get([], noteController.findAll);

export default noteRouter;
