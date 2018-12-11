"use strict";

// function identifier(param1, param2, etc...) {

function surfaceArea(radius, height) {
    var area = radius * Math.PI;
    area = area * (radius + Math.sqrt(radius * radius + height * height));
    return area;
}

function $(id) {
    return document.getElementById(id);
}

function processEntry() {
    // get the data from the form!
    var radius = parseFloat($("radius").value);
    var height = parseFloat($("height").value);

    // calculate the area. (we have a function for this)
    var area = surfaceArea(radius, height);

    // Display the result on the form.
    $("result").value = area.toFixed(3);
}

window.onload = function() {
  $("submitButton").onclick = processEntry;
};