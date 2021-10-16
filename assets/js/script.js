window.onload = function(){
    console.log("boomshki")
    var lets_play = document.getElementById("play-button");
    lets_play.addEventListener("click", mad_scientist)
}


function mad_scientist(){
    var games_console = document.getElementById("console");
    games_console.hidden = true;
    var game = document.getElementById("game");
    game.hidden = false;
}