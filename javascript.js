const container = document.querySelector("#container"); 

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function createGrid(size) {
    container.innerHTML = ''; // Clear container

    const containerSize = Math.min(window.innerWidth, window.innerHeight);
    const cellSize = containerSize / size;

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let j = 0; j < size; j++) {
            let col = document.createElement("div");
            col.classList.add("col");
            col.style.width = `${cellSize}px`;
            col.style.height = `${cellSize}px`;
            col.addEventListener("mouseover", () => col.style.backgroundColor = getRandomColor());
            row.appendChild(col);
        }
    }
}
createGrid(16);
const reset = document.querySelector("#reset");
reset.addEventListener("click",() => {
    let number = parseInt(prompt("enter number of squares",16));
    createGrid(number);
    });
