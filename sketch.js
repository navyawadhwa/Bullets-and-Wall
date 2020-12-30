const { Font } = require("./p5");

var bullet1, bullet2, bullet3, wall,thickness;
var speed, weight;
var line1, line2, line3;
var play, stop,  state;
var damage;

function setup() {
  createCanvas(1000,500);

  //bullets
  bullet1=createSprite(50,45,50,10);
  bullet1.shapeColor=("black");

  bullet2=createSprite(50,215,50,10);
  bullet2.shapeColor=("black");

  bullet3=createSprite(50,385,50,10);
  bullet3.shapeColor=("black");

  thickness=random(22,83);

   //lines to divide various cars
  line1=createSprite(470,115,1200,6);
  line1.shapeColor=("black");

  line2=createSprite(470,305,1200,6);
  line2.shapeColor=("black");

  line3=createSprite(470,475,1200,6);
  line3.shapeColor=("black");


  //wall
  wall=createSprite(990,250,thickness,500);
  //speed and weight
  speed=random(223,321);
  weight=random(30,52);

  damage=0.5*weight*speed*speed/thickness*thickness*thickness;

  state=stop;
}

function draw() {
  background("white"); 

  if(state===stop){
    fill("black");
    textSize(24);
    text("PRESS SPACE TO BEGIN",380,230);

    if(keyDown("space")){
      state=play;
    }
  }

  else if(state===play){

    bullet1.velocityX=speed;
    bullet2.velocityX=speed;
    bullet3.velocityX=speed;

    if(bullet1.isTouching(wall)){
      bullet1.collide(wall);
    }

    if(bullet2.isTouching(wall)){
      bullet2.collide(wall);
    }

    if(bullet3.isTouching(wall)){
      bullet3.collide(wall);
    }
    
    console.log(bullet1.x);
    
    if(damage>10){
     wall.shapeColor=("red");
     fill("black");
     textSize(24);
     text("Damage:"+damage, 80,230);
      } 

    if(damage<10){
      wall.shapeColor=("green");
      fill("black");
      textSize(24);
      text("Damage:"+damage, 80,230);
      } 
   
}

  drawSprites();
}