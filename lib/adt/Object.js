/**
 * Built-in Object
 */

var esds = require('../../index');

/* Check for objects equality */
Object.prototype.equals = function(object) {
  // Check for types
  for (propName in this) {
    // Return false if the return value is different
    if (this.hasOwnProperty(propName) != object.hasOwnProperty(propName)) {
      return false;
    }
    // Check instance type
    else if (typeof this[propName] != typeof object[propName]) {
      return false;
    }
  }

  // Check using other objects property names
  for(propName in object) {
    if (this.hasOwnProperty(propName) != object.hasOwnProperty(propName)) {
      return false;
    }
    else if (typeof this[propName] != typeof object[propName]) {
      return false;
    }

    // If the property is inherited, do not check any more
    if(!this.hasOwnProperty(propName))
      continue;

    if (this[propName] instanceof esds.Array 
        && object[propName] instanceof esds.Array) {
      // recurse into the nested arrays
      if (!this[propName].equals(object[propName]))
        return false;
    }
    else if (this[propName] instanceof Object 
             && object[propName] instanceof Object) {
      if (!this[propName].equals(object[propName]))
        return false;
    }
    else if (this[propName] != object[propName]) {
       return false;
    }
  }
  
  return true;
}  

module.exports = Object;