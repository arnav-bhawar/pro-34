var canvas;
var database;

var draw1 = []

function setup() {
  canvas = createCanvas(1000,600);
  database = firebase.database();
  background(255,0,0);  
 // var eraseButton = select('#selectButton');
}

var db_draw = []

function mouseDragged(){
  var point = {
    x:mouseX,
    y:mouseY
  }

  draw1.push(point);
  var drawRef = database.ref('draw1');
  drawRef.set({
    "d" : draw1
  })

}

function draw() {
  readData()
  beginShape();
  stroke(0);
  strokeWeight(4);
  noFill();
  
  for (var i = 0; i < db_draw.length; i++) {
    vertex(db_draw[i].x, db_draw[i].y);
    endShape();
}
}

function erase(){
  //if(mousePressedOver.eraseButton){
   // var eraseButton = select('#selectButton');
    createSprite(200,200,200,200);
 // }
}

function readData() {
  database.ref('draw1/').on('value', (data) => {
      db_draw = data.val().d
  })
}