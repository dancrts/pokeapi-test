import { NextFunction, Request, RequestHandler, Response } from "express";
import createHttpError from "http-errors";

import trainersModel from "./trainers.model";
import mongoose from "mongoose";
import { CommonParams } from "../types/query-params";
import { TrainerDTO } from "./trainer.dto";

export const getAllTrainers: RequestHandler = async (req, res, next) => {
    try {
        const trainers = await trainersModel.find().exec();
        res.status(200).json(trainers)
    } catch(error) {
        next(error)
    }
}

export const createTrainer: RequestHandler<unknown, unknown, TrainerDTO, unknown> = async (req, res, next) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const medals = req.body.medals
    const phone = req.body.phone
    
    try {
        if(!name || !lastname || !medals || !phone) throw createHttpError(400, "La peticion no cumple con los campos requeridos");
        
        const newTrainer = await trainersModel.create({
            name: name,
            lastname: lastname,
            medals: medals,
            phone: phone
        })
        
        res.status(201).json(newTrainer)
    } catch(error) {
        next(error)
    }
}

export const deleteTrainer: RequestHandler = async (req, res, next) => {
    const id = req.params.id
    try {
        if(!mongoose.isValidObjectId(id)) throw createHttpError(400, "El id proporcionado no es valido o está malformado");
        
        const trainer = await trainersModel.findById(id).exec();
        if(!trainer) throw createHttpError(404, "No existe el entrenador");

        const deletedTrainer = await trainersModel.deleteOne({ _id: id })
        
        res.status(200).json(deletedTrainer)
    } catch (error) {
        next(error)
    }
}

export const updateTrainer: RequestHandler<CommonParams, unknown, TrainerDTO, unknown> = async (req, res, next) => {
    const id = req.params.id
    const name = req.body.name;
    const lastname = req.body.lastname;
    const medals = req.body.medals
    const phone = req.body.phone
    try {
        if(!name || !lastname || !medals || !phone) throw createHttpError(400, "La peticion no cumple con los campos requeridos");
        if(!mongoose.isValidObjectId(id)) throw createHttpError(400, "El id proporcionado no es valido o está malformado");
        
        const trainer = await trainersModel.findById(id).exec();
        if(!trainer) throw createHttpError(404, "No existe el entrenador");

        trainer.name = name;
        trainer.lastname = lastname;
        trainer.medals = medals;
        trainer.phone = phone; 

        const updatedTrainer = await trainer.save();
        
        res.status(200).json(updatedTrainer);
    } catch (error) {
        next(error);
    }
}