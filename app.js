import { createBoard, arrayAlphabets, arrayNumbers, board,userBoard, gameBoard } from "./grid.js"
import {pcTakenGrids, userTakenGrids, Ship, carrierUser, battleshipUser, cruiserUser, submarineUser,destroyerUser,shipsUser,carrierPC,battleshipPC,cruiserPC,submarinePC,destroyerPC,shipPC} from "./ship.js"


$(()=>{
    //this section is for pc's ships that were placed 
    board.gridIndex.forEach(grid => { 
        const $pcGrid = $('<div>').attr('id',grid).addClass("pcGrid") 
        const $pcBattleshipBoard = $('.PC') //from html
        $pcBattleshipBoard.append($pcGrid)
        shipPC.forEach(element => {
            element.location.forEach(cell => {
                $(`#${cell}.pcGrid`).css("background-color","red") //need to think of ways to stop it from overlapping
            })
        })
    })

    gameBoard.gridIndex.forEach(grid => { 
        const $gridToClick = $('<div>').attr('id',grid).addClass("clickGrid")
        const $battleShipBoardToClick = $('.boardToClick')
        $battleShipBoardToClick.append($gridToClick)
    })

    
    shipPC.forEach(element => { //this is for when the user is clicking on the enemy's ship and it matches the same grid that the enemy has placed their ship at, it will turn the grid red colour
        element.location.forEach(cell => {
            $(`#${cell}.clickGrid`).on('click',()=>{
                $(`#${cell}.clickGrid`).css("background-color","red")
                alert(`${cell} was hit`)
            })
            }) 
        })



    // $pcBattleshipBoard.hide() //hide this later on, if we wanna cheat we can check
        
    userBoard.gridIndex.forEach(grid=>{ //this is to show the randomly generated grids for user
        const $gridToPlace = $('<div>').attr('id',grid).addClass("userGrid")
        const $battleShipBoard = $('.userBoard')
        $battleShipBoard.append($gridToPlace)
        shipsUser.forEach(element => {
            element.location.forEach(cell => {
                $(`#${cell}.userGrid`).css("background-color","red") //need to think of ways to stop it from overlapping
            })
        })
    })

})
