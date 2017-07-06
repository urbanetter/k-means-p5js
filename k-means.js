
// random points which need clustering!
var points = [
  {x: 400, y: 200, cluster: -1},
  {x: 100, y: 122, cluster: -1},
  {x: 200, y: 121, cluster: -1},
  {x: 300, y: 340, cluster: -1},
  {x: 230, y: 123, cluster: -1},
  {x: 112, y: 245, cluster: -1},
  {x: 123, y: 56, cluster: -1},
  {x: 512, y: 378, cluster: -1},
  {x: 489, y: 378, cluster: -1},
  {x: 578, y: 389, cluster: -1},
  {x: 512, y: 367, cluster: -1},
  {x: 598, y: 297, cluster: -1},
  {x: 498, y: 389, cluster: -1},
  {x: 389, y: 367, cluster: -1},
  {x: 467, y: 356, cluster: -1},
  {x: 12, y: 234, cluster: -1},
  {x: 123, y: 123, cluster: -1},
  {x: 234, y: 267, cluster: -1},
  {x: 267, y: 298, cluster: -1},
  {x: 123, y: 234, cluster: -1},
  {x: 321, y: 321, cluster: -1},
  {x: 276, y: 245, cluster: -1},
  {x: 367, y: 398, cluster: -1},
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
    var point = points[i]
    if (point.cluster == -1) {
      fill(255)
    } else {
      var centroid = centroids[point.cluster];
      fill(centroid.color.r, centroid.color.g, centroid.color.b)
    }
    ellipse(point.x, point.y, 10, 10);  
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

function mousePressed() {
  // assign points to clusters
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var distances = []
    for (var j = 0; j < centroids.length; j++) {
      var centroid = centroids[j];
      distances[j] = dist(point.x, point.y, centroid.point.x, centroid.point.y);
    }
    point.cluster = distances[0] > distances[1] ? 1 : 0;
  }

  // move centroids to the centers of all clustered points
  for (var i = 0; i < centroids.length; i++) {
    var centroid = centroids[i];
    var myPoints = points.filter(function(point) {
      return point.cluster == i;
    })
    var newX = myPoints.map(function(point) {
      return point.x
    })
    centroid.point.x = getMean(newX)
    
    var newY = myPoints.map(function(point) {
      return point.y
    })
    centroid.point.y = getMean(newY)
  }
}

function getMean(values) {
  return round(values.reduce(function(sum, value) { return sum + value }, 0) / values.length)
}


