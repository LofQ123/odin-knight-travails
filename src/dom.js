import { knightMoves, resetDiscoveredSquared, blockSquare } from "./knightMoves";

export function drawBoard() {
  const board = document.getElementById("board");

  for(let y = 7; y >= 0; y--) {
    for(let x = 0; x <= 7; x++) {
      let square = document.createElement("div");
      let id = `[${x},${y}]`;
      square.setAttribute("id", id);
      if (x % 2 === 0 && y % 2 === 0 || x % 2 !== 0 && y % 2 !== 0) {
        square.setAttribute("class", "square black");
      } else {
        square.setAttribute("class", "square white");
      }
      board.appendChild(square)
    }
  }
}

export function drawKnight(event) {
  const knightSVG = `<svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 16 3 C 14.230469 3 13.058594 3.984375 12.59375 5 C 12.242188 5.769531 12.285156 6.304688 12.28125 6.75 C 11.535156 7.257813 10.75 7.90625 10.125 8.53125 C 8.726563 9.929688 7.960938 11.921875 8 14.03125 C 8.019531 15.003906 8.21875 15.980469 8.59375 16.96875 C 8.78125 17.464844 9.125 18.324219 9.4375 19.28125 C 9.75 20.238281 10 21.292969 10 22 L 9 22 C 8.96875 22 8.9375 22 8.90625 22 C 8.367188 22.035156 7.953125 22.492188 7.972656 23.03125 C 7.988281 23.570313 8.429688 23.996094 8.96875 24 L 7.1875 26.40625 L 7 26.65625 L 7 29 L 25 29 L 25 26.65625 L 24.8125 26.40625 L 23 24 C 23.359375 24.003906 23.695313 23.816406 23.878906 23.503906 C 24.058594 23.191406 24.058594 22.808594 23.878906 22.496094 C 23.695313 22.183594 23.359375 21.996094 23 22 L 22 22 C 22 19.738281 20.59375 17.664063 19.28125 16.0625 C 18.53125 15.144531 18.285156 14.984375 17.78125 14.5 C 17.960938 14.394531 18.183594 14.269531 18.3125 14.1875 C 18.472656 14.085938 18.558594 14.023438 18.59375 14 C 18.875 14 18.894531 14.046875 19.1875 14.28125 C 19.480469 14.515625 20.078125 15 20.90625 15 C 21.632813 15 22.164063 14.53125 22.4375 14.1875 C 22.6875 13.871094 22.824219 13.632813 22.84375 13.59375 C 22.933594 13.550781 23.128906 13.488281 23.375 13.3125 C 23.621094 13.136719 23.941406 12.746094 24 12.3125 C 24.058594 11.878906 23.921875 11.5 23.75 11.125 C 23.496094 10.570313 23.023438 9.933594 22.28125 9.15625 C 21.539063 8.378906 20.566406 7.554688 19.375 7.0625 C 19.285156 7.023438 19.359375 7.082031 19.3125 7.03125 C 19.265625 6.980469 19.125 6.769531 18.84375 6.5625 C 18.476563 6.292969 17.679688 6.261719 17 6.1875 L 17 3 Z M 15 5.21875 L 15 8 L 16 8 C 17.363281 8 17.664063 8.164063 17.65625 8.15625 C 17.652344 8.152344 17.660156 8.171875 17.8125 8.34375 C 17.964844 8.515625 18.261719 8.785156 18.625 8.9375 C 19.425781 9.269531 20.226563 9.917969 20.84375 10.5625 C 21.421875 11.164063 21.808594 11.761719 21.875 11.875 C 21.714844 11.953125 21.546875 12.007813 21.34375 12.25 C 21.070313 12.582031 20.972656 12.8125 20.875 12.9375 C 20.84375 12.976563 20.847656 12.988281 20.84375 13 C 20.757813 12.988281 20.699219 12.933594 20.4375 12.71875 C 20.109375 12.453125 19.457031 12 18.59375 12 C 17.9375 12 17.566406 12.300781 17.25 12.5 C 16.933594 12.699219 16.679688 12.84375 16.59375 12.875 L 16.5625 12.90625 L 16.53125 12.90625 C 16.347656 12.984375 16.03125 13 16.03125 13 L 15 12.96875 L 15 14.5625 L 15.34375 14.84375 C 15.34375 14.84375 16.53125 15.890625 17.71875 17.34375 C 18.90625 18.796875 20 20.667969 20 22 L 12 22 C 12 20.878906 11.6875 19.703125 11.34375 18.65625 C 11 17.609375 10.59375 16.695313 10.4375 16.28125 C 10.144531 15.507813 10.015625 14.707031 10 13.96875 C 9.96875 12.363281 10.542969 10.925781 11.53125 9.9375 C 12.183594 9.285156 13.15625 8.46875 13.6875 8.15625 L 14.1875 7.875 L 14.1875 7.3125 C 14.1875 6.941406 14.1875 6.320313 14.40625 5.84375 C 14.53125 5.574219 14.703125 5.367188 15 5.21875 Z M 11.5 24 L 20.5 24 L 22.75 27 L 9.25 27 Z"></path></g></svg>`
  let squares = document.querySelectorAll(".square");
  squares.forEach((el) => {
    if(el.classList.contains("knight")) {
      el.classList.remove("knight");
      el.innerHTML = "";
    }
  })

  event.target.classList.add("knight")
  event.target.innerHTML = knightSVG;
  knightPosition = JSON.parse(event.target.id);
  setKnight()
}

