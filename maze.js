const OPEN = 0;
const LAVA = 1;
const GOAL = 2;

const mazeSimple = [
    [OPEN, GOAL, OPEN],
    [OPEN, LAVA, OPEN],
    [OPEN, OPEN, OPEN]
];

const mazeMain = [
  [LAVA, OPEN, LAVA, GOAL, OPEN],
  [OPEN, LAVA, OPEN, OPEN, OPEN],
  [OPEN, OPEN, OPEN, LAVA, OPEN],
  [OPEN, LAVA, OPEN, OPEN, OPEN]
];

const complexMaze1 = [
    [LAVA, OPEN, OPEN, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, GOAL, LAVA],
    [LAVA, LAVA, OPEN, LAVA, LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN],
    [OPEN, OPEN, OPEN, OPEN, LAVA, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN, LAVA, OPEN],
    [OPEN, LAVA, OPEN, LAVA, LAVA, OPEN, OPEN, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN, LAVA, OPEN],
    [OPEN, LAVA, LAVA, OPEN, LAVA, LAVA, LAVA, OPEN, LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA, OPEN],
    [OPEN, LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA],
    [OPEN, LAVA, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN],
    [OPEN, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN],
    [OPEN, LAVA, OPEN, LAVA, OPEN, OPEN, OPEN, OPEN, LAVA, LAVA, LAVA, OPEN, OPEN, OPEN, LAVA, OPEN],
    [OPEN, OPEN, OPEN, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA, LAVA, LAVA, OPEN, LAVA, OPEN, LAVA, OPEN],
    [LAVA, LAVA, LAVA, LAVA, OPEN, OPEN, LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA, OPEN, LAVA, OPEN],
    [LAVA, LAVA, LAVA, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN, LAVA, OPEN],
    [LAVA, LAVA, OPEN, LAVA, OPEN, OPEN, OPEN, LAVA, LAVA, OPEN, LAVA, LAVA, LAVA, OPEN, OPEN, OPEN],
    [OPEN, OPEN, OPEN, LAVA, OPEN, LAVA, LAVA, LAVA, LAVA, OPEN, OPEN, OPEN, LAVA, LAVA, LAVA, LAVA],
    [OPEN, LAVA, OPEN, LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA, OPEN, OPEN, OPEN, LAVA, OPEN],
    [OPEN, LAVA, OPEN, OPEN, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN, OPEN, OPEN]
];

const complexMaze2 = [
    [LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, GOAL, LAVA, LAVA],
    [LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA, LAVA, LAVA, OPEN, OPEN, LAVA, OPEN, OPEN, LAVA, LAVA],
    [LAVA, LAVA, LAVA, OPEN, LAVA, LAVA, LAVA, OPEN, OPEN, OPEN, LAVA, LAVA, LAVA, OPEN, LAVA, OPEN],
    [LAVA, OPEN, OPEN, OPEN, LAVA, LAVA, LAVA, OPEN, LAVA, OPEN, OPEN, LAVA, OPEN, OPEN, LAVA, OPEN],
    [LAVA, OPEN, LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA, LAVA, OPEN],
    [LAVA, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN, OPEN, LAVA, OPEN, LAVA, LAVA, OPEN],
    [LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA, LAVA, OPEN, LAVA, OPEN, OPEN, LAVA, OPEN, OPEN],
    [LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA],
    [LAVA, LAVA, OPEN, OPEN, OPEN, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA],
    [LAVA, LAVA, OPEN, LAVA, OPEN, LAVA, OPEN, LAVA, LAVA, OPEN, OPEN, OPEN, LAVA, LAVA, OPEN, OPEN],
    [LAVA, LAVA, OPEN, LAVA, OPEN, OPEN, OPEN, LAVA, LAVA, LAVA, LAVA, OPEN, LAVA, LAVA, LAVA, OPEN],
    [OPEN, OPEN, OPEN, LAVA, LAVA, LAVA, LAVA, OPEN, OPEN, OPEN, LAVA, OPEN, LAVA, LAVA, LAVA, OPEN],
    [OPEN, LAVA, LAVA, LAVA, OPEN, OPEN, OPEN, OPEN, LAVA, OPEN, OPEN, OPEN, LAVA, LAVA, OPEN, OPEN],
    [OPEN, OPEN, LAVA, LAVA, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN, LAVA],
    [LAVA, OPEN, LAVA, LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA],
    [OPEN, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA]
];

