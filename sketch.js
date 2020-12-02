var fixed,moving;
var gameObject1,gameObject2;
function setup() {
  createCanvas(800,400);
  fixed=createSprite(200, 200, 50, 50);
  fixed.shapeColor="green";
  fixed.debug=true;
  moving=createSprite(400,200,50,50);
  moving.shapeColor="green";
  moving.debug=true;
  gameObject1 =  createSprite(300,300,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(500,300,50,50);
  gameObject2.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  moving.x=mouseX;
  moving.y=mouseY; 

  if(isTouching(moving,gameObject2)){
    gameObject2.shapeColor="red";
     moving.shapeColor="red";
     
  }
  else{
    gameObject2.shapeColor="green";
     moving.shapeColor="green";
  }
  drawSprites();
}






