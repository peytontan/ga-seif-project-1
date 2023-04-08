import { createBoard, arrayAlphabets, arrayNumbers, board,userBoard } from "./grid.js"
import {pcTakenGrids, userTakenGrids, Ship, carrierUser, battleshipUser, cruiserUser, submarineUser,destroyerUser,shipsUser,carrierPC,battleshipPC,cruiserPC,submarinePC,destroyerPC,shipPC} from "./ship.js"


$(()=>{
    board.gridIndex.forEach(grid => {
        const $pcGrid = $('<div>').attr('id',grid).addClass("pcGrid")
        const $pcBattleshipBoard = $('.PC') //from html
        $pcBattleshipBoard.append($pcGrid)
        shipPC.forEach(element => {
            element.location.forEach(cell => {
                $(`#${cell}.pcGrid`).css("background-color","red") //need to think of ways to stop it from overlapping
            })
        })
        // shipPC.forEach(element => {
        //     element.location.forEach(cell => {
        //         $(`#${cell}.PCgrid`).css("background-color","red") //need to think of ways to stop it from overlapping
        //     })
        // })
        // $pcBattleshipBoard.hide() //hide this later on, if we wanna cheat we can check
        
        // const $gridToClick = $('<div>').attr('id',grid).addClass("userGrid")
        // const $battleShipBoardToClick = $('.boardToClick')
        // $battleShipBoardToClick.append($gridToClick)
        // shipPC.forEach(element => {
        //     element.location.forEach(cell => {
        //         $gridToClick.on("click",()=>{
                    // console.log("yo")
                    // $(`#${cell}.PCgrid`).css("background-colour","red")}) 
            // })
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

        // if (shipsUser.forEach(element => {
        //     element.location.forEach(loc=>console.log(loc))
        // })==$gridToClick){
        //     console.log('wow')
        // }
        // $gridToClick.on("click",()=>{
        //     if ($gridToClick.attr('id')===shipsUser.forEach(element => {
        //             element.location.forEach(loc=>console.log(loc))
        //         })){
        //             $gridToClick.css("background-color","red") //this should be only when its hit
        //         }
        //     })


        // if ($grid.attr('id')===asd){
            // $gridToClick.on("click",()=>{
            //     $gridToClick.css("background-color","red") //this should be only when its hit
            // }
            // )
        // }
    
})
