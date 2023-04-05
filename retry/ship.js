import { createBoard, arrayAlphabets, arrayNumbers, board } from "./grid.js"

// class Grid {
//     constructor(row,col,occupied){
//         this.row = row
//         this.col = col
//         this.occupied = occupied
//     }
// }

class Ship {
    constructor(name, size,orientation){
        this.name=name
        this.size=size
        this.orientation = orientation||"horizontal"
        this.location=[]
    }
    placeGrid (startGrid){
        // orientation=this.orientation
        if (this.orientation === "vertical") { //if it is vertical
            let index=0;
            for (let r=0; r<board.grid.length;r++){ //loop through the array
                for (let c=0; c<board.grid.length;c++){
                    index ++ //increase the counter so i can count the index
                    if (startGrid===board.grid[r][c]){
                        this.location.push(index) //push the index to this.location
                    }
            }
        }
            for (let y = 10;y <= (this.size-1) * 10;y += 10) {  //increase by 10 because the board is only 10x10
                index=this.location[0] //index is not at the grid board anymore becuase it will continue looping till 100, so we reset the index to the index that was pushed at line 26
                index+=y//increase the index by 10 since its vertical
                this.location.push(index) //push the other index into location array
            }
            return this.location //return the array
          } else {  //if it is horizontal
            let index = 0 
            for (let r=0; r<board.grid.length;r++){ 
                for (let c=0; c<board.grid.length;c++){
                    index ++
                    if (startGrid===board.grid[r][c]){
                        this.location.push(index)
                    }
            }
        }
            for (let y = 1;y <= (this.size-1);y++) { //increase by 1 because its horizontal 
                index=this.location[0]
                index+=y
                this.location.push(index)
            }
            return this.location
          }
    }

}


const carrierUser = new Ship("carrier", 5,'vertical');
const battleshipUser = new Ship("battleship", 4,'horizontal');
const cruiserUser = new Ship("cruiser", 3,'vertical');
const submarineUser = new Ship("submarine", 3);
const destroyerUser = new Ship("destroyer", 2);

// const ships = [carrier, battleship, cruiser, submarine, destroyer];
const shipsUser = [carrierUser, battleshipUser, cruiserUser, submarineUser, destroyerUser];

carrierUser.placeGrid("C7")
battleshipUser.placeGrid("G2")
cruiserUser.placeGrid("D1")
submarineUser.placeGrid("D6")
destroyerUser.placeGrid("A4")

console.log(shipsUser)

// console.log(carrier,battleship,cruiser,submarine,destroyer)

export {Ship, carrierUser,battleshipUser,cruiserUser,submarineUser,destroyerUser,shipsUser}