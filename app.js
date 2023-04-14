import { createBoard, arrayAlphabets, arrayNumbers, board,userBoard, gameBoard } from "./grid.js"
import {pcTakenGrids, userTakenGrids, Ship, carrierUser, battleshipUser, cruiserUser, submarineUser,destroyerUser,shipsUser,carrierPC,battleshipPC,cruiserPC,submarinePC,destroyerPC,shipPC,userNotTakenGrids,pcNotTakenGrids,userGrids,pcGrids} from "./ship.js"

const shipHitSound = new Audio("ship_hit_short.wav")
const gameOverSound = new Audio("ES_Video Game Descend 1 - SFX Producer.wav")

let availableIndexesPC = userBoard.gridIndex //need to define this variable first
$(()=>{
    $('.reset').on('click', () => {
        location.reload(); //this reloads the current document
    }) 

    $('#instructions').on("click", ()=> { //when we click on instructions this will fade in
          $('#popup').fadeIn();
        });
        $('#close-popup').on("click", ()=>  { //when we click on close in the instructions pop up, this will fade out
          $('#popup').fadeOut();
        });

    const gameOver = () => {
        const userHits = $('.clickGrid.hit').length //this is what user managed to hit
        const pcHits = $('.userGrid.hit').length //this is waht pc managed to hit 
        if (userHits === 17 || pcHits === 17) {
            const winner = userHits === 17 ? 'User' : 'PC' //set winner to be user if all 5 ships (17 grids) of PC's are hit, else set PC to be the winner when all 5 ships (17 grids) of user are sunk 
            gameOverSound.play()
            alert(`Game over!! ${winner} wins!!`)
            $('.clickGrid').off('click') //stops the game once there is a winner
        }
      }

    let userTurn = true //this allows us to keep track of whose turn it is
    $('.playerTracker').text(`Player's Turn: ${userTurn ===true ? "user" : "pc"}`)
    let turnCounter = 0
    $('.turnCount').text(`Turn Count = ${turnCounter}`)
    
    let shipsLeftUser = 5  //this is indicate how many ships are left for user (pc attack user - show under userGrid)
    let gridsLeftUser = 17 // to count for how many grids are left for user (pc attack user - show under userGrid)
    let shipsLeftPc = 5  //this is to indicate how mayn ships are left for pc (user attack pc - to use for click grid) 
    let gridsLeftPc = 17 // to count for how many grids are left for pc (user attack pc - to use for click grid?)

    let $shipCounts = $('.shipsCount')
    $shipCounts.text(`Ship grids remaining: ${gridsLeftPc}`)

    //user's board
    userBoard.gridIndex.forEach(grid=>{ //this is to show the randomly generated grids for user
        const $gridToPlace = $('<div>').attr('id',grid).addClass("userGrid")
        const $battleShipBoard = $('.userBoard')
        $battleShipBoard.append($gridToPlace)
        shipsUser.forEach(element => {
            element.location.forEach(cell => {
                $(`#${cell}.userGrid`).css("background-color","#abab98") //need to think of ways to stop it from overlapping
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
                $(`#${cell}.pcGrid`).css("background-color","#ff6961") //need to think of ways to stop it from overlapping
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
                $(`#${gridIndex}.userGrid`).css("background-color","#ff6961").toggleClass("hit")
                shipHitSound.play()
                gameOver()
                availableIndexesPC = availableIndexesPC.filter((element) => element!==gridIndex) //removing the already selected index so that it will not be used to select the grid again
                turnCounter+=1
                $('.turnCount').text(`Turn Count = ${turnCounter}`)
                toggleTurns()
                $('.playerTracker').text(`Player's Turn: ${userTurn ===true ? "user" : "pc"}`)
                // console.log("test")
                gridsLeftPc-=1
                $('.shipsCount#user').text(`Ship grids remaining: ${gridsLeftPc}`)
            } else {
                toggleTurns()
                $(`#${gridIndex}.userGrid`).css("background-color","#77DD77").toggleClass("missed")
                availableIndexesPC = availableIndexesPC.filter((element) => element!==gridIndex) //removing the already selected index so that it will not be used to select the grid again
                turnCounter+=1
                $('.turnCount').text(`Turn Count = ${turnCounter}`)
                $('.playerTracker').text(`Player's Turn: ${userTurn ===true ? "user" : "pc"}`)
                }
}


 //this is for when the user is clicking on the enemy's ship and it matches the same grid that the enemy has placed their ship at, it will turn the grid red colour
    pcGrids.forEach(cell => {
           $(`#${cell}.clickGrid`).on('click',()=>{
               if (userTurn){
                   $(`#${cell}.clickGrid`).css("background-color","#ff6961").toggleClass("hit")
                   shipHitSound.play()
                   gameOver()
                //    console.log("test3")
                   turnCounter+=1
                   $('.turnCount').text(`Turn Count = ${turnCounter}`)
                   toggleTurns()
                   $('.playerTracker').text(`Player's Turn: ${userTurn ===true ? "user" : "pc"}`)
                   gridsLeftUser-=1
                   $('.shipsCount#pc').text(`Ship grids remaining: ${gridsLeftUser}`)
                   $(`#${cell}.clickGrid`).off('click') //this will stop the grid that was already clicked on to stopped being counted as a turn, and it will not allow to change the turn unless a valid grid has been clicked
                   setTimeout(()=>{pcAction()},1200) //set pcAction to only happen .3seconds later after user is done clicking
               }
           })
       }) 
           
       pcNotTakenGrids.forEach(cell => { //to  see which of the enemy grids are not occupied, and when its clicked on, we need to change it to green because it means that it wasn't hit on 
           $(`#${cell}.clickGrid`).on('click',()=>{
               if (userTurn){
                   $(`#${cell}.clickGrid`).css("background-color","#77DD77").toggleClass("missed")
                //    $(`#${cell}.clickGrid`).toggleClass("missed")
                //    console.log("test4")
                   turnCounter+=1
                   $('.turnCount').text(`Turn Count = ${turnCounter}`)
                   $(`#${cell}.clickGrid`).off('click') //this will stop the grid that was already clicked on to stopped being counted as a turn, and it will not allow to change the turn unless a valid grid has been clicked
                   toggleTurns()
                   $('.playerTracker').text(`Player's Turn: ${userTurn ===true ? "user" : "pc"}`)
                   setTimeout(()=>{pcAction()},1200) //set pcAction to only happen .3seconds later after user is done clicking
               }
           })
       })
})
