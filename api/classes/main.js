const circle = require('./cyrcle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

const square = require('./square.js');
var mySquare = square(2);
console.log(`The area of my square is ${mySquare.area()}`);

var Polygon = require("./polygon");
var pol = new Polygon(4,5);
console.log(pol.height);

