export class Player {
  constructor(name){
    this.name = name;
    this.health = 50;
    this.strength = 50;
    this.magic = 50;
  }
 

  attack() {
    const minimum = 5;
    const maximum = 21;
    let attackPoints = Math.floor(Math.random() * (maximum-minimum)) +  minimum; 
    
    if (attackPoints < 10) {
      this.health -= attackPoints;
    } else {
      this.strength += attackPoints;
    }
  }
}
