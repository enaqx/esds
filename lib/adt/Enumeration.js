/**
 * Enumeration - set of named values
 *
 * Other names: Enum, Enumerator, Enumerated type, Factor
 */

function Enumeration() {

  /* Stores values */
  var values = arguments;

  /* Prepare enumeration object to return */
  var enumeration = { 
    indices: [],  // list of all indices
    keys: [],     // list of all keys
    content: {}   // enumearation content
  }

  for (var index = 0; index < values.length; index++) {
    // add the variable to this object
    enumeration.content[index] = values[index];
    // add the index to the list of all indices
    enumeration.indices[index] = index;
    // add keys to the list of keys
    enumeration.keys[index] = values[index];
  }

  return enumeration;
}

module.exports = Enumeration;
