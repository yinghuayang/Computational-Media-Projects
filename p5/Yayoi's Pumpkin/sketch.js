// use p5.js to re-create Yayoi Kusama's Pumpkin
// http://www.artnet.com/artists/yayoi-kusama/pumpkin-H_7lnfG7tA5o4YX3ZD89cg2


// declare variables
let width = 510;
    /* if texture() can be used
    let grid;
    let pg1;
    let pg2;
    */
// variables for the SectionMostLeftVertexes
// x variables
let xMostLVertex0 = 253;
let xMostLBezierA0 = 191, xMostLBezierA1 = 154, xMostLBezierA2 = 117;
let xMostLBezierB0 = 91, xMostLBezierB1 = 76, xMostLBezierB2 = 61;
let xMostLBezierC0 = 40, xMostLBezierC1 = 34, xMostLBezierC2 = 28;
let xMostLBezierD0 = 26, xMostLBezierD1 = 34, xMostLBezierD2 = 42;
let xMostLVertex1 = 72;
// y variables
let yMostLVertex0 = 72;
let yMostLBezierA0 = 56, yMostLBezierA1 = 66, yMostLBezierA2 = 76;
let yMostLBezierB0 = 99, yMostLBezierB1 = 117, yMostLBezierB2 = 135;
let yMostLBezierC0 = 168, yMostLBezierC1 = 198, yMostLBezierC2 = 228;
let yMostLBezierD0 = 267, yMostLBezierD1 = 288, yMostLBezierD2 = 309;
let yMostLVertex1 = 305;
// variables for the SectionMoreLeftVertexes
//x variables
let xMoreLVertex0 = 253;
let xMoreLBezierA0 = 195, xMoreLBezierA1 = 170, xMoreLBezierA2 = 145;
let xMoreLBezierB0 = 126, xMoreLBezierB1 = 106, xMoreLBezierB2 = 86;
let xMoreLBezierC0 = 84, xMoreLBezierC1 = 73, xMoreLBezierC2 = 62;
let xMoreLBezierD0 = 56, xMoreLBezierD1 = 66, xMoreLBezierD2 = 76;
let xMoreLBezierE0 = 80, xMoreLBezierE1 = 103, xMoreLBezierE2 = 126;
let xMoreLVertex1 = 171;
// y variables
let yMoreLVertex0 = 98;
let yMoreLBezierA0 = 87, yMoreLBezierA1 = 95, yMoreLBezierA2 = 103;
let yMoreLBezierB0 = 111, yMoreLBezierB1 = 143, yMoreLBezierB2 = 175;
let yMoreLBezierC0 = 195, yMoreLBezierC1 = 220, yMoreLBezierC2 = 245;
let yMoreLBezierD0 = 290, yMoreLBezierD1 = 313, yMoreLBezierD2 = 336;
let yMoreLBezierE0 = 338, yMoreLBezierE1 = 352, yMoreLBezierE2 = 366;
let yMoreLVertex1 = 341;
// variables for the SectionLeftVertexes
// x variables
let xLVertex0 = 253;
let xLBezierA0 = 231, xLBezierA1 = 210, xLBezierA2 = 189;
let xLBezierB0 = 171, xLBezierB1 = 159, xLBezierB2 = 147;
let xLBezierC0 = 136, xLBezierC1 = 133, xLBezierC2 = 130;
let xLBezierD0 = 121, xLBezierD1 = 121, xLBezierD2 = 121;
let xLBezierE0 = 118, xLBezierE1 = 138, xLBezierE2 = 158;
let xLVertex1 = 203;
// y variables
let yLVertex0 = 104;
let yLBezierA0 = 101, yLBezierA1 = 110, yLBezierA2 = 119;
let yLBezierB0 = 137, yLBezierB1 = 154, yLBezierB2 = 171;
let yLBezierC0 = 209, yLBezierC1 = 234, yLBezierC2 = 259;
let yLBezierD0 = 280, yLBezierD1 = 301, yLBezierD2 = 314;
let yLBezierE0 = 328, yLBezierE1 = 348, yLBezierE2 = 368;
let yLVertex1 = 359;
// variables for the SectionCenterLVertexes
// x variables
let xCenterLVertex0 = 256;
let xCenterLBezierA0 = 240, xCenterLBezierA1 = 231, xCenterLBezierA2 = 222;
let xCenterLBezierB0 = 200, xCenterLBezierB1 = 203, xCenterLBezierB2 = 201;
let xCenterLBezierC0 = 203, xCenterLBezierC1 = 205, xCenterLBezierC2 = 197;
let xCenterLBezierD0 = 180, xCenterLBezierD1 = 184, xCenterLBezierD2 = 183;
let xCenterLBezierE0 = 192, xCenterLBezierE1 = 208, xCenterLBezierE2 = 224;
let xCenterLVertex1 = 256;
// y variables
let yCenterLVertex0 = 116;
let yCenterLBezierA0 = 113, yCenterLBezierA1 = 118, yCenterLBezierA2 = 123;
let yCenterLBezierB0 = 153, yCenterLBezierB1 = 167, yCenterLBezierB2 = 181;
let yCenterLBezierC0 = 202, yCenterLBezierC1 = 229, yCenterLBezierC2 = 256;
let yCenterLBezierD0 = 294, yCenterLBezierD1 = 311, yCenterLBezierD2 = 328;
let yCenterLBezierE0 = 358, yCenterLBezierE1 = 368, yCenterLBezierE2 = 378;
let yCenterLVertex1 = 376;

