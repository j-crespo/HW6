var coswave = [];

function setup() {

  createCanvas(400, 400);
  for (var i = 0; i < width; i++) {
    var amount = map(i, 0, width, 0, PI);
    coswave[i] = abs(cos(amount));
  }
	colorMode(HSB);
  background(300,33,100);
  noLoop();
	
}

function draw() {
  var y1 = 0;
  var y2 = height/2;
	
  for (var i = 0; i < width; i+=10) {
    stroke(coswave[i]*255);
		strokeWeight(5);
    line(i+60, y1, i, y2);
  }


}
