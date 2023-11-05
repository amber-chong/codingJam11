//Global Variables
let GoldCoin1;                                                      //Images For Resource Bar
let GoldCoin2;                                                      //Images For Resource Bar
let GoldCoin3;                                                      //Images For Resource Bar
let GoldCoin4;                                                      //Images For Resource Bar
let GoldCoin5;                                                      //Images For Resource Bar
let GoldCoin6;                                                      //Images For Resource Bar
let GoldCoin7;                                                      //Images For Resource Bar
let GoldCoin8;                                                      //Images For Resource Bar
let GoldCoin9;                                                      //Images For Resource Bar
let GoldCoinIndex = 0;                                              //Iterate Through Array for animation
let timer = 15;                                                     //Timer To Stagger Animation
GoldCoinArray = new Array();                                        //Holds Gold Coin Images

let wormImg;
let goldOreImg;

goldOreArray = new Array();                                         //Holds sprites to check collisions
wormArray = new Array();                                            //Holds sprites to check collisions

let goldCount = 0;                                                  //Holds Resource Value and Displays text in status bar
let wormCount = 0;

let goldSpawnTimer = 1800;                                          //Used for Random Spawning of Resources
let goldSpawnTimerExec;                                             //Used for Random Spawning of Resources
let goldOre;

let buyStationOpen = false;                                         //Buy Station Open/Closed logic
let BSXImg;                                                         //image for closing buy station

let wormSpawnTimer = 600;                                           //Used for Random Spawning of Resources
let wormSpawnTimerExec;                                             //Used for Random Spawning of Resources
let worm;

let base;

//Minion 1                                                          
let lineX;                                                          //Used to create line from minions
let lineY;                                                          //Used to create line from minions
let minion1;                                                        //Used to create minion
let distance1;                                                      //Used to find distance inside minion
let radius = 30;                                                    //Used to create line from minions
let minion1Click = false;                                           //So minion can only move when selected
let moving1 = false;                                                //So minion can only move when selected

//Minion 2
let lineX2;                                                         //Used to create line from minions
let lineY2;                                                         //Used to create line from minions
let minion2;                                                        //Used to create minion
let distance2;                                                      //Used to find distance inside minion
let minion2Click = false;                                           //So minion can only move when selected
let moving2 = false;                                                //So minion can only move when selected

//Minion 3
let lineX3;                                                         //Used to create line from minions
let lineY3;                                                         //Used to create line from minions
let minion3;                                                        //Used to create minion
let distance3;                                                      //Used to find distance inside minion
let minion3Click = false;                                           //So minion can only move when selected
let moving3 = false;                                                //So minion can only move when selected

//screens
let LOADING = 0;
let MAIN_MENU = 1;
let GAME = 2;
let CREDITS = 5;

let currentScreen = LOADING;

function preload() {
  GoldCoin1 = loadImage('Assets/Images/GoldCoin/goldCoin1.png');    //Preloads Images 
  GoldCoin2 = loadImage('Assets/Images/GoldCoin/goldCoin2.png');    //Preloads Images 
  GoldCoin3 = loadImage('Assets/Images/GoldCoin/goldCoin3.png');    //Preloads Images 
  GoldCoin4 = loadImage('Assets/Images/GoldCoin/goldCoin4.png');    //Preloads Images 
  GoldCoin5 = loadImage('Assets/Images/GoldCoin/goldCoin5.png');    //Preloads Images 
  GoldCoin6 = loadImage('Assets/Images/GoldCoin/goldCoin6.png');    //Preloads Images 
  GoldCoin7 = loadImage('Assets/Images/GoldCoin/goldCoin7.png');    //Preloads Images 
  GoldCoin8 = loadImage('Assets/Images/GoldCoin/goldCoin8.png');    //Preloads Images 
  GoldCoin9 = loadImage('Assets/Images/GoldCoin/goldCoin9.png');    //Preloads Images 
  wormImg = loadImage('Assets/Images/worm (2).png');                //Preloads Images 
  goldOreImg = loadImage('Assets/Images/gold_ore.png');             //Preloads Images
  BSXImg = loadImage('Assets/Images/Wii_Minus.png')
}

