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
    lPressed = false,
    score = 0,
    scoretwo = 0;



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
    context.borderStyle = "dashed";
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

function score1() {
    context.font = "25px Arial";
    context.fillStyle = "#0095DD";
    context.fillText("Score: " + score, 8, 20);
}

function score2() {
    context.font = "25px Arial";
    context.fillStyle = "#0095DD";
    context.fillText("Score: " + scoretwo, 590, 20);
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    Ball();
    paddle1();
    paddle2();
    score1();
    score2();


    if (x + dx > canvas.width.left - radius || x + dx < radius) {
        x = 350, y = 300;
        scoretwo++;

    } else if (x + dx > 700 - radius || x + dx < radius) {
        x = 350, y = 300;
        score++;

    }

    if (scoretwo >= 10) {
        scoretwo = 0;
        score = 0;
        alert("RIGHTY WINS, CONGRATULATIONS! PRESS OK TO RESTART");
        document.location.reload();

    } else if (score >= 10){
        scoretwo = 0;
        score = 0;
        alert("LEFTY WINS, CONGRATULATIONS! PRESS OK TO RESTART");
        document.location.reload();
    }


    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }

    if (qPressed && paddleYpos < canvas.height - paddleHeight) {
        paddleYpos += 2.5;
    } else if (aPressed && paddleYpos > 0) {
        paddleYpos -= 2.5;
    }
    if (pPressed && paddle2Ypos < canvas.height - paddle2Height) {
        paddle2Ypos += 2.5;
    } else if (lPressed && paddle2Ypos > 0) {
        paddle2Ypos -= 2.5;
    }

    if (paddleXpos < x + radius &&
        paddleXpos + paddleWidth + 10 > x &&
        paddleYpos < y + radius &&
        paddleHeight + paddleYpos > y) {

        dx = -dx;

    }

    if (paddle2Xpos < x + radius &&
        paddle2Xpos + paddle2Width > x &&
        paddle2Ypos < y + radius &&
        paddle2Height + paddle2Ypos > y) {

        dx = -dx;

    }


    x += dx;
    y += dy;
}



setInterval(draw, 10);
