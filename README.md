# ruby_rangers-jsset

CSE 3901, Project 5: JavaScript Game of Set

Team name: Ruby Rangers 

Team members: Alex Wollam, Anusriti Das, Mitali Joshi, Orfilia Qiu, Zahra Naseer

Project Description:  Implement the game of Set using Javascript.

Summary of the game: A deck of 81 cards, each card is of the combination of the following attributes(there is no repeating card in the deck): -Color: red, purple, green -Shape: diamond, squiggle, oval -Shading: solid, open, striped -Number of the shapes: 1, 2, 3

A player's task is to form a valid set of 3 cards.

A valid set: one or more attributes are the same among all cards and other attributes are different among all cards

Attributes of the game: -Player can pick from the three different difficulty levels -If the player chooses their cards correctly, they gain a point to their score, otherwise they loose a point -The player can answer incorrectly up to 4 times before they lose the game -The hint generator tells them whether or not a set exists on the board using a pop-up window -If a set exists, the player will be provided some information about the set -The timer is reset everytime the player guesses correctly or incorrectly -If the player runs out of time, they will lose the game -Refresh to restart the game -Does not support cross browser view -Works best on Firefox in VirtualBox. 

*******Files needed for the project: *********
- star-page.html: Web page for the game! Click to open the game!
- card.js: Contains code for the deck and individual cards
- board.js: Contains code for the formatting and functionality of the board
- diffModes.js: Contains code for the timer and difficulty modes   
- toggle.js: Contains code to hide and show certain HTML elements
- game-logic.js: Contains logic for checking whether or not a set is valid
- popup.js: Contains code for the 'Game Over' popup window
- board.css: Handles css for the board of cards
- main.css: Handles css for the rest of the game
- images: Folder containing folder of pictures of the 81 cards and logos

