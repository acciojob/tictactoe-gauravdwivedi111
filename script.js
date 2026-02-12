//your JS code here. If required.
let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "X";
let gameActive = true;

document.getElementById("submit").addEventListener("click", function () {

    player1 = document.getElementById("player-1").value;
    player2 = document.getElementById("player-2").value;

    if (player1 === "" || player2 === "") {
        alert("Please enter both player names");
        return;
    }
	document.getElementById("player-form").style.display = "none";
    document.getElementById("game").style.display = "block";

    currentPlayer = player1;
    document.querySelector(".message").innerText = `${currentPlayer}, you're up`;
});

let cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("click", function () {

        if (!gameActive || cell.innerText !== "") return;

        cell.innerText = currentSymbol;

        if (checkWinner()) {
            document.querySelector(".message").innerText =
                `${currentPlayer} congratulations you won!`;
            gameActive = false;
            return;
        }

        // Switch Player
        if (currentSymbol === "X") {
            currentSymbol = "O";
            currentPlayer = player2;
        } else {
            currentSymbol = "X";
            currentPlayer = player1;
        }

        document.querySelector(".message").innerText =
            `${currentPlayer}, you're up`;
    });
});

function checkWinner() {

    let winPatterns = [
        ["1","2","3"],
        ["4","5","6"],
        ["7","8","9"],
        ["1","4","7"],
        ["2","5","8"],
        ["3","6","9"],
        ["1","5","9"],
        ["3","5","7"]
    ];

    for (let pattern of winPatterns) {

        let a = document.getElementById(pattern[0]).innerText;
        let b = document.getElementById(pattern[1]).innerText;
        let c = document.getElementById(pattern[2]).innerText;

        if (a !== "" && a === b && b === c) {
            return true;
        }
    }

    return false;
}
