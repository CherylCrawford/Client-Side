"use strict";

var Rectangle = function(length, width) {
    this.length = length;
    this.width = width;
};

Rectangle.prototype.isSquare = function() {
    return this.length === this.width;
};

Rectangle.prototype.area = function() {
    return this.length * this.width;
};

Rectangle.prototype.perimeter = function() {
    return this.length + this.length +
           this.width + this.width;
};