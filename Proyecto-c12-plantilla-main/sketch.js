var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "Jake5.png")
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200, 180, 400, 20);
path.addImage("path", pathImg);
path.velocityY = 2;
path.scale=1.2;

boy = createSprite(200, 190, 50, 50);
boy.addAnimation("running", boyImg);
boy.scale=1.1;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse

 boy.x=World.mouseX;

  
  edges= createEdgeSprites();
  boy.collide(edges);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
