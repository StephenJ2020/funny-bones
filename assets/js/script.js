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
    setTimeout(function(){ 
        var finish_message = document.getElementById("timer");
        finish_message.hidden = false;
    }, 5300);
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



