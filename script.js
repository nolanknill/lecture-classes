console.log("You are in the right place!");

function Monster(name, health, move = "Scratch") {
    this.name = name;
    this.health = health;
    this.move = move;

    this.attack = function() {
        // output example: Pikachu used "Thunder"!
        console.log(`${this.name} used "${this.move}"`);
    }
}

function Pokemon(name, health, move, type) {
    Monster.call(this, name, health, move);
    this.type = type;
    this.level = 1;
}

Monster.prototype.misunderstood = true;
Pokemon.prototype.levelUp = function() {
    this.level++;

    this.health += 3;

    console.log(`${this.name} has levelled up! They are now level ${this.level} with health ${this.health}`);
}

Object.setPrototypeOf(Pokemon.prototype, Monster.prototype);