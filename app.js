import { createBoard, arrayAlphabets, arrayNumbers, board,userBoard, gameBoard } from "./grid.js"
import {pcTakenGrids, userTakenGrids, Ship, carrierUser, battleshipUser, cruiserUser, submarineUser,destroyerUser,shipsUser,carrierPC,battleshipPC,cruiserPC,submarinePC,destroyerPC,shipPC,userNotTakenGrids,pcNotTakenGrids} from "./ship.js"


$(()=>{
    let userTurn = true //this allows us to keep track of whose turn it is
    let turnCounter = 0

    // $('.turnCount').text(`Turn Count = ${turnCounter}`)
    
    //user's board
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
    //code above works do not touch
    //------------------------------------------------------------------------------------------------

    shipPC.forEach(element => { //this is for when the user is clicking on the enemy's ship and it matches the same grid that the enemy has placed their ship at, it will turn the grid red colour
        element.location.forEach(cell => {
            $(`#${cell}.clickGrid`).on('click',()=>{
                if (userTurn){
                    $(`#${cell}.clickGrid`).css("background-color","red")
                    $(`#${cell}.clickGrid`).toggleClass("hit")
                    alert(`grid ${cell} was hit`)
                    turnCounter+=1
                    console.log(turnCounter)
                    $(`#${cell}.clickGrid`).off('click') //this will stop the grid that was already clicked on to stopped being counted as a turn, and it will not allow to change the turn unless a valid grid has been clicked
                    toggleTurns()
                } else {
                    let availableIndexesPC = userBoard.gridIndex
                    let index = Math.floor(Math.random() * board.gridIndex.length)-1
                    let gridIndex = availableIndexesPC[index]   
                        if (userTakenGrids.includes(gridIndex)){
                            console.log(gridIndex)
                            $(`#${gridIndex}.userGrid`).css("background-color","orange").toggleClass("hit")
                            availableIndexesPC = availableIndexesPC.filter((element) => element!==gridIndex) //removing the already selected index so that it will not be used to select the grid again
                            // console.log("availble index", availableIndexesPC)
                            toggleTurns()
                        } else {
                            console.log(gridIndex)
                            $(`#${gridIndex}.userGrid`).css("background-color","green").toggleClass("missed")
                            availableIndexesPC = availableIndexesPC.filter((element) => element!==gridIndex) //removing the already selected index so that it will not be used to select the grid again
                            // console.log("availble index",availableIndexesPC)
                            toggleTurns()
                    }
                }
            })
        }) 
    })
        
    pcNotTakenGrids.forEach(cell => { //to  see which of the enemy grids are not occupied, and when its clicked on, we need to change it to green because it means that it wasn't hit on 
        $(`#${cell}.clickGrid`).on('click',()=>{
            if (userTurn){
                $(`#${cell}.clickGrid`).css("background-color","green")
                $(`#${cell}.clickGrid`).toggleClass("missed")
                turnCounter+=1
                console.log(turnCounter)
                $(`#${cell}.clickGrid`).off('click') //this will stop the grid that was already clicked on to stopped being counted as a turn, and it will not allow to change the turn unless a valid grid has been clicked
                // console.log(userTurn)
                toggleTurns()
                // console.log(userTurn)
            } else {
                let availableIndexesPC = userBoard.gridIndex
                let index = Math.floor(Math.random() * board.gridIndex.length)-1
                let gridIndex = availableIndexesPC[index]   
                    if (userTakenGrids.includes(gridIndex)){
                        console.log(gridIndex)
                        $(`#${gridIndex}.userGrid`).css("background-color","orange").toggleClass("hit")
                        availableIndexesPC = availableIndexesPC.filter((element) => element!==gridIndex) //removing the already selected index so that it will not be used to select the grid again
                        // console.log("availble index", availableIndexesPC)
                        toggleTurns()
                    } else {
                        console.log(gridIndex) //will need to check why there is an undefined
                        $(`#${gridIndex}.userGrid`).css("background-color","green").toggleClass("missed")
                        availableIndexesPC = availableIndexesPC.filter((element) => element!==gridIndex) //removing the already selected index so that it will not be used to select the grid again
                        // console.log("availble index",availableIndexesPC)
                        toggleTurns()
                }
            }
        })
    })
    
    
    
    // if (userTurn===false) { //pc's turn
        //randomly select
    //     let index = Math.floor(Math.random() * board.gridIndex.length)-1
    //     let gridIndex = userBoard.gridIndex[index]
    //     if (userTakenGrids.includes(gridIndex)){
    //         console.log(gridIndex)
    //         $(`#${gridIndex}.userGrid`).css("background-color","orange").toggleClass("hit")
    //         toggleTurns()
    //     } else {
    //         console.log(gridIndex)
    //         $(`#${gridIndex}.userGrid`).css("background-color","green").toggleClass("missed")
    //         toggleTurns()
    // }


    //code below works do not touch
    //-------------------------------------------------------------------------------------------------------------------
    //this is the old code, if we are to remove the if portion then we can just check this
    // shipPC.forEach(element => { //this is for when the user is clicking on the enemy's ship and it matches the same grid that the enemy has placed their ship at, it will turn the grid red colour
    //     element.location.forEach(cell => {
    //         $(`#${cell}.clickGrid`).on('click',()=>{
    //             $(`#${cell}.clickGrid`).css("background-color","red")
    //             $(`#${cell}.clickGrid`).toggleClass("hit")
    //             alert(`grid ${cell} was hit`)
    //             turnCounter+=1
    //             console.log(turnCounter)
    //             $(`#${cell}.clickGrid`).off('click') //this will stop the grid that was already clicked on to stopped being counted as a turn, and it will not allow to change the turn unless a valid grid has been clicked
    //         })
    //     }) 
    // })
    
    // pcNotTakenGrids.forEach(cell => { //to  see which of the enemy grids are not occupied, and when its clicked on, we need to change it to green because it means that it wasn't hit on 
    //     $(`#${cell}.clickGrid`).on('click',()=>{
    //         $(`#${cell}.clickGrid`).css("background-color","green")
    //         $(`#${cell}.clickGrid`).toggleClass("missed")
    //         turnCounter+=1
    //         console.log(turnCounter)
    //         $(`#${cell}.clickGrid`).off('click') //this will stop the grid that was already clicked on to stopped being counted as a turn, and it will not allow to change the turn unless a valid grid has been clicked
    //     })
    // })

    //pc randomly selecting
    //create a new array for userboard's gridindex
    // let availableIndexesPC = userBoard.gridIndex
    // let index = Math.floor(Math.random() * board.gridIndex.length)-1
    // let gridIndex = availableIndexesPC[index]   
    //     if (userTakenGrids.includes(gridIndex)){
    //         console.log(gridIndex)
    //         $(`#${gridIndex}.userGrid`).css("background-color","orange").toggleClass("hit")
    //         availableIndexesPC = availableIndexesPC.filter((element) => element!==gridIndex) //removing the already selected index so that it will not be used to select the grid again
    //         // console.log("availble index", availableIndexesPC)
    //     } else {
    //         console.log(gridIndex)
    //         $(`#${gridIndex}.userGrid`).css("background-color","green").toggleClass("missed")
    //         availableIndexesPC = availableIndexesPC.filter((element) => element!==gridIndex) //removing the already selected index so that it will not be used to select the grid again
    //         // console.log("availble index",availableIndexesPC)
    // }

    
    
    // $('.turnCount').text(`Turn Count = ${turnCounter}`)
})
