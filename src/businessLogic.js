export class Player {
  constructor(name){
    this.name = name;
    this.health = 50;
    this.strength = 50;
    this.magic = 50;
    this.gold = 20;
  }
 

  attack() {
    const minimum = 5;
    const maximum = 21;
    let attackPoints = Math.floor(Math.random() * (maximum-minimum)) +  minimum; 
    
    if (attackPoints < 10) {
      this.strength -= attackPoints;
    } else {
      this.strength += attackPoints;
    }
  }

  hunt(){
    return this.health;
  }
  gamble(){
    return this.gold;
  }
}
