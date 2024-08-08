let xPos = 250;
let yPos = 25;
let r = (0,255)
let g = (0,255)
let b = (0,255)
function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  background(0,20);

  fill(0, 255, 0);
  ellipse(xPos, yPos, 50, 50);

  yPos += 3;

	
	
  if (xPos > 525) {
    xPos = -25;
  }
  if(yPos > 499) {
		yPos = 25;
	}
}
//I got lost on the color change part 
function mousePressed() {
	fill(r,g,b)
	ellipse(xPos, yPos, 50, 50);
	
	
}



	

	

