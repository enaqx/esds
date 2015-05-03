/**
 * Boolean Primitive
 */

'use strict';

var BooleanPrimitive = {
	value: new Boolean(),

	set: function(value) {
		if (isNaN(value)) {
			this.value = false;
		} else if(value === undefined) {
			this.value = false;
		} else if(value === null) {
			this.value = false;
		} else if(value === Number.POSITIVE_INFINITY) {
			this.value = true;
		} else if(value === Number.NEGATIVE_INFINITY) {
			this.value = true;
		} else {
			this.value = value;
		}
	},

	get: function() {
		return this.value; 
	}
}

module.exports.BooleanPrimitive = BooleanPrimitive;
