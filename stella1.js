
function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	stroke(213, 45, 67);
}

function draw() {
	background(10, 10, 81);
	strokeWeight(1);
	noFill();

	rectMode(CENTER);


	for (length = 10; length < width; length = length + 10) {
         rect(200, 200, length, length);
    }
		
}
