window.onload = function(){
    console.log("boomshki")
    var lets_play = document.getElementById("play-button");
    lets_play.addEventListener("click", mad_scientist)
}


function mad_scientist(){
    var games_console = document.getElementById("console");
    games_console.hidden = true;
    var game_grid = document.getElementById("game-grid");
    game_grid.hidden = false;
    const grid = document.querySelector("#game-grid");
    console.log(grid);

    for (let i = 0; i < 225; i++){
        const square = document.createElement('div');
        grid.appendChild(square)
}}