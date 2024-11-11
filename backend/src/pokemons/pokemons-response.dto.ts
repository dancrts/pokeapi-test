export interface PokemonResponse {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonInitialURL[]
}

export interface PokemonInitialURL {
    name: string,
    url: string
}