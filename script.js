class Monster {
    constructor(name, health, move = "Scratch") {
        this.name = name;
        this.health = health;
        this.move = move;
        this.misunderstood = true;
    }

    attack() {
        // output example: Pikachu used "Thunder"!
        console.log(`${this.name} used "${this.move}"`);
    }
}

class Dragon extends Monster {
    // Possible dragon properties: canFly, size
    constructor(name, health, move, rider) {
        super(name, health, move);
        
        this.rider = rider;
    }

    attack() {
        console.log(`${this.rider} tells ${this.name} to attack!`);
        super.attack();
    }
}

class Pokemon extends Monster {  
    level = 1;  
    
    constructor(name, health, move, type) {
        super(name, health, move);

        this.type = type;
    }

    levelUp() {
        this.level++;
        this.health += 3;

        console.log(`${this.name} has levelled up! They are now level ${this.level} with health ${this.health}`);
    }
}

const godzilla = new Monster("Godzilla", 9001, "Stomp");
const pikachu = new Pokemon("Pikachu", 25, "Thunder", "Electric");
const viserion = new Dragon("Viserion", 25000, "Blue Fire", "Night King");

/* When button is clicked -> level up Pikachu */
const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", function() { 
    pikachu.levelUp(); 
});

viserion.attack();
godzilla.attack();
// Doesn't work
// godzilla.levelUp();
pikachu.attack();
pikachu.levelUp();