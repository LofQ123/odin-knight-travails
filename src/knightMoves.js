export function knightMoves(start, target) {
  function markAsDiscovered(square) {
    discoveredSquares[square.coordinates[0]][square.coordinates[1]] = square;
  }

  function discover(square) {
    let x = square.coordinates[0];
    let y = square.coordinates[1];
    let currentDistance = square.distance;
    let possibleMoves = [];
    //Searching possible X coordinates
    const possibleX = [];
    if (x - 2 >= 0) possibleX.push(x - 2);
    if (x - 1 >= 0) possibleX.push(x - 1);
    if (x + 1 <= 7) possibleX.push(x + 1);
    if (x + 2 <= 7) possibleX.push(x + 2);

    //Searching possible Y coordinates for possible X coordinates
    for (let i = 0; i < possibleX.length; i++) {
      if (possibleX[i] < x && possibleX[i] - x === -1) {
        if (y - 2 >= 0) possibleMoves.push([possibleX[i], y - 2]);
        if (y + 2 <= 7) possibleMoves.push([possibleX[i], y + 2]);
      }
      if (possibleX[i] < x && possibleX[i] - x === -2) {
        if (y - 1 >= 0) possibleMoves.push([possibleX[i], y - 1]);
        if (y + 1 <= 7) possibleMoves.push([possibleX[i], y + 1]);
      }
      if (possibleX[i] > x && possibleX[i] - x === 1) {
        if (y - 2 >= 0) possibleMoves.push([possibleX[i], y - 2]);
        if (y + 2 <= 7) possibleMoves.push([possibleX[i], y + 2]);
      }
      if (possibleX[i] > x && possibleX[i] - x === 2) {
        if (y - 1 >= 0) possibleMoves.push([possibleX[i], y - 1]);
        if (y + 1 <= 7) possibleMoves.push([possibleX[i], y + 1]);
      }
    }

    possibleMoves.forEach((move) => {
      if (discoveredSquares[move[0]][move[1]] === null) {
        queue.push({
          coordinates: move,
          distance: currentDistance + 1,
          predecessor: square,
        });
      }
    });
  }

  function buildPath(square) {
    const path = [];
    let step = 0;
    while (square) {
      path.push({move: square.coordinates, step: step});
      square = square.predecessor;
      step++
    }
    return path;
  }

  if (
    start[0] > 7 ||
    start[1] > 7 ||
    target[0] > 7 ||
    target[1] > 7 ||
    start[0] < 0 ||
    start[1] < 0 ||
    target[0] < 0 ||
    target[1] < 0
  )
    throw new Error("Please enter valid coordinates");

  target = {
    coordinates: target,
    distance: 0,
    predecessor: null,
  };

  const queue = [target];

  while (queue.length) {
    const currentSquare = queue.shift();
    discoveredSquares[currentSquare.coordinates[0]][
      currentSquare.coordinates[1]
    ] = currentSquare;
    if (
      currentSquare.coordinates[0] === start[0] &&
      currentSquare.coordinates[1] === start[1]
    )
      break;
    markAsDiscovered(currentSquare);
    discover(currentSquare);
  }
  
  if (discoveredSquares[start[0]][start[1]] !== null)  {
    start = discoveredSquares[start[0]][start[1]];
    return buildPath(start);
  }  else return "Failed to find a path"
}

export let discoveredSquares = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
];

export function resetDiscoveredSquared() {
  discoveredSquares = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ];
}

export function blockSquare(square) {
  discoveredSquares[square[0]][square[1]] = 0
}