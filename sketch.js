var ship , ship_running ;
var sea   ,fish, wave;
var sea;
function preload(){ 
  ship_running = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(600,200);


  // ceeate  a ship Sprite 
 ship = createSprite(50,160,20,50);
 ship.addAnimation("running",ship_running);
 edges  = createEdgeSprites();


 //adding scale and position to ship 
 ship.scale =  1;
 ship.x = 50; 

 //createsea 
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImage);
  sea . velocityX = -2;

}

function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the ship
  console.log(ship.y)
  
  //flow  when space key is pressed
  if(keyDown("space")){
    ship.velocityY = -10;
  }

  //code to reset the background 
  if (sea.x< 0){
    sea.x = sea.width/2;
}




  ship.velocityY = ship.velocityY + 0.5;
  
  //stop ship  from falling down
  ship.collide(sea);
  drawSprites();
}