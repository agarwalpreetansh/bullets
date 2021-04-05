
var bullet
var wall
var speed
var weight
var thickness





function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
 wall=createSprite(1200,200,thickness,height/2)
 speed=random(223,321)
 weight=(30,52)
bullet=createSprite(50,200,50,25)
 bullet.velocityX=speed
  }

function draw() {
  background("white");  
if(hasCollided(bullet,wall)){
  bullet.velocityX=0
  var damage=0.5*speed*weight*speed/(thickness*thickness*thickness)
  if(damage>10){
    wall.shapeColor="red"
  }
  {
    if(damage<10)
    wall.shapeColor="green"
}


}
 drawSprites();
}

function hasCollided(cbullet,cwall){
  bulletRightEdge=cbullet.x+cbullet.width;
  wallLeftEdge=cwall.x
if(bulletRightEdge>=wallLeftEdge){
  return true;

}
else{
  return false;
}
}



















































































































































