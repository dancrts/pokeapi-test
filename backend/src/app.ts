import "dotenv/config"
import express, { NextFunction, Request, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";

//Routes
import trainersRoutes from "./trainers/trainers.router";
import pokemonsRoutes from "./pokemons/pokemons.router";

const app = express();

//Esto es para que lea las respuestas mediante JSON sin necesidad de BodyParser
app.use(express.json())

//Todas las rutas deben de ir aqui - Yo agregaria swagger 
app.use("/api/trainers", trainersRoutes)
app.use("/api/pokemons", pokemonsRoutes)

//Middleware en caso de que no encuentre un endpoint
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createHttpError(404,"Endpoint no encontrado"))
})

//Middleware comun para manejo de errores, falta el agregar el codigo en para cada tipo de error but this works "aS iNtEnDeD"
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error)
    let errorMessage = "Ha ocurrido un error";
    let statusCode = 500;
    if(isHttpError(error)) {
        errorMessage = error.message
        statusCode = error.statusCode
    }
    res.status(statusCode).json({error: errorMessage})
})

export default app;