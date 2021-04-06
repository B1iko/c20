//isTouching Algorithm
//distance between two objects becomes 0 when they touch 
//edge to edge 
var movingBox
var fixedBox

function setup() {
  createCanvas(800,400);


  fixedBox = createSprite(400, 200, 50, 50); 
  fixedBox.shapeColor = "blue"; 
  fixedBox.debug = true; 


  movingBox = createSprite(150,150,70,70)
  movingBox.shapeColor = "green"
  movingBox.debug = true;
}

function draw() {
  background("black"); 
  movingBox.y = mouseY
  movingBox.x = mouseX

  //distance between x positions of the objects = sum total of half their widths

  if (movingBox.x - fixedBox.x < fixedBox.width/2 + movingBox.width/2 &&
    fixedBox.x - movingBox.x < fixedBox.width/2 + movingBox.width/2 &&
    movingBox.y - fixedBox.y < fixedBox.height/2 + movingBox.height/2 &&
    fixedBox.y - movingBox.y < fixedBox.height/2 + movingBox.height/2){
    movingBox.shapeColor = "red"
    fixedBox.shapeColor = "red"
  }
  else { 
    movingBox.shapeColor = "green"
    fixedBox.shapeColor = "blue"
  }
  
  

  console.log(movingBox.x - fixedBox.x)
  

  drawSprites();
}
