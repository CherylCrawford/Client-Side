// library_die.js
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
  rollingDice() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;


    return randomNumber;
  }
};
