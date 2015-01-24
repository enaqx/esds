var esds = require('../index');

var e = new esds.Enumeration("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
console.log(e.all);
console.log(e.keys);