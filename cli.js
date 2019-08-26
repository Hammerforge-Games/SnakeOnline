

// Matrix operations
const matrix = {
  make: table => rep(rep('.')(table.cols))(table.rows),
  set: vol => pos => adjust(pos.y)(adjust(pos.x)(k(val))),
  addSnake: state => pipe(...map)(matrix.set('X'))(state.snake)),
  addApple: state => matrix.set('o')(state.apple),
  addCrash: state => state.snake.length == 0 ? map(map(k('#'))) : id,
  toString: xsxs => xsxs .map(xs => xs.join(' ')).join('\r\n'),
  fromState: state => pipe(
    matrix.make,
    matrix.addSnake(state),
    matrix.addApple(state),
    matrix.addCrash(state)
  )(state)
}

//key events
readline.emitKeyPressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if( key.name.toUpperCase()) {
    switch (key.name.toUpperCase()) {
      case 'W': case 'K': case 'UP': State = Snake.enqueue(State, Snake.NORTH); break
      case 'A': case 'H': case 'LEFT': State = Snake.enqueue(State, Snake.WEST); break
      case 'S': case 'J': case 'DOWN': State = Snake.enqueue(State, Snake.SOUTH); break
      case 'D': case 'L': case 'RIGHT': State = Snake.enqueue(State, Snake.EAST); break
}
});

//game loop