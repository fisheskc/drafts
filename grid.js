
const container = document.getElementById("container");
let gridArea = container.getBoundingClientRect();

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    if(c % 2 !== 0) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    // container.appendChild(cell).className = "grid-item";
    container.appendChild(cell).className = "square1";
    } else {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "square2";
    }
  };
};

makeRows(8, 7);

let gridContainer = {
  x:Math.floor(gridArea.width/7),
  y:Math.floor(gridArea.height/8)
}
document.addEventListener("DOMContentLoaded",buildGameBoard);

let circle1 = {}

function buildGameBoard() {
  console.log("This is the game board");
  circle1 = document.createElement("div");
  circle1.classList.add("circle_black");
  circle1.x = gridContainer.top;
  circle1.y = gridContainer.left;
  circle1.style.top = circle1.y +"px";
  circle1.style.left = circle1.x +"px";
  container.appendChild(circle1);
}

let draftsgrid = {
  A2: 'circle-1',
  A4: 'circle-2',
  A6: 'circle-3',
  B1: 'circle-4',
  B3: 'circle-5',
  B5: 'circle-6',
  B7: 'circle-7',
  C2: 'circle-8',
  C4: 'circle-9',
  C6: 'circle-10'
}

// Loop through the original object
function makeCounter() {
  for (const [key, value] of Object.entries(draftsgrid)) {
    console.log(`${key}: ${value}`);
    // if(draftsgrid[key]==='circle-1') {
    //   draftsgrid[key].classList.add("circle_black");
    // }
  }
}
console.log(makeCounter());




