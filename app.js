const Triangle = require('./triangle');

const [,,a,b,c] = process.argv;

// [1, 2, 2] ==> should be Isosceles
// [1, 1, 1] ==> should be Equilateral
// [1, 2, 3] ==> should be Scalene

const t = new Triangle([a, b, c]);
t.printProperties();