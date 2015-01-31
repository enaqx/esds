/**
 * Struct - is a collection of one or more named properties that are open for 
 *   modification, but closed for extension
 *
 * Other names: Record, Compound data
 */

/* Creates a new Struct data structure */
function Struct() {

  /* Stores values */
  var values = arguments;

  if (Struct.prototype.isPrototypeOf(this)) {
    var struct = this;

    Object.keys(values).forEach( function (key) {
      Object.defineProperty(struct, key, {
        enumerable: true,
        writable: true,
        value: values[key]
      });
    });

    return Object.preventExtensions(struct);
  }

  else return new Struct(values);

}

module.exports = Struct;
