import { Router } from "express";
import * as TrainersController from "./trainers.controller";

const router = Router();

router.get("/", TrainersController.getAllTrainers)
router.delete("/:id", TrainersController.deleteTrainer)
router.post("/", TrainersController.createTrainer)
router.put("/:id", TrainersController.updateTrainer)

export default router;