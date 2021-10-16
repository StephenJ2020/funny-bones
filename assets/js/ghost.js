/* jshint esversion: 6 */

/* Adapted from Tutorial - https://courses.wesbos.com/account/access/6148bf70b36fe451adb8f730/view/194158577 */

const pops = document.querySelectorAll('.pop');
const scoreBoard = document.querySelector('.score');
const ghosts = document.querySelectorAll('.ghost');  
let lastPop;
let timeup = false;
let score = 0;

function randomTime(min, max){
    return Math.round(Math.random() * (min - max) + min);
}

function randomPop(pops){
    const idx = Math.floor(Math.random() * pops.length);
    const pop = pops[idx];
    if (pop === lastPop){
        return randomPop(pops);
    }

    lastPop = pop;
    return pop;
}

function peep(){
    const time = randomTime(900, 1500);
    const pop = randomPop(pops);
    pop.classList.add('up');
    setTimeout(() => {
        pop.classList.remove('up');
        if (!timeup) peep();
    }, time);
}

function startGame(){
    scoreBoard.textContent = 0;
    timeup = false;
    score = 0;
    peep();
    setTimeout(() => timeup = true, 12000)
}

function bonk(e){
    if (!e.isTrusted) return; // Check user is not cheating
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

ghosts.forEach(ghost => ghost.addEventListener('click', bonk));
