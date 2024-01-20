"use strict";
const game = document.querySelector(".game");
const player = document.querySelectorAll(".player");
const turn = document.querySelectorAll(".turn");
const text = document.querySelector(".text");
const overlay = document.querySelector(".overlay");
const cancel = document.querySelector(".cancel");
const winning = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let turnO = true;
turn.forEach((click) => {
  click.addEventListener("click", () => {
    console.log(click);
    if (turnO) {
      click.textContent = "O";
      turnO = false;
    } else {
      click.textContent = "X";
      turnO = true;
    }
    player.forEach((play) => {
      play.classList.toggle("playerActive");
    });
    winner();
    click.disabled = true;
  });
});

const winner = function () {
  for (const patt of winning) {
    const pos0 = turn[patt[0]].innerText;
    const pos1 = turn[patt[1]].innerText;
    const pos2 = turn[patt[2]].innerText;

    if (pos0 != "" && pos1 != "" && pos2 != "") {
      if (pos0 === pos1 && pos1 === pos2) {
        overlay.style.zIndex = "1";
        overlay.style.opacity = "1";
        text.textContent = `Player ${pos0} Wins`;
      }
    }
  }
};

cancel.addEventListener("click", (e) => {
  e.preventDefault();
  turn.forEach((btn) => {
    btn.textContent = "";
    overlay.style.zIndex = "-1";
    overlay.style.opacity = "0";
    btn.disabled = false;
  });
});