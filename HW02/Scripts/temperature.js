// Filename: 'temperature.ts'
// /////////////////////////////////////////////////////////
// Copyright © 2018 CherylCrawford. All Rights Reserved.  //
// Use of this source code is governed by an MIT License  //
// (MIT) that can be found in the LICENSE file.           //
//                                                        //
// By:  Sherrie Teague                                    //
// On:  Sept 4, 2018                                      //
// For: Web Client-Side Programming - HW02                //
// /////////////////////////////////////////////////////////
// class temperature provides method to get Fahrenheit and display Celsius
var Temperature = /** @class */ (function () {
    // initialize properties
    function Temperature() {
        this.Fahrenheit = 0;
        this.Celsius = 0;
    }
    // method getFahrenheit inputs Fahrenheit and displays Celsius
    Temperature.prototype.getFahrenheit = function () {
        var txt;
        var fah;
        for (;;) {
            fah = prompt(Temperature.promptStr);
            // test for null input
            if (fah == null || fah == "") {
                txt = "User cancelled the prompt";
                break;
            }
            else { // evaluate user input
                this.Fahrenheit = Number(fah);
                // bounds check
                if ((Temperature.min <= this.Fahrenheit) && (this.Fahrenheit <= Temperature.max)) {
                    // calculate Celsius
                    this.Celsius = (this.Fahrenheit - Temperature.offset) * Temperature.multiplier / Temperature.divisor;
                    // display text
                    txt = "Fahrenheit temperature is " + this.Fahrenheit.toString(10) + "\nCelsius temperature is " + this.Celsius.toFixed(1);
                    break;
                }
                else { // bounds error
                    txt = "You entered " + fah + ".\nEntry must range from " + Temperature.min + " to " + Temperature.max + ".";
                    alert(txt);
                }
            }
        }
        // display response
        alert(txt);
        // return response
        document.getElementById("demo").innerHTML = txt;
    };
    //  bounds check and input prompt
    Temperature.min = -100; // minimum value
    Temperature.max = +212; // maximum value
    Temperature.promptStr = "Enter Fahrenheit temperature";
    // formula is Celsius = (Fahrenheit - Offset) * multiplier / divisor
    Temperature.offset = 32.0; // difference between Fahrenheit and Celsius
    Temperature.multiplier = 5.0; // multiplier to convert Fahrenheit to Celsius
    Temperature.divisor = 9.0; // divisor calculates final conversion from Fahrenheit to Celsius
    return Temperature;
}());
// construct temperature
var temperature = new Temperature();
// define button
var button = document.createElement('button');
button.textContent = "Convert Temperature";
button.onclick = function () {
    alert(temperature.getFahrenheit());
};
document.body.appendChild(button);
