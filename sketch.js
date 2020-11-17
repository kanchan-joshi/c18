var a,b;
function setup()
{
  a=createSprite(50,50,30,30);
  b=createSprite(100,100,50,50);
  a.shapeColor="green";
  b.shapeColor="green";
 
}
function draw()
{
  background("grey");
    a.x=World.mouseX;
  a.y=World.mouseY;
  drawSprites();
}