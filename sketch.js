var thickness,Wall;

var bullet,speed,weight;


function setup() {
  createCanvas(1200,400);
  bullet = createSprite(50, 200, 70, 40);
  Wall = createSprite(1200,200,thickness,height/2)
  //Wall = createSprite(1200, 200 , thickness, height/2);
  speed = random(30,52);
  weight = random(223,321);
  thickness  = random(22,83);
  bullet.velocityX = (speed);
}

function draw() {
  background(255,255,255);  
  
  //Wall.shapeColor=color(80,80,80); 

 //wall.shapeColor=color(80,80,80); 
  //bullet.collide(wall);

 if(hasCollided(bullet,Wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10)
  {
  Wall.shapeColor = color(255,0,0)
  }

  if(damage<10)
  {
  Wall.shapeColor = color(0,255,0);
  }
}


 
  
  drawSprites();
}

function hasCollided (lbullet,lwall) 
{
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
    return true
    }
    return false

}