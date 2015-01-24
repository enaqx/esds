/**
 * Enumeration - set of named values
 *
 * Other names: Enum, Enumerated type, Factor
 */

/* Creates a new Enumeration data structure */
function Enumeration() {

  /* Stores values */
  var values = arguments;

  /* Prepare enumeration object to return */
  var enumeration = { 
    all : [],     // list of all indices
    keys : values // list of all keys
  }

  for (var index = 0; index < values.length; index++) {
    enumeration[values[index]] = index; // add the variable to this object
    enumeration.all[index] = index;     // add the index to the list of all indices
  }

  return enumeration;
}

module.exports = Enumeration;
