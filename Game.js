class Dice{
  
    threw(){
        return Math.ceil(Math.random()*6);
    }
}

class Board{
  
  checkBox(box){
    
    switch (box){
           //Stairs
            case 11: 
                return 39;
            case 17:
                return 57;
            case 19:
                return 45;
            case 21:
                return 56;
            case 26:
                return 50;
            case 43:
                return 84;
            case 52:
                return 76;
            case 70:
                return 92;
            case 74:
                return 100;
           //Snakes
            case 18: 
                return 6;
            case 22:
                return 2;
            case 36:
                return 20;
            case 62:
                return 14;
            case 75:
                return 30;
            case 78:
                return 49;
            case 83:
                return 8;
            case 93:
                return 40;
            case 96:
                return 69;
            default:
                return box;
    }
  } 
}

class Player{
  
  constructor(name){
    this.name = name;
    this.position = 0;
    this.check = 0;
  }
  
  move(result){
    this.check = result + this.position
      return this.check
  }
  
}

let dice = new Dice();
let board  = new Board();

let p1 = new Player("Pepe");
let p2 = new Player("Toño");

do{
 
    p1.position = board.checkBox(p1.move(dice.threw()))
    p2.position = board.checkBox(p2.move(dice.threw()))
      
    console.log(`Posición de ${p1.name}: ${p1.position} | Posición de ${p2.name}: ${p2.position}`)

} while (p1.position < 100 && p2.position < 100);

if (p1.position >=100){
    console.log(`\nGanó "${p1.name}"`)
} else if (p2.position >=100){
    console.log(`\nGanó"${p2.name}"`)
}
