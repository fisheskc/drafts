
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

// function buildGameBoard() {
//   console.log("This is the game board");
//   circle1 = document.createElement("div");
//   circle1.classList.add("circle_black");
//   circle1.x = gridContainer.top;
//   circle1.y = gridContainer.left;
//   circle1.style.top = circle1.y +"px";
//   circle1.style.left = circle1.x +"px";
//   container.appendChild(circle1);
// }

let draftsgrid = {
  A2: 'c-1',
  A4: 'c-2',
  A6: 'c-3',
  B1: 'c-4',
  B3: 'c-5',
  B5: 'c-6',
  B7: 'c-7',
  C2: 'c-8',
  C4: 'c-9',
  C6: 'c-10'
}

// Loop through the original object
function makeCounter() {
 let ObjCircle = Object.values(draftsgrid)
 let convertStr = ObjCircle.toString()
 let findCircle = convertStr.split("").includes("c")
 console.log(findCircle)
    if(findCircle==='c') {
      circle1 = document.createElement("div");
      draftsgrid[key].classList.add("circle_black");
      container.appendChild(draftsgrid[key]);
    }
}
console.log(makeCounter());





