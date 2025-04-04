const screen = document.getElementById("screen");
const random_number = Math.floor(Math.random() * 99) + 1;
let chance = 2;

function handleclick() {
  console.info("hello");
  const get_text = document.getElementById("get_text");
  if (get_text.value == random_number) {
    const para = document.createElement("p");
    const button = document.createElement("button");
    para.innerText = `Correct! Guess no is ${random_number}`;
    para.className = "text-white";
    button.innerText = "Restart Game";
    button.className = "text-purple-400 cursor-pointer";
    button.addEventListener("click", reload);
    screen.appendChild(para);
    screen.appendChild(button);
  } else {
    if (chance == 0) {
      const para = document.createElement("p");
      const button = document.createElement("button");
      button.innerText = "Restart Game";
      button.className = "text-purple-400 cursor-pointer";
      para.innerText = `Computer Guess no is ${random_number}`;
      para.className = "text-white";
      button.addEventListener("click", reload);
      screen.appendChild(para);
      screen.appendChild(button);
    } else {
      get_text.id = `tmp_${chance}`;
      const para = document.createElement("p");
      const input = document.createElement("input");
      const button = document.createElement("button");
      para.innerText = "try again!";
      para.className = "text-white";
      input.type = "text";
      input.id = "get_text";
      input.maxLength = 2;
      input.className = "outline-0 text-white";
      button.addEventListener("click", handleclick);
      button.innerText = "submit";
      button.className = "text-red-400 cursor-pointer";
      screen.appendChild(para);
      screen.appendChild(input);
      screen.appendChild(button);
      chance--;
    }
  }
}
function reload() {
  location.reload();
}
