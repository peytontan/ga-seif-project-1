let arrayAlphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'] //can be useful for stretch goal if i want to make it more than 10 by 10 
let arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26] //can be useful for stretch goal if i want to make it more than 10 by 10 

class createBoard{
    constructor(){ //shouldn't be using any constructor params here because it will affect inheritance
        this.row=10;
        this.col=10;
        this.grid = []
        this.gridObj={} //do i need this? 
        this.gridIndex=[]
        this.gridOneD=[] //to select grid for pc (easier to select)
    }
    makeGrid (){ //this will make a grid with the "proper" cell nams instead of seeing "x"    
    let counter = 0
        for (let a = 0; a < this.row; a++){ //for now this will come first, when it is in vertical then our positioning will need to change
        this.grid[a] = [] //this will give us an array per row
        for (let n = 0; n<this.col;n++){
            let cells = arrayAlphabets[a]+arrayNumbers[n] //this will give an array with all the grids in an array (not separated by "rows")
            this.grid[a][n]=cells //this will give us an array per row 
            counter++
            this.gridObj[cells]=counter
            this.gridIndex.push(counter)
            this.gridOneD.push(cells)
        }
    }
    // return this.gridObj
    // return this.gridIndex
    return this.grid
    }
    rowNumber(){
        this.row = arrayAlphabets.length
        return this.row
    }
    columnNumber(){
        this.col = arrayNumbers.length //this will give the column number aaccoridngly
        return this.col
    }
}

const board = new createBoard()
const userBoard = new createBoard()
const gameBoard = new createBoard()
board.makeGrid() 
userBoard.makeGrid() 
gameBoard.makeGrid()
// console.log(board.gridIndex)
// console.log(board.makeGrid())
// console.log(board.gridIndex)
// console.log(board.gridOneD)

export {arrayAlphabets, arrayNumbers, createBoard, board,userBoard,gameBoard}