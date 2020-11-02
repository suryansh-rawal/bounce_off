var wall, bullet;
var wall2,bullet2;
var wall3,bullet3;
var shooter,shooter1;
var bulletImg; 
var b1speed,b1mass;
var b2speed,b2mass;
var b3speed,b3mass;
var backImg,back;

function preload(){
  shooter = loadImage("shooter.png");
  bulletImg = loadImage("bullet.png");
}
function setup() {

  createCanvas(1200,800);
  
  wall = createSprite(600, 100, 50, 80);
  wall.shapeColor = "green";
  wall.debug = true;

  bullet = createSprite(130, 80);
  bullet.shapeColor = "green";
  bullet.debug = true;
  bullet.addImage(bulletImg);
  bullet.scale=0.2;

  wall2 = createSprite(400, 600, 50, 80);
  wall2.shapeColor = "green";
  wall2.debug = true;

  bullet2 = createSprite(600, 400,80,30);
  bullet2.shapeColor = "green";
  bullet2.debug = true; 
 

b1speed=Math.round(random(10,20));
b1mass=Math.round(random(30,52));

b2speed=Math.round(random(10,20));
b2mass=Math.round(random(30,52));

b3speed=Math.round(random(10,20));
b3mass=Math.round(random(30,52));

  shooter1 = createSprite(55, 100,80,30);
  shooter1.shapeColor = "green";
  //shooter1.debug = true;
  shooter1.scale=0.3;
  shooter1.addImage(shooter);

bullet.velocityX=5;

 // bullet.velocityY = 0;
  //wall.velocityY = +5;
}
  
function draw() {
  background("black");  


  
  

   bounceOff(bullet,wall)
    
     
  drawSprites();
}
