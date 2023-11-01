//Global Variables
let goldCoin1;
let GoldCoin2;
let GoldCoin3;
let GoldCoin4;
let GoldCoin5;
let GoldCoin6;
let GoldCoin7;
let GoldCoin8;
let GoldCoin9;
GoldCoinArray = new Array();
let GoldCoinIndex = 0;
let timer = 15;

function preload() {
  GoldCoin1 = loadImage('Assets/Images/GoldCoin/goldCoin1.png');
  GoldCoin2 = loadImage('Assets/Images/GoldCoin/goldCoin2.png');
  GoldCoin3 = loadImage('Assets/Images/GoldCoin/goldCoin3.png');
  GoldCoin4 = loadImage('Assets/Images/GoldCoin/goldCoin4.png');
  GoldCoin5 = loadImage('Assets/Images/GoldCoin/goldCoin5.png');
  GoldCoin6 = loadImage('Assets/Images/GoldCoin/goldCoin6.png');
  GoldCoin7 = loadImage('Assets/Images/GoldCoin/goldCoin7.png');
  GoldCoin8 = loadImage('Assets/Images/GoldCoin/goldCoin8.png');
  GoldCoin9 = loadImage('Assets/Images/GoldCoin/goldCoin9.png');
}

function setup() {
  //code here
  createCanvas(1000, 600);
  GoldCoinArray.push(GoldCoin1, GoldCoin2, GoldCoin3, GoldCoin4, GoldCoin5, GoldCoin6, GoldCoin7, GoldCoin8, GoldCoin9);
  new Sprite(100, 100);
}

function draw() {
  //code here
  background('black');
  resourceStatusBar();

}



function resourceStatusBar() {                    //Draws The Status Bar in the top left corner
  timer--;

  stroke('white')
  noFill()
  rect(10, 10, 300, 40, 5);

  if(timer == 0){
  GoldCoinIndex ++;                                //Increments index
  if (GoldCoinIndex >= GoldCoinArray.length) {    //Resets Index allowing for animation
    GoldCoinIndex = 0;
  }
  timer = 15;
  } 
  image(GoldCoinArray[GoldCoinIndex], 10, 15);    //Draws the coin stored at a specific index of the array
}









