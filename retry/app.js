import { createBoard, arrayAlphabets, arrayNumbers, board } from "./grid.js"
import {Ship, carrierUser,battleshipUser,cruiserUser,submarineUser,destroyerUser,shipsUser,shipPC} from "./ship.js"


$(()=>{
    board.gridIndex.forEach(grid => {
        const $gridToPlace = $('<div>').attr('id',grid).addClass("grid")
        const $battleShipBoard = $('.boardToPlace')
        $battleShipBoard.append($gridToPlace)
        
        const $pcGrid = $('<div>').attr('id',grid).addClass("PCgrid")
        const $pcBattleshipBoard = $('.PC')
        $pcBattleshipBoard.append($pcGrid)
        shipPC.forEach(element => {
            element.location.forEach(cell => {
                $(`#${cell}.PCgrid`).css("background-color","red") //need to think of ways to stop it from overlapping
            })
        })
        // $pcBattleshipBoard.hide() //hide this later on, if we wanna cheat we can check
        
        const $gridToClick = $('<div>').attr('id',grid).addClass("userGrid")
        const $battleShipBoardToClick = $('.boardToClick')
        $battleShipBoardToClick.append($gridToClick)
        shipPC.forEach(element => {
            element.location.forEach(cell => {
                $gridToClick.on("click",()=>{
                    console.log("yo")
                    $(`#${cell}.userGrid`).css("background-colour","red")}) //need to think of ways to stop it from overlapping
                // $(`#${cell}.userGrid`).css("background-color","red") //need to think of ways to stop it from overlapping
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
})
