

var iss,spacecraft1
var bgimg,issimg,scimg1,scimg2,scimg3,scimag4

var hasDocked = false


function preload(){

bgimg=loadImage("spacebg.jpg")
issimg=loadImage("iss.png")
scimg1=loadImage("spacecraft1.png")
scimg2=loadImage("spacecraft2.png")
scimg3=loadImage("spacecraft3.png")
scimg4=loadImage("spacecraft4.png")

}


function setup() {
  createCanvas(800,400);

  spacecraft1=createSprite(285, 240, 50, 50);
  spacecraft1.addImage(scimg1)
  spacecraft1.scale = 0.15

  iss=createSprite(330,130,100,100)
  iss.addImage(issimg)
  iss.scale=0.5

}

function draw() {
  background(bgimg); 
  
  if(!hasDocked){

    spacecraft1.x=spacecraft1.x+random(-1,1)
  
  

  if(keyDown("DOWN_ARROW")){

    spacecraft1.addImage(scimg1)
  }

  if(keyDown("UP_ARROW")){

    spacecraft1.y = spacecraft1.y-2
    spacecraft1.addImage(scimg2)
  }

  if(keyDown("RIGHT_ARROW")){

    spacecraft1.addImage(scimg4)
    spacecraft1.x=spacecraft1.x+2
  }

  if(keyDown("LEFT_ARROW")){

    spacecraft1.addImage(scimg3)
    spacecraft1.x=spacecraft1.x-2

  }



  }

  if(spacecraft1.y<=(iss.y+70) && spacecraft1.x<=(iss.x-10)){

    hasDocked = true
    fill("WHITE")
    textSize(30)
    text("Docking Successful",200,300)

  }



  drawSprites();
}