//create array of Sections and stem
// SectionsLeft
let arraySectionMostL = [];
let mostLVertex0, mostLBezierA, mostLBezierB, mostLBezierC, mostLBezierD, mostLVertex1;
let arraySectionMoreL = [];
let moreLVertex0, moreLBezierA, moreLBezierB, moreLBezierC, moreLBezierD, moreLBezierE, moreLVertex1;
let arraySectionLeft = [];
let leftVertex0, leftBezierA, leftBezierB, leftBezierC, leftBezierD, leftBezierE, leftVertex1;
let arraySectionCenterL = [];
let centerLVertex0, centerLBezierA, centerLBezierB, centerLBezierC, centerLBezierD, centerLBezierE, centerLVertex1;
// SectionsRight
let arraySectionMostR = [];
let mostRVertex0, mostRBezierA, mostRBezierB, mostRBezierC, mostRBezierD, mostRVertex1;
let arraySectionMoreR = [];
let moreRVertex0, moreRBezierA, moreRBezierB, moreRBezierC, moreRBezierD, moreRBezierE, moreRVertex1;
let arraySectionRight = [];
let rightVertex0, rightBezierA, rightBezierB, rightBezierC, rightBezierD, rightBezierE, rightVertex1;
let arraySectionCenterR = [];
let centerRVertex0, centerRBezierA, centerRBezierB, centerRBezierC, centerRBezierD, centerRBezierE, centerRVertex1;

// set up the canvas and grid
function setup() {
    createCanvas(width, 412, /* WEBGL */);
    // create the 2D grid's first dimension
    grid = new Array(23);
    // creating the 2D grid's second dimension (array in an array)
    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(19);
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j] = createVector(i * 24 + random(-5, 5), j * 23 + random(-5, 5));
        }
    }
        /* if texture() can be used
        pg1 = createGraphics(70, 265);
        pg2 = createGraphics(70, 265);
        */
}

