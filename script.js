let movers 

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  background(255);
  // This is a tidy way to create an array of a certain length
  // and to initialize the values in it. Even this is a little
  // tidier than usual, opting for the short function syntax.
  // Below is a commented out version of the same code and below
  // that is what it would look like in loop form (condensed). 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  movers = Array.from({length: 10}, Mover.createRandomMover )  
  // movers = Array.from({length: 10}, () => Mover.createRandomMover() )  
  // for( let i = 0; i < 10; i++ ) { movers.push( Mover.createRandomMover() ) }
}

function draw() {
  background('white')
  movers.forEach( m => {
    m.draw()
    m.update()
  })
}