/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/line-weaver.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/edge.js":
/*!*********************!*\
  !*** ./lib/edge.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Constants = __webpack_require__(/*! ./util/constants */ "./lib/util/constants.js");

class Edge {
  constructor(options) {
    this.vertex1 = options.vertex1;
    this.vertex2 = options.vertex2;
    this.ctx = options.ctx;
  }

  draw() {
    this.ctx.strokeStyle = Constants.VALID_EDGE_YELLOW;
    this.ctx.shadowColor = Constants.VALID_EDGE_YELLOW;
    this.ctx.lineWidth = 12;
    this.ctx.shadowBlur = 5;
    this.ctx.globalAlpha = 0.5;
    this.ctx.beginPath();
    this.ctx.moveTo(this.vertex1.x, this.vertex1.y);
    this.ctx.lineTo(this.vertex2.x, this.vertex2.y);
    this.ctx.stroke();
  }
}

module.exports = Edge;


/***/ }),

/***/ "./lib/edge_overlapping.js":
/*!*********************************!*\
  !*** ./lib/edge_overlapping.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Edge = __webpack_require__(/*! ./edge */ "./lib/edge.js");
const Constants = __webpack_require__(/*! ./util/constants */ "./lib/util/constants.js");

class EdgeOverlapping extends Edge {
  constructor(options) {
    super(options);
  }

  draw() {
    this.ctx.strokeStyle = Constants.OVERLAPPING_EDGE_RED;
    this.ctx.shadowColor = Constants.OVERLAPPING_EDGE_RED;
    this.ctx.lineWidth = 12;
    this.ctx.shadowBlur = 5;
    this.ctx.globalAlpha = 0.5;
    this.ctx.beginPath();
    this.ctx.moveTo(this.vertex1.x, this.vertex1.y);
    this.ctx.lineTo(this.vertex2.x, this.vertex2.y);
    this.ctx.stroke();

    this.drawX();
  }

  drawX() {
    this.ctx.beginPath();

    this.ctx.moveTo(
      (this.vertex1.x + this.vertex2.x) / 2 - 15,
      (this.vertex1.y + this.vertex2.y) / 2 - 15
    );
    this.ctx.lineTo(
      (this.vertex1.x + this.vertex2.x) / 2 + 15,
      (this.vertex1.y + this.vertex2.y) / 2 + 15
    );

    this.ctx.moveTo(
      (this.vertex1.x + this.vertex2.x) / 2 + 15,
      (this.vertex1.y + this.vertex2.y) / 2 - 15
    );
    this.ctx.lineTo(
      (this.vertex1.x + this.vertex2.x) / 2 - 15,
      (this.vertex1.y + this.vertex2.y) / 2 + 15
    );
    this.ctx.lineWidth = 7;
    this.ctx.strokeStyle = 'white';

    this.ctx.stroke();
  }
}

module.exports = EdgeOverlapping;


/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const gameView = __webpack_require__(/*! ./game_view */ "./lib/game_view.js");
const Edge = __webpack_require__(/*! ./edge */ "./lib/edge.js");

class Game {
  constructor(options) {
    this.level = options.level || 0;
  }

  hasWon() {}

  buildGraph() {}

  resetCurrentLevel() {}

  undoLastMove() {}
}


/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const VertexFull = __webpack_require__(/*! ./vertex_full */ "./lib/vertex_full.js");
const VertexEmpty = __webpack_require__(/*! ./vertex_empty */ "./lib/vertex_empty.js");
const VertexTemp = __webpack_require__(/*! ./vertex_temp */ "./lib/vertex_temp.js");
const Edge = __webpack_require__(/*! ./edge */ "./lib/edge.js");
const EdgeOverlapping = __webpack_require__(/*! ./edge_overlapping */ "./lib/edge_overlapping.js");

class GameView {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.level = 0;
    this.startingVertexPos = [[135, 225], [315, 225]];
    this.FullVertex = this.initializeStartingVertex();
    this.allVertexPos = this.populateVertex();
    this.selected;
    this.index;