let knightPosition = null;
let targetPosition = null;
let blockedPositions = [];

function selectTarget(event) {
  const targetSVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#1C274C" stroke-width="1.5"></path> <path d="M2 12L5 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19 12L22 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 22L12 19" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 5L12 2" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M10 12H12H14" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14L12 12L12 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`

  let squares = document.querySelectorAll(".square");
  squares.forEach((el) => {
    if (el.classList.contains("target")) {
      el.classList.remove("target");
      el.innerHTML = "";
    }
  })

  if(JSON.stringify(knightPosition) !== this.id) {
    event.target.classList.add("target")
    event.target.innerHTML = targetSVG;
    targetPosition = JSON.parse(event.target.id);
    setTarget();
  }
}

function selectBlockedSquare(event) {
  const blockedSVG = `<svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-467.000000, -1039.000000)" fill="#000000"> <path d="M489.396,1061.4 C488.614,1062.18 487.347,1062.18 486.564,1061.4 L479.484,1054.32 L472.404,1061.4 C471.622,1062.18 470.354,1062.18 469.572,1061.4 C468.79,1060.61 468.79,1059.35 469.572,1058.56 L476.652,1051.48 L469.572,1044.4 C468.79,1043.62 468.79,1042.35 469.572,1041.57 C470.354,1040.79 471.622,1040.79 472.404,1041.57 L479.484,1048.65 L486.564,1041.57 C487.347,1040.79 488.614,1040.79 489.396,1041.57 C490.179,1042.35 490.179,1043.62 489.396,1044.4 L482.316,1051.48 L489.396,1058.56 C490.179,1059.35 490.179,1060.61 489.396,1061.4 L489.396,1061.4 Z M485.148,1051.48 L490.813,1045.82 C492.376,1044.26 492.376,1041.72 490.813,1040.16 C489.248,1038.59 486.712,1038.59 485.148,1040.16 L479.484,1045.82 L473.82,1040.16 C472.257,1038.59 469.721,1038.59 468.156,1040.16 C466.593,1041.72 466.593,1044.26 468.156,1045.82 L473.82,1051.48 L468.156,1057.15 C466.593,1058.71 466.593,1061.25 468.156,1062.81 C469.721,1064.38 472.257,1064.38 473.82,1062.81 L479.484,1057.15 L485.148,1062.81 C486.712,1064.38 489.248,1064.38 490.813,1062.81 C492.376,1061.25 492.376,1058.71 490.813,1057.15 L485.148,1051.48 L485.148,1051.48 Z" id="cross" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`
  
  if(JSON.stringify(knightPosition) !== this.id && JSON.stringify(targetPosition) !== this.id && !blockedPositions.includes(this.id)) {
    event.target.classList.add("blocked")
    event.target.innerHTML = blockedSVG;
    blockedPositions.push(event.target.id);
    blockSquare(JSON.parse(event.target.id));
  }
}

export function add_drawKnightEventListener() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((el) => {
    el.addEventListener("click", drawKnight)
  })
}

function remove_drawKnightEventListener() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((el) => {
    el.removeEventListener("click", drawKnight)
  })
}

function add_selectTargetEventListener() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((el) => {
    el.addEventListener("click", selectTarget)
  })
}

function remove_selectTargetEventListener() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((el) => {
    el.removeEventListener("click", selectTarget)
  })
}

function add_selectBlockedSquareEventListener() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((el) => {
    el.addEventListener("click", selectBlockedSquare)
  })
}

function remove_selectBlockedSquareEventListener() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((el) => {
    el.removeEventListener("click", selectBlockedSquare)
  })
}

export function setKnight() {
  remove_drawKnightEventListener();
  add_selectTargetEventListener();
}

export function setTarget() {
  remove_selectTargetEventListener();
  add_selectBlockedSquareEventListener();
}

function displayMoves() {
  remove_selectBlockedSquareEventListener();
  if(!knightPosition || !targetPosition) alert("Please first place the knight and choose the target");
  else {
    const moveList = knightMoves(knightPosition, targetPosition);
    let counter = 0;
    moveList.forEach((move) => {
      let id = JSON.stringify(move.move);
      let element = document.getElementById(id);
      element.classList.add("highlighted")
      if (!element.classList.contains("knight") && !element.classList.contains("target")) element.innerText = counter;
      counter++;
    })
  }
}

function reset() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((el) => {
    if (el.classList.contains("target")) el.classList.remove("target");
    if (el.classList.contains("knight")) el.classList.remove("knight");
    if (el.classList.contains("highlighted")) el.classList.remove("highlighted");
    el.innerHTML = "";
    el.removeEventListener("click", selectTarget);
    el.addEventListener("click", drawKnight)
  })
  knightPosition = null;
  targetPosition = null;
  blockedPositions = [];
  resetDiscoveredSquared();
}

document.getElementById("resetBtn").addEventListener("click", reset)
document.getElementById("goBtn").addEventListener("click", displayMoves)