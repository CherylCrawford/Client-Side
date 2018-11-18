"use strict";

/**
 * Creates an instance of the Circle with the given radius.
 *
 * @param {number} radius the radius of the circle.
 *
 * @constructor
 */
var Circle = function(radius) {
    this.radius = radius;
};

/**
 * Gets the area of this circle.
 *
 * @returns {number} the area of the circle.
 */
Circle.prototype.area = function() {
    return this.radius * this.radius * Math.PI;
};

/**
 * Gets the diameter of this circle.
 *
 * @returns {number} the diameter of the circle.
 */
Circle.prototype.diameter = function() {
    return this.radius + this.radius;
};

/**
 * Gets the circumference of this circle.
 *
 * @returns {number} the circumference of the circle.
 */
Circle.prototype.circumference = function() {
    return this.diameter() * Math.PI;
};

