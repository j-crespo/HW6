function setup() { 
	createCanvas(400, 400);
	
	noStroke();
	colorMode(HSB);
	background(36,2,90);

} 

function draw() { 
	
		rectMode(CORNER);
		fill(36, 2, 11);
		rect(000, 300, width, height*1/4);
		fill(188, 90, 103);
		line(50, 200, width/3, height);
	
			rectMode(CORNER);
			fill(36, 2, 100);
			rect(150, 240, 10, 60);		
			rect(161, 180, 10, 120);
			rect(172, 90, 10, 180);
			rect(183, 60, 10, 240);
	
			rect(194, 60, 10, 240);
			rect(205, 90, 10, 180);
			rect(216, 180, 10, 120);
			rect(227, 240, 10, 60);	
}
