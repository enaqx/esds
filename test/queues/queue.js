/**
 * Queue Unit Tests
 */

var assert = require("assert");
var esds = require('../../index');

var q = new esds.Queue();;

describe('Queue', function() {
  describe('new esds.Queue()', function() {
    it('should create new Queue', function() {
      q.enqueue('item1');
      q.enqueue('item2');
      q.enqueue('item3');
      q.enqueue('item4');
      assert.ok(q, 'Queue not created');
    });
  });
  describe('#dequeue()', function() {
    it('should dequeue first item', function() {
      assert.equal(q.dequeue(), 'item1');
    });
    it('should dequeue second item', function() {
      assert.equal(q.dequeue(), 'item2');
    });
  });
});
