"use strict";

// function identifier(param1, param2, etc...) {

/**
 * Calculates the surface area of a right cone, meaning result is the
 * measure of the total area that the surface of the cone occupies.
 *
 * @param {number} radius the length of the line segments from
 * the center of the base to its perimeter.
 *
 * @param {number} height the length of the vertical distance from the center of the base.
 *
 * @returns {number} the surface area of the cone defined by the given radius and height.
 */
function surfaceArea(radius, height) {
    var area = radius * Math.PI;
    area = area * (radius + Math.sqrt(radius * radius + height * height));
    return area;
}

function $(id) {
    return document.getElementById(id);
}

function clearEntry() {
    $("radius").value = "";
    $("height").value = "";
    $("result").value = "";
    $("radius").focus();
}

function isValid() {

    var radius = parseFloat($("radius").value);
    if (isNaN(radius) || radius < 0.0) {
        $("radius").value = "";
        alert("Radius must be a number >= 0.0");
        $("radius").focus();
        return false;
    } // else, radius is fine, doNothing();

    var heightElement = $("height");
    var height = parseFloat(heightElement.value);
    if (isNaN(height) || height < 0.0) {
        heightElement.value = "";
        alert("Height must be a number >= 0.0");
        heightElement.focus();
        return false;
    } // else, height is fine, doNothing();

    return true;
}

function processEntry() {
    if (isValid()) {
        // get the data from the form!
        var radius = parseFloat($("radius").value);
        var height = parseFloat($("height").value);

        // calculate the area. (we have a function for this)
        var area = surfaceArea(radius, height);

        // Display the result on the form.
        $("result").value = area.toFixed(3);
    } // else, the form is not valid, doNothing();
}

window.onload = function() {
  $("submitButton").onclick = processEntry;
  $("clearButton").onclick = clearEntry;
};