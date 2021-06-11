var starImg,bgImg;
var star, starBody;
var fairy,fairyImg
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png" );
	//starImg = loadImage("starImage.png" );
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
    fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png")
    Sound=loadSound("JoyMusic.mp3")
  //  starry = loadImage("star.png");
}

function setup() {
	createCanvas(780, 650);

	//write code to play fairyVoice sound
    Sound.play()
	//create fairy sprite and add animation for fairy
    fairy=createSprite(70,440,20,20)
	fairy.addAnimation("happy",fairyImg)
    fairy.scale=0.2
	star = createSprite(600,30);
	star.addImage(starImg);
	//star.addImage(starImg);
	star.scale = 0.2;

    //var star_options={
	//	isStatic:true
	//}
// {restitution:0.5, isStatic:true}
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 ,{restitution:0.5, isStatic:true} );
	World.add(world, starBody);
	Engine.run(engine);
//	if (keyDown("space")) {
		//	star.velocityY=-3
	//		Matter.Body.setStatic(starBody,false)
	//	}

}


function draw() {
  background(bgImg);
 //if(keyCode===UP_ARROW){
	// star.velocityY=-3
 //}
 // Sound.loop()
  star.x= starBody.position.x 
  star.y= starBody.position.y 

 console.log(star.y);

  //write code to stop star in the hand of fairy



 
  if(star.y > 410 && starBody.position.y > 410 ){
	Matter.Body.setStatic(starBody,true);
}

 
  drawSprites();

}

function keyPressed() {

	

	//writw code to move fairy left and right
	if(keyCode===RIGHT_ARROW){
        fairy.x=fairy.x+20}
	if(keyCode===LEFT_ARROW){
        fairy.x=fairy.x-20
	}

	

		
	if (keyCode === DOWN_ARROW) {
	
			Matter.Body.setStatic(starBody,false)
		}
	
}
