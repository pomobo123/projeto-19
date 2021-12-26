var papaiNoel;

var presente,presente2,presente3,presente4;

var tempo,estado;

var pontuacao;

function preload(){

    
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  presente = createSprite(100,200,windowWidth-1340,windowHeight-680);
  presente2 = createSprite(500,600,windowWidth-1340,windowHeight-680);
  presente3 = createSprite(900,340,windowWidth-1340,windowHeight-680);
  presente4 = createSprite(660,560,windowWidth-1340,windowHeight-680);

  tempo = createSprite(10,10,windowWidth-1340,windowHeight-680);
  tempo.visible = false;
  estado = "jogo";
  pontuacao = 0;

  papaiNoel = createSprite(700,600,windowWidth-1300,windowHeight-720);
  papaiNoel.setCollider("rectangle",0,0,40,papaiNoel.height);
  papaiNoel.debug = false;
}

function draw() {
  background("white")

  if(estado === "jogo"){
    jogo()
  }
  if(estado === "vitoria"){
    vitoria()
  }
  drawSprites()
}

function jogo(){
  background(200);
  papaiNoel.visible = true;
  papaiNoel.y = mouseY;

  textSize(30);
  text("pontuacao = " + pontuacao,50,50);

  if(keyDown("LEFT_ARROW") || keyDown("a")){
    papaiNoel.velocityX =- 5;
  }

  if(keyDown("RIGHT_ARROW") || keyDown("d")){
    papaiNoel.velocityX = 5;
  }

  if(papaiNoel.x < 30){
    papaiNoel.velocityX =- 0;
    papaiNoel.velocityX = 5;
  }

  if(papaiNoel.isTouching(presente) && presente.visible === true){
    presente.visible = false;
    pontuacao = pontuacao + 1;
  }

  if(papaiNoel.isTouching(presente2) && presente2.visible === true){
    presente2.visible = false;
    pontuacao = pontuacao + 1;
  }

  if(papaiNoel.isTouching(presente3) && presente3.visible === true){
    presente3.visible = false;
    pontuacao = pontuacao + 1;
  }

  if(papaiNoel.isTouching(presente4) && presente4.visible === true){
    presente4.visible = false;
    pontuacao = pontuacao + 1;
  }

  if(papaiNoel.x > 1335){
    papaiNoel.velocityX = 0;
    papaiNoel.velocityX =- 5;
  }
 
  if(pontuacao === 4){
    tempo.velocityX = 12;
  }
  
  if(tempo.x > 1000){
    estado = "vitoria";
  }
}

function vitoria(){
  background(230);
  papaiNoel.visible = false;
  textSize(40);
  text("parabens,voce ganhou",500 ,200 );
}