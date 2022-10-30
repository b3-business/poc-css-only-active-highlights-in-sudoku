// Generate Tiles
export function generateTiles(
  grid: HTMLElement,
  elemCount: number,
  gridCols: number
) {
  /**
   * Idea: A diagonal for my case is defined by:
   * indexOfTile % --gridCols
   *
   * Example: Tile 6 / 4 Cols = Diagonal 2
   * (Important: Indexed by 1!)
   *
   * Problem: what happens after the first overflow?
   * Tile 4 % 4 Cols = Diagonal 0 => Problem
   *
   * Solution:
   * indexOfTile / --gridCols = diagonalOverflow
   * diagonalOverflow + indexOfTile % --gridCols
   * => correct diagonal index!
   */

  for (let i = 0; i < elemCount; i++) {
    const elem = document.createElement('div');
    elem.classList.add('tile');

    // Calc + Set CSS vars
    elem.style.setProperty('--index', `${i}`);

    const diagonalOverflow = Math.floor(i / gridCols);
    const diagonalAnimationGroup = diagonalOverflow + (i % gridCols);

    // Sudoku Vars
    const row = Math.floor(i / 9);
    const column = i % 9;
    const cube = Math.floor(row / 3) * 3 + Math.floor(column / 3);

    elem.style.setProperty('--row', `${row}`);
    elem.style.setProperty('--column', `${column}`);
    elem.style.setProperty('--cube', `${cube}`);

    elem.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLDivElement;

      console.log(target);

      const row = elem.style.getPropertyValue('--row');
      const column = elem.style.getPropertyValue('--column');
      const cube = elem.style.getPropertyValue('--cube');

      grid.style.setProperty('--activeRow', `${row}`);
      grid.style.setProperty('--activeColumn', `${column}`);
      grid.style.setProperty('--activeCube', `${cube}`);
      grid.style.setProperty('--activeIndex', `${cube}`);
    });

    elem.innerText = `Tile ${i}`;

    grid.appendChild(elem);
  }
}

// Generate Grid
export function generateGrid(elemCount: number, gridCols: number) {
  const grid = document.createElement('div');
  grid.classList.add(`grid`);

  // Add css vars to grid
  grid.style.setProperty('--element-count', `${elemCount}`);
  grid.style.setProperty('--grid-cols', `${gridCols}`);
  grid.style.setProperty('--grid-rows', `${elemCount / gridCols}`);
  generateTiles(grid, elemCount, gridCols);

  return grid;
}
