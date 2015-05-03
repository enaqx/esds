/**
 * Boolean Unit Tests
 */

'use strict';

var assert = require('assert');
var esds = require('../../index');

var b = esds.BooleanPrimitive;

describe('Boolean Primitive', function() {
  describe('esds.BooleanPrimitive', function() {
    it('should set in value to false on empty value', function() {
      assert.equal(b.get(), false);
    });
    it('should set value to false on 0', function() {
      b.set(0);
      assert.equal(b.get(), false);
    });
    it('should set initial value to false on -0', function() {
      b.set(-0);
      assert.equal(b.get(), false);
    });
    it('should set initial value to false on NaN', function() {
      b.set(NaN);
      assert.equal(b.get(), false);
    });
    it('should set initial value to false on undefined', function() {
      b.set(undefined);
      assert.equal(b.get(), false);
    });
    it('should set initial value to false on null', function() {
      b.set(null);
      assert.equal(b.get(), false);
    });
    it('should set initial value to false on empty string', function() {
      b.set('');
      assert.equal(b.get(), false);
    });
    it('should set initial value to false on false', function() {
      b.set(false);
      assert.equal(b.get(), false);
    });
    // Initial value: true
    it('should set initial value to true on true', function() {
      b.set(true);
      assert.equal(b.get(), true);
    });
    it('should set initial value to true on Infinity', function() {
      b.set(Infinity);
      assert.equal(b.get(), true);
    });
    it('should set initial value to true on -Infinity', function() {
      b.set(-Infinity);
      assert.equal(b.get(), true);
    });
    it('should set initial value to true on 1', function() {
      b.set(1);
      assert.equal(b.get(), true);
    });
    it('should set initial value to true on Number.MAX_VALUE', function() {
      b.set(Number.MAX_VALUE);
      assert.equal(b.get(), true);
    });
    it('should set initial value to true on nonempty string', function() {
      b.set('nonempty string');
      assert.equal(b.get(), true);
    });
    it('should set initial value to true on array', function() {
      b.set([]);
      assert.equal(b, true);
    });
    it('should set initial value to true on object', function() {
      var b = new esds.BooleanPrimitive({});
      assert.equal(b, true);
    });
  });

  describe('#toString()', function() {
    it('should return string "true" of true Boolean', function() {
      var b = new esds.BooleanPrimitive(true);
      assert.equal(b.toString(), 'true');
    });
    it('should return string "false" of false Boolean', function() {
      var b = new esds.BooleanPrimitive(false);
      assert.equal(b.toString(), 'false');
    });
  });

  describe('#valueOf()', function() {
    it('should return true of true Boolean', function() {
      var b = new esds.BooleanPrimitive(true);
      assert.equal(b, true);
    });
    it('should return false of false Boolean', function() {
      var b = new esds.BooleanPrimitive(false);
      assert.equal(b, false);
    });
  });

  describe('Algebraic logic', function() {
    var a = esds.BooleanPrimitive;
    a.set(true);
    var b = esds.BooleanPrimitive
    b.set(false);

    it('should return false of (true and false) expression', function() {
      assert.equal((a.get() && b.get()), false);
    });
    it('should return true of (true or false) expression', function() {
      assert.equal((a .get()|| b.get()), true);
    });
    it('should return false of (not true) expression', function() {
      assert.equal(!a.get(), false);
    });
    it('should return true of (not false) expression', function() {
      assert.equal(!b.get(), true);
    });
  });
});
