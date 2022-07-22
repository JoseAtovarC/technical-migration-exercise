import ng from "angular";


export interface pokeData {
    name: string;
    weight: number;
    img: string;
}


export abstract class ApiService {
    public abstract getPokemons(): any;
}

export interface ApiServiceAngjs {
    getPokemon(value: string | null): any;
}

export interface PokeScope extends ng.IScope {
    pokenames: any;
    name: string;
    selected: string | null;
    handleSubmit: () => void;
}