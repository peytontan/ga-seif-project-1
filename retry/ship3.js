import { createBoard, arrayAlphabets, arrayNumbers, board } from "./grid.js"

// class Grid {
//     constructor(row,col,occupied){
//         this.row = row
//         this.col = col
//         this.occupied = occupied
//     }
// }

class Ship {
  constructor(name, size, orientation) {
    this.name = name;
    this.size = size;
    this.orientation = orientation || "horizontal";
    this.location = [];
  }

  placeGrid(startGrid) {
    let index = 0;
    for (let r = 0; r < board.grid.length; r++) {
      for (let c = 0; c < board.grid.length; c++) {
        index++;
        if (startGrid === board.grid[r][c]) {
          this.location.push(index);
        }
      }
    }

    for (let i = 1; i < this.size; i++) {
      let newIndex = this.location[i - 1];
      if (this.orientation === "vertical") {
        newIndex += 10;
      } else {
        newIndex += 1;
      }

      if (
        newIndex > 100 ||
        this.location.includes(newIndex) ||
        (this.orientation === "horizontal" && newIndex % 10 === 0)
      ) {
        // undo previous placements and return false
        this.location = [];
        return false;
      }

      this.location.push(newIndex);
    }

    return this.location;
  }
}


// const carrierPC = new Ship("carrier", 5,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
// const battleshipPC = new Ship("battleship", 4,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
// const cruiserPC = new Ship("cruiser", 3,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
// const submarinePC = new Ship("submarine", 3,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
// const destroyerPC = new Ship("destroyer", 2,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");


// const shipPC = [carrierPC,battleshipPC,cruiserPC,submarinePC,destroyerPC]
// shipPC.forEach(element => element.placeGrid(board.gridOneD[Math.floor(Math.random()*board.gridOneD.length)-1])) //for each and every ship for pc, place the grid
// // shipPC.forEach(element => {
// //     element.location.forEach(cell => console.log(cell))
// // })
// console.log(shipPC)

// console.log(carrier,battleship,cruiser,submarine,destroyer)

// export {Ship, carrierUser,battleshipUser,cruiserUser,submarineUser,destroyerUser,shipsUser}