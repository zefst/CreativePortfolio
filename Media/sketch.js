let song;

function preload() { //preloading my media
  song = loadSound('CHIHIRO.mp3');
  img = loadImage('albumCover.png');
}

function setup() {
  createCanvas(710, 400);
  song.loop(); //loop the song infinitely
}


function draw() {
  background(0, 0, 0);

  //sound
  song.amp(5);

  let speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  song.rate(speed);

 //creating the slider
  stroke(0);
  fill(40, 82, 131);
  rect(85, mouseY, 48, 58);
  rect(100,0,15,500);

  //image
  image(img, 350, 70, 200, 200);

  //text
  textSize(10);
  text('use the slider to control speed', 400, 300, 100, 100);



}