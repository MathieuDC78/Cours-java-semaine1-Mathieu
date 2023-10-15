class Pokemon {
    constructor(name, puissanceAttaque, puissanceDefense, pointsdeVie, Chance) {
        this.name = name;
        this.puissanceAttaque = puissanceAttaque;
        this.puissanceDefense = puissanceDefense;
        this.pointsdeVie = pointsdeVie;
        this.Chance = Chance;
    }

    isLucky() {
        return Math.random() < this.Chance;
    }

    attackOpponent(opponentPokemon) {
        if (this.isLucky()) {
            let damage = this.puissanceAttaque - opponentPokemon.puissanceDefense;
            if (damage > 0) {
                opponentPokemon.pointsdeVie -= damage;
            }
            console.log(
                this.name, "attaque", opponentPokemon.name, "il lui met",
                damage, "points de degats", opponentPokemon.name, "a maintenant",
                opponentPokemon.pointsdeVie, "points de vie."
            );
        } else {
            console.log(this.name, "rate", opponentPokemon.name);
        }
    }
}

let pokemonA = new Pokemon("Tadmorv", 50, 20, 105, 0.6);
let pokemonB = new Pokemon("Roucool", 35, 35, 130, 0.4);

while (pokemonA.pointsdeVie > 0 && pokemonB.pointsdeVie > 0) {
    pokemonA.attackOpponent(pokemonB);
    if (pokemonB.pointsdeVie <= 0) {
        console.log(pokemonB.name, "est hors jeu", pokemonA.name, "gagne le combat.");
        break;
    }

    pokemonB.attackOpponent(pokemonA);
    if (pokemonA.pointsdeVie <= 0) {
        console.log(pokemonA.name, "est hors jeu", pokemonB.name, "gagne le combat.");
        break;
    }
}
