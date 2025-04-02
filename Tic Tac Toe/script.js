const b = [];
let count = 0;
let is_x = true;
const box_no = Math.floor(Math.random() * 26) + 1;
const turn = document.getElementById("turn");
const result = document.getElementById("result");
const container = document.getElementById("container");
for (let i = 1; i <= 9; i++) {
    b[i] = document.getElementById(`box${i}`);
    b[i].textContent = "";
}

function DetectTap(no) {
    if (is_x) {
        b[no].textContent = "X";
        is_x = false;
        turn.textContent = "Player O Turn";
    }
    else {
        b[no].textContent = "O";
        is_x = true;
        turn.textContent = "Player X Turn";
    }
    if ((b[1].textContent == b[2].textContent) && (b[2].textContent == b[3].textContent) && (b[2].textContent)) {
        container.className = container.className.replace("hidden", "fixed");
        result.textContent = `Player ${b[2].textContent} Winner`;
    }
    else if ((b[4].textContent == b[5].textContent) && (b[5].textContent == b[6].textContent) && (b[5].textContent)) {
        container.className = container.className.replace("hidden", "fixed");
        result.textContent = `Player ${b[5].textContent} Winner`;
    }
    else if ((b[7].textContent == b[8].textContent) && (b[8].textContent == b[9].textContent) && (b[8].textContent)) {
        container.className = container.className.replace("hidden", "fixed");
        result.textContent = `Player ${b[8].textContent} Winner`;
    }
    else if ((b[1].textContent == b[5].textContent) && (b[5].textContent == b[9].textContent) && (b[5].textContent)) {
        container.className = container.className.replace("hidden", "fixed");
        result.textContent = `Player ${b[5].textContent} Winner`;
    }
    else if ((b[3].textContent == b[5].textContent) && (b[5].textContent == b[7].textContent) && (b[5].textContent)) {
        container.className = container.className.replace("hidden", "fixed");
        result.textContent = `Player ${b[5].textContent} Winner`;
    }
    else if ((b[1].textContent == b[4].textContent) && (b[4].textContent == b[7].textContent) && (b[4].textContent)) {
        container.className = container.className.replace("hidden", "fixed");
        result.textContent = `Player ${b[4].textContent} Winner`;
    }
    else if ((b[2].textContent == b[5].textContent) && (b[5].textContent == b[8].textContent) && (b[5].textContent)) {
        container.className = container.className.replace("hidden", "fixed");
        result.textContent = `Player ${b[5].textContent} Winner`;
    }
    else if ((b[3].textContent == b[6].textContent) && (b[6].textContent == b[9].textContent) && (b[6].textContent)) {
        container.className = container.className.replace("hidden", "fixed");
        result.textContent = `Player ${b[6].textContent} Winner`;
    }
}
