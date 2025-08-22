const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    
    let opacity = 0;
    square.addEventListener("mouseover", () => {
    if(opacity < 1) opacity += 0.1;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgba(${r},${g},${b},${opacity})`;
    })

    container.appendChild(square);

  }
}

createGrid(16);

resizeBtn.addEventListener("click", () => {
  let newSize = prompt("Cuantos cuadrados por lado? (max 100)");
  newSize = parseInt(newSize);

  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Numero Invalido. intenta con un valor entre 1 y 100")
  }
})