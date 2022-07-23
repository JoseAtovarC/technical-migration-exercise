import ng from "angular";


export interface pokeData {
    name: string;
    weight: number;
    img: string;
}


export interface ApiService {
    getPokemons(): any;
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