let userseq = [];
let gameseq = [];

buttons = ["orange", "red", "blue", "green"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started ");
        started = true;

        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userseq=[];
    level++;
    h3.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random() * 3);
    let randColor = buttons[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    gameFlash(randBtn);

}

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        h3.innerText=`Game over! your score is ${level-1} press nay key to restart...`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    console.log(btn);
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameseq=[];
    userseq = [];
    level=0;
}