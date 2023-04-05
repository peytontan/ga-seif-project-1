import { createBoard, arrayAlphabets, arrayNumbers, board } from "./grid.js"
import {Ship, carrierUser,battleshipUser,cruiserUser,submarineUser,destroyerUser,shipsUser} from "./ship.js"


$(()=>{
    board.gridIndex.forEach(grid => {
        const $gridToPlace = $('<div>').attr('id',grid).addClass("grid")
        const $battleShipBoard = $('.boardToPlace')
        $battleShipBoard.append($gridToPlace)
        
        
        const $gridToClick = $('<div>').attr('id',grid).addClass("grid")
        const $battleShipBoardToClick = $('.boardToClick')
        $battleShipBoardToClick.append($gridToClick)
        // if ($grid.attr('id')===asd){
        //     $grid.on("click",()=>{
        //         $grid.css("background-color","red")
        //     }
        //     )
        // }
    })
})
