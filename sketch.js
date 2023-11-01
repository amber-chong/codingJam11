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

goldOreArray = new Array();
wormArray = new Array();

let goldCount = 0;                                                  //Holds Resource Value and Displays text in status bar
let wormCount = 0;

let goldSpawnTimer = 1800;                                          //Used for Random Spawning of Resources
let goldSpawnTimerExec;                                             //Used for Random Spawning of Resources
let goldOre;

let wormSpawnTimer = 600;                                           //Used for Random Spawning of Resources
let wormSpawnTimerExec;                                             //Used for Random Spawning of Resources
let worm;

let player;

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

  player = new Sprite(200, 200);                          //Correlates to First sprite and keyboard movement
  player.collider = 'kinematic'                           //Removes rotation of spite after collision

}

function draw() {
  goldSpawnTimer--;                                       //Decrements Timer
  wormSpawnTimer--;                                       //Decrements Timer

  background('black');
  resourceStatusBar();                                    //Runs Custom Function
  resourceCollectionMechanics();                          //Runs Custom Function
  p1Movement();                                           //Runs Custom Keyboard Movement Function



  function resourceStatusBar() {                          //Draws The Status Bar in the top left corner
    timer--;                                              //Used to animate coin

    stroke('white')                                       //Outline|Border of box
    noFill()                                              //Outline|Border of box
    rect(10, 10, 200, 40, 5);                             //Outline|Border of box

    if (timer == 0) {
      GoldCoinIndex++;                                    //Increments index
      if (GoldCoinIndex >= GoldCoinArray.length) {        //Resets Index allowing for animation
        GoldCoinIndex = 0;
      }
      timer = 15;                                         //Resets Timer Used to stagger coin animation
    }

    image(GoldCoinArray[GoldCoinIndex], 80, 15);          //Draws the coin stored at a specific index of the array
    image(wormImg, 15, 15)                                //Draws Worm in status bar

    textAlign(LEFT, CENTER);                              //Displays GoldCount Value in Status Bar
    textSize(18);                                         //Displays GoldCount Value in Status Bar 
    noStroke();                                           //Displays GoldCount Value in Status Bar
    fill('gold');                                         //Displays GoldCount Value in Status Bar
    text(goldCount, 110, 33);                             //Displays GoldCount Value in Status Bar
    fill('#d36d5d')                                       //Displays WormCount
    text(wormCount, 45, 33)                               //Displays WormCount
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

    for (let i = 0; i < goldOreArray.length; i++) {               //Loops through GoldOreArray
      if (goldOreArray[i].collides(player)) {                     //Checks for collision between each instance of array and play
        fill('green');
        rect(goldOreArray[i], goldOreArray[i] - 30, 40, 15);
        goldOreArray[i].remove();                                 //Removes Sprite after collision
        goldCount++;
      }
    }

    for (let i = 0; i < wormArray.length; i++) {                  //Loops through WormArray
      if (wormArray[i].collides(player)) {                        //Checks for collision between each instance of array and player
        fill('green');
        rect(wormArray[i], wormArray[i] - 30, 40, 15);
        wormArray[i].remove();                                    //Removes Sprite after collision
        wormCount++;                                              //Adds to the currency in top left
      }
    }
  }
}

function goldGeneration() {
  let goldOre = new Sprite()                                      //Creates Gold Ore Sprite
  goldOre.img = goldOreImg
  goldOre.scale = 0.1
  goldOre.x = random(60, width - 60)
  goldOre.y = random(60, height - 60)
  goldOre.w = 40
  goldOre.h = 20
  return goldOre
}

function wormGeneration() {
  let worm = new Sprite()                                         //Creates Worm Sprite
  worm.img = wormImg
  worm.scale = 2
  worm.x = random(60, width - 60)
  worm.y = random(60, height - 60)
  worm.w = 45
  worm.h = 15

  worm.debug = true;
  return worm
}

function p1Movement() {
  if (kb.pressing('arrowUp') && player.y > 60 + player.h / 2) {                           //Vertical Movement
    player.vel.y = -10;
  } else if (kb.pressing('arrowDown') && player.y < height - 60 - player.h / 2) {
    player.vel.y = +10
  } else player.vel.y = 0

  if (kb.pressing('arrowRight') && player.x < width - 60 - player.w / 2) {                //Horizontal Movement
    player.vel.x = +10;
  } else if (kb.pressing('arrowLeft') && player.x > 60 + player.w / 2) {
    player.vel.x = -10
  } else player.vel.x = 0
}


//Credit
//Art Sourced From OpenGameArt.Org
//GoldCoin - morgan3d
//Worm - Russpuppy