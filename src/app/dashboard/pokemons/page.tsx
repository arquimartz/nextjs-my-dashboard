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

    return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pokémons <small>estáticos</small></span>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {
                    pokemons.map(pokemon => (
                        <div key={pokemon.id} className="flex flex-col items-center">
                            <span className="text-2xl">{pokemon.name}</span>
                            <Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                                width={100}
                                height={100}
                                alt={pokemon.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}