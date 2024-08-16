let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    };

});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 1000);
};

function levelUp() {
    userseq = [];

    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);

    btnFlash(randBtn);
};

function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]){
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
        };
    }
    else {
        h2.innerText = `Game Over ! Press any key to start the game`
        reset();
    };
};



function btnPress() {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
};

function reset() {
    started = false;
    level = 0;
    let gameseq = [];
    let userseq = [];
}