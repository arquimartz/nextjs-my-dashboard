import { PokemonGrid } from "@/components";
import { PokemonsResponse } from "@/types/pokemons/pokemons-response";
import { SimplePokemon } from "@/types/pokemons/simple-pokemon";
import Image from "next/image";

const getPokemons = async (limit: number = 20, offset: number = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));

    // throw new Error('Error al cargar los pokemons');

    return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pokémons <small>estáticos</small></span>
            {<PokemonGrid pokemons={pokemons} />}
        </div>
    );
}