let triangles;

function preload() {
    data_coordLeft = loadJSON ("data.json");
}

function setup() {
    createCanvas(width_Canvas, 412);

    // set up pumpkin
    coord_Left = data_coordLeft.data;
    pumpkin_Grid();

    // draw background
    background(0);
    triangles = new Background_Triangle(24, 23, 5);
    triangles.draw_Triangles();

    // draw pumpkin
    draw_PumpSects();
    draw_Dots();
}
