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
    game_grid.hidden = true;
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
    if (blockLeft<20 && blockLeft>0 % characterTop>= height-500){
        alert("u lose");
        block.style.animation = "none";
        block.style.display = "none"
    }
},10);
    















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


