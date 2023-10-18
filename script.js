const container = document.querySelector('.container');
const button = document.querySelector('button');
let gridItems;

let noOfGridItems = 16;

function createGridItems(numOfGridItems) {
  container.textContent = '';
  for (let i = 0; i < numOfGridItems * numOfGridItems; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    container.appendChild(gridItem);
  }
  container.style.gridTemplateColumns = `repeat(${noOfGridItems},1fr`;
  container.style.gridTemplateRows = `repeat(${noOfGridItems}, 1fr`;
  gridItems = Array.from(document.querySelectorAll('.grid-item'));
}

button.onclick = () => {
  let num = prompt('Enter Number of Grids: ');
  if (!num) return;
  if (num > 100) num = 100;
  noOfGridItems = num;
  createGridItems( noOfGridItems );
  gridColorChange()
};
createGridItems(noOfGridItems);
function changeColor() {
  let r = Math.floor(Math.random() * 256) + 0;
  let g = Math.floor(Math.random() * 256) + 0;
  let b = Math.floor(Math.random() * 256) + 0;
  return `rgb(${r}, ${g}, ${b})`;
}


function gridColorChange () {
  gridItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = changeColor();
    });
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = changeColor();
    });
  });
}

gridColorChange()


