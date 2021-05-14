let flock = [];
let sight = 10;
function setup(){
  var canvas = createCanvas(1300,550);
  canvas.position(0,200);
  for (let i = 0;i < 100;i++){
    var b = new Boid(random(0,width),random(0,height));
    flock.push(b);
  }
}
function draw(){
  background(40,40,40);
  if (mouseIsPressed){
    b = new Boid(mouseX,mouseY);
    flock.push(b);
  }
  for (let boid of flock){

    boid.update();
    boid.show();
  }
}