function setup() {
  createCanvas(1000, 600);
  goldSpawnTimerExec = floor(random(0, 900));             //Initialises First Rand Num For Resource Spawning -- Use of floor() to round to nearest whole int                      
  wormSpawnTimerExec = floor(random(0, 600));             //Initialises First Rand Num For Resource Spawning -- Use of floor() to round to nearest whole int                      


  GoldCoinArray.push(GoldCoin1,                           //Push Preloaded Images Into Array
    GoldCoin2,                                            //Push Preloaded Images Into Array
    GoldCoin3,                                            //Push Preloaded Images Into Array
    GoldCoin4,                                            //Push Preloaded Images Into Array
    GoldCoin5,                                            //Push Preloaded Images Into Array
    GoldCoin6,                                            //Push Preloaded Images Into Array
    GoldCoin7,                                            //Push Preloaded Images Into Array
    GoldCoin8,                                            //Push Preloaded Images Into Array
    GoldCoin9);                                           //Push Preloaded Images Into Array

  base = new Sprite(500, 550);                          //Correlates to First sprite and keyboard movement
  base.collider = 'kinematic'                           //Removes rotation of spite after collision

  minion1 = createSprite(440, 550, radius);             //Creates mionion
  minion1.collider = 'kinematic'
  minion2 = createSprite(560, 550, radius);             //Creates mionion
  minion2.collider = 'kinematic'
  minion3 = createSprite(500, 490, radius);             //Creates mionion
  minion3.collider = 'kinematic'

/*
  startButton = createButton('Start');
  startButton.position(350, 350)
  startButton.mouseClicked(drawGame);

  creditButton = createButton('Credits')
  creditButton.position(650, 350)
  creditButton.mouseClicked(drawCredits)

  backButton = createButton('Back')
  backButton.position(505, 450)
  backButton.mouseClicked(drawMenuScreen)
  */
}

function draw() {
  goldSpawnTimer--;                                       //Decrements Timer
  wormSpawnTimer--;                                       //Decrements Timer

//camera.x = base.x;
//camera.y = base.y;

/*
    switch (currentScreen) {
      case LOADING:
        drawLoadingScreen();
        break;
      case MAIN_MENU:
        drawMenuScreen();
        break;
      case GAME:
        drawGame();
        break;
      case CREDITS:
        drawCredits();
        break;
    }
    if (frameCount == 60){
      currentScreen = MAIN_MENU;
  }
  */


  background('black');
  resourceStatusBar();                                    //Runs Custom Function
  resourceCollectionMechanics();                          //Runs Custom Function
  p1Movement();                                           //Runs Custom Keyboard Movement Function
  buyUpgrades();                                          //Runs Custom Function
  buyStation();

  minionPress1();                                         //Runs Custom Function
  createLine1();                                          //Runs Custom Function
  minionMovement1();                                      //Runs Custom Function

  minionPress2();                                         //Runs Custom Function
  createLine2();                                          //Runs Custom Function
  minionMovement2();                                      //Runs Custom Function

  minionPress3();                                         //Runs Custom Function
  createLine3();                                          //Runs Custom Function
  minionMovement3();                                      //Runs Custom Function
}

function resourceStatusBar() {                          //Draws The Status Bar in the top left corner
  timer--;                                              //Used to animate coin

  stroke('white');                                       //Outline|Border of box
  noFill();                                              //Outline|Border of box
  rectMode(CORNER);
  rect(10, 10, 200, 40, 5);                             //Outline|Border of box

  if (timer == 0) {
    GoldCoinIndex++;                                    //Increments index
    if (GoldCoinIndex >= GoldCoinArray.length) {        //Resets Index allowing for animation
      GoldCoinIndex = 0;
    }
    timer = 15;                                         //Resets Timer Used to stagger coin animation
  }

  image(GoldCoinArray[GoldCoinIndex], 80, 15);          //Draws the coin stored at a specific index of the array
  image(wormImg, 15, 15);                               //Draws Worm in status bar

  textAlign(LEFT, CENTER);                              //Displays GoldCount Value in Status Bar
  textSize(18);                                         //Displays GoldCount Value in Status Bar 
  noStroke();                                           //Displays GoldCount Value in Status Bar
  fill('gold');                                         //Displays GoldCount Value in Status Bar
  text(goldCount, 110, 33);                             //Displays GoldCount Value in Status Bar
  fill('#d36d5d');                                       //Displays WormCount
  text(wormCount, 45, 33);                               //Displays WormCount
}

