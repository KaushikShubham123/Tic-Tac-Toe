let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let winnerIs = document.querySelector(".winnerName");
let msgContainer = document.querySelector(".msg-container")

let turnO = true;
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]
let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {


        if (turnO) {
            box.innerText = "O"
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        const check = checkWinner();

        box.clickCount = count++;
        if (count == 9 && !check) {
            msgContainer.classList.remove("hide");
            winnerIs.innerText = "It's a Draw";
        }
    }

    );
});


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
                return true;

            }

        }
    }
    return false;
}
const showWinner = (winner) => {
    winnerIs.innerText = `Game over winner is ${winner}`;
    boxesdisable();
    msgContainer.classList.remove("hide");
}

let boxesdisable = () => {
    for (let all of boxes) { all.disabled = true; }

}
let boxesenable = () => {
    for (let all of boxes) {
        all.disabled = false;
        all.innerText = "";
    }

}

const resetGame = () => {
    turnO = true;
    boxesenable();
    msgContainer.classList.add("hide");
    count = 0;
}
resetBtn.addEventListener("click", resetGame);