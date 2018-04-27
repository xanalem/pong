var canvas = document.getElementById("Canvas"),
    context = canvas.getContext("2d"),
    radius = 10,
    x = 350,
    y = 300,
    dy = 2,
    dx = -2,
    paddleHeight = 100,
    paddleWidth = 15,
    paddleXpos = 0,
    paddleYpos = 270,

    paddle2Height = 100,
    paddle2Width = 15,
    paddle2Xpos = 685,
    paddle2Ypos = 270,

    qPressed = false,
    aPressed = false,

    pPressed = false,
    lPressed = false;




document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", keyDownHandler2, false);
document.addEventListener("keyup", keyUpHandler2, false);

function keyDownHandler(k) {
    if (k.keyCode == 81) {
        aPressed = true;
    } else if (k.keyCode == 65) {
        qPressed = true;
    }
}

function keyUpHandler(k) {
    if (k.keyCode == 81) {
        aPressed = false;
    } else if (k.keyCode == 65) {
        qPressed = false;
    }
}

function keyDownHandler2(k) {
    if (k.keyCode == 80) {
        lPressed = true;
    } else if (k.keyCode == 76) {
        pPressed = true;
    }
}

function keyUpHandler2(k) {
    if (k.keyCode == 80) {
        lPressed = false;
    } else if (k.keyCode == 76) {
        pPressed = false;
    }
}


function paddle1() {
    context.beginPath();
    context.rect(paddleXpos, paddleYpos, paddleWidth, paddleHeight);
    context.fillstyle = "#FFFFFF";
    context.fill();
    context.closePath();
}

function paddle2() {
    context.beginPath();
    context.rect(paddle2Xpos, paddle2Ypos, paddle2Width, paddle2Height);
    context.fillstyle = "#FFFFFF";
    context.fill();
    context.closePath();
}

function Ball() {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = "#FFFFFF";
    context.fill();
    context.closePath();

}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    Ball();
    paddle1();
    paddle2();
    if (x + dx > canvas.width - radius || x + dx < radius) {
        x = 350, y = 300;
    }
    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }

    if (qPressed && paddleYpos < canvas.height - paddleHeight) {
        paddleYpos += 5;
    } else if (aPressed && paddleYpos > 0) {
        paddleYpos -= 5;
    }
    if (pPressed && paddle2Ypos < canvas.height - paddle2Height) {
        paddle2Ypos += 5;
    } else if (lPressed && paddle2Ypos > 0) {
        paddle2Ypos -= 5;
    }

    if (paddleXpos < x + radius &&
        paddleXpos + paddleWidth > x &&
        paddleYpos < y + radius &&
        paddleHeight + paddleYpos > y) {

        dx = -dx;
        console.log("hit");

    }

    if (paddle2Xpos < x + radius &&
        paddle2Xpos + paddle2Width > x &&
        paddle2Ypos < y + radius &&
        paddle2Height + paddle2Ypos > y) {

        dx = -dx;
        console.log("hit2");

    }

    x += dx;
    y += dy;
}

setInterval(draw, 15);
