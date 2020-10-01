var wall,thickness
var speed,weight,damage
var bullet

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 50, 100 , 25,);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height);
  wall.shapeColor = "gray";
  

  thickness = random(22,83);
  speed = random(233,321);
  weight = random(30,52);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  bullet.velocityX = speed;
  collide(bullet,wall);
  damage = 0.5 * weight * speed * speed /(thickness * thickness * thickness);

  if(damage < 10){
    bullet.shapeColor = "green";
   
  }
  if(damage > 10  ){
    bullet.shapeColor = "red";
    
  }
}

function collide(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = 0;
    }
}