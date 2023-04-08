import { createBoard, arrayAlphabets, arrayNumbers, board,userBoard } from "./grid.js"


let pcTakenGrids = [] //it shouldn't be within the if conditionals because once its taken it shouldn't be erased again
let userTakenGrids = [] //it shouldn't be within the if conditionals because once its taken it shouldn't be erased again

class Ship {
    constructor(name, size,orientation){
        this.name=name
        this.size=size
        this.orientation = orientation||"horizontal"
        this.location=[]
    }
    placeShipInGrid(player){
        if (this.orientation==="vertical"){
            if (player === "PC"){ //if it is vertical and player is pc
                let gridIndex = Math.floor(Math.random() * board.gridIndex.length)-1
                let chosenStartGrid = board.gridIndex[gridIndex]
                if (!pcTakenGrids.includes(chosenStartGrid)){
                    pcTakenGrids.push(chosenStartGrid)
                    this.location.push(chosenStartGrid)
                }
                while (this.location.length<this.size){ //we make sure that the size of the ship is fulfilled
                    let lastIndex = this.location[this.location.length - 1]; //we need to get the first index that we pushed initially 
                    let nextIndex = lastIndex + 10; //this will increase by 10 becaues this is vertical
                    if (nextIndex <= 100) { //if the index does not exceed the grid by 100, continue to get the next grid
                      if (!pcTakenGrids.includes(nextIndex)) { // check if the next index is already in the location array, if it is not taken, continue to push the next index
                        pcTakenGrids.push(nextIndex)
                          this.location.push(nextIndex);
                          console.log(`PC: 2 ${this.name}'s location is ${this.location}`)
                      } else { // if the next index is already in the location array, try again
                        console.log(`Overlapping location, try again for ship ${this.name}, ${this.orientation}`);
                        this.location = [];
                        let newGridIndex = Math.floor(Math.random() * board.gridIndex.length)-1 //randomise the next index to pick
                        let newGrid = board.gridIndex[newGridIndex]  //to get the board's index after randomising
                        if (!pcTakenGrids.includes(newGrid)){ //need to make sure that the new grid is also not taken 
                          this.placeShipInGrid("PC"); 
                          console.log(`PC: 3 ${this.name}'s location is ${this.location}`)
                      }
                      }
                    } else { //when it goes out of grid where index > 100 
                      console.log(`Out of grid, try again for ship ${this.name} ${this.orientation}`);
                      this.location = [];
                      let newGridIndex = Math.floor(Math.random() * board.gridIndex.length)-1
                      let newGrid = board.gridIndex[newGridIndex]
                      if (!pcTakenGrids.includes(newGrid)){ //need to make sure that the new grid is also not taken 
                          this.placeShipInGrid("PC");
                          console.log(`PC: 4 ${this.name}'s location is ${this.location}`)
                      }
                    }
                  }                
                return this.location
            } else { //if it is vertical and player is not pc 
                let gridIndexUser = Math.floor(Math.random() * userBoard.gridIndex.length)-1
                let chosenStartGridUser = userBoard.gridIndex[gridIndexUser]
                if (!userTakenGrids.includes(chosenStartGridUser)){
                    userTakenGrids.push(chosenStartGridUser)
                    this.location.push(chosenStartGridUser)
                }
                while (this.location.length<this.size){ //we make sure that the size of the ship is fulfilled
                    let lastIndexUser = this.location[this.location.length - 1]; //we need to get the first index that we pushed initially 
                    let nextIndexUser = lastIndexUser + 10; //this will increase by 10 becaues this is vertical
                    if (nextIndexUser <= 100) { //if the index does not exceed the grid by 100, continue to get the next grid
                      if (!userTakenGrids.includes(nextIndexUser)) { // check if the next index is already in the location array, if it is not taken, continue to push the next index
                        userTakenGrids.push(nextIndexUser)
                          this.location.push(nextIndexUser);
                          console.log(`User: 2 ${this.name}'s location is ${this.location}`)
                      } else { // if the next index is already in the location array, try again
                        console.log(`User: Overlapping location, try again for ship ${this.name}, ${this.orientation}`);
                        this.location = [];
                        let newGridIndexUser = Math.floor(Math.random() * userBoard.gridIndex.length)-1 //randomise the next index to pick
                        let newGridUser = userBoard.gridIndex[newGridIndexUser]  //to get the board's index after randomising
                        if (!userTakenGrids.includes(newGridUser)){ //need to make sure that the new grid is also not taken 
                          this.placeShipInGrid("user"); 
                          console.log(`User: ${this.name}'s location is ${this.location}`)
                      }
                      }
                    } else { //when it goes out of grid where index > 100 
                      console.log(`Out of grid, try again for ship ${this.name} ${this.orientation}`);
                      this.location = [];
                      let newGridIndexUser = Math.floor(Math.random() * userBoard.gridIndex.length)-1
                      let newGridUser = userBoard.gridIndex[newGridIndexUser]
                      if (!userTakenGrids.includes(newGridUser)){ //need to make sure that the new grid is also not taken 
                          this.placeShipInGrid("user");
                          console.log(`User: ${this.name}'s location is ${this.location}`)
                      }
                    }
                  }                
                return this.location
            }
        } else { //when orientation is horizontal 
            if (player==="PC") { //when player is pc and orientation is horizontal
                let gridIndex = Math.floor(Math.random() * board.gridIndex.length)-1
                let chosenStartGrid = board.gridIndex[gridIndex]
                if (!pcTakenGrids.includes(chosenStartGrid)){
                    pcTakenGrids.push(chosenStartGrid)
                    this.location.push(chosenStartGrid)
                }
                while (this.location.length<this.size){ //we make sure that the size of the ship is fulfilled
                    let lastIndex = this.location[this.location.length - 1]; //we need to get the first index that we pushed initially 
                    let nextIndex = lastIndex + 1; //this will increase by 1 becaues this is vertical
                    let endRowIndex = (Math.floor(lastIndex / 10) + 1) * 10
                    if (nextIndex <= 100 && nextIndex<=endRowIndex) { //if the index does not exceed the grid by 100, continue to get the next grid
                      if (!pcTakenGrids.includes(nextIndex)) { // check if the next index is already in the location array, if it is not taken, continue to push the next index
                        pcTakenGrids.push(nextIndex)
                          this.location.push(nextIndex);
                          console.log(`PC: 2 ${this.name}'s location is ${this.location} and ${this.orientation}`)
                      } else { // if the next index is already in the location array, try again
                        console.log(`Overlapping location, try again for ship ${this.name}, ${this.orientation}`);
                        this.location = [];
                        let newGridIndex = Math.floor(Math.random() * board.gridIndex.length)-1 //randomise the next index to pick
                        let newGrid = board.gridIndex[newGridIndex]  //to get the board's index after randomising
                        if (!pcTakenGrids.includes(newGrid)){ //need to make sure that the new grid is also not taken 
                          this.placeShipInGrid("PC"); 
                          console.log(`PC: 3 ${this.name}'s location is ${this.location}and ${this.orientation}`)
                      }
                      }
                    } else { //when it goes out of grid where index > 100 
                      console.log(`Out of grid, try again for ship ${this.name} ${this.orientation}and ${this.orientation}`);
                      this.location = [];
                      let newGridIndex = Math.floor(Math.random() * board.gridIndex.length)-1
                      let newGrid = board.gridIndex[newGridIndex]
                      if (!pcTakenGrids.includes(newGrid)){ //need to make sure that the new grid is also not taken 
                          this.placeShipInGrid("PC");
                          console.log(`PC: 4 ${this.name}'s location is ${this.location}and ${this.orientation}`)
                      }
                    }
                  }                
                return this.location
            } else { //when player is user and orientation is horizontal
                let gridIndex = Math.floor(Math.random() * board.gridIndex.length)-1
                let chosenStartGrid = board.gridIndex[gridIndex]
                if (!userTakenGrids.includes(chosenStartGrid)){
                    userTakenGrids.push(chosenStartGrid)
                    this.location.push(chosenStartGrid)
                }
                while (this.location.length<this.size){ //we make sure that the size of the ship is fulfilled
                    let lastIndex = this.location[this.location.length - 1]; //we need to get the first index that we pushed initially 
                    let nextIndex = lastIndex + 1; //this will increase by 1 becaues this is vertical
                    let endRowIndex = (Math.floor(lastIndex / 10) + 1) * 10
                    if (nextIndex <= 100 && nextIndex<=endRowIndex) { //if the index does not exceed the grid by 100, continue to get the next grid
                      if (!userTakenGrids.includes(nextIndex)) { // check if the next index is already in the location array, if it is not taken, continue to push the next index
                        userTakenGrids.push(nextIndex)
                          this.location.push(nextIndex);
                          console.log(`PC: 2 ${this.name}'s location is ${this.location} and ${this.orientation}`)
                      } else { // if the next index is already in the location array, try again
                        console.log(`Overlapping location, try again for ship ${this.name}, ${this.orientation}`);
                        this.location = [];
                        let newGridIndex = Math.floor(Math.random() * board.gridIndex.length)-1 //randomise the next index to pick
                        let newGrid = board.gridIndex[newGridIndex]  //to get the board's index after randomising
                        if (!userTakenGrids.includes(newGrid)){ //need to make sure that the new grid is also not taken 
                          this.placeShipInGrid("user"); 
                          console.log(`PC: 3 ${this.name}'s location is ${this.location}and ${this.orientation}`)
                      }
                      }
                    } else { //when it goes out of grid where index > 100 
                      console.log(`Out of grid, try again for ship ${this.name} ${this.orientation}and ${this.orientation}`);
                      this.location = [];
                      let newGridIndex = Math.floor(Math.random() * board.gridIndex.length)-1
                      let newGrid = board.gridIndex[newGridIndex]
                      if (!userTakenGrids.includes(newGrid)){ //need to make sure that the new grid is also not taken 
                          this.placeShipInGrid("user");
                          console.log(`PC: 4 ${this.name}'s location is ${this.location}and ${this.orientation}`)
                      }
                    }
                  }                
                return this.location
            }

        }
    }
}



const carrierUser = new Ship("carrier", 5,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
const battleshipUser = new Ship("battleship", 4,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
const cruiserUser = new Ship("cruiser", 3,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
const submarineUser = new Ship("submarine", 3,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
const destroyerUser = new Ship("destroyer", 2,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
const shipsUser = [carrierUser, battleshipUser, cruiserUser, submarineUser, destroyerUser];
shipsUser.forEach(element => element.placeShipInGrid("user"))


const carrierPC = new Ship("carrier", 5,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
const battleshipPC = new Ship("battleship", 4,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
const cruiserPC = new Ship("cruiser", 3,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
const submarinePC = new Ship("submarine", 3,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
const destroyerPC = new Ship("destroyer", 2,Math.floor(Math.random()*2)=== 0 ? "horizontal" : "vertical");
const shipPC = [carrierPC,battleshipPC,cruiserPC,submarinePC,destroyerPC]

shipPC.forEach(element => element.placeShipInGrid("PC"))

console.log(shipPC)
console.log(shipsUser)
console.log(pcTakenGrids.sort())
console.log(userTakenGrids.sort())