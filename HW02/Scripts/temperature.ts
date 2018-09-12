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

class Temperature {
    Fahrenheit: number;
    Celsius: number;
    static readonly min = -100;
    static readonly max = +212;
    static readonly promptStr = "Enter Fahrenheit temperature";
    static readonly offset = 32.0;
    static readonly multiplier = 5.0;
    static readonly divisor = 9.0;

    constructor() {
        this.Fahrenheit = 0;
        this.Celsius = 0;
    }

    getFahrenheit() {
        var txt;
        var fah;
        for (; ;) {
            fah = prompt(Temperature.promptStr);

            if (fah == null || fah == "") {
                txt = "User cancelled the prompt";
                break;
            } else {
                this.Fahrenheit = Number(fah);

                if ((Temperature.min <= this.Fahrenheit) && (this.Fahrenheit <= Temperature.max)) {
                    this.Celsius = (this.Fahrenheit - Temperature.offset) * Temperature.multiplier / Temperature.divisor;
                    txt = "Fahrenheit temperature is " + this.Fahrenheit.toString(10) + "\nCelsius temperature is " + this.Celsius.toFixed(1);
                    break;
                } else {
                    txt = "You entered " + fah + ".\nEntry must range from " + Temperature.min + " to " + Temperature.max + ".";
                    alert(txt);
                }
            }
        }
        alert(txt);
        document.getElementById("demo").innerHTML = txt;
    }
}

let temperature = new Temperature();

let button = document.createElement('button');
button.textContent = "Convert Temperature";
button.onclick = function () {
    alert(temperature.getFahrenheit());
};


document.body.appendChild(button);

