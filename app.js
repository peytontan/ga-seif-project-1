import { createBoard, arrayAlphabets, arrayNumbers, board,userBoard, gameBoard } from "./grid.js"
import {pcTakenGrids, userTakenGrids, Ship, carrierUser, battleshipUser, cruiserUser, submarineUser,destroyerUser,shipsUser,carrierPC,battleshipPC,cruiserPC,submarinePC,destroyerPC,shipPC,userNotTakenGrids,pcNotTakenGrids} from "./ship.js"


$(()=>{
    let userTurn = true //this allows us to keep track of whose turn it is
    let turnCounter = 0

    $('.turnCount').text(`Turn Count = ${turnCounter}`)

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
        $pcBattleshipBoard.hide() //hide this later on, if we wanna cheat we can check in elements hehe
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
                $(`#${cell}.clickGrid`).toggleClass("hit")
                alert(`${cell} was hit`)
            })
            }) 
        })

    pcNotTakenGrids.forEach(cell => { //to  see which of the enemy grids are not occupied, and when its clicked on, we need to change it to green because it means that it wasn't hit on 
            $(`#${cell}.clickGrid`).on('click',()=>{
                $(`#${cell}.clickGrid`).css("background-color","green")
                $(`#${cell}.clickGrid`).toggleClass("missed")
            })
            })


        
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
