export type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    abilities: Ability[];
    types: Type[];
    stats: Stat[];
    sprites: {
        front_default: string;
        back_default: string;
        front_shiny: string;
        back_shiny: string;
        other: {
            "official-artwork": {
                front_default: string;
                front_shiny: string;
                back_default: string;
                back_shiny: string;
            };
            dream_world: {
                front_default: string;
                front_shiny: string;
            };
            home: {
                front_default: string;
                front_shiny: string;
                back_default: string;
                back_shiny: string;
            };
        };
    };
    moves: {
        move: {
            name: string;
            url: string;
        };
    }[];
    species: {
        name: string;
        url: string;
    };
};

type Ability = {
    ability: {
        name: string;
        url: string;
    };
};

type Type = {
    type: {
        name: string;
        url: string;
    };
    slot: number;
    damage_relations: {
        double_damage_from: Type[];
        double_damage_to: Type[];
        half_damage_from: Type[];
        half_damage_to: Type[];
        no_damage_from: Type[];
        no_damage_to: Type[];
    };
};

type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
};