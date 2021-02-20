var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(81,588,160,20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(250,588,160,20);
    surface2.shapeColor = "orange";

    surface3 = createSprite(420,588,160,20);
    surface3.shapeColor = "magenta";

    surface4 = createSprite(590,588,160,20);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.shapeColor = "white";
    box.velocityY = 4;
    box.scale = 0.4;

}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprites


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = "blue";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = "orange";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = "magenta";
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor = "green";
    }

    //add condition to stop the box
    if(surface2.isTouching(box)){
    box.shapeColor = "orange";
    box.velocityX = 0;

    }
    

    drawSprites();
}
