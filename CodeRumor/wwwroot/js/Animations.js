
// console.log(browser.mouseX); working with console
var treeSketch = function (browser) {

    var tree = [];
    var count = 0;
    var leaves = [];
    var cnv;

    //create a setup to launch the canvas
    browser.setup = function () {

        var csWidth = document.getElementById("container").clientWidth - 50;
        var csHeight = document.getElementById("container").clientHeight;

        browser.createCanvas(csWidth, 300);

        var a = browser.createVector(browser.width / 2, browser.height); //draw vector at the bottom
        var b = browser.createVector(browser.width / 2, browser.height - (csWidth / 4)); //draw vector at height of csWidth / 4
        var root = new browser.Branch(a, b);

        tree[0] = root;
        browser.frameRate(20);

    };

    //create branches using a mouse event clicker.
    browser.runTree = function () {

        if (count <= 8) {
            for (var i = tree.length - 1; i >= 0; i--) {
                if (!tree[i].finished) {
                    tree.push(tree[i].branchA());
                    tree.push(tree[i].branchB());
                }
                tree[i].finished = true;
            }
        }
        count++;

        if (count === 8) {
            for (var i = 0; i < tree.length; i++) {
                if (!tree[i].finished) {
                    var leaf = tree[i].end.copy();
                    leaves.push(leaf);
                }
            }
        }
    };

    //create a draw function to draw values
    browser.draw = function () {
        browser.background(255);

        browser.runTree();

        for (var i = 0; i < tree.length; i++) {
            tree[i].show();
        }

        for (var i = 0; i < leaves.length; i++) {
            browser.fill(255, 0, 155, 100);
            browser.noStroke();
            browser.ellipse(leaves[i].x, leaves[i].y, 8, 8);
            leaves[i].y += browser.random(0, 2);
        }

    };

    //this code below here acts like a class constructor
    browser.Branch = function (begin, end) {
        this.begin = begin;
        this.end = end;
        this.finished = false;

        this.jitter = function () {
            this.end.x += browser.random(-1, 1);
            this.end.y += browser.random(-1, 1);
        };

        this.show = function () {
            browser.stroke(0);
            browser.strokeWeight(5);
            browser.line(this.begin.x, this.begin.y, this.end.x, this.end.y);
        };

        this.branchA = function () {

            var dir = p5.Vector.sub(this.end, this.begin);
            dir.rotate(browser.PI / 4);

            dir.mult(0.67);
            var newEnd = p5.Vector.add(this.end, dir);

            var right = new browser.Branch(this.end, newEnd);

            return right;
        };

        this.branchB = function () {
            var dir = p5.Vector.sub(this.end, this.begin);
            dir.rotate(-browser.PI / 4);

            dir.mult(0.67);
            var newEnd = p5.Vector.add(this.end, dir);

            var right = new browser.Branch(this.end, newEnd);

            return right;
        };
    };

};

function treeClick() {
    //add the sketch funtion into the p5 object
    new p5(treeSketch, 'container');
}

//creating a sketch object to place into p5.js this accepts a variable browser
var ballSketch = function (browser) {

    var y = 50;
    var speed = 3
    let ball;

    var build = 0;

    //call a funtion preload to pre load content.
    browser.preload = function () {
        ball = browser.loadImage('../images/ball.png');
    }

    var csWidth;
    var csHeight;

    //creating the setup for the object
    browser.setup = function () {
        csWidth = document.getElementById("bounce").clientWidth -10;
        csHeight = document.getElementById("bounce").clientHeight;

        if (build == 0) {
            browser.createCanvas(csWidth, csHeight);
            build = 1;
        }
        
    }

    //creating the draw function to draw the content
    browser.draw = function () {
        browser.background(255); // white screen

        //draw a circle
        //browser.stroke(255);
        //browser.strokeWeight(4);
        //browser.noFill();
        //browser.ellipse(csWidth/2, y, 50, 50);
        browser.image(ball, csWidth / 4, y, 150,150);

        if (y > browser.height) {
            console.log("off the screen");
            speed = -3;
        }

        if (y < 0) {
            speed = +3;
        }

        y = y + speed;
    }
}

function ballClick() {
    new p5(ballSketch, 'bounce');
}
