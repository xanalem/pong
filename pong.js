var canvas = document.createElement("canvas");
var width = 700;
var height = 600;
canvas.width = width;
canvas.height = height;


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


var container2 = document.getElementById("container2");

var container = document.getElementById("container");


var elem1 = document.createElement("div");
elem1.className = "box";
elem1.id = "box";
container.appendChild(elem1);
var box = new Box(400, 270, 1, 1, '#' + "FFFFFF", elem1.id);

var elem = document.createElement("div");
elem.className = "paddle";
elem.id = "paddle";
container.appendChild(elem);
var rect1 = new Paddle(0, 240, 0, 1, '#' + "00FFFF", elem.id);

var elem2 = document.createElement("div");
elem2.className = "paddle2";
elem2.id = "paddle2";
container.appendChild(elem2);
var rect2 = new Paddle(783, 240, 0, 1, '#' + "FFFFFF", elem2.id);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(k) {
    if (k.keyCode == 37) {
        leftPressed = true;
    } else if (k.keyCode == 39) {
        rightPressed = true;
    }
}

function keyUpHandler(k) {
    if (k.keyCode == 81) {
        leftPressed = false;
    } else if (k.keyCode == 65) {
        rightPressed = false;
    }
}

function frame() {
    if (rect1.x < box.x + box.width &&
        rect1.x + rect1.width > box.x &&
        rect1.y < box.y + box.height &&
        rect1.height + rect1.y > box.y) {

        box.xstep = -box.xstep;
        console.log("hit");

    }

    if (box.xpos > 780 || box.xpos < 0) {
        box.xstep = -box.xstep;

    }
    if (box.ypos > 580 || box.ypos < 0) {
        box.ystep = -box.ystep;
    }


    box.xpos = box.xpos + box.xstep;
    box.ypos = box.ypos + box.ystep;
    box.render();

}
var id = setInterval(frame, 5);

function test() {
    if (rightPressed && paddleXpos < canvas.width - paddleWidth) {
        paddleXpos += 5;
    } else if (leftPressed && paddleXpos > 0) {
        paddleXpos -= 5;
    }
}
//---------------------------------------------------------//
