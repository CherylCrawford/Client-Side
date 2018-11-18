// ReservationForm.js
// student: Sherrie Teague
// date: 10/18/2018 
// class: Client-Side Programming
// assignment: HW05 reservation form
"use strict";

/** Returns today's date.
 *
 *   @return (Date) Today's date.
 */
function now() {
  return new Date();
}

/** Returns a date one year from today.
 *
 *   @return (Date) One year from Today's date.
 */
function nextYear() {
  var ny = new Date();
  ny.setDate(ny.getDate() + 366);
  return ny;
}

$(document).ready(function () {
  // Code a statement that moves the focus to the Arrival date text box.
  $("#arrivalDateId").focus();

  // set value minimum and maximum of arrival date 
  // https://jsfiddle.net/taditdash/8FHwL/
  // a date range was not specified. I selected a range one year into the future for booking arrival dates because I thought it seemed reasonable. 
  // $("#arrivalDateId").attr("value", now()).attr("min", now()).attr("max", nextYear());

  // submit event of form.
  $("#reservation_form").submit(
    function (event) {
      var isValid = true; // return value
      // alert("trying to validate");

      /*
      This event handler should validate the user entries and cancel the submission of the form if any of the entries are invalid.
      The validation is as follows:
      A value must be entered into each text box.
      The number of nights must be numeric.
      The email address must match the pattern that’s provided.
      var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}\b/;
      */

      // validating arrival date. 
      var arrivalDate = $("#arrivalDateId");
      // adapted from https://stackoverflow.com/questions/8305259/check-if-date-is-in-the-past-javascript 
      var datep = arrivalDate.val();
      if (Date.parse(datep) - Date.parse(new Date()) < 0) {
        $("#arrivalDateId").next().text("Arrival Date must not be in the past.");
        isValid = false;
      }

     /* // validating number of nights.
      var numberNights = $("#numberNightsId").val().trim();
      // alert(numberNights.toString());
      if (numberNights.toString == "") {
        numberNights = 0; 
        $("#numberNightsId").next().text("This field is required.");
        isValid = false;
      } else if (Math.floor(numberNights) < 1) {
        $("#numberNightsId").next().text("Number of Nights must be at least 1.");
        isValid = false;
      }
      $("#numberNightsId").val(numberNights);
*/
      // validating number of nights.
      var numberNights = $("#numberNightsId").val().trim();
      if (numberNights.toString == "") {
        numberNights = 0; 
        $("#numberNightsId").next().text("This field is required.");
        isValid = false;
      } else if (Math.floor(numberNights) < 1) {
        $("#numberNightsId").next().text("Number of Nights must be at least 1.");
        isValid = false;
      }
      $("#numberNightsId").val(numberNights);
      
      // validating smoking unnecessary because it is a checkbox 

      //validate the name entry
      var name = $("#nameId").val().trim();
      if (name == "") {
        $("#nameId").next().text("This field is required.");
        isValid = false;
        alert("name is blank");
      } else {
        $("#nameId").next().text("");
      }
      $("#nameId").val(name);

      //validate the email entry with a regular expression
      var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}\b/;
      var email = $("#emailId").val().trim();
      if (email == "") {
        $("#emailId").next().text("This field is required.");
        isValid = false;
      } else if (!emailPattern.test(email)) {
        $("#emailId").next().text("Must be a valid email address.");
        isValid = false;
      } else {
        $("#emailId").next().text("");
      }
      $("#emailId").val(email);

      //validating phone number
      var phonePattern = /\d{3}[\-]\d{3}[\-]\d{4}/;
      var phone = $("#phoneId").val().trim();
      if (phone == "") {
        $("#phoneId").next().text("This field is required.");
        isValid = false;
      } else if (!phonePattern.test(phone)) {
        $("#phoneId").next().text("Must be a in correct format 555-555-5555.");
        isValid = false;
      } else {
        $("#phoneId").next().text("");
      }
      $("#phoneId").val(phone);

      // prevent the submission of the form if any entries are invalid 
      if (isValid == false) {
        event.preventDefault();
      }
    } // end function
  ); // end submit
}); // end ready
