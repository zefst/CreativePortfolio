//setting my variables
let i = 0;
let speed = 1;


// text that will show on screen
const panicText = "work task must go fix work tired worried home assignment fail must fix behind late tired worried go work work forget work worry worry problem worry tired worry fail panic panic panic panic panic panic panic panic panic panic panic panic panic panic error error error error error error error error error error ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERRROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR"
const textArray = panicText.split(" "); // converting my text into an array


function setup(){
	createCanvas(500, 500); 
  frameRate(speed); // speed of the sketch 

}




function draw(){
  let x = random(width)
  let y = random(height);

    if (i < textArray.length) { // if i less-than the number of words in the text
      fill(0);
      stroke(100);
      console.log(i);
      textSize(20);
      textAlign(CENTER, CENTER);
      text(textArray[i], x, y); 
      i++;
      frameRate(speed);
      speed = speed + 0.2;
    }else{
      i=0; // reset the counter 
      speed = 1; // reset the speed
      background(225); // clear the background 
      frameRate(speed); 
    }
  

}
