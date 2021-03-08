{
  /**
   * Let's make a game 🕹
   */
  type Location = { x: number; y: number };
  type Direction = 'up' | 'down' | 'left' | 'right';

  let position: Location = { x: 0, y: 0 };

  let move = (direction: Direction) => {
    switch (direction) {
      case 'up':
        position.y++;
        break;
      case 'down':
        position.y--;
      case 'left':
        position.x--;
        break;
      case 'right':
        position.x++;
        break;
      default:
        throw new Error('unknow direction');
    }
  };

  console.log(position); // { x: 0, y: 0}
  move('up');
  console.log(position); // { x: 0, y: 1}
  move('down');
  console.log(position); // { x: 0, y: 0}
  move('left');
  console.log(position); // { x: -1, y: 0}
  move('right');
  console.log(position); // { x: 0, y: 0}
}
