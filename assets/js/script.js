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
    make_grid()    
}


function make_grid () {
    const grid = document.querySelector("#game-grid");
    console.log(grid);

    for (let i = 0; i < 225; i++){
        const square = document.createElement('div');
        grid.appendChild(square)
    }
    make_aliens
}


function make_aliens() {
    const squares = Array.from(document.querySelectorAll('#game-grid div'))
    const alienInvaders = [
        0,1,2,3,4,5,6,7,8,9,
        15,16,17,18,19,20,21,22,23,24,
        30,31,32,33,34,35,36,37,38,39
    ]
}


function draw(){
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.add('invader')
    }
}

