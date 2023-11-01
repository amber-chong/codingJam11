//Global Variables
let goldCoin1;                                                      //Images For Resource Bar
let GoldCoin2;                                                      //Images For Resource Bar
let GoldCoin3;                                                      //Images For Resource Bar
let GoldCoin4;                                                      //Images For Resource Bar
let GoldCoin5;                                                      //Images For Resource Bar
let GoldCoin6;                                                      //Images For Resource Bar
let GoldCoin7;                                                      //Images For Resource Bar
let GoldCoin8;                                                      //Images For Resource Bar
let GoldCoin9;                                                      //Images For Resource Bar
let GoldCoinIndex = 0;                                              //Iterate Through Array
let timer = 15;                                                     //Timer To Stagger Animation
GoldCoinArray = new Array();                                        //Holds Gold Coin Images

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
}

function setup() {
  createCanvas(1000, 600);
  GoldCoinArray.push(GoldCoin1,                     //Push Preloaded Images Into Array
    GoldCoin2,                                      //Push Preloaded Images Into Array
    GoldCoin3,                                      //Push Preloaded Images Into Array
    GoldCoin4,                                      //Push Preloaded Images Into Array
    GoldCoin5,                                      //Push Preloaded Images Into Array
    GoldCoin6,                                      //Push Preloaded Images Into Array
    GoldCoin7,                                      //Push Preloaded Images Into Array
    GoldCoin8,                                      //Push Preloaded Images Into Array
    GoldCoin9);                                     //Push Preloaded Images Into Array
  
    new Sprite(100, 100);
}

function draw() {
  //code here
  background('black');
  resourceStatusBar();

}



function resourceStatusBar() {                    //Draws The Status Bar in the top left corner
  timer--;

  stroke('white')                                 //Outline|Border of box
  noFill()                                        //Outline|Border of box
  rect(10, 10, 300, 40, 5);                       //Outline|Border of box

  if(timer == 0){
  GoldCoinIndex ++;                               //Increments index
  if (GoldCoinIndex >= GoldCoinArray.length) {    //Resets Index allowing for animation
    GoldCoinIndex = 0;
  }
  timer = 15;                                     //Resets Timer Used to stagger coin animation
  } 
  image(GoldCoinArray[GoldCoinIndex], 10, 15);    //Draws the coin stored at a specific index of the array
}









