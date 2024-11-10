import { NextFunction, Request, RequestHandler, Response } from "express";
import trainersModel from "./trainers.model";

export const getAllTrainers: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const trainers = await trainersModel.find().exec();
        res.status(200).json(trainers)
    } catch(error) {
        next(error)
    }
}

export const createTrainer: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newTrainer = await trainersModel.create({
            name: req.body.name,
            lastname: req.body.lastname,
            medals: req.body.medals,
            phone: req.body.phone
        })
        res.status(201).json(newTrainer)
    } catch(error) {
        console.error(error);
        next(Error("No se pudo crear el entrenador"))
    }
}

export const deleteTrainer: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    
}

export const updateTrainer: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    
}