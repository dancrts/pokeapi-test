import { Request, Response, NextFunction } from "express"
import * as http from "https"
import createHttpError from "http-errors";
import { PokemonInitialURL, PokemonResponse } from "./pokemons-response.dto";

const sortPokemons = (a: PokemonInitialURL, b: PokemonInitialURL) => { 
    if (a.name < b.name) return -1; 
    if(a.name > b.name) return 1; 
    return 0; 
}

export const getAllPokemons = (req: Request, res: Response, next: NextFunction) => {
    try {
        http.get("https://pokeapi.co/api/v2/pokemon/?limit=1302&offset=0", (response) => {
            let data = "";
            response.on("data", (chunk) => { data += chunk })
            response.on('end', () => {
                const fullResponse: PokemonResponse = JSON.parse(data);
                res.json(fullResponse.results.sort(sortPokemons));
            });
        }).on("error", (err) => {
            next(createHttpError(err.message));
        });
    } catch (error) {
        next(error)
    }
}