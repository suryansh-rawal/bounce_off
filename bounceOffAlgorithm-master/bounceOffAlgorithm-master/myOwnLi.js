function bounceOff(object1,object2){
bulletRightEdge = object1.x+object1.width/2;
wallLeftEdge = object2.x-object2.width/2;
if(bulletRightEdge>=wallLeftEdge){
  object1.velocityX=0;
  
}

}