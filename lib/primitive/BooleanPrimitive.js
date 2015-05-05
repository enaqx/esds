/**
 * Boolean Primitive
 */

'use strict';

function BooleanPrimitive (value) {
	var self = this
	self.value = new Boolean(value);

	this.set = function(value) {
		if (value !== value) { // NaN behavior according to IEEE 754
			self.value = false;
		} else if(value === undefined) {
			self.value = false;
		} else if(value === null) {
			self.value = false;
		} else if(value === Number.POSITIVE_INFINITY) {
			self.value = true;
		} else if(value === Number.NEGATIVE_INFINITY) {
			self.value = true;
		} else if(typeof value === 'number' && value != 0 && value != -0) {
			self.value = true;
		} else if(typeof value === 'string' && value !== '') {
			self.value = true;
		} else if(typeof value === 'object') {
			self.value = true;
		} else{
			self.value = value;
		}
	}

	this.get = function() {
		return self.value; 
	}
}

module.exports.BooleanPrimitive = BooleanPrimitive;
