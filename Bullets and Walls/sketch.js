var wall, thickness;
var bullet,speed,weight


function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  wall = createSprite(1200,200, thickness, height/2);
  speed = random(223,321)
  weight = random(30,52)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
bullet.RightEdge = lbullet .x +lbullet.width
wallleftEdge = lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
   return true;
}
  return false;
}

if(hasCollided(bullet, wall))
{
   bullet.velocityX=0;
   var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

   if(damage) 
}