function resourceCollectionMechanics() {
  if (goldSpawnTimerExec == goldSpawnTimer) {           //Allows For random spawn time within 30 secconds
    goldOreArray.push(goldGeneration());                //Runs Custom Function and stores in array to check for collisions
    goldSpawnTimer = 1800;
    goldSpawnTimerExec = floor(random(0, 1800));        //Use of floor() to round to nearest whole int
  }
  if (wormSpawnTimerExec == wormSpawnTimer) {           //Allows For random spawn time within 10 secconds
    wormArray.push(wormGeneration());                   //Runs Custom Function and stores in array to check for collisions
    wormSpawnTimer = 600;
    wormSpawnTimerExec = floor(random(0, 600));         //Use of floor() to round to nearest whole int
  }

  for (let i = 0; i < goldOreArray.length; i++) {                                                                                    //Loops through GoldOreArray
    if (goldOreArray[i].collides(minion1) || goldOreArray[i].collides(minion2) || goldOreArray[i].collides(minion3)) {               //Checks for collision between each instance of array and player
      goldOreArray[i].remove();                                                                                                      //Removes Sprite after collision
      goldCount++;
    }
  }

  for (let i = 0; i < wormArray.length; i++) {                                                                                       //Loops through WormArray
    if (wormArray[i].collides(minion1) || wormArray[i].collides(minion2) || wormArray[i].collides(minion3)) {                        //Checks for collision between each instance of array and player
      wormArray[i].remove();                                                                                                         //Removes Sprite after collision
      wormCount++;                                                                                                                   //Adds to the currency in top left
    }
  }
}


function goldGeneration() {
  let goldOre = new Sprite()                                      //Creates Gold Ore Sprite
  goldOre.img = goldOreImg
  goldOre.scale = 0.1
  goldOre.x = random(base.x-width/2, base.x+width/2)
  goldOre.y = random(base.y-height/2, base.y+height/2)
  goldOre.w = 40
  goldOre.h = 20
  return goldOre
}

function wormGeneration() {
  let worm = new Sprite()                                         //Creates Worm Sprite
  worm.img = wormImg
  worm.scale = 2
  worm.x = random(base.x-width/2, base.x+width/2)
  worm.y = random(base.y-height/2, base.y+height/2)
  worm.w = 45
  worm.h = 15
  return worm
}

function buyUpgrades() {
  if ((mouseX >= width - 15 && mouseX <= width && mouseY >= height / 2 - 40 && mouseY <= height / 2 + 40) && mouse.presses()) {    //Checks if Mouse is over buy station tab
    buyStationOpen = true;                                                                                                         // sets value to true
  }

  if (buyStationOpen == false) {                                                //Buy station is closed if value is false
    rectMode(CENTER);
    stroke('white');
    fill(211, 211, 211, 80);
    rect(width, height / 2, 30, 80, 5);
  } else {                                                                      // Buy station i sopen if value is true
    rectMode(CENTER);
    stroke('white');
    fill(211, 211, 211, 80)
    rect(width, height / 2, 300, 450, 5); 
    image(BSXImg, width - 150, height / 2 - 220, 30, 30)                        //Close BuyStation Image
    
    //WRITE CODE FOR PURCHASES AND UPGRADES HERE 
    //WRITE CODE FOR PURCHASES AND UPGRADES HERE
    //WRITE CODE FOR PURCHASES AND UPGRADES HERE
    //WRITE CODE FOR PURCHASES AND UPGRADES HERE
    //WRITE CODE FOR PURCHASES AND UPGRADES HERE
    //WRITE CODE FOR PURCHASES AND UPGRADES HERE
    //WRITE CODE FOR PURCHASES AND UPGRADES HERE

  }
}