// draw the background and the pumpkin
function draw() {
    background(0);
    stroke(239, 193, 6);
    strokeWeight(2);
    noFill();
    // draw the background
    for (let i = 0; i < grid.length - 1; i ++){
        for (let j = 0; j < grid[i].length - 1; j++){
            beginShape();
            // define three points
            let pt1 = grid[i][j];
            vertex(pt1.x, pt1.y);
            let pt2 = grid[i][j+1];
            vertex(pt2.x, pt2.y);
            let pt3 = grid[i+1][j];
            vertex(pt3.x, pt3.y);
            endShape(CLOSE);
        }
    }
    // draw the pumpkin
        /* if texture() can be used
        SectionDots();
        rotateY(PI/4);
        texture(pg1);
        plane(265); // not sure about the value
        */
    // draw the left half
    sectionMostLeft(0, 0);
    sectionMoreLeft(0, 0);
    sectionLeft(0, 0);
    sectionCenterLeft(0, 0);
    // draw the right half
            /* if texture() can be used
            stemDots();
            rotateX(PI/8);
            texture(pg2);
            plane(265); // not sure about the value
            */
    // draw the right half
    sectionMostRight(0, 0);
    sectionMoreRight(0, 0);
    sectionRight(0, 0);
    sectionCenterRight(0, 0);
    // draw the stem
    stem(0, 0);
}

