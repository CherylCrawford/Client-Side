// Filename: 'cone.ts'
// /////////////////////////////////////////////////////////
// Copyright © 2018 CherylCrawford. All Rights Reserved.  //
// Use of this source code is governed by an MIT License  //
// (MIT) that can be found in the LICENSE file.           //
//                                                        //
// By:  Sherrie Teague                                    //
// On:  Sept 2, 2018                                      //
// For: Web Client-Side Programming - HW02                //
// /////////////////////////////////////////////////////////
// Sample code copied from Code910/cone.js provided
//  by Professor Shane May
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
window.onload = function () {
    $("submitButton").onclick = processEntry;
};
