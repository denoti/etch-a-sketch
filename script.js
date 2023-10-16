const container = document.querySelector('.container');
const button = document.querySelector('button');

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
}

button.onclick = () => {
  let num = prompt('Enter Number of Grids: ');
  if (!num) return;
  if (num > 100) num = 100;
  noOfGridItems = num;
  createGridItems(noOfGridItems);
};

createGridItems(noOfGridItems);
