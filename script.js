'use strict';

const sonic = document.getElementById("sonic");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    sonic.classList.add("jump")
}