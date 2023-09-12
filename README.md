The project components are:
  ● Menu with multiple options:
    ○ New game (2 players)
    ○ Instructions
    ○ About the project
  ● The new game (2 players) allows playing for two players.
  ● Instructions
    ○ The game consists of a grid of mxn points, where m and n are even natural numbers. Two players play
    alternately. Each player in his turn chooses a triangle by choosing three points from the grid that do not
    lie on the same line. Triangles may not intersect, and no two triangles may have a common vertex.
    Triangles can be nested inside each other. The game is over when one player runs out
    move. The player who ran out of moves loses. In the image below, the side lines represent the player's color
    which is on the move.
The main option is “New Game” for two players with board selection. 
  ● The user selects the board on which the game will be played. The board can be of the standard shape mxn,
  but it can also be irregular in shape. Provide at least 3 standard sizes for the project
  plates, and at least one plate of non-standard shape. In the event that one of the
  specified options, the maximum number of possible points is reduced by 3 points (if no
  there is a non-standard form or if there are no 3 standard forms).
  ● Before the start of the game, players are given names: Player A and Player B.
  ● At the end of the game, users have the right to choose whether to play again, and if they choose a new one
  game, the order of play is changed for the players (the second game is played first by Player B, the third again
  Player A...)

This game was really fun to work on since I could work on backend logic of the whole game, but I was free to decorate game as I wished. The logic of the game is working slower then I would like(O(n^2) time), but for a small number of checks it is not noticable.
