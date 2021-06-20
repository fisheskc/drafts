
const container = document.getElementById("container");
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

let drafts = {
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
  for (const [key, value] of Object.entries(drafts)) {
    console.log(`${key}: ${value}`);
  }
}
console.log(makeCounter());




