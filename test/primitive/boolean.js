/**
 * Boolean Unit Tests
 */

'use strict';

var assert = require('assert');
var esds = require('../../index');

var a = new esds.BooleanPrimitive;
var b = new esds.BooleanPrimitive;

describe('Boolean Primitive', function() {
  describe('esds.BooleanPrimitive', function() {
    it('should set in value to false on empty value', function() {
      assert.equal(b.get(), false);
    });
    it('should set value to false on 0', function() {
      b.set(0);
      assert.equal(b.get(), false);
    });
    it('should set value to false on -0', function() {
      b.set(-0);
      assert.equal(b.get(), false);
    });
    it('should set value to false on NaN', function() {
      b.set(NaN);
      assert.equal(b.get(), false);
    });
    it('should set value to false on undefined', function() {
      b.set(undefined);
      assert.equal(b.get(), false);
    });
    it('should set value to false on null', function() {
      b.set(null);
      assert.equal(b.get(), false);
    });
    it('should set value to false on empty string', function() {
      b.set('');
      assert.equal(b.get(), false);
    });
    it('should set value to false on false', function() {
      b.set(false);
      assert.equal(b.get(), false);
    });
    it('should set value to true on true', function() {
      b.set(true);
      assert.equal(b.get(), true);
    });
    it('should set value to true on Infinity', function() {
      b.set(Infinity);
      assert.equal(b.get(), true);
    });
    it('should set value to true on -Infinity', function() {
      b.set(-Infinity);
      assert.equal(b.get(), true);
    });
    it('should set value to true on 1', function() {
      b.set(1);
      assert.equal(b.get(), true);
    });
    it('should set value to true on Number.MAX_VALUE', function() {
      b.set(Number.MAX_VALUE);
      assert.equal(b.get(), true);
    });
    it('should set value to true on nonempty string', function() {
      b.set('nonempty string');
      assert.equal(b.get(), true);
    });
    it('should set value to true on array', function() {
      b.set([]);
      assert.equal(b.get(), true);
    });
    it('should set value to true on object', function() {
      b.set({});
      assert.equal(b.get(), true);
    });
  });

  describe('#toString()', function() {
    it('should return string "true" of true Boolean', function() {
      b.set(true);
      assert.equal(b.get().toString(), 'true');
    });
    it('should return string "false" of false Boolean', function() {
      b.set(false);
      assert.equal(b.get().toString(), 'false');
    });
  });

  describe('Algebraic logic', function() {
    a.set(true);
    b.set(false);
    it('should return false of (true and false) expression', function() {
      assert.equal((a.get() && b.get()), false);
    });
    it('should return true of (true or false) expression', function() {
      assert.equal((a.get() || b.get()), true);
    });
    it('should return false of (not true) expression', function() {
      assert.equal(!a.get(), false);
    });
    it('should return true of (not false) expression', function() {
      assert.equal(!b.get(), true);
    });
  });
});
