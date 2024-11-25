function setup() {
	createCanvas(500, 500); // setting the canvas width/height
	background(225, 225, 225); // making background white
  }


function draw(){ 
	stroke(248, 191, 233); // setting the outline colour
	// first circle
	fill(248, 191, 233);  // setting fill color
	ellipse(250, 250, 450, 450); // creating circle so that it is drawn exactly in the middle (250 by 250_)
	// second circle
	fill(239, 225, 236);  
	ellipse(250, 250, 350, 350); 
	// third circle
	fill(248, 191, 233);  
	ellipse(250, 250, 250, 250); 
	// fourth circle
	fill(239, 225, 236);  
	ellipse(250, 250, 150, 150); 
	// final circle
	fill(248, 191, 233);  
	ellipse(250, 250, 50, 50); 
  } 