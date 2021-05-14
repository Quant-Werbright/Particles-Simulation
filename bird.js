class Boid{
  constructor(x,y){
    this.position = createVector(x,y);
    this.velocity = p5.Vector.random2D();
    this.acc = createVector();
    this.velocity.setMag(random(1,4));
    this.mass = random(1,3.1);
    if (this.mass < 3.1){
      this.color = (255,255,255);
    }
    if (this.mass < 2.1){
      this.color = (255,255,0);
    }
    if (this.mass < 1.1){
      this.color = (0,255,255);
    }
  }
  align(boids) {
    let avg = createVector();
    let total = 0;
    for (let other of boids){
      let x = abs(other.position.x - this.position.x);
      let y = abs(other.position.y - this.position.y);
      if (other != this && x < sight && y < sight){
        avg.add(other.velocity)
        total += 1;
      }

    }
    if (total > 0){
      avg.div(total);
      avg.sub(this.velocity);
    }
    return avg;
  }
  check(){
    if (this.position.x > width){
      this.position.x = 0;
    }
    if (this.position.x < 0){
      this.position.x = width;
    }
    if (this.position.y < 0){
      this.position.y = height;
    }
    if (this.position.y > height){
      this.position.y = 0;
    }

  }
  flock(){
    let steer = this.align(flock);
    this.acc = steer.div(this.mass);
  }
  update(){
    this.flock();
    this.check();
    //
    //this.align();
    this.position.add(this.velocity);
    this.velocity.add(this.acc);
  }
  show(){
    strokeWeight(16);
    stroke(255);

    point(this.position.x,this.position.y);
    strokeWeight(2);
    fill(40)
    //stroke(this.color);
    ellipse(this.position.x,this.position.y,sight,sight);
  }
}
