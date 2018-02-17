/**
 * Created by Kristian Nielsen on 17-02-2018.
 */
const assert = require('assert');
const Triangle = require('./triangle');

describe('Triangle', function() {
    describe('#isEquilateral()', function() {
        it('should return true if the triangle is equilateral', function() {
            assert.equal(new Triangle([2, 3, 4]).isEquilateral(), false);
            assert.equal(new Triangle([3, 3, 4]).isEquilateral(), false);
            assert.equal(new Triangle([3, 3, 3]).isEquilateral(), true);
        });
    });
    describe('#isIsosceles()', function() {
        it('should return true if the triangle is isosceles', function() {
            assert.equal(new Triangle([2, 3, 4]).isIsosceles(), false);
            assert.equal(new Triangle([3, 3, 4]).isIsosceles(), true);
            assert.equal(new Triangle([3, 3, 3]).isIsosceles(), false);
        });
    });
    describe('#isScalene()', function() {
        it('should return true if the triangle is scalene', function() {
            assert.equal(new Triangle([2, 3, 4]).isScalene(), true);
            assert.equal(new Triangle([3, 3, 4]).isScalene(), false);
            assert.equal(new Triangle([3, 3, 3]).isScalene(), false);
        });
    });
});