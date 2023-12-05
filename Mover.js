// Adapted from
// https://nature-of-code-2nd-edition.netlify.app/vectors/

class Mover {
  constructor(position, velocity) {
    this.position = position
    this.velocity = velocity
  }

  // creating a "getter" simplifies our life somewhat in this
  // case, it means that we can say "mover.x" instead of 
  // "mover.position.x"
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
  get x() { return this.position.x }
  get y() { return this.position.y }
  
  draw() {
    stroke(0)
    fill(175)
    circle(this.x, this.y, 16)
  }

  update() {
    this.position.add(this.velocity)
  }
  
  // a static function can be called with an instance
  // of the class. It is more appropriate to say that 
  // the function is called "on" the class. This is a 
  // common pattern.
  static createRandomMover() {
    return new Mover(
      createVector(random(width), random(height)),
      createVector(random(-5, 5), random(-5, 5))
    )
  }
}