// functions of pumpkin components
function sectionMostLeft() {
    fill(210, 160, 6);
    noStroke();
    beginShape();
    // mostLVertex0
    vertex(xMostLVertex0, yMostLVertex0);
    mostLVertex0 = createVector(xMostLVertex0, yMostLVertex0);
    arraySectionMostL.push(mostLVertex0);
    // mostLBezierA
    bezierVertex(xMostLBezierA0, yMostLBezierA0, xMostLBezierA1, yMostLBezierA1, xMostLBezierA2, yMostLBezierA2); // in Sketch, hold option key to move cursor a word forward or backward
    mostLBezierA = createVector(xMostLBezierA2, yMostLBezierA2);
    arraySectionMostL.push(mostLBezierA);
    // mostLBezierB
    bezierVertex(xMostLBezierB0, yMostLBezierB0, xMostLBezierB1, yMostLBezierB1, xMostLBezierB2, yMostLBezierB2);
    mostLBezierB = createVector(xMostLBezierB2, yMostLBezierB2);
    arraySectionMostL.push(mostLBezierB);
    // mostLBezierC
    bezierVertex(xMostLBezierC0, yMostLBezierC0, xMostLBezierC1, yMostLBezierC1, xMostLBezierC2, yMostLBezierC2);
    mostLBezierC = createVector(xMostLBezierC2, yMostLBezierC2);
    arraySectionMostL.push(mostLBezierC);
    // mostLBezierD
    bezierVertex(xMostLBezierD0, yMostLBezierD0, xMostLBezierD1, yMostLBezierD1, xMostLBezierD2, yMostLBezierD2);
    mostLBezierD = createVector(xMostLBezierD2, yMostLBezierD2);
    arraySectionMostL.push(mostLBezierD);
    // mostLVertex1
    vertex(xMostLVertex1, yMostLVertex1);
    mostLVertex1 = createVector(xMostLVertex1, yMostLVertex1);
    arraySectionMostL.push(mostLVertex1);
    endShape();
}
function sectionMoreLeft() {
    fill(300, 200, 6);
    noStroke();
    beginShape();
    // moreLVertex0
    vertex(xMoreLVertex0, yMoreLVertex0);
    moreLVertex0 = createVector(xMoreLVertex0, yMoreLVertex0);
    arraySectionMoreL.push(moreLVertex0);
    // moreLBezierA
    bezierVertex(xMoreLBezierA0, yMoreLBezierA0, xMoreLBezierA1, yMoreLBezierA1, xMoreLBezierA2, yMoreLBezierA2);
    moreLBezierA = createVector(xMoreLBezierA2, yMoreLBezierA2);
    arraySectionMoreL.push(moreLBezierA);
    // moreLBezierB
    bezierVertex(xMoreLBezierB0, yMoreLBezierB0, xMoreLBezierB1, yMoreLBezierB1, xMoreLBezierB2, yMoreLBezierB2);
    moreLBezierB = createVector(xMoreLBezierB2, yMoreLBezierB2);
    arraySectionMoreL.push(moreLBezierB);
    // moreLBezierC
    bezierVertex(xMoreLBezierC0, yMoreLBezierC0, xMoreLBezierC1, yMoreLBezierC1, xMoreLBezierC0, yMoreLBezierC0);
    moreLBezierC = createVector(xMoreLBezierC2, yMoreLBezierC2);
    arraySectionMoreL.push(moreLBezierC);
    // moreLBezierD
    bezierVertex(xMoreLBezierD0, yMoreLBezierD0, xMoreLBezierD1, yMoreLBezierD1, xMoreLBezierD2, yMoreLBezierD2);
    moreLBezierD = createVector(xMoreLBezierD2, yMoreLBezierD2);
    arraySectionMoreL.push(moreLBezierD);
    // moreLBezierE
    bezierVertex(xMoreLBezierE0, yMoreLBezierE0, xMoreLBezierE1, yMoreLBezierE1, xMoreLBezierE2, yMoreLBezierE2);
    moreLBezierE = createVector(xMoreLBezierE2, yMoreLBezierE2);
    arraySectionMoreL.push(moreLBezierE);
    // moreLVertex1
    vertex(xMoreLVertex1, yMoreLVertex1);
    moreLVertex1 = createVector(xMoreLVertex1, yMoreLVertex1);
    arraySectionMoreL.push(moreLVertex1);
    endShape();
}
function sectionLeft() {
    fill(239, 250, 6);
    noStroke();
    beginShape();
    // leftVertex0
    vertex(xLVertex0, yLVertex0);
    leftVertex0 = createVector(xLVertex0, yLVertex0);
    arraySectionLeft.push(leftVertex0);
    // leftBezierA
    bezierVertex(xLBezierA0, yLBezierA0, xLBezierA1, yLBezierA1, xLBezierA2, yLBezierA2);
    leftBezierA = createVector(xLBezierA2, yLBezierA2);
    arraySectionLeft.push(leftBezierA);
    // leftBezierB
    bezierVertex(xLBezierB0, yLBezierB0, xLBezierB1, yLBezierB1, xLBezierB2, yLBezierB2);
    leftBezierB = createVector(xLBezierB2, yLBezierB2);
    arraySectionLeft.push(leftBezierB);
    // leftBezierC
    bezierVertex(xLBezierC0, yLBezierC0, xLBezierC1, yLBezierC1, xLBezierC2, yLBezierC2);
    leftBezierC = createVector(xLBezierC2, yLBezierC2);
    arraySectionLeft.push(leftBezierC);
    // leftBezierD
    bezierVertex(xLBezierD0, yLBezierD0, xLBezierD1, yLBezierD1, xLBezierD2, yLBezierD2);
    leftBezierD = createVector(xLBezierD2, yLBezierD2);
    arraySectionLeft.push(leftBezierD);
    // leftBezierE
    bezierVertex(xLBezierE0, yLBezierE0, xLBezierE1, yLBezierE1, xLBezierE2, yLBezierE2);
    leftBezierE = createVector(xLBezierE2, yLBezierE2);
    arraySectionLeft.push(leftBezierE);
    // leftVertex1
    vertex(xLVertex1, yLVertex1);
    leftVertex1 = createVector(xLVertex1, yLVertex1);
    arraySectionLeft.push(leftVertex1);
    endShape();
}
function sectionCenterLeft() {
    fill(239, 193, 6);
    noStroke();
    beginShape();
    // centerLVertex0
    vertex(xCenterLVertex0, yCenterLVertex0);
    centerLVertex0 = createVector(xCenterLVertex0, yCenterLVertex0);
    arraySectionCenterL.push(centerLVertex0);
    // centerLBezierA
    bezierVertex(xCenterLBezierA0, yCenterLBezierA0, xCenterLBezierA1, yCenterLBezierA1, xCenterLBezierA2, yCenterLBezierA2);
    centerLBezierA = createVector(xCenterLBezierA2, yCenterLBezierA2);
    arraySectionCenterL.push(centerLBezierA);
    // centerLBezierB
    bezierVertex(xCenterLBezierB0, yCenterLBezierB0, xCenterLBezierB1, yCenterLBezierB1, xCenterLBezierB2, yCenterLBezierB2);
    centerLBezierB = createVector(xCenterLBezierB2, yCenterLBezierB2);
    arraySectionCenterL.push(centerLBezierB);
    // centerLBezierC
    bezierVertex(xCenterLBezierC0, yCenterLBezierC0, xCenterLBezierC1, yCenterLBezierC1, xCenterLBezierC2, yCenterLBezierC2);
    centerLBezierC = createVector(xCenterLBezierC2, yCenterLBezierC2);
    arraySectionCenterL.push(centerLBezierC);
    // centerLBezierD
    bezierVertex(xCenterLBezierD0, yCenterLBezierD0, xCenterLBezierD1, yCenterLBezierD1, xCenterLBezierD2, yCenterLBezierD2);
    centerLBezierD = createVector(xCenterLBezierD2, yCenterLBezierD2);
    arraySectionCenterL.push(centerLBezierD);
    // centerLBezierE
    bezierVertex(xCenterLBezierE0, yCenterLBezierE0, xCenterLBezierE1, yCenterLBezierE1, xCenterLBezierE2, yCenterLBezierE2);
    centerLBezierE = createVector(xCenterLBezierE2, yCenterLBezierE2);
    arraySectionCenterL.push(centerLBezierE);
    // centerLVertex1
    vertex(xCenterLVertex1, yCenterLVertex1);
    centerLVertex1 = createVector(xCenterLVertex1, yCenterLVertex1);
    arraySectionCenterL.push(centerLVertex1);
    endShape();
}
function sectionMostRight() {
    fill(210, 160, 6);
    noStroke();
    beginShape();
    // mostRVertex0
    vertex(width - xMostLVertex0, yMostLVertex0);
    mostRVertex0 = createVector(width - xMostLVertex0, yMostLVertex0);
    arraySectionMostR.push(mostRVertex0);
    // mostRBezierA
    bezierVertex(width - xMostLBezierA0, yMostLBezierA0, width - xMostLBezierA1, yMostLBezierA1, width - xMostLBezierA2, yMostLBezierA2); // in Sketch, hold option key to move cursor a word forward or backward
    mostRBezierA = createVector(width - xMostLBezierA2, yMostLBezierA2);
    arraySectionMostR.push(mostRBezierA);
    // mostRBezierB
    bezierVertex(width - xMostLBezierB0, yMostLBezierB0, width - xMostLBezierB1, yMostLBezierB1, width - xMostLBezierB2, yMostLBezierB2);
    mostRBezierB = createVector(width - xMostLBezierB2, yMostLBezierB2);
    arraySectionMostR.push(mostRBezierB);
    // mostLBezierC
    bezierVertex(width - xMostLBezierC0, yMostLBezierC0, width - xMostLBezierC1, yMostLBezierC1, width - xMostLBezierC2, yMostLBezierC2);
    mostRBezierC = createVector(width - xMostLBezierC2, yMostLBezierC2);
    arraySectionMostR.push(mostRBezierC);
    // mostRBezierD
    bezierVertex(width - xMostLBezierD0, yMostLBezierD0, width - xMostLBezierD1, yMostLBezierD1, width - xMostLBezierD2, yMostLBezierD2);
    mostRBezierD = createVector(width - xMostLBezierD2, yMostLBezierD2);
    arraySectionMostR.push(mostRBezierD);
    // mostRVertex1
    vertex(width - xMostLVertex1, yMostLVertex1);
    mostRVertex1 = createVector(width - xMostLVertex1, yMostLVertex1);
    arraySectionMostR.push(mostRVertex1);
    endShape();
}
function sectionMoreRight() {
    fill(300, 200, 6);
    noStroke();
    beginShape();
    // moreRVertex0
    vertex(width - xMoreLVertex0, yMoreLVertex0);
    moreRVertex0 = createVector(width - xMoreLVertex0, yMoreLVertex0);
    arraySectionMoreR.push(moreRVertex0);
    // moreRBezierA
    bezierVertex(width - xMoreLBezierA0, yMoreLBezierA0, width - xMoreLBezierA1, yMoreLBezierA1, width - xMoreLBezierA2, yMoreLBezierA2);
    moreRBezierA = createVector(width - xMoreLBezierA2, yMoreLBezierA2);
    arraySectionMoreR.push(moreRBezierA);
    // moreRBezierB
    bezierVertex(width - xMoreLBezierB0, yMoreLBezierB0, width - xMoreLBezierB1, yMoreLBezierB1, width - xMoreLBezierB2, yMoreLBezierB2);
    moreRBezierB = createVector(width - xMoreLBezierB2, yMoreLBezierB2);
    arraySectionMoreR.push(moreRBezierB);
    // moreRBezierC
    bezierVertex(width - xMoreLBezierC0, yMoreLBezierC0, width - xMoreLBezierC1, yMoreLBezierC1, width - xMoreLBezierC0, yMoreLBezierC0);
    moreRBezierC = createVector(width - xMoreLBezierC2, yMoreLBezierC2);
    arraySectionMoreR.push(moreRBezierC);
    // moreRBezierD
    bezierVertex(width - xMoreLBezierD0, yMoreLBezierD0, width - xMoreLBezierD1, yMoreLBezierD1, width - xMoreLBezierD2, yMoreLBezierD2);
    moreRBezierD = createVector(width - xMoreLBezierD2, yMoreLBezierD2);
    arraySectionMoreR.push(moreRBezierD);
    // moreRBezierE
    bezierVertex(width - xMoreLBezierE0, yMoreLBezierE0, width - xMoreLBezierE1, yMoreLBezierE1, width - xMoreLBezierE2, yMoreLBezierE2);
    moreRBezierE = createVector(width - xMoreLBezierE2, yMoreLBezierE2);
    arraySectionMoreR.push(moreRBezierE);
    // moreRVertex1
    vertex(width - xMoreLVertex1, yMoreLVertex1);
    moreRVertex1 = createVector(width - xMoreLVertex1, yMoreLVertex1);
    arraySectionMoreR.push(moreRVertex1);
    endShape();
}
function sectionRight() {
    fill(239, 250, 6);
    noStroke();
    beginShape();
    // rightVertex0
    vertex(xLVertex0, yLVertex0);
    rightVertex0 = createVector(width - xLVertex0, yLVertex0);
    arraySectionRight.push(rightVertex0);
    // rightBezierA
    bezierVertex(width - xLBezierA0, yLBezierA0, width - xLBezierA1, yLBezierA1, width - xLBezierA2, yLBezierA2);
    rightBezierA = createVector(width - xLBezierA2, yLBezierA2);
    arraySectionRight.push(rightBezierA);
    // rightBezierB
    bezierVertex(width - xLBezierB0, yLBezierB0, width - xLBezierB1, yLBezierB1, width - xLBezierB2, yLBezierB2);
    rightBezierB = createVector(width - xLBezierB2, yLBezierB2);
    arraySectionRight.push(rightBezierB);
    // rightBezierC
    bezierVertex(width - xLBezierC0, yLBezierC0, width - xLBezierC1, yLBezierC1, width - xLBezierC2, yLBezierC2);
    rightBezierC = createVector(width - xLBezierC2, yLBezierC2);
    arraySectionRight.push(rightBezierC);
    // rightBezierD
    bezierVertex(width - xLBezierD0, yLBezierD0, width - xLBezierD1, yLBezierD1, width - xLBezierD2, yLBezierD2);
    rightBezierD = createVector(width - xLBezierD2, yLBezierD2);
    arraySectionRight.push(rightBezierD);
    // rightBezierE
    bezierVertex(width - xLBezierE0, yLBezierE0, width - xLBezierE1, yLBezierE1, width - xLBezierE2, yLBezierE2);
    rightBezierE = createVector(width - xLBezierE2, yLBezierE2);
    arraySectionRight.push(rightBezierE);
    // rightVertex1
    vertex(width - xLVertex1, yLVertex1);
    rightVertex1 = createVector(width - xLVertex1, yLVertex1);
    arraySectionRight.push(rightVertex1);
    endShape();
}
function sectionCenterRight() {
    fill(239, 193, 6);
    noStroke();
    beginShape();
    // centerRVertex0
    vertex(width - xCenterLVertex0, yCenterLVertex0);
    centerRVertex0 = createVector(width - xCenterLVertex0, yCenterLVertex0);
    arraySectionCenterR.push(centerRVertex0);
    // centerRBezierA
    bezierVertex(width - xCenterLBezierA0, yCenterLBezierA0, width - xCenterLBezierA1, yCenterLBezierA1, width - xCenterLBezierA2, yCenterLBezierA2);
    centerRBezierA = createVector(width - xCenterLBezierA2, yCenterLBezierA2);
    arraySectionCenterR.push(centerRBezierA);
    // centerRBezierB
    bezierVertex(width - xCenterLBezierB0, yCenterLBezierB0, width - xCenterLBezierB1, yCenterLBezierB1, width - xCenterLBezierB2, yCenterLBezierB2);
    centerRBezierB = createVector(width - xCenterLBezierB2, yCenterLBezierB2);
    arraySectionCenterR.push(centerRBezierB);
    // centerRBezierC
    bezierVertex(width - xCenterLBezierC0, yCenterLBezierC0, width - xCenterLBezierC1, yCenterLBezierC1, width - xCenterLBezierC2, yCenterLBezierC2);
    centerRBezierC = createVector(width - xCenterLBezierC2, yCenterLBezierC2);
    arraySectionCenterR.push(centerRBezierC);
    // centerRBezierD
    bezierVertex(width - xCenterLBezierD0, yCenterLBezierD0, width - xCenterLBezierD1, yCenterLBezierD1, width - xCenterLBezierD2, yCenterLBezierD2);
    centerRBezierD = createVector(width - xCenterLBezierD2, yCenterLBezierD2);
    arraySectionCenterR.push(centerRBezierD);
    // centerRBezierE
    bezierVertex(width - xCenterLBezierE0, yCenterLBezierE0, width - xCenterLBezierE1, yCenterLBezierE1, width - xCenterLBezierE2, yCenterLBezierE2);
    centerRBezierE = createVector(width - xCenterLBezierE2, yCenterLBezierE2);
    arraySectionCenterR.push(centerRBezierE);
    // centerRVertex1
    vertex(width - xCenterLVertex1, yCenterLVertex1);
    centerRVertex1 = createVector(width - xCenterLVertex1, yCenterLVertex1);
    arraySectionCenterR.push(centerRVertex1);
    endShape();
}
function stem(){
    fill(0);
    noStroke();
    ellipse(260, 100, 80, 44);
    beginShape();
    vertex(207, 8);
    bezierVertex(250, 0, 234, 18, 219, 11);
    bezierVertex(256, 33, 261, 42, 266, 50);
    vertex(264, 90);
    vertex(242, 90);
    bezierVertex(220, 39, 228, 44, 235, 50);
    bezierVertex(188, 12, 192, 31);
    endShape()
}

// functions of dots
    /* if texture() can be used
    // function of textures
    function sectionDots(){
        noStroke();
        fill(0);
        for (let h = 0; h < height; h++) {
            for (let w = 0; w < width; w++) {
                pg1.ellipse(w * 15, h * 15, 14, 14);
            }
        }
        return(pg1);
    }
    function stemDots(){
        noStroke();
        fill(239, 193, 6);
        for (let h = 0; h < height; h++) {
            for (let w = 0; w < width; w++) {
                pg2.ellipse(w * 8, h * 8, 7, 7);
            }
        }
    }
    */

/*
function sectionDots() {
    noStroke ();
    fill(0);
    for (let h = 0; h < height; h++) {
    }
}
*/

// animation of shattering