// Box Object definition
function Box(xpos, ypos, xstep, ystep, color, id) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.xstep = xstep;
    this.ystep = ystep;
    this.id = id;
    this.color = color;
    var elem = document.getElementById(this.id);
    this.render = function () {
        elem.style.top = this.ypos + 'px';
        elem.style.left = this.xpos + 'px';
        elem.style.backgroundColor = color;
    }
}

// Some variables that we need below
var boxes = [];
var numBoxes = 1;
var container = document.getElementById("container");
var container2 = document.getElementById("container2");

function middle() {

}

// Dynamically create the boxes
for (var i = 0; i < numBoxes; i++) {
    var elem = document.createElement("div");
    elem.className = "box";
    elem.id = "box" + i;
    container.appendChild(elem);
    boxes[i] =
        new Box(
            400,
            270,
            1,
            1,
            '#' + "F5F5DC",
            elem.id);
}

var id = setInterval(frame, 5);

// The animation code
function frame() {
    // Box 1
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].xpos > 780 || boxes[i].xpos < 0) {
            boxes[i].xstep = -boxes[i].xstep;
        }
        if (boxes[i].ypos > 580 || boxes[i].ypos < 0) {
            boxes[i].ystep = -boxes[i].ystep;
        }

        boxes[i].xpos = boxes[i].xpos + boxes[i].xstep;
        boxes[i].ypos = boxes[i].ypos + boxes[i].ystep;
        boxes[i].render();
    }
}

function Paddle(xpos, ypos, xstep, ystep, color, id) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.xstep = xstep;
    this.ystep = ystep;
    this.id = id;
    this.color = color;
    var elem = document.getElementById(this.id);
    this.render = function () {
        elem.style.top = this.ypos + 'px';
        elem.style.left = this.xpos + 'px';
        elem.style.backgroundColor = color;
    }
}

// Some variables that we need below
var paddlez = [];
var numPaddles = 2;

for (var i = 0; i < numPaddles; i++) {
    var elem = document.createElement("div");
    elem.className = "paddle";
    elem.id = "paddle" + i;
    container.appendChild(elem);
}

for (var i = 0; i < numPaddles; i++) {
    var elem = document.createElement("div");
    elem.className = "paddle2";
    elem.id = "paddle2" + i;
    container.appendChild(elem);
}

function game() {
    this.context = ui.getContext("2d");
    this.context.fillStyle = "white";
    this.keys = new KeyListener();

    this.p1 = new Paddle(5, 0);
    this.p1.y = this.height / 2 - this.p1.height / 2;
    this.p2 = new Paddle(this.width - 5 - 2, 0);
    this.p2.y = this.height / 2 - this.p2.height / 2;
}

// Initialize our game instance
var game = new game();

function MainLoop() {
    game.update();
    game.draw();
    // Call the main loop again at a frame rate of 30fps
    setTimeout(MainLoop, 33.3333);
}

// Start the game execution
MainLoop();
