import { createBoard, arrayAlphabets, arrayNumbers, board,userBoard, gameBoard } from "./grid.js"
import {pcTakenGrids, userTakenGrids, Ship, carrierUser, battleshipUser, cruiserUser, submarineUser,destroyerUser,shipsUser,carrierPC,battleshipPC,cruiserPC,submarinePC,destroyerPC,shipPC,userNotTakenGrids,pcNotTakenGrids,userGrids,pcGrids} from "./ship.js"

let availableIndexesPC = userBoard.gridIndex //need to define this variable first
$(()=>{
    const gameOver = () => {
        const userHits = $('.clickGrid.hit').length //this is what user managed to hit
        const pcHits = $('.userGrid.hit').length //this is waht pc managed to hit 
        if (userHits === 17 || pcHits === 17) {
            const winner = userHits === 17 ? 'User' : 'PC' //set winner to be user if all 5 ships (17 grids) of PC's are hit, else set PC to be the winner when all 5 ships (17 grids) of user are sunk 
            alert(`Game over! ${winner} wins! Better luck next time`)
            $('.clickGrid').off('click') //stops the game once there is a winner
        }
      }

    let userTurn = true //this allows us to keep track of whose turn it is
    let turnCounter = 0
    $('.turnCount').text(`Turn Count = ${turnCounter}`)
    $('.playerTracker').text(`Player's Turn: ${userTurn ===true ? "user" : "pc"}`)
    
    //user's board
    userBoard.gridIndex.forEach(grid=>{ //this is to show the randomly generated grids for user
        const $gridToPlace = $('<div>').attr('id',grid).addClass("userGrid")
        const $battleShipBoard = $('.userBoard')
        $battleShipBoard.append($gridToPlace)
        shipsUser.forEach(element => {
            element.location.forEach(cell => {
                $(`#${cell}.userGrid`).css("background-color","grey") //need to think of ways to stop it from overlapping
            })
        })
    })

    //pc's board
    board.gridIndex.forEach(grid => { //this section is for pc's ships that were placed 
        const $pcGrid = $('<div>').attr('id',grid).addClass("pcGrid") 
        const $pcBattleshipBoard = $('.PC') //from html
        $pcBattleshipBoard.append($pcGrid)
        shipPC.forEach(element => {
            element.location.forEach(cell => {
                $(`#${cell}.pcGrid`).css("background-color","red") //need to think of ways to stop it from overlapping
            })
        })
        $pcBattleshipBoard.hide() //hide this later on, if we wanna cheat we can check in elements hehe
    })

    //make a function to toggle between user and pc turn
    const toggleTurns = () => {
        userTurn = !userTurn //essentially either toggle it to true or false base on the current boolean
    }

    //board to click for user to guess
    gameBoard.gridIndex.forEach(grid => { 
        const $gridToClick = $('<div>').attr('id',grid).addClass("clickGrid")
        const $battleShipBoardToClick = $('.boardToClick')
        $battleShipBoardToClick.append($gridToClick)
    })

    const pcAction = () => {
        let index = Math.floor(Math.random() * availableIndexesPC.length)//it needs to be taking from availableIndexPC because everytime its PC's turn, the number of index available for selection reduces
        let gridIndex = availableIndexesPC[index]   
            if (userGrids.includes(gridIndex)){
                $(`#${gridIndex}.userGrid`).css("background-color","red").toggleClass("hit")
                availableIndexesPC = availableIndexesPC.filter((element) => element!==gridIndex) //removing the already selected index so that it will not be used to select the grid again
                turnCounter+=1
                $('.turnCount').text(`Turn Count = ${turnCounter}`)
                toggleTurns()
                $('.playerTracker').text(`Player's Turn: ${userTurn ===true ? "user" : "pc"}`)
                gameOver()
            } else {
                $(`#${gridIndex}.userGrid`).css("background-color","green").toggleClass("missed")
                availableIndexesPC = availableIndexesPC.filter((element) => element!==gridIndex) //removing the already selected index so that it will not be used to select the grid again
                turnCounter+=1
                $('.turnCount').text(`Turn Count = ${turnCounter}`)
                toggleTurns()
                $('.playerTracker').text(`Player's Turn: ${userTurn ===true ? "user" : "pc"}`)
                gameOver()
                }
}


 //this is for when the user is clicking on the enemy's ship and it matches the same grid that the enemy has placed their ship at, it will turn the grid red colour
    pcGrids.forEach(cell => {
           $(`#${cell}.clickGrid`).on('click',()=>{
               if (userTurn){
                   $(`#${cell}.clickGrid`).css("background-color","red")
                   $(`#${cell}.clickGrid`).toggleClass("hit")
                //    alert(`grid ${cell} was hit`)
                   turnCounter+=1
                   $('.turnCount').text(`Turn Count = ${turnCounter}`)
                   toggleTurns()
                   $('.playerTracker').text(`Player's Turn: ${userTurn ===true ? "user" : "pc"}`)
                   $(`#${cell}.clickGrid`).off('click') //this will stop the grid that was already clicked on to stopped being counted as a turn, and it will not allow to change the turn unless a valid grid has been clicked
                   gameOver()
                   setTimeout(()=>{pcAction()},300) //set pcAction to only happen .3seconds later after user is done clicking
               }
           })
       }) 
           
       pcNotTakenGrids.forEach(cell => { //to  see which of the enemy grids are not occupied, and when its clicked on, we need to change it to green because it means that it wasn't hit on 
           $(`#${cell}.clickGrid`).on('click',()=>{
               if (userTurn){
                   $(`#${cell}.clickGrid`).css("background-color","green")
                   $(`#${cell}.clickGrid`).toggleClass("missed")
                   turnCounter+=1
                   $(`#${cell}.clickGrid`).off('click') //this will stop the grid that was already clicked on to stopped being counted as a turn, and it will not allow to change the turn unless a valid grid has been clicked
                   $('.turnCount').text(`Turn Count = ${turnCounter}`)
                   toggleTurns()
                   $('.playerTracker').text(`Player's Turn: ${userTurn ===true ? "user" : "pc"}`)
                   gameOver()
                   setTimeout(()=>{pcAction()},300) //set pcAction to only happen .3seconds later after user is done clicking
               }
           })
       })
})
