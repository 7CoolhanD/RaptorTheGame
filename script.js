'use strict';

const sonic = document.getElementById("sonic");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
});
document.addEventListener("click", function(event) {
    jump();
});

function jump () {
    if (sonic.classList != "jump") {
        sonic.classList.add("jump")
    }
    setTimeout( function() {
        sonic.classList.remove("jump")
    }, 300)
}
sonic.onclick = jump();

let isAlive = setInterval ( function() {
    let sonicTop = parseInt(window.getComputedStyle(sonic).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && sonicTop >= 220) {
        alert("You LOSE, WTF!?")
    }
}, 10)