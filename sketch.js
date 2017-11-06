let cSize = {};

let particles = [];
let fireworks = [];
let pM;

function setup() {
    cSize.x = windowWidth;
    cSize.y = windowHeight;
    // cSize.x = 400;
    // cSize.y = 400;

    createCanvas(cSize.x,cSize.y);

    pM = new particleManager();
}

function draw() {
    background(15);

    for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].render();
    }

    if (random(0,150) >= 140) {
        fireworks.push(new firework(random(0,cSize.x),random(0,cSize.y)));
        fireworks[fireworks.length - 1].spawn();
    }

    pM.update();

}

function windowResized() {
    cSize.x = windowWidth;
    cSize.y = windowHeight;
    resizeCanvas(cSize.x,cSize.y);
}