    this.drawVertex();
    this.drawlines();
    this.handleClick();

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  // Event listeners

  handleClick() {
    const gameCanvas = document.getElementById('game-canvas');

    gameCanvas.addEventListener('mousedown', e => {
      this.selected = this.selectedEdge(e.offsetX, e.offsetY);

      if (this.selected) {
        const newVertex = new VertexTemp({
          x: e.offsetX,
          y: e.offsetY,
          ctx: this.ctx
        });
        newVertex.draw();

        gameCanvas.addEventListener('mousemove', this.handleMouseMove);
        gameCanvas.addEventListener('mouseup', this.handleMouseUp);
      }
    });
  }

  handleMouseUp(e) {
    const gameCanvas = document.getElementById('game-canvas');

    for (let i = 0; i < this.allVertexPos.length; i++) {
      let pos = this.allVertexPos[i];
      if (
        pos[0] <= e.offsetX + 30 &&
        pos[0] >= e.offsetX - 30 &&
        pos[1] <= e.offsetY + 30 &&
        pos[1] >= e.offsetY - 30
      ) {
        const newVertex = new VertexFull({
          x: pos[0],
          y: pos[1],
          ctx: this.ctx
        });

        const prevVertex = this.FullVertex[this.index];
        const nextVertex = this.FullVertex[this.index + 1];

        // console.log('part1', this.hasConflicts(prevVertex, newVertex));
        // console.log('part2', this.hasConflicts(nextVertex, newVertex));
        // console.log(
        //   'part3',
        //   this.selfConflicting(this.selected[0], newVertex, this.selected[1])
        // );

        if (
          this.hasConflicts(prevVertex, newVertex) ||
          this.hasConflicts(nextVertex, newVertex) ||
          this.selfConflicting(this.selected[0], newVertex, this.selected[1])
        ) {
          break;
        } else {
          this.FullVertex = this.FullVertex.slice(0, this.index + 1)
            .concat([newVertex])
            .concat(this.FullVertex.slice(this.index + 1));

          break;
        }
      }
    }

    this.index = undefined;

    this.ctx.clearRect(0, 0, 500, 500);
    this.drawVertex();
    this.drawlines();

    gameCanvas.removeEventListener('mousemove', this.handleMouseMove);
    gameCanvas.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove(e) {
    const newVertex = new VertexTemp({
      x: e.offsetX,
      y: e.offsetY,
      ctx: this.ctx
    });

    let edge1, edge2;

    if (
      this.hasConflicts(this.selected[0], newVertex) ||
      this.selfConflicting(this.selected[0], newVertex, this.selected[1])
    ) {
      edge1 = new EdgeOverlapping({
        ctx: this.ctx,
        vertex1: this.selected[0],
        vertex2: newVertex
      });
    } else {
      edge1 = new Edge({
        ctx: this.ctx,
        vertex1: this.selected[0],
        vertex2: newVertex
      });
    }

    if (
      this.hasConflicts(this.selected[1], newVertex) ||
      this.selfConflicting(this.selected[0], newVertex, this.selected[1])
    ) {
      edge2 = new EdgeOverlapping({
        ctx: this.ctx,
        vertex1: this.selected[1],
        vertex2: newVertex
      });
    } else {
      edge2 = new Edge({
        ctx: this.ctx,
        vertex1: newVertex,
        vertex2: this.selected[1]
      });
    }
    this.ctx.clearRect(0, 0, 500, 500);

    this.drawVertex();
    this.drawlines();
    newVertex.draw();
    edge1.draw();
    edge2.draw();
  }

  // helpers

  hasConflicts(edgeVertex1, edgeVertex2) {
    const result = [];
    for (let i = 0; i < this.FullVertex.length; i++) {
      if (i === this.FullVertex.length - 1) continue;
      if (i === this.index) continue;
      const boardVertex1 = this.FullVertex[i];
      const boardVertex2 = this.FullVertex[i + 1];

      const vertex_array = [
        edgeVertex1,
        boardVertex1,
        edgeVertex2,
        boardVertex2
      ];
      const convolution = [];

      for (let i = 0; i < 4; i++) {
        const vertex1 = vertex_array[i];
        const vertex2 = vertex_array[(i + 1) % 4];
        const vertex3 = vertex_array[(i + 2) % 4];

        convolution.push(
          (vertex3.x - vertex1.x) * (vertex3.y - vertex2.y) -
            (vertex3.x - vertex2.x) * (vertex3.y - vertex1.y)
        );
      }

      if (
        convolution.every(value => value > 0) ||
        convolution.every(value => value < 0)
      ) {
        result.push(true);
      } else if (convolution.every(value => value === 0)) {
        for (let i = 0; i < 4; i++) {
          const vertex1 = vertex_array[i];
          const vertex2 = vertex_array[(i + 1) % 4];
          const vertex3 = vertex_array[(i + 2) % 4];

          // let maxX = vertex1.x > vertex2.x ? vertex1.x : vertex2.x;
          // let minX = vertex1.x < vertex2.x ? vertex1.x : vertex2.x;
          // let maxY = vertex1.y > vertex2.y ? vertex1.y : vertex2.y;
          // let minY = vertex1.y < vertex2.y ? vertex1.y : vertex2.y;

          if (
            (vertex3.x - vertex1.x) * (vertex3.y - vertex2.y) -
              (vertex3.x - vertex2.x) * (vertex3.y - vertex1.y) ===
            0
          ) {
            if (
              this.isVertexOnEdge(edgeVertex1, edgeVertex2, boardVertex1) ||
              this.isVertexOnEdge(edgeVertex1, edgeVertex2, boardVertex2) ||
              this.isVertexOnEdge(boardVertex1, boardVertex2, edgeVertex1) ||
              this.isVertexOnEdge(boardVertex1, boardVertex2, edgeVertex2)
            ) {
              result.push(false);
              break;
            } else {
              result.push(true);
              break;
            }
          }
        }
      } else {
        result.push(false);
      }
    }
    return result.some(bool => bool === true);
  }

  selfConflicting(prevVertex, newVertex, nextVertex) {
    const isEdgeConflicting1 = this.isVertexOnEdge(
      prevVertex,
      newVertex,
      nextVertex
    );
    const isEdgeConflicting2 = this.isVertexOnEdge(
      nextVertex,
      newVertex,
      prevVertex
    );

    return isEdgeConflicting1 || isEdgeConflicting2;
  }

  isVertexOnEdge(edgeVertex1, edgeVertex2, vertex) {
    const x = vertex.x;
    const y = vertex.y;
    // (x3-x1) * (y3-y2) - (x3-x2) * (y3-y1) === 0
    let maxX = edgeVertex1.x > edgeVertex2.x ? edgeVertex1.x : edgeVertex2.x;
    let minX = edgeVertex1.x < edgeVertex2.x ? edgeVertex1.x : edgeVertex2.x;
    let maxY = edgeVertex1.y > edgeVertex2.y ? edgeVertex1.y : edgeVertex2.y;
    let minY = edgeVertex1.y < edgeVertex2.y ? edgeVertex1.y : edgeVertex2.y;
    console.error(
      (x - edgeVertex1.x) * (y - edgeVertex2.y) -
        (x - edgeVertex2.x) * (y - edgeVertex1.y)
    );
    return (
      (x - edgeVertex1.x) * (y - edgeVertex2.y) -
        (x - edgeVertex2.x) * (y - edgeVertex1.y) >=
        -5000 &&
      (x - edgeVertex1.x) * (y - edgeVertex2.y) -
        (x - edgeVertex2.x) * (y - edgeVertex1.y) <=
        5000 &&
      ((x < maxX && x > minX) || (y < maxY && y > minY)) &&
      (x - edgeVertex1.x) * (y - edgeVertex2.y) -
        (x - edgeVertex2.x) * (y - edgeVertex1.y) !==
        0
    ); //&&
    // !(x < maxX && x > minX && y < maxY && y > minY)
  }

  selectedEdge(x, y) {
    let result = {};

    for (let i = 0; i < this.FullVertex.length; i++) {
      if (i === this.FullVertex.length - 1) continue;
      let vertex1 = this.FullVertex[i];
      let vertex2 = this.FullVertex[i + 1];
      // (x3-x1) * (y3-y2) - (x3-x2) * (y3-y1) === 0
      let maxX = vertex1.x > vertex2.x ? vertex1.x : vertex2.x;
      let minX = vertex1.x < vertex2.x ? vertex1.x : vertex2.x;
      let maxY = vertex1.y > vertex2.y ? vertex1.y : vertex2.y;
      let minY = vertex1.y < vertex2.y ? vertex1.y : vertex2.y;

      if (
        (x - vertex1.x) * (y - vertex2.y) - (x - vertex2.x) * (y - vertex1.y) >=
          -2000 &&
        (x - vertex1.x) * (y - vertex2.y) - (x - vertex2.x) * (y - vertex1.y) <=
          2000 &&
        ((x < maxX && x > minX) || (y < maxY && y > minY))
      ) {
        this.index = i;
        return [vertex1, vertex2];
      }
    }
  }

  // Drawing related

  drawVertex() {
    const width = 450;
    const height = 450;
    this.ctx.lineWidth = 4;

    for (let x = 45; x <= width; x += 90) {
      for (let y = 45; y <= height; y += 90) {
        if (this.isStartingVertexPos(x, y)) {
          let vertex = new VertexFull({ ctx: this.ctx, x, y });
          vertex.draw();
        } else {
          let vertex = new VertexEmpty({ ctx: this.ctx, x, y });
          vertex.draw();
        }
      }
    }
  }

  drawlines() {
    for (let i = 0; i < this.FullVertex.length; i++) {
      if (i === this.FullVertex.length - 1) continue;
      if (i === this.index) continue;

      let vertex1 = this.FullVertex[i];
      let vertex2 = this.FullVertex[i + 1];

      let edge = new Edge({
        vertex1,
        vertex2,
        ctx: this.ctx
      });

      edge.draw();
    }
  }

  isStartingVertexPos(x, y) {
    for (let i = 0; i < this.FullVertex.length; i++) {
      let currentVertex = this.FullVertex[i];
      if (x === currentVertex.x && y === currentVertex.y) return true;
    }
    return false;
  }

  initializeStartingVertex() {
    const vertex1 = new VertexFull({
      x: this.startingVertexPos[0][0],
      y: this.startingVertexPos[0][1],
      ctx: this.ctx
    });
    const vertex2 = new VertexFull({
      x: this.startingVertexPos[1][0],
      y: this.startingVertexPos[1][1],
      ctx: this.ctx
    });

    return [vertex1, vertex2];
  }

  populateVertex() {
    const result = [];
    for (let x = 45; x <= 500; x += 90) {
      for (let y = 45; y <= 500; y += 90) {
        result.push([x, y]);
      }
    }
    return result;
  }
}

module.exports = GameView;


/***/ }),

