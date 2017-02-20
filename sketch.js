var colorList = ['#FF1188','#CBFFEE','#FD2365','#222222','#DDDDDD',
'#666666'];

function setup() {
  createCanvas(800,800);
  frameRate(5);
}

function draw() {
  background (102);
  for (var x=0; x<800; x+=40){
  for (var y=0; y<900; y+=40){
  for(var rad=80; rad<101; rad+=80){
  var index=floor(random()*colorList.length);
  var colors=colorList[index];

  noStroke();
  beginShape();
  fill(color(colors));
  triangle(x,y,x+20,y-40,x+40,y);
  endShape(CLOSE);
  }}}
}
