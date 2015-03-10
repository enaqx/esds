/**
 * Expand built-in Array
 */

/* Check for arrays equality */
Array.prototype.equals = function(array) {
  // check argument presence
  if (!array)
    return false;

  // compare lengths
  if (this.length != array.length)
    return false;

  for (var i = 0, l = this.length; i < l; i++) {
    // Check for nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i]))
        return false;       
    }           
    else if (this[i] != array[i]) { 
      return false;   
    }           
  }       
  return true;
}  

module.exports = Array;