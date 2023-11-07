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
let speedCost = 1;

let wormSpawnTimer = 600;                                           //Used for Random Spawning of Resources
let wormSpawnTimerExec;                                             //Used for Random Spawning of Resources
let worm;

//base      
let base;                                                           //base values
let baseX = 500;
let baseY = 550;

//Minion 1                                                          
let lineX;                                                          //Used to create line from minions
let lineY;                                                          //Used to create line from minions
let minion1;                                                        //Used to create minion
let distance1;                                                      //Used to find distance inside minion
let radius = 30;                                                    //Used to create line from minions
let minionSpeed = 1;                                                //Used in purchasing upgrades
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

//capacity and storage      
let carryNumber1 = 0;                                               //the number the minions are carrying
let carryNumber2 = 0;
let carryNumber3 = 0;
let capacity = 30;                                                  //the max number the minions can carry
let storage = 0;                                                    //the base storage

//resource 1
let resource1;                                
let rx1 = 400;                                                      //resource1's values
let ry1 = 300;
let rr1 = 20;
let totalResource1 = 100;                                           //resource1's total resource
let extraResource1 = 100;                                           //if the remaining resource is not = to capacity

//screens
let LOADING = 0;
let MAIN_MENU = 1;
let GAME = 2;
let CREDITS = 3;

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

  //base  
  base = new Sprite(baseX, baseY);                          
  base.collider = 'kinematic'                           

  //minions
  minion1 = createSprite(baseX + 100, 550, radius);             //Creates minion
  minion1.collider = 'kinematic'
  minion2 = createSprite(baseX - 100, 550, radius);             //Creates minion
  minion2.collider = 'kinematic'
  minion3 = createSprite(500, baseY - 100, radius);             //Creates minion
  minion3.collider = 'kinematic'

  //resources
  resource1 = createSprite(rx1, ry1, rr1);
  resource1.collider = 'dynamic'

  //visibility
  base.visible = false;
  minion1.visible = false;
  minion2.visible = false;
  minion3.visible = false;
  resource1.visible = false;

  //buttons
  startButton = createButton('Start');
  startButton.position(350, 350)
  startButton.mouseClicked(drawGame);

  creditButton = createButton('Credits')
  creditButton.position(650, 350)
  creditButton.mouseClicked(drawCredits)

  backButton = createButton('Back')
  backButton.position(900, 450)
  backButton.mouseClicked(drawMenuScreen)
}

function draw() {
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
    }*/

    if (currentScreen == LOADING) {
      drawLoadingScreen();
    }
    else if (currentScreen == MAIN_MENU) {
      drawMenuScreen();
    }
    else if (currentScreen == GAME) {
      drawGame();
    }
    else if (currentScreen == CREDITS) {
      drawCredits();
    }
    if (frameCount == 60){
      currentScreen = MAIN_MENU;
    }

  background('black');
  resourceStatusBar();                                    //Runs Custom Function
  resourceCollectionMechanics();                          //Runs Custom Function
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

  collect();                                              //collects resources
  dropoff();                                              //adds to storage
  reduce();                                               //reduce total resource avaliablie

  //write();      //shows stats for storage, carried and resource no.
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
  goldOre.x = random(base.x - width / 2, base.x + width / 2)
  goldOre.y = random(base.y - height / 2, base.y + height / 2)
  goldOre.w = 40
  goldOre.h = 20
  return goldOre
}

function wormGeneration() {
  let worm = new Sprite()                                         //Creates Worm Sprite
  worm.img = wormImg
  worm.scale = 2
  worm.x = random(base.x - width / 2, base.x + width / 2)
  worm.y = random(base.y - height / 2, base.y + height / 2)
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
    textAlign(CENTER, CENTER);
    stroke('white');
    fill(211, 211, 211, 80)
    rect(width, height / 2, 300, 450, 5);

    line(width - 75, 125, width - 75, height - 75);                                   //Creates vert line within buystation
    for (let i = 125; i < 525; i += 80) {                                             //Loops to create horiz lines in buystation
      line(width - 150, i, width, i);
    }

    image(BSXImg, width - 150, height / 2 - 220, 30, 30);                             //Close BuyStation Image
    text('UPGRADES', width - 65, height / 2 - 202);

    //BuyStation Box 1
    for(let i=0; i<45; i+=15){                                                        //Loops and draws >>> for speed
      triangle(width-135+i, 135, width-135+i, 165, width-115+i, 150)                    //Triangle
      }
      textSize(9);                                                                      //specs
      noStroke();                                                                       //specs
      fill('white')                                                                     //specs 
      text('WORM SPEED', width-75-(75/2), 175);                                         //Text
  
      if(wormCount >= speedCost){                                                       //Checks saved currency/resource against cost
        textSize(13);
          text(speedCost + ' Worms', width-75-(75/2), 190);
      } else {
        textSize(13)
        fill('red')
        text(speedCost + ' Worms', width-75-(75/2), 190);
      }
  
      if(mouseX > width-150 && mouseX < width-75 && mouseY > 125 && mouseY < 205 && mouse.presses() && wormCount >= speedCost){   //Checks all conditions for purchase
        minionSpeed = minionSpeed + 1;
        speedCost = speedCost + 10;                       //Increments cost after pruchase
        wormCount = wormCount - speedCost;                //Decrements resource savings after purchase
      }
      

    //WRITE CODE FOR PURCHASES AND UPGRADES HERE
    //WRITE CODE FOR PURCHASES AND UPGRADES HERE
    //WRITE CODE FOR PURCHASES AND UPGRADES HERE
    //WRITE CODE FOR PURCHASES AND UPGRADES HERE
    //WRITE CODE FOR PURCHASES AND UPGRADES HERE

    //WRITE if STATEMENTS HERE TO EXECUTE PURCHASES
    //WRITE if STATEMENTS HERE TO EXECUTE PURCHASES
    //WRITE if STATEMENTS HERE TO EXECUTE PURCHASES
    //WRITE if STATEMENTS HERE TO EXECUTE PURCHASES
    //WRITE if STATEMENTS HERE TO EXECUTE PURCHASES
    //WRITE if STATEMENTS HERE TO EXECUTE PURCHASES


  }
}

