/**
 * Array Unit Tests
 */

var assert = require("assert");
var esds = require('../../index');

var a = new esds.Array('a', 'b', 'c', 'd', 'e');

describe('Array', function() {
  describe('new esds.Array()', function() {
    it('should init array with 5 elements', function() {
      assert.ok(a);
    });
  });

  describe('#length', function() {
    it('should return the number of elements in an array', function() {
      assert.equal(a.length, 5);
    });
  });

  describe('#isArray()', function() {
    it('should return true if a variable is an array', function() {
      assert.equal(esds.Array.isArray(a), true);
    });
  });

  describe('#equals()', function() {
    it('should check two arrays for equality', function() {
      assert.equal(a.equals(['a', 'b', 'c', 'd', 'e']), true);
      assert.equal(a.equals(['a', 'b', 'c', 'd']), false);
    })
  })

  describe('#pop()', function() {
    it('should remove the last element from an array and return that element',
        function() {
      assert.equal(a.pop(), 'e');
      assert.equal(a.equals(['a', 'b', 'c', 'd']), true);
    });
  });

  describe('#push()', function() {
    it('should add elements to the end of an array and return the new length',
        function() {
      assert.equal(a.push('e'), 5);
      assert.equal(a.equals(['a', 'b', 'c', 'd', 'e']), true);
    });
  });

  describe('#reverse()', function() {
    it('should reverse an array', function() {
      assert.equal(a.reverse().equals(['e', 'd', 'c', 'b', 'a']), true);
    });
  });

  describe('#shift()', function() {
    it('should remove the first element and return it', function() {
      assert.equal(a.shift(), 'e');
      assert.equal(a.equals(['d', 'c', 'b', 'a']), true);
      assert.equal([].shift(), undefined);
    });
  });

  describe('#sort()', function() {
    it('should sort the elements of an array', function() {
      assert.equal(a.sort().equals(['a', 'b', 'c', 'd']), true);
    })
  });

  describe('#splice()', function() {
    it('should remove existing elements and/or add new elements', function() {
      assert.equal(a.splice(3, 1, 'x').equals(['d']), true);
      assert.equals(a.equals(['a', 'b', 'c', 'x']), true);
    });
  });

  describe('#unshift()', function() {
    it('should add elements to the beginning of an array', function() {
      assert.equal(a.unshift('y'), 5);
      assert.equal(a.equals(['y', 'a', 'b', 'c', 'x']), true);
    });
  })
});
