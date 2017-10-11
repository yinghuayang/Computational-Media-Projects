let triangles;

function preload() {
    data_coordLeft = loadJSON ("data.json");
}

function setup() {
    createCanvas(width_Canvas, 412);
    coord_Left = data_coordLeft.data;

    // draw background
    background(0);
    triangles = new Background_Triangle(24, 23, 5);
    triangles.draw_Triangles();

    // draw pumpkin
    pumpkin_Grid();
    draw_PumpSects();
    draw_Dots();
}