function buyStation() {
  if ((mouseX >= 854 && mouseX <= 869 && mouseY >= 84 && mouseY <= 100) && mouse.presses()) {                   //Closes Buy Station
    buyStationOpen = false;
  }
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

function collect(){
  //minion1
  if(minion1.overlapping(resource1)){                                 //checks if minions is at resource
    carryNumber1 +=1;

      if(carryNumber1 >= capacity){                                   //checks that carrynumber is less than capacity
        carryNumber1 = capacity;
      }

      if(totalResource1 <= 0){                                      //checks there is resource available
        carryNumber1 = extraResource1;
      }
  }

  //minion2
  if(minion2.overlapping(resource1)){                               //checks if minions is at resource
    carryNumber2 +=1;

      if(carryNumber2 >= capacity){                                 //checks that carrynumber is less than capacity
        carryNumber2 = capacity;
      }

      if(totalResource1 <= 0){                                      //checks there is resource available
        carryNumber2 = extraResource1;
      }
  }

  //minion3
  if(minion3.overlapping(resource1)){                               //checks if minions is at resource
    carryNumber3 +=1;

      if(carryNumber3 >= capacity){                                 //checks that carrynumber is less than capacity
        carryNumber3 = capacity;
      }

      if(totalResource1 <= 0){                                      //checks there is resource available
        carryNumber3 = extraResource1;
      }
  }
}

function reduce(){
  //minion1
  if(minion1.overlapping(resource1) && carryNumber1 < capacity){ //if minion1 is overlapping resource
          totalResource1 -=1; //reduce the resource amount
          extraResource1 -=1;
  
          if(totalResource1 <= 0){ //if resource amount is 0
              totalResource1 = 0;
              extraResource1 = carryNumber1;
          }
  }

  //minion2
  if(minion2.overlapping(resource1) && carryNumber2 < capacity){ //if minion2 is overlapping resource
    totalResource1 -=1; //reduce the resource amount
    extraResource1 -=1;

    if(totalResource1 <= 0){ //if resource amount is 0
        totalResource1 = 0;
        extraResource1 = carryNumber2;
    }
  }

  //minion3
  if(minion3.overlapping(resource1) && carryNumber3 < capacity){ //if minion3 is overlapping resource
    totalResource1 -=1; //reduce the resource amount
    extraResource1 -=1;

    if(totalResource1 <= 0){ //if resource amount is 0
        totalResource1 = 0;
        extraResource1 = carryNumber3;
    }
  }
}

function dropoff(){
  //minion1
  if(minion1.overlapping(base)){                                        //checks minion is at base
    if(carryNumber1 >= 1){
        storage += 1;                                                   //adds to storage
        carryNumber1 -=1                                                //removes from carry
    }
  }

  //minion2
  if(minion2.overlapping(base)){                                        //checks minion is at base
    if(carryNumber2 >= 1){
        storage += 1;                                                   //adds to storage
        carryNumber2 -=1                                                //removes from carry
    }
  }

  //minion3
  if(minion3.overlapping(base)){                                        //checks minion is at base
    if(carryNumber3 >= 1){
        storage += 1;                                                   //adds to storage
        carryNumber3 -=1                                                //removes from carry
    }
  }
}

function write(){
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  text("STORAGE", 100, 480);
  text(""+storage, 100, 500);

  text("CARRY", 200, 480);
  text(""+(carryNumber1 + carryNumber2 + carryNumber3), 200, 500);

  text("RESOURCE", 300, 480);
  text(""+totalResource1, 300, 500);
}

//===SCREEN CODE===
function drawMenuScreen() {
  print('whoa main menu')
  currentScreen = MAIN_MENU

  startButton.show();
  creditButton.show();
  backButton.hide();

  base.visible = false;
  minion1.visible = false;
  minion2.visible = false;
  minion3.visible = false;
  resource1.visible = false;
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

  base.visible = true;
  minion1.visible = true;
  minion2.visible = true;
  minion3.visible = true;
  resource1.visible = true;

  goldSpawnTimer--;                                       //Decrements Timer
  wormSpawnTimer--;                                       //Decrements Timer
  
}

function drawCredits() {
  print('credits')
  currentScreen = CREDITS;
  startButton.hide();
  creditButton.hide();
  backButton.show();
  base.visible = false;
  minion1.visible = false;
  minion2.visible = false;
  minion3.visible = false;
  resource1.visible = false;
}
//Credit
//Art Sourced From OpenGameArt.Org
//GoldCoin - morgan3d
//Worm - Russpuppy