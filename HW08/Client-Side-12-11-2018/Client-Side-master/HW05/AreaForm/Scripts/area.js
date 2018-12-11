"use strict";


function getArea(edge) {
    return Math.sqrt(3) * Math.pow(edge, 2);
}

function isValid() {
    var value = parseFloat($("#edge").val());
    return !isNaN(value);
}

function clearForm() {
    $("#edge").val("");
    $("#edge").next().text("*");
    $("#area").val("");
    $("#edge").focus();
}

// window.onload
// $(document).ready(function() { });
$(function() {
    $("#submitButton").click(function() {
        if (isValid()) {
            var area = getArea($("#edge").val());
            $("#area").val(area.toFixed(3));
        } else {
            $("#edge").next().text("Invalid Edge length");
        }
    });

    $("#clearButton").click(clearForm);
});