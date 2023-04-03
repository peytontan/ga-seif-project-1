let arrayAlphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'] //can be useful for stretch goal if i want to make it more than 10 by 10 
let arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26] //can be useful for stretch goal if i want to make it more than 10 by 10 

class Grids{
    constructor(row, col){
        this.row = row
        this.col = col
        this.grid = []
        this.perGrid=[]
    }
    makeGrid (){ //this will make a grid with the "proper" cell nams instead of seeing "x"
    arrayAlphabets = arrayAlphabets.slice(0,this.row)
    arrayNumbers = arrayNumbers.slice(0,this.col)
    for (let a = 0; a < arrayAlphabets.length; a++){ //for now this will come first, when it is in vertical then our positioning will need to change
        this.perGrid[a] = [] //this will give us an array per row
        for (let n = 0; n<arrayNumbers.length;n++){
            let cells = arrayAlphabets[a]+arrayNumbers[n] //this will give an array with all the grids in an array (not separated by "rows")
            this.grid.push(cells) 
            this.perGrid[a][n]=cells //this will give us an array per row 
        }
    }
    return this.perGrid
    // return this.grid
    // return [this.grid,this.perGrid] //can't return 2.. maybe will just make do with this first
    }
}

const board = new Grids(10,10) //this will need to be listened to in the browser (we need to try this later on)
// console.log(board.getGrid())
// console.log(board.makeGrid())
// console.log(board)


export {arrayAlphabets, arrayNumbers, Grids, board}