import "dotenv/config"
import express, { NextFunction, Request, Response } from "express";

//Routes
import trainersRoutes from "./trainers/trainers.router";

const app = express();

//Esto es para que lea las respuestas mediante JSON sin necesidad de BodyParser
app.use(express.json())

//Todas las rutas deben de ir aqui - Yo agregaria swagger 
app.use("/api/trainers", trainersRoutes)

//Middleware en caso de que no encuentre un endpoint
app.use((req: Request, res: Response, next: NextFunction) => {
    next(Error("Endpoint no encontrado"))
})

//Middleware comun para manejo de errores, falta el agregar el codigo en para cada tipo de error but this works "aS iNtEnDeD"
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error)
    let errorMessage = "Ha ocurrido un error";
    if(error instanceof Error) errorMessage = error.message
    res.status(500).json({error: errorMessage})
})

export default app;