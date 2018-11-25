// objects.js
// student: Sherrie Teague
// date: 11/18/2018 
// class: Client-Side Programming
// assignment: HW07 objects

class Die {
  /** 
   * @constructor 
   * new Die 
   * @param {Number} sides Number of sides on the dice. 
   * @returns {Class} die 
   */
  constructor(sides) {
    this.sides = sides;
  }

  /** 
   * rollingDice sets the values to spinner, minRoll, maxRoll, and randomNumber
   * @returns {Number} randomNumber The number that is rolled on the dice. 
   */
  function rollingDice() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;

    // set value of spinner equal to random number 
    $("#spinner").text(randomNumber.toString());

    var minRoll = $("#minRoll").val().trim();
    var maxRoll = $("#maxRoll").val().trim();
    if (minRoll == "") { // if min roll is blank then set min and max roll to random number
      $("#minRoll").val(randomNumber.toString());
      $("#maxRoll").val(randomNumber.toString());
    } else if (randomNumber < minRoll.parseInt()) { // if random number is < min roll then set min roll to random number 
      $("#minRoll").val(randomNumber.toString());
    } else if (randomNumber > maxRoll.parseInt()) { // if random number is > max roll then set max roll to random number 
      $("#maxRoll").val(randomNumber.toString());
    }
    return randomNumber;
  }


}

/** 
 * fadeOut all previous buttons, fadeIn selected button
 * @example <caption>Example: fadeOut everything but D10</caption>  
 * fadeOut("#d10");
 * @param {string} fadeIn The button id that will be displayed. 
 */
function fadeOut(fadeIn) {
  $("#d4").fadeOut("fast", function () {
    $("#d6").fadeOut("fast", function () {
      $("#d8").fadeOut("fast", function () {
        $("#d10").fadeOut("fast", function () {
          $("#d12").fadeOut("fast", function () {
            $("#d20").fadeOut("fast", function () {
              $(fadeIn).fadeIn(2000);
            });
          });
        });
      });
    });
  });
}


$(function () {
  var menu = $("#shape");
  var d4 = new Die(4);
  var d6 = new Die(6);
  var d8 = new Die(8);
  var d10 = new Die(10);
  var d12 = new Die(12);
  var d20 = new Die(20);

  $("#d4Submit").click(function (event) {
    var randomNumber = d4.rollingDice();

    // display D4 with random number 
    var face = '<svg width="50" height="50"><polygon points="0,3 25,46 50,3" style="stroke: black; fill: none" /><text fill="black" x="20" y="26" font-family="Verdana" font-size="18">REPLACEME</text></svg>';

    o = document.getElementById('output');
    o.innerHTML = "";
    p = o.innerHTML;

    p = p.concat("<span> " + face.replace('REPLACEME', randomNumber.toString()) + " </span>");
    o.innerHTML = p;

    // prevent default
    event.preventDefault();
  });

  $("#d6Submit").click(function (event) {
    var randomNumber = d6.rollingDice();

    // display D6 with random number 
    var face = '<svg width="50" height="50"><polygon points="3,3 3,47 47,47 47,3" style="stroke: black; fill: none" /><text fill="black" x="20" y="30" font-family="Verdana" font-size="18">REPLACEME</text></svg>';

    o = document.getElementById('output');
    o.innerHTML = "";
    p = o.innerHTML;

    p = p.concat("<span> " + face.replace('REPLACEME', randomNumber.toString()) + " </span>");
    o.innerHTML = p;

    // prevent default
    event.preventDefault();
  });

  $("#d8Submit").click(function (event) {
    var randomNumber = d8.rollingDice();

    // display D8 with random number 
    var face = '<svg width="60" height="50"><polygon points="17,0 60,25 17,50 17,0 0,25 17,50" style="stroke: black; fill: none" /><text fill="black" x="25" y="30" font-family="Verdana" font-size="18">REPLACEME</text></svg>';

    o = document.getElementById('output');
    o.innerHTML = "";
    p = o.innerHTML;

    p = p.concat("<span> " + face.replace('REPLACEME', randomNumber.toString()) + " </span>");
    o.innerHTML = p;

    // prevent default
    event.preventDefault();
  });

  $("#d10Submit").click(function (event) {
    var randomNumber = d10.rollingDice();

    // display D10 with random number 
    var face = '<svg width="50" height="50"><polygon points="43,50 0,25 43,0 50,25" style="stroke: black; fill: none" /><text fill="black" x="20" y="30" font-family="Verdana" font-size="18">REPLACEME</text></svg>';

    o = document.getElementById('output');
    o.innerHTML = "";
    p = o.innerHTML;

    p = p.concat("<span> " + face.replace('REPLACEME', randomNumber.toString()) + " </span>");
    o.innerHTML = p;

    // prevent default
    event.preventDefault();
  });

  $("#d12Submit").click(function (event) {
    var randomNumber = d12.rollingDice();

    // display D12 with random number 
    var face = '<svg width="50" height="50"><polygon points="25,0 1,17 10,45 40,45 49,17" style="stroke: black; fill: none" /><text fill="black" x="13" y="30" font-family="Verdana" font-size="18">REPLACEME</text></svg>';

    o = document.getElementById('output');
    o.innerHTML = "";
    p = o.innerHTML;

    p = p.concat("<span> " + face.replace('REPLACEME', randomNumber.toString()) + " </span>");
    o.innerHTML = p;

    // prevent default
    event.preventDefault();
  });

  $("#d20Submit").click(function (event) {
    var randomNumber = d20.rollingDice();

    // display D20 with random number 
    var face = '<svg width="50" height="50"><polygon points="0,46 25,0 50,46" style="stroke: black; fill: none" /><text fill="black" x="13" y="40" font-family="Verdana" font-size="18">REPLACEME</text></svg>';

    o = document.getElementById('output');
    o.innerHTML = "";
    p = o.innerHTML;

    p = p.concat("<span> " + face.replace('REPLACEME', randomNumber.toString()) + " </span>");
    o.innerHTML = p;

    // prevent default
    event.preventDefault();
  });

  $("#d6").hide();
  $("#d8").hide();
  $("#d10").hide();
  $("#d12").hide();
  $("#d20").hide();
  menu.selectmenu();
  menu.on("selectmenuchange", function () {
    var value = parseInt(this.value);
    if (value === 0) {
      fadeOut("#d4");
    } else if (value === 1) {
      fadeOut("#d6");
    } else if (value === 2) {
      fadeOut("#d8");
    } else if (value === 3) {
      fadeOut("#d10");
    } else if (value === 4) {
      fadeOut("#d12");
    } else if (value === 5) {
      fadeOut("#d20");
    } // else, doNothing();
  });
});

//Prints dice roll to the page

/*function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function () {
  var result = dice.roll();
  printNumber(result);
};*/
