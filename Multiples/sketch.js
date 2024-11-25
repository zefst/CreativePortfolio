let select = 0; // shape colour
let size = 30; // shape size
let myColours = ["#f8f8ce", "#f8cee6", "#cee6f8", "#edd2f9"]; // my chosen colours i want to randomly choose from
let randomColour;



function setup() {
  noStroke(); 
  createCanvas(800, 800);
}

function draw() {
  randomColour=random(myColours.length);
  randomColour=floor(randomColour); // floor rounds up or down to nearest number
  fill(myColours[randomColour]);
  ellipse(mouseX, mouseY, size, size);
  if(select!=2){
    size = random(10, 200); // randomise sizing
  }
}

function mouseClicked() {
  var random_index = Math.random() * (3-0) + 0; // choose a random colour from the four colour in the array
  random_index = Math.round(random_index);
  let fill_colour = myColours[random_index]; // let the fill colour be the random chosen colour
  fill(fill_color);
}
