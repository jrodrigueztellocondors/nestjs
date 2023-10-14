export class Pokemon {
    
    get imageUrl():string {
        return `https://pokemon.com/${this.id}.jpg`
    }

    constructor(public readonly id:number, public name:string){
        console.log('constructor')
        this.id = id;
        this.name = name;
    }

    public scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    public speak(){
        console.log(`${this.name},${this.name}`)
    }
}

export const charmander:Pokemon = new Pokemon(1, 'charmander')
console.log(charmander)
charmander.scream()
charmander.speak()