/***/ "./lib/goal.js":
/*!*********************!*\
  !*** ./lib/goal.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Constants = __webpack_require__(/*! ./util/constants */ "./lib/util/constants.js");

class Goal {
  constructor(ctx) {
    this.draw(ctx);
  }

  draw(ctx) {
    const width = 216;
    const height = 216;
    ctx.lineWidth = 3.5;
    const p = 15;

    for (let x = 30; x <= width; x += 42) {
      for (let y = 30; y <= height; y += 42) {
        ctx.beginPath();
        this.emptyDot(ctx, x, y);
      }
    }
  }

  emptyDot(ctx, x, y) {
    // ctx.strokeStyle = Constants.VERTEX_PINK;
    ctx.strokeStyle = 'grey';
    ctx.arc(x, y, 8, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

module.exports = Goal;


/***/ }),

/***/ "./lib/line-weaver.js":
/*!****************************!*\
  !*** ./lib/line-weaver.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const GameView = __webpack_require__(/*! ./game_view */ "./lib/game_view.js");
const Goal = __webpack_require__(/*! ./goal */ "./lib/goal.js");

const Game = __webpack_require__(/*! ./game */ "./lib/game.js");

document.addEventListener('DOMContentLoaded', () => {
  const gameCanvas = document.getElementById('game-canvas');
  gameCanvas.width = 450;
  gameCanvas.height = 450;

  const goalCanvas = document.getElementById('goal-canvas');
  goalCanvas.width = 230;
  goalCanvas.height = 230;

  const gameCtx = gameCanvas.getContext('2d');
  const goalCtx = goalCanvas.getContext('2d');

  const gameView = new GameView(gameCtx);
  const goal = new Goal(goalCtx);
});


