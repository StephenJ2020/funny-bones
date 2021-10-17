window.onload = function() {
    var character = document.getElementById("character");
    console.log(character)
    var block = document.getElementById("block");
    console.log(block)
    }


window.onload = function() {
    console.log("boomshki")
    var lets_play = document.getElementById("play-button");
    lets_play.addEventListener("click", mad_scientist)
}


function mad_scientist() {
    var games_console = document.getElementById("console");
    games_console.hidden = true;
    var game_grid = document.getElementById("game-grid");
    game_grid.hidden = false;
}


function jump () {
    if (character.classList != "animate"){
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate")
    },500)
}
}

var check_dead = setInterval(function(){
    var game_grid = document.getElementById("game-grid");
    var height = parseInt(window.getComputedStyle(game_grid).getPropertyValue("height"));
    console.log(height)
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    console.log(characterTop);
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    var characterTopMax = height - (150 + 60);
    console.log(characterTopMax)
    if (blockLeft<20 && blockLeft>0 && characterTop>= characterTopMax){
        alert("u lose");
        block.style.animation = "none";
        block.style.display = "none"
    }
},10);
    

var timeoutHandle;

function countdown(minutes, seconds) {
var seconds = 60;
var mins = minutes

function tick() {
    var counter = document.getElementById("timer");
    var current_minutes = mins - 1
    seconds--;
    counter.innerHTML =
    current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
    timeoutHandle = setTimeout(tick, 1000);
    } else {

    if (mins > 1) {

        // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
        setTimeout(function() {
        countdown(mins - 1);
        }, 1000);

    }
    }
}
tick();
}

countdown(2);













/*function get_grid() {
    const grid = document.querySelector("#game-grid");
    for (let i = 0; i < 225; i++){
    const square = document.createElement('div');
    grid.appendChild(square)
}}


/*function draw () {
    const squares = Array.from(document.querySelectorAll('#game-grid div'))
    console.log(squares);
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.add('invader')
    }
}

draw()

squares[currentShooterIndex].classList.add('shooter')*/


