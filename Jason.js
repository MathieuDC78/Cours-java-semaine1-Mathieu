class Killer{
    constructor(name, hp){
        this.name = name;
        this.hp = hp;
    }
}

class Suvivors{
    constructor(name, characteristic){
        this.name = name;
        this.characteristic = characteristic;
    }
}

function randomizeName(allNames) {
    const randomIndex = Math.floor(Math.random() * allNames.length);
    const name = allNames.splice(randomIndex, 1)[0];
    return name;
}

function randomizeChar(allChars) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    const char = allChars.splice(randomIndex, 1)[0];
    return char;
}

let killer = new Killer("Jason", 100);
let survivors = [];
let dead = [];
let nbSurivors = 5;
let allNames = ["Bob", "Mathieu", "Didier", "Renauld", "Eric", "Jean", "Loris", "Guillaume"];
let allChars = ["le blond", "le gros", "le vieux", "l'asiatique", "le puant", "le sportif", "le debile", "le fetard"];

for(let i = 0; i < 5; ++i){
    survivors.push(new Suvivors(randomizeName(allNames), randomizeChar(allChars)));
}

while(killer.hp > 0 && nbSurivors > 0){  
    let chance = Math.random();
    let    cible =  Math.floor(Math.random() * survivors.length);
    
    if (chance < 0.3){
        //mourir
        console.log(survivors[cible].name, survivors[cible].characteristic, "s'est fait fracasser le crane par", killer.name);
        nbSurivors -= 1;
        const deadSurvivor = survivors.splice(cible, 1)[0];
        dead.push(deadSurvivor);

    }
    else if (chance < 0.3 + 0.5){
        //contre attaque
        console.log(survivors[cible].name, survivors[cible].characteristic, "esquive et tape", killer.name, "pour un total de 10 degats");
        killer.hp -= 10;
    }
    else {
        //attaque et meurt
        console.log(survivors[cible].name, survivors[cible].characteristic, "meurt mais inflige 15 degats a", killer.name);
        nbSurivors -= 1;
        killer.hp -= 15;
        const deadSurvivor = survivors.splice(cible, 1)[0];
        dead.push(deadSurvivor);
    }
}

console.log();

if (killer.hp > 0){
    console.log(killer.name, "A tuer tout le monde, voici la liste de ces victimes:");
    for (let i = 0; i < dead.length ; i++){
        console.log(dead[i].name,dead[i].characteristic);
    }
}
else if (killer.hp <= 0 && survivors == 0) {
    console.log(killer.name, "Est mort, en emportant tout le monde:");
    for (let i = 0; i < dead.length ; i++){
        console.log(dead[i].name,dead[i].characteristic);
    }
}
else {
    console.log(killer.name, "Est mort, en emportant ces victimes:");
    for (let i = 0; i < dead.length ; i++){
        console.log(dead[i].name,dead[i].characteristic);
    }
}
