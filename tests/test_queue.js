var esds = require('../index');

var q = new esds.Queue();
q.enqueue('item1');
q.enqueue('item2');
q.enqueue('item3');
q.enqueue('item4');
console.log(q.dequeue());