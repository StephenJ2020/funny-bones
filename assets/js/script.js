var myTimeOut;

window.onload = function() {
var lets_replay = document.getElementById("replay-button");
    console.log(lets_replay)
    lets_replay.addEventListener("click", mad_scientist)
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
    myTimeOut = setTimeout(function(){ 
        var finish_message = document.getElementById("success");
        finish_message.hidden = false;
        var scientist = document.getElementById("character");
        console.log(scientist)
        scientist.setAttribute("style","width:300px");
        scientist.setAttribute("style","height:0px");
        scientist.setAttribute("style","top:40px");
    }, 5300);
    myTimeOut();
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
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    var viewport_width = window.innerWidth;
    console.log(viewport_width);
    if (viewport_width < 700) {
        var characterTopMax = height - (75 + 30);
        var width_value = 50;
    }
    if (viewport_width > 700) {
        var characterTopMax = height - (150 + 60);
        var width_value = 100;
    }
    console.log(characterTopMax)
    if (blockLeft<width_value && blockLeft>0 && characterTop>= characterTopMax){
        replay = document.getElementById("replay");
        game_grid.hidden = true;
        replay.hidden = false;
        clearTimeout( myTimeOut )
        block.style.animation = "none";
        block.style.display = "none"
    }
},10);



