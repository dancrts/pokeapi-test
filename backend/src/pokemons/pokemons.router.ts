import { Router } from "express";

import * as PokemonController from "./pokemons.controller";

const router = Router();

router.get("/", PokemonController.getAllPokemons)

export default router;