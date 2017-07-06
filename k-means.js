var width = 600;
var height = 400;


// random points which need clustering!
var points = [
  {x: 400, y: 200},
  {x: 100, y: 122},
  {x: 200, y: 121},
  {x: 300, y: 340},
  {x: 230, y: 123},
  {x: 112, y: 245},
  {x: 123, y: 56},
  {x: 512, y: 378},
  {x: 489, y: 378},
  {x: 578, y: 389},
  {x: 512, y: 367},
  {x: 598, y: 297},
  {x: 498, y: 389},
  {x: 389, y: 367},
  {x: 467, y: 356},
  {x: 12, y: 234},
  {x: 123, y: 123},
  {x: 234, y: 267},
  {x: 267, y: 298},
  {x: 123, y: 234},
  {x: 321, y: 321},
  {x: 276, y: 245},
  {x: 367, y: 398},
]

var centroids = [
  {
    name: 'greeny',
    color: {r: 0, g: 255, b: 0},
    point: {x: 0, y: 0}
  },
  {
    name: 'redy',
    color: {r: 255, g: 0, b: 0},
    point: {x: 0, y: 0}
  }
]

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < centroids.length; i++) {
    centroids[i].point.x = random(width);
    centroids[i].point.y = random(height);  
  }
}

function draw() {
  background(0)
  
  // draw points
  for (var i = 0; i < points.length; i++) {
    ellipse(points[i].x, points[i].y, 10, 10);  
  }

  // draw centroids
  for (var i = 0; i < centroids.length; i++) {
    var centroid = centroids[i];
    fill(centroid.color.r, centroid.color.g, centroid.color.b)
    ellipse(centroid.point.x, centroid.point.y, 30, 30); 
  }

  // draw mouse pointer coordinates
  textSize(10);
  fill(255);
  text(mouseX + ", " + mouseY, 20, 20)
}



