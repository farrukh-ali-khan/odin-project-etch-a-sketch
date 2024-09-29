document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("grid-container");
  const resetButton = document.getElementById("reset-button");

  // Function to create a grid of squares
  function createGrid(size) {
    // Clear previous grid
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const fragment = document.createDocumentFragment(); // Fragment to avoid multiple DOM updates

    for (let i = 0; i < size * size; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("role", "gridcell");
      square.setAttribute("tabindex", "0"); // Make squares focusable for accessibility

      // Add hover/focus event listener for color change
      square.addEventListener("mouseenter", changeColor);
      square.addEventListener("focus", changeColor); // Also allow color change on focus (keyboard)

      fragment.appendChild(square);
    }

    container.appendChild(fragment);
  }

  // Function to generate a random RGB color
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Event handler for changing color
  function changeColor(event) {
    event.target.style.backgroundColor = getRandomColor();
  }

  // Event listener for the reset button
  resetButton.addEventListener("click", () => {
    let newSize;
    do {
      newSize = parseInt(
        prompt("Enter the number of squares per side (max 100):"),
        10
      );
    } while (isNaN(newSize) || newSize <= 0 || newSize > 100);

    createGrid(newSize);
  });

  // Create initial grid of 16x16
  createGrid(16);
});