function buyStation() {
  if ((mouseX >= 854 && mouseX <= 869 && mouseY >= 84 && mouseY <= 100) && mouse.presses()) {                   //Closes Buy Station
    buyStationOpen = false;
  }
}

function p1Movement() {
  if (kb.pressing('arrowUp')) {                           //Vertical Movement
    base.vel.y = -10;
  } else if (kb.pressing('arrowDown')) {
    base.vel.y = +10
  } else base.vel.y = 0

  if (kb.pressing('arrowRight')) {                //Horizontal Movement
    base.vel.x = +10;
  } else if (kb.pressing('arrowLeft')) {
    base.vel.x = -10
  } else base.vel.x = 0
}

function minionMovement1() {                                                    //Moves minion to where the mouse is pressed
  if (mouse.presses() && moving1 == true) {
    minion1.moveTo(mouseX, mouseY);
    minion1Click = false;
    moving1 = false;
  }
}

function minionPress1() {                                                      //Only allows minion to move when selected
  distance1 = dist(mouseX, mouseY, minion1.x, minion1.y);
  if (distance1 < radius && mouse.presses()) {
    minion1Click = true;
    moving1 = false;
  }
}

function createLine1() {                                                      //creates a line to show where minion will move to
  if (minion1Click == true && moving1 == false) {
    lineX = mouseX;
    lineY = mouseY;
    line(minion1.x, minion1.y, lineX, lineY);
    if (distance1 > radius && mouse.presses()) {
      moving1 = true;
    }
  }
}

function minionMovement2() {                                                 //Moves minion to where the mouse is pressed
  if (mouse.presses() && moving2 == true) {
    minion2.moveTo(mouseX, mouseY);
    minion2Click = false;
    moving2 = false;
  }
}

function minionPress2() {                                                  //Only allows minion to move when selected
  distance2 = dist(mouseX, mouseY, minion2.x, minion2.y);
  if (distance2 < radius && mouse.presses()) {
    minion2Click = true;
    moving2 = false;
  }
}

function createLine2() {                                                 //creates a line to show where minion will move to
  if (minion2Click == true && moving2 == false) {
    lineX2 = mouseX;
    lineY2 = mouseY;
    line(minion2.x, minion2.y, lineX2, lineY2);
    if (distance2 > radius && mouse.presses()) {
      moving2 = true;
    }
  }
}

function minionMovement3() {                                             //Moves minion to where the mouse is pressed
  if (mouse.presses() && moving3 == true) {
    minion3.moveTo(mouseX, mouseY);
    minion3Click = false;
    moving3 = false;
  }
}

function minionPress3() {                                                //Only allows minion to move when selected
  distance3 = dist(mouseX, mouseY, minion3.x, minion3.y);
  if (distance3 < radius && mouse.presses()) {
    minion3Click = true;
    moving3 = false;
  }
}

function createLine3() {                                                 //creates a line to show where minion will move to
  if (minion3Click == true && moving3 == false) {
    lineX3 = mouseX;
    lineY3 = mouseY;
    line(minion3.x, minion3.y, lineX3, lineY3);
    if (distance3 > radius && mouse.presses()) {
      moving3 = true;
    }
  }
}

//===SCREEN CODE===
/*
function drawMenuScreen() {
  print('whoa main menu')
  currentScreen = MAIN_MENU

  startButton.show();
  creditButton.show();
  backButton.hide();
}

function drawLoadingScreen() {
  print('loading')
  startButton.hide();
  creditButton.hide();
  backButton.hide();
}

function drawGame() {
  print('GAME')
  currentScreen = GAME;
  startButton.hide();
  creditButton.hide();
  backButton.show();
}

function drawCredits() {
  print('credits')
  currentScreen = CREDITS;
  startButton.hide();
  creditButton.hide();
  backButton.show();
}
*/
//Credit
//Art Sourced From OpenGameArt.Org
//GoldCoin - morgan3d
//Worm - Russpuppy