export const pokemonIDs:number[] = [12,34,56,12]
pokemonIDs.push(1)

interface Pokemon{
    id:number
    name:string, 
    age:number
}

export const bolbasaur:Pokemon ={
    id:1,
    name:'Bolbasaur',
    age:12, 
}

export const pokemons:Pokemon[]=[
    { id:1,name:'Bolbasaur',age:12, },
    { id:2,name:'Charmander',age:13, },
    { id:3,name:'Squader',age:14, }
]