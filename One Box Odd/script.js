const boxes = [];
const valid_tap = [];
let count = 0;
const box_no = Math.floor(Math.random() * 26) + 1;
const para = document.getElementById("para");
const result = document.getElementById("result");
const container = document.getElementById("container");
for (let i = 1; i <= 25; i++) {
    boxes[i] = document.getElementById(`box${i}`);
    valid_tap[i] = true;
}

function DetectTap(no) {
    if (valid_tap[no]) {
        count++;
        boxes[no].style.backgroundColor = '#00b8db';
        if (count == 24) {
            container.className = container.className.replace("hidden", "fixed");
            result.textContent = "Winner";
            boxes[box_no].style.backgroundColor = '#fb2c36';
        }
        else if (box_no == no) {
            container.className = container.className.replace("hidden", "fixed");
            boxes[no].style.backgroundColor = '#fb2c36';
            result.textContent = "Loser";
        }
        para.textContent = `Remaining box is ${24 - count}`;
        valid_tap[no] = false;
    }
}