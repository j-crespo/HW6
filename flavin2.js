function setup() { 
	createCanvas(400, 400);

	noStroke();
	colorMode(HSB);
} 

function draw() { 
	
	rectMode(CENTER);
	fill(120, 81, 98);
	rect(200, 200, width, height);

	
	rectMode(CENTER);
	for (i = 0; i < 6; i ++) {
		
		fill(345, 58, 87);
		rect(width/7*(i+1), height/2, 20, height);	
		fill(345, 58, 300);
		rect(width/7*(i+1), height/2, 10, height);	
		
		if (i < 3) {
			
			fill(70, 75, 88);
			rect(width/2, width/7*(i+1), width, 20);
			fill(70, 75, 300);
			rect(width/2, width/7*(i+1), width, 10);
		}
		else {
			fill(345, 58, 87);
			rect(width/2, width/7*(i+1), width, 20);
			fill(345, 58, 300);
			rect(width/2, width/7*(i+1), width, 10);
		}
	}
	
}
