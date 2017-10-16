
function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	stroke(213, 45, 20);
}

function draw() {
	background(10, 10, 300);
	strokeWeight(10);
	noFill();

		var h1x = 0
		var h1y = 10
		var h2x = 0
		var h2y = 10

		while (h1y < 200) {
			line (h1x, h1y, h2x, h2y);
		 h1x = h1x - 10;
		 h1y = h1y + 20;
		 h2x = h2x + 20;
		 h2y = h2y + 20;
		}

		while (h1y < 400) {
			line (h1x, h1y, h2x, h2y);
		 h1x = h1x - 10;
		 h1y = h1y + 20;
		 h2x = h2x - 20;
		 h2y = h2y + 20;

		}
	
		var h3x = 200
		var h3y = 10
		var h4x = 200
		var h4y = 10

		while (h3y < 200) {
			line (h3x, h3y, h4x, h4y);
		 h3x = h3x - 10;
		 h3y = h3y + 20;
		 h4x = h4x + 20;
		 h4y = h4y + 20;
		}

		while (h3y < 400) {
			line (h3x, h3y, h4x, h4y);
		 h3x = h3x - 10;
		 h3y = h3y + 20;
		 h4x = h4x - 20;
		 h4y = h4y + 20;

		}
		
}
