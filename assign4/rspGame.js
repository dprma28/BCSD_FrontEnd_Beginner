const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");

const computer_result = document.querySelector(".computer_result");
const result = document.querySelector(".result");

const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const tie = document.querySelector(".lose");

let win_value = 0;
let lose_value = 0;
let tie_value = 0;

rock.addEventListener("click", function() {
    const computer = Math.floor(Math.random()*3 + 1); // 바위(1) 가위(2) 보(3)

    if (computer === 1) {
        computer_result.innerHTML = "<div>COMPUTER : ROCK</div>";
        result.innerHTML = "<div>You TIE!!</div>";
        tie_value += 1;
        tie.innerHTML = "TIE : " + tie_value;
    }
    else if (computer === 2) {
        computer_result.innerHTML = "<div>COMPUTER : SCISSORS</div>";
        result.innerHTML = "<div>You WIN!!</div>";
        lose_value += 1;
        lose.innerHTML = "LOSE : " + lose_value;
    }
    else if (computer === 3) {
        computer_result.innerHTML = "<div>COMPUTER : PAPER</div>";
        result.innerHTML = "<div>You LOSE!!</div>";
        win_value += 1;
        win.innerHTML = "WIN : " + win_value;
    }
});
scissors.addEventListener("click", function() {
    const computer = Math.floor(Math.random()*3 + 1);

    if (computer === 1) {
        computer_result.innerHTML = "<div>COMPUTER : ROCK</div>";
        result.innerHTML = "<div>You LOSE!!</div>";
        lose_value += 1;
        lose.innerHTML = "LOSE : " + lose_value;
    }
    else if (computer === 2) {
        computer_result.innerHTML = "<div>COMPUTER : SCISSORS</div>";
        result.innerHTML = "<div>You TIE!!</div>";
        tie_value += 1;
        tie.innerHTML = "TIE : " + tie_value;
    }
    else if (computer === 3) {
        computer_result.innerHTML = "<div>COMPUTER : PAPER</div>";
        result.innerHTML = "<div>You WIN!!</div>";
        win_value += 1;
        win.innerHTML = "WIN : " + win_value;
    }
});
paper.addEventListener("click", function() {
    const computer = Math.floor(Math.random()*3 + 1);

    if (computer === 1) {
        computer_result.innerHTML = "<div>COMPUTER : ROCK</div>";
        result.innerHTML = "<div>You WIN!!</div>";
        tie_value += 1;
        tie.innerHTML = "TIE : " + tie_value;
    }
    else if (computer === 2) {
        computer_result.innerHTML = "<div>COMPUTER : SCISSORS</div>";
        result.innerHTML = "<div>You LOSE!!/div>";
        win_value += 1;
        win.innerHTML = "WIN : " + win_value;
    }
    else if (computer === 3) {
        computer_result.innerHTML = "<div>COMPUTER : PAPER</div>";
        result.innerHTML = "<div>You TIE!!</div>";
        lose_value += 1;
        lose.innerHTML = "LOSE : " + lose_value;
    }
});