let width_Canvas = 510;
let pump_Height = 315;
let coord;
let coord_Right = [];
let coord_LeftReverse;
let coord_Left = [
    [
        [226, 125], [215, 141], [207, 165], [204, 185],
        [203, 209], [200, 233], [196, 260], [189, 279], [182, 305],
        [182, 322], [188, 343], [196, 359], [226, 375]
    ],
    [
        [193, 112], [178, 128], [165, 152], [156, 172],
        [145, 196], [134, 220], [122, 247], [116, 266], [116, 291],
        [120, 308], [132, 330], [147, 346], [194, 362]
    ],
    [
        [153, 107], [123, 124], [104, 147], [96, 167],
        [87, 191], [78, 215], [68, 242], [59, 261], [57, 286],
        [62, 303], [77, 325], [94, 343], [139, 360]
    ],
    [
        [158, 68], [119, 83], [87, 108], [70, 134],
        [52, 167], [42, 192], [34, 220], [35, 244], [40, 269],
        [45, 286], [60, 308], [77, 326], [158, 340]
    ]
];

function pumpkin_Grid() {
    for(let i = 0; i < coord_Left.length; i++) {
        coord_Right[i] = [];
        for(let j = 0; j < coord_Left[i].length; j++) {
            let x_Left = coord_Left[i][j][0];
            let y_Any = coord_Left[i][j][1];
            let x_Right = width_Canvas - x_Left;
            // create items into the empty array coord_Right
            coord_Right[i][j] = [x_Right, y_Any];
        }
    }
    coord_LeftReverse = coord_Left.slice().reverse();
    coord = coord_LeftReverse.concat(coord_Right);
}

function draw_PumpSects() {
    // go through each of the four sections
    for(let i = coord_Left.length - 1; i >= 0; i--) {
        // define each sections' color and stroke
        stroke(0);
        fill(210, 160, 6);

        // draw each section by connecting each vertices
        beginShape();
        // control the curve using the right control point, which is not rendered
        let x_RightControl = coord_Right[0][0][0];
        let y_RightControl = coord_Right[0][0][1];
        curveVertex(x_RightControl, y_RightControl);
        // choose the right firth point for the current section
        let x_Center = width_Canvas / 2;
        let y_Rear = 61;
        let y_Now;
        if(i == coord_Left.length - 1) {
            y_Now = y_Rear;
        } else {
            y_Now = y_Rear + 66 - 17 * i;
        }
        // draw the first point of the curve - the top point
        curveVertex(x_Center, y_Now);
        // draw the points on the left side
        for(let j = 0; j < coord_Left[i].length; j++) {
            let x_Left = coord_Left[i][j][0];
            let y_Left = coord_Left[i][j][1];
            curveVertex(x_Left, y_Left);
        }
        // draw the bottom point
        curveVertex(x_Center, pump_Height + y_Rear);
        // draw the points on the right side
        for(let k = 0; k < coord_Right[i].length; k++) {
            let last = coord_Right[i].length - 1 - k;
            let x_Right = coord_Right[i][last][0];
            let y_Right = coord_Right[i][last][1];
            curveVertex(x_Right, y_Right);
        }
        // close the curve at the last point of the curve, which is the top point
        curveVertex(x_Center, y_Now);
        // control the curve using the left control point, which is not rendered
        let x_LeftControl = coord_Left[0][0][0];
        let y_LeftControl = coord_Left[0][0][1];
        curveVertex(x_LeftControl, y_LeftControl);
        endShape();
    }
}

function draw_Dots() {
    for(let i = 0; i < coord.length - 1; i++) {
        for(let j = 1; j < coord[i].length - 1; j++) {
            let x_Left = coord[i][j][0], y_Left = coord[i][j][1];
            let x_Right = coord[i+1][j][0], y_Right = coord[i+1][j][1];
            let ratio1 = 0.05;
            let x_Quarter = (3 * x_Left + x_Right) / 4;
            let y_Quarter = (3 * y_Left + y_Right) / 4;
            let distance_LeftRight = dist(x_Left, y_Left, x_Right, y_Right);
            let radius_Max = 25;
            let radius_Min = 1;
            let shift_Max = 1.5;
            let shift_Min = 0.01;
            if (x_Left < x_Right) {
                while(ratio1 < 1) {
                    let ratio2 = 1 - ratio1;
                    let x_Any = ratio1 * x_Left + ratio2 * x_Right;
                    let y_Any = ratio1 * y_Left + ratio2 * y_Right;
                    let distance_ToQuarter = dist(x_Any, y_Any, x_Quarter, y_Quarter);
                    let radius = map(distance_ToQuarter, 0, 3/4 * distance_LeftRight, radius_Max, radius_Min);
                    let shift = map(radius, radius_Max, radius_Min, shift_Max, shift_Min);
                    //draw dots
                    stroke(0);
                    fill(0);
                    ellipse(x_Any, y_Any, radius, radius + 2);
                    ratio1 += shift;
                }
            }
        }
    }
}
