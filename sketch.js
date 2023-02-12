// declare any variables you need here.
// var x, y, etc..
// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.

function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(500, 500);
}

var x;
function draw() {
  
  //call your functions and do your drawing here.
  // please erase code below once you are working.
  background(10);
  for (let i = 0; i < 2; i++) {
    twoCir(x=30);
    if(i === 1){
      twoCir(x=300);
    } 
}
  
  threeRec();
}

// write functions here that are called in your setup or draw function. please remove this one.
const twoCir = () => {
  fill(255, 255, 255, 255);
  circle(x, 30, 20);

};
const threeRec = () => {
  fill(255, 0, 0);
stroke(255, 150, 0);
strokeWeight(10);
rect(130, 20, 60, 60);
  fill(255, 0, 0);
  rect(145, 160, 40, 40);

line(30, 20, 135, 60);

line(300, 20, 135, 60);
};
