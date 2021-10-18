var myTimeOut;


window.onload = function() {
    var lets_play = document.getElementById("play-button");
    lets_play.addEventListener("click", mad_scientist)
    var lets_replay = document.getElementById("replay-button");
    lets_replay.addEventListener("click", reloader)
}


function reloader (){
    window.location.reload();
}


function mad_scientist() {
    var games_console = document.getElementById("console");
    games_console.hidden = true;
    var game_grid = document.getElementById("game-grid");
    game_grid.hidden = false;
    var viewport_width = window.innerWidth;
    myTimeOut = setTimeout(function(){ 
        var finish_message = document.getElementById("success");
        finish_message.hidden = false;
        if (viewport_width > 700) {
            var big_scientist = document.getElementById("finished_pic");
            big_scientist.hidden = false;
        }
        var little_scientist = document.getElementById("character");
        little_scientist.hidden = true;
    }, 5300);
    myTimeOut();
}


function jump () {
    if (character.classList != "animate-jump"){
    character.classList.add("animate-jump");
    setTimeout(function(){
        character.classList.remove("animate-jump")
    },500)
}
}


var check_dead = setInterval(function(){
    var game_grid = document.getElementById("game-grid");
    var height = parseInt(window.getComputedStyle(game_grid).getPropertyValue("height"));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    var viewport_width = window.innerWidth;
    if (viewport_width < 700) {
        var characterTopMax = height - (75 + 30);
        var width_value = 50;
    }
    if (viewport_width > 700) {
        var characterTopMax = height - (150 + 60);
        var width_value = 100;
    }
    if (blockLeft<width_value && blockLeft>0 && characterTop>= characterTopMax){
        replay = document.getElementById("replay");
        game_grid.hidden = true;
        replay.hidden = false;
        clearTimeout( myTimeOut )
        block.style.animation = "none";
        block.style.display = "none"
    }
},10);