/***/ }),

/***/ "./lib/util/constants.js":
/*!*******************************!*\
  !*** ./lib/util/constants.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  // VERTEX_PINK: '#ee7f8a',
  VERTEX_PINK: 'rgb(243, 122, 144)',
  OVERLAPPING_EDGE_RED: 'red',
  VALID_EDGE_YELLOW: '#e4cd00',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  LINE_FREE: '#6AF794',
  LINE_INTERSECTING: '#FF9090',
  RADIUS: 15,
  EPSILON: 0.00001
};


/***/ }),

/***/ "./lib/vertex.js":
/*!***********************!*\
  !*** ./lib/vertex.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Vertex {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.ctx = options.ctx;
  }

  pos() {
    return [this.x, this.y];
  }
}

module.exports = Vertex;


/***/ }),

/***/ "./lib/vertex_empty.js":
/*!*****************************!*\
  !*** ./lib/vertex_empty.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Vertex = __webpack_require__(/*! ./vertex */ "./lib/vertex.js");
const Constants = __webpack_require__(/*! ./util/constants */ "./lib/util/constants.js");

class VertexEmpty extends Vertex {
  constructor(options) {
    super(options);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = Constants.VERTEX_PINK;
    this.ctx.strokeStyle = Constants.VERTEX_PINK;
    this.ctx.lineWidth = 5;
    this.ctx.shadowBlur = 0;
    this.ctx.globalAlpha = 1;
    this.ctx.arc(this.x, this.y, 15, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
}

module.exports = VertexEmpty;


/***/ }),

