let x = 0;
let y = 150;
let size = 70;
let size2 = 30;
let score = 0;
let speed = 1;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245, 222, 237);  


  stroke(248, 248, 206);
  fill(248, 248, 206);
  circle(x, y, size);
  x = x % width;
  x+=speed;

  textSize(20);
  text(score, 60, 30);
  text("level:", 10, 30);

  stroke(255, 255, 255);
  fill(255, 255, 255);
  square(mouseX, mouseY, size2);

  if (score>=5){
    speed = 0
    textSize(50);
    text("you win!", 100, 200);
  }
}

function mouseClicked(){
  let distance = dist(x, y, mouseX, mouseY);
   if (distance<=size/2){
    score++;
    speed++;
   }
}

