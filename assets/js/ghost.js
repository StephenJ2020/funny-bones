/* jshint esversion: 6 */

/* Adapted from Tutorial - https://courses.wesbos.com/account/access/6148bf70b36fe451adb8f730/view/194158577 */

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');  
let lastHole;

function randomTime(min, max){
    return Math.round(Math.random() * (min - max) + min);
}

function randomHole(holes){
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole){
        return randomHole(holes);
    }

    lastHole = hole;
    return hole;
}

function peep(){
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    console.log('time, hole');
}