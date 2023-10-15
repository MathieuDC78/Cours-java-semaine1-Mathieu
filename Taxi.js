class John{
    constructor(){
        this.name = "John";
        this.mentalHeath = 10;
    }
}

class Trajet{
    constructor(){
        this.playlist =  ["Anissa - Wejdene", "Starlight - Dave", "Many men - 50 cent", "FUM22 NOCIVE - Green Montana", "PGP - Booba"];
        this.nbFeux = 30;
        this.nbChangements = 0;
    }
}

let john = new John();
let trajet = new Trajet();

while (trajet.nbFeux > 0 && john.mentalHeath > 0){
    const indexMusic = Math.floor(Math.random() * trajet.playlist.length);
    console.log("Nombre de feux restants avant l'arriver:", trajet.nbFeux, "la musique en cours d'ecoute est:" ,trajet.playlist[indexMusic]);
    trajet.nbFeux -= 1;
    if (trajet.playlist[indexMusic] === "Anissa - Wejdene"){
        console.log("John deteste la musique et change de taxi");
        john.mentalHeath -= 1;
        trajet.nbChangements += 1;
    }
}

if (john.mentalHeath > 0){
    console.log("John est bien arrive malgre les", trajet.nbChangements, "changements");
}
else {
    console.log("Explosion !");
}