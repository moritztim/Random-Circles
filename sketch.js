function setup() {
    createCanvas(600, 400);
    noStroke()
    noLoop()
}

function randRange(min, max) {
    return Math.random() * (max - min) + min
}

function draw() {
    background(0, 0, 0);
    for (let i = 0; i < randRange(10, 400); i++) {
        fill(randRange(100, 255), 0, randRange(100, 190), 255 / 2)
        circle(randRange(0, 600), randRange(0, 400), 24)
    }
}

function mouseClicked() {
    redraw()
}

function keyPressed() {
    if (keyCode == 32) {
        isLooping() ? noLoop() : loop()
    }
    return false;
}