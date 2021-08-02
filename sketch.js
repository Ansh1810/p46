var ground,  bg, player, playerImage, star, starImage;
var brick1, brick2,  brickImage, score = 0;


function preload(){
bg = loadImage("bgg.jpg")
playerImage = loadAnimation("run 1.png", "run 2.png", "run 3.png", "run 4.png")
starImage = loadImage("starr.png")
brickImage = loadImage("brick.jpg")
leftIdleImg = loadImage("left idle.png")
rightIdleImg = loadImage("right idle.png")
doorImage = loadImage("Door1.png")
}
function setup(){
createCanvas(displayWidth,displayHeight- 120 )

ground = createSprite(displayWidth/2, displayHeight/2+253, displayWidth, 20);

bg1 = createSprite (displayWidth/2, displayHeight-459);
bg1.addImage("bg0", bg)
bg1.scale = 2.3;
 

player = createSprite (displayWidth/4-210, displayHeight-217);
player.addImage("bg0", leftIdleImg )
player.scale = 4 ;

dooor = createSprite (displayWidth/4+969, displayHeight-268);
dooor.addImage("dooor", doorImage )
dooor.scale = 1.8 ;
 
 
star = createSprite (displayWidth/2, displayHeight-509);
star.addImage("star", starImage)
star.scale = 0.05;

brick1 = createSprite (displayWidth/2 - 128, displayHeight-300);
brick1.addImage("b", brickImage)
brick1.scale = 0.27;

brick2 = createSprite (displayWidth/1.7 +50, displayHeight-350);
brick2.addImage("b2", brickImage)
brick2.scale = 0.27;


}
function draw(){
background(0)
if(keyDown("space")){
player.y = player.y - 50;

}
player.velocityY = player.velocityY + 0.5

if(keyDown("LEFT_ARROW")){
player.x = player.x - 6
player.addAnimation("run", playerImage)
}
if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 6
    player.addAnimation("run", playerImage)
    }
player.collide(ground) 
player.collide(brick1) 
player.collide(brick2)
console.log(player.depth) 
console.log(dooor.depth)  
player.depth = dooor.depth+1;

if(player.isTouching(star)){
star.destroy();
score = score + 1;

}


if(player.isTouching(dooor)){
player.x = displayWidth/4-210;
brick1.destroy();
brick2.destroy();
star.destroy();
}
drawSprites();
textSize(24);
fill(255)
text("Stars collected "+score, displayWidth/4 + 824.6666666666666666666666666666666666666666666666666666, 100);
}