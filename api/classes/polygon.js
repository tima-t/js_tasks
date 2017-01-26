var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

var polygon = new Polygon(4,5);
console.log(polygon.height);

module.exports = Polygon;