var canvas = document.createElement("canvas");
var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

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


var container2 = document.getElementById("container2");

var container = document.getElementById("container");


var elem1 = document.createElement("div");
elem1.className = "box";
elem1.id = "box";
container.appendChild(elem1);
var box = new Box(400, 270, 1, 1, '#' + "0000FF", elem1.id);



function frame() {
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


var elem = document.createElement("div");
elem.className = "paddle";
elem.id = "paddle";
container.appendChild(elem);
var rect1 = new Paddle(0, 240, 0, 1, '#' + "0000FF", elem.id);
rect1.render();



var elem2 = document.createElement("div");
elem2.className = "paddle2";
elem2.id = "paddle2";
container.appendChild(elem2);
var rect2 = new Paddle(783, 240, 0, 1, '#' + "0000FF", elem2.id);
rect2.render();


function detection() {
    if (rect1.x < box.x + box.width &&
        rect1.x + rect1.width > box.x &&
        rect1.y < box.y + box.height &&
        rect1.height + rect1.y > box.y) {
        box.xstep = -box.xstep;
    }
}


//--------------------------------------------------------------------------//
