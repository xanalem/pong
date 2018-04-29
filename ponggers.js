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

var boxes = [];
var numBoxes = 1;
var container2 = document.getElementById("container2");

var container = document.getElementById("container");


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
            '#' + "FFFFFF",
            elem.id);
}

var id = setInterval(frame, 5);



//---------------------------------------------------------//

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

var paddlez = [];
var numPaddles = 1;
var container = document.getElementById("container");

for (var i = 0; i < numPaddles; i++) {
    var elem = document.createElement("div");
    elem.className = "paddle";
    elem.id = "paddle" ;
    container.appendChild(elem);
    paddlez[i] =
     new Paddle(
        0,
        240,
        0,
        1,
        '#' + "FFFFFF",
        elem.id);

}

var paddles = [];
var numPaddles = 1;
for (var i = 0; i < numPaddles; i++) {
    var elem = document.createElement("div");
    elem.className = "paddle2";
    elem.id = "paddle2" ;
    container.appendChild(elem);
    paddles[i] =
     new Paddle(
        783,
        240,
        0,
        1,
        '#' + "FFFFFF",
        elem.id);

}

function frame() {
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].xpos > 780 || boxes[i].xpos < 0) {
            boxes[i].xstep = -boxes[i].xstep;
        }
        if (boxes[i].ypos > 580 || boxes[i].ypos < 0) {
            boxes[i].ystep = -boxes[i].ystep;
        }

        if (paddlez[i].x < boxes[i].x + boxes[i].width &&
            paddlez[i].x + paddlez[i].width > boxes[i].x &&
            paddlez[i].y < boxes[i].y + boxes[i].height &&
            paddlez[i].height + boxes[i].y > boxes[i].y) {
            boxes[i].xstep = -boxes[i].xstep;
        }
        if (paddles[i].x < boxes[i].x + boxes[i].width &&
            paddles[i].x + paddles[i].width > boxes[i].x &&
            paddles[i].y < boxes[i].y + boxes[i].height &&
            paddles[i].height + boxes[i].y > boxes[i].y) {
            boxes[i].xstep = -boxes[i].xstep;
        }

        boxes[i].xpos = boxes[i].xpos + boxes[i].xstep;
        boxes[i].ypos = boxes[i].ypos + boxes[i].ystep;
        boxes[i].render();
        paddles[i].render();
        paddlez[i].render();



    }
}