const complexMaze3 = [
    [LAVA, OPEN, OPEN, OPEN, LAVA, OPEN, OPEN, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN, LAVA],
    [LAVA, LAVA, LAVA, LAVA, LAVA, OPEN, LAVA, OPEN, LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA],
    [OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN, OPEN],
    [OPEN, LAVA, OPEN, LAVA, LAVA, LAVA, LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA, LAVA, OPEN, LAVA],
    [OPEN, LAVA, OPEN, OPEN, OPEN, LAVA, LAVA, LAVA, LAVA, OPEN, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA],
    [OPEN, LAVA, OPEN, LAVA, OPEN, OPEN, OPEN, OPEN, LAVA, LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA],
    [OPEN, LAVA, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA],
    [LAVA, LAVA, OPEN, LAVA, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA, LAVA],
    [LAVA, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA, OPEN, LAVA, OPEN, LAVA, LAVA, LAVA, OPEN, OPEN, OPEN],
    [LAVA, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN, LAVA, OPEN],
    [LAVA, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA, OPEN, OPEN, OPEN, LAVA, OPEN, LAVA, OPEN, LAVA, LAVA],
    [LAVA, LAVA, OPEN, OPEN, OPEN, OPEN, LAVA, OPEN, LAVA, OPEN, LAVA, OPEN, OPEN, OPEN, OPEN, OPEN],
    [LAVA, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA, OPEN, LAVA, OPEN, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN],
    [LAVA, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA, OPEN, LAVA, OPEN, OPEN, OPEN, OPEN, LAVA, OPEN, OPEN],
    [LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, LAVA, OPEN, LAVA, LAVA, OPEN, LAVA, OPEN, LAVA, OPEN, LAVA],
    [OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, LAVA, LAVA, LAVA, LAVA, OPEN, OPEN, OPEN, LAVA]
];

const mazes = [mazeMain, complexMaze1, complexMaze2, complexMaze3, mazeSimple];
const maze = mazes[mazeIndex];

const mazeSquares = [];
for (let i = 0; i < maze.length; i++) {
  const row = [];
  for (let j = 0; j < maze[i].length; j++)
    row.push(null);
  mazeSquares.push(row);
}

const padding = 10;
let position = [maze.length - 1, 0];

let svg = null;
let player = null;
let lost = false;

document.addEventListener('DOMContentLoaded', () => {
  svg = d3.select('svg').attr('width', window.innerWidth).attr('height', window.innerHeight);
  svg.style('background-color', 'black');
  drawMaze();
  drawPlayer(false);
});

window.addEventListener('resize', () => {
  svg.attr('width', window.innerWidth).attr('height', window.innerHeight).selectAll("*").remove();
  drawMaze();
  drawPlayer(false);
});

document.addEventListener('keyup', (e) => {
  if (!playMode || lost)
    return;
  if (e.code == "ArrowUp") {
    if (position[0] > 0) {
      position[0]--;
      drawPlayer(true);
    }
  } else if (e.code == "ArrowDown") {
    if (position[0] < maze.length - 1) {
      position[0]++;
      drawPlayer(true);
    }
  } else if (e.code == "ArrowLeft") {
    if (position[1] > 0) {
      position[1]--;
      drawPlayer(true);
    }
  } else if (e.code == "ArrowRight") {
    if (position[1] < maze[position[0]].length - 1) {
      position[1]++;
      drawPlayer(true);
    }
  }
});

function drawMaze() {

  // Calculate size of squares
  const size = Math.floor(Math.min(
    (window.innerWidth - padding * 2) / maze[0].length,
    (window.innerHeight - padding * 2) / maze.length
  ) - padding);
  const xOffset = (window.innerWidth - ((2 * padding) + (maze[0].length * (size + padding)))) / 2;
  const yOffset = (window.innerHeight - ((2 * padding) + (maze.length * (size+padding)))) / 2;

  // Draw squares
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      let x = xOffset + padding + j * (padding + size);
      let y = yOffset + padding + i * (padding + size);
      mazeSquares[i][j] = svg.append('rect')
         .attr('x', x)
         .attr('y', y)
         .attr('width', size)
         .attr('height', size)
         .style('fill', maze[i][j] == GOAL ? 'green' :
                        maze[i][j] == LAVA && (!playMode || (lost && position[0] == i && position[1] == j)) ? 'red' : 'grey');
    }
  }
}

function drawPlayer(transition) {
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {

      if (position[0] == i && position[1] == j) {

          // Calculate size of squares
          const size = Math.floor(Math.min(
            (window.innerWidth - padding * 2) / maze[0].length,
            (window.innerHeight - padding * 2) / maze.length
          ) - padding);
          const xOffset = (window.innerWidth - ((2 * padding) + (maze[0].length * (size + padding)))) / 2;
          const yOffset = (window.innerHeight - ((2 * padding) + (maze.length * (size+padding)))) / 2;

          let x = xOffset + padding + j * (padding + size);
          let y = yOffset + padding + i * (padding + size);

          if (transition) {
            player.transition()
              .duration(1000)
              .attr('cx', x + size / 2)
              .attr('cy', y + size / 2);

            if (maze[i][j] == LAVA) {
              mazeSquares[i][j].transition(1000)
                               .delay(500)
                              .style('fill', 'red');
              lost = true;
              ga('send', {
                  hitType: 'event',
                  eventCategory: 'Maze',
                  eventAction: 'lost',
                  eventLabel: 'Lost Maze Game at (' + i + ', ' + j + ')'
                });
            } else if (maze[i][j] == GOAL) {
              ga('send', {
                  hitType: 'event',
                  eventCategory: 'Maze',
                  eventAction: 'won',
                  eventLabel: 'Won Maze Game'
                });
            }
          } else {
            player = svg.append('circle')
              .attr('cx', x + size / 2)
              .attr('cy', y + size / 2)
              .attr('r', (size / 2) * 0.8)
              .style('fill', 'yellow');
          }

      }
    }
  }
}
