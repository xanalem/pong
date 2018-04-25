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

function frame() {
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
    elem.id = "paddle" + i;
    container.appendChild(elem);
    var rect1 = new Paddle(
        0,
        240,
        0,
        1,
        '#' + "FFFFFF",
        elem.id);
    rect1.render();

}


for (var i = 0; i < numPaddles; i++) {
    var elem = document.createElement("div");
    elem.className = "paddle2";
    elem.id = "paddle2" + i;
    container.appendChild(elem);
    var rect2 = new Paddle(
        783,
        240,
        0,
        1,
        '#' + "FFFFFF",
        elem.id);
    rect2.render();

}

function frame1() {
    for (var i = 0; i < boxes.length; i++) {
        if (rect1.x < boxes[i].x + boxes[i].width &&
            rect1.x + rect1.width > boxes[i].x &&
            rect1.y < boxes[i].y + boxes[i].height &&
            rect1.height + boxes[i].y > boxes[i].y) {

            boxes[i].xstep = -boxes[i].xstep;
        }



        if (rect2.x < boxes[i].x + boxes[i].width &&
            rect2.x + rect2.width > boxes[i].x &&
            rect2.y < boxes[i].y + boxes[i].height &&
            rect2.height + boxes[i].y > boxes[i].y) {

            boxes[i].xstep = -boxes[i].xstep;

        }

        boxes[i].xpos = boxes[i].xpos + boxes[i].xstep;
        boxes[i].ypos = boxes[i].ypos + boxes[i].ystep;
        boxes[i].render();
    }
}
//--------------------------------------------------------------------------//

