/*
The Geometrizer

Create 2 functions that calculate properties of a circle.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

var calcCircumfrence = function (radius) {
  var circumference = 2 * radius * Math.PI;
  var message = "The circumference is " + circumference;

  return message;
}

var r = calcCircumfrence(15);
console.log(r);


var calcArea = function (radius) {
  var area = radius * radius * Math.PI;
  var message = "The area is " + area;

  return message;
};

var a = calcArea(15);
console.log(a);
