window.onload = function(){
    console.log("boomshki")
    var lets_play = document.getElementById("play-button");
    lets_play.addEventListener("click", mad_scientist)
}


function mad_scientist(){
    console.log("heya")
    var games_console = document.getElementById("console");
    games_console.innerHTML = 
    `<image src="/assets/images/home.png">`
}