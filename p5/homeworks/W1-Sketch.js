//Practice when reading Chapter 1-3
/*
//var y = 100;
function setup() {
    createCanvas(720, 400);
    stroke(255);
    frameRate(30);//when this line gets commended out, it's till fine.
    //Then what's the point?
}

//function draw() {
    background(0);
    y -= 1;//I tired to use a while loop, since this is infinite, but
    How to make it work?
    if (y < 0) {
        y = height;
    }
    line(0, y, width, y);
//}

//Optional Quiz 3. Re-create Piet Mondrian's art (https://itpnyu.github.io/ICM-Quizzes/week1-drawing/)
function setup() {
    createCanvas(200, 200);
    noStroke();
}

function draw() {
    fill(255, 250, 240);
    rect(0, 0, 50, 70);
    fill(255, 250, 240);
    rect(0, 70, 50, 70);
    fill(205, 38, 38);
    rect(50, 0, 150, 140);
    fill(24, 116, 205);
    rect(0, 140, 50, 60);
    fill(255, 250, 240);
    rect(50, 140, 200-75, 60)
    fill(255, 250, 240);
    rect(50+200-75, 140, 25, 30);
    fill(255, 215, 0);
    rect(50+200-75, 140+30, 25, 30);
    stroke(0);
    strokeWeight(6);
    line(48, 0, 48, 200);
    line(0, 137, 200, 137);
    line(50+200-75-3, 137, 50+200-75-3, 200)
    strokeWeight(12);
    strokeCap(SQUARE);
    line(0, 77, 48, 77);
    line(50+200-75-3, 137+30+3, 200, 137+30+3);
}

//Optional Quiz 4
    function setup() {
    createCanvas(200, 200);
    noStroke();
}
function draw() {
    background(0, 255, 255);
    strokeWeight(20);
    stroke(255, 0, 0);
    line(-10, -10, 210, 210);//red line
    noStroke();
    fill(0, 205, 0)
    ellipse(100, 100, 100, 70);//green ellipse
    fill(0, 0, 128);
    rect(130, 80, 20, 20);//blue rect
}*/

//FlipWord Logo Sketch
let X_AXIS = 1;
let DARK_GREY, LIGHT_GREY, GREEN, TEAL;

function setup(){
    createCanvas(368, 200);
    noStroke();
    DARK_GREY = color(51, 51, 51);
    LIGHT_GREY = color(169, 169, 169);
    GREEN = color(84, 234, 84);
    TEAL = color(119, 231, 212);
}

function draw(){
    background(255);
    drawTopTriangle(100, 60, 100, 150, 65 + 80, 60, DARK_GREY, LIGHT_GREY, X_AXIS); // the h is supposed to be 106, but the triangle looks super small when it's 106, why?
    drawBottomTriangle(100, 60, 100, 125, 60 + 80, 85, GREEN, TEAL, X_AXIS);
}

function drawTopTriangle(xTopLeft, yTopLeft, xBottomLeft, yBottomLeft, xTopRight, yTopRight, darkGrey, lightGrey, axis){ //no need to claim x2, y2, but is it very organized and easy to read?
    noFill();
    for(let i = xTopLeft, j = yBottomLeft; i <= xTopLeft + xTopRight, j >= yTopLeft; i++, j-=1.3){
        let interpolation = map(i, xTopLeft, xTopLeft + xTopRight, 0, 1);
        let colorGrey = lerpColor(darkGrey, lightGrey, interpolation);
        stroke(colorGrey);
        line(i, yTopLeft, i, j);
    }
}

function drawBottomTriangle(xTopLeft, yTopLeft, xBottomLeft, yBottomLeft, xTopRight, yTopRight, green, teal, axis){
    noFill();
    for(let i = xTopLeft, j = yTopLeft, k = yBottomLeft; i <= xTopLeft + xTopRight, j <= yTopRight, k >= 0; i++, j = j + 0.8, k = k - 2.2){
        let interpolation = map(i, xTopLeft, xTopLeft + xTopRight, 0, 1);
        let colorGreen = lerpColor(green, teal, interpolation);
        stroke(colorGreen);
        line(i, j, i, j + k);
    }
}
