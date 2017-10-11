class Background_Triangle {
    constructor(width_Triangle, height_Triangle, random_Triangle) {
        this.width = width_Triangle;
        this.height = height_Triangle;
        this.random = random_Triangle;
        this.grid = new Array(23);
    }

    draw_Triangles() {
        // create the background's 2D grid's second dimension
        for(let i = 0; i < this.grid.length; i++) {
            this.grid[i] = new Array(19);
            for(let j = 0; j < this.grid[i].length; j++) {
                this.grid[i][j] = createVector(i * this.width + random(-this.random, this.random), j * this.height + random(-this.random, this.random));
            }
        }
        // set up the background
        stroke(239, 193, 6);
        strokeWeight(1);
        noFill();
        // draw the background's pattern
        for(let i = 0; i < this.grid.length - 1; i ++){
            for(let j = 0; j < this.grid[i].length - 1; j++){
                beginShape();
                // define three vertices
                let pt1 = this.grid[i][j];
                vertex(pt1.x, pt1.y);
                let pt2 = this.grid[i][j + 1];
                vertex(pt2.x, pt2.y);
                let pt3 = this.grid[i + 1][j];
                vertex(pt3.x, pt3.y);
                endShape(CLOSE);
            }
        }
    }
}