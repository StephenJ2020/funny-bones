/* Adapted from Tutorial - https://courses.wesbos.com/account/access/6148bf70b36fe451adb8f730/view/194158577 */

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');  

function randomtime(min, max){
    return Math.random() * (min - max) + min;
}