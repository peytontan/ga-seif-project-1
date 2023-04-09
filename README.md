# peytontan.github.io

This is a simple battleship game

Player's and Computer's ships are randomly placed in the game board. Player will need to try and pick where the computer's pc is placed vice versa. 

The first to sink all ships wins the game. 

# File breakdown
## index.html 
contains the basic markdown of the battleship game. Most of the rendering will be done via JQuery

## grid.js 
Creates the board of 10x10, does not take in any user input for the time being as the usual battleship game only operates on a 10x10 board

## ship.js
Class of ship is found in this js file. It also contains the logic of placings the ships randomly based on the ship's size. 
Ships that are placed randomly have the following requirements met: 
1. No overlapping of the 5 ships 
2. Ships are not to be broken up into rows respectively if they are placed horizontally 
3. Ships are not to be placed out of grid, they are to stay within the 10x10 board

## app.js
Uses JQuery to further render the board game


# Technologies used: 
Javascript
CSS
HTML 

# Link to live site: 
https://peytontan.github.io/

# Installation instructions: 
None... just use my live site