/***/ "./lib/vertex_full.js":
/*!****************************!*\
  !*** ./lib/vertex_full.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Vertex = __webpack_require__(/*! ./vertex */ "./lib/vertex.js");
const Constants = __webpack_require__(/*! ./util/constants */ "./lib/util/constants.js");

class VertexFull extends Vertex {
  constructor(options) {
    super(options);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 15, 0, 2 * Math.PI);
    this.ctx.fillStyle = Constants.VERTEX_PINK;
    this.ctx.strokeStyle = Constants.VERTEX_PINK;
    this.ctx.lineWidth = 5;
    this.ctx.globalAlpha = 1;
    this.ctx.fill();
    this.ctx.beginPath();

    this.ctx.moveTo(this.x - 7, this.y - 7);
    this.ctx.lineTo(this.x + 7, this.y + 7);

    this.ctx.moveTo(this.x + 7, this.y - 7);
    this.ctx.lineTo(this.x - 7, this.y + 7);
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();
  }

  drawCross() {}
}

module.exports = VertexFull;


/***/ }),

/***/ "./lib/vertex_temp.js":
/*!****************************!*\
  !*** ./lib/vertex_temp.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Vertex = __webpack_require__(/*! ./vertex */ "./lib/vertex.js");

class VertexTemp extends Vertex {
  constructor(options) {
    super(options);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = '#ee7f8a';
    this.ctx.strokeStyle = '#ee7f8a';
    this.ctx.lineWidth = 3;
    this.ctx.shadowBlur = 0;
    this.ctx.globalAlpha = 1;
    this.ctx.arc(this.x, this.y, 8, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
}

module.exports = VertexTemp;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map