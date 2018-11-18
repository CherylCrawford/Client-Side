// reservation.js
// student: Sherrie Teague
// date: 10/30/2018 
// class: Client-Side Programming
// assignment: HW06 reservation form with validation
"use strict";

// The jQuery code that implements the tabs. 
// Adapted from http://api.jqueryui.com/tabs/
$(function () {
  $("#tabs").tabs();
}); // end tabs

// The jQuery code that implements the Datepicker widget for the arrival date.
// Adapted from http://api.jqueryui.com/datepicker/
$("#arrival_date").datepicker({
  // The date can be from the current date to 90 days after the current date.
  maxDate: "+90d",
  minDate: new Date()
}); // end datepicker

// DOM has been loaded 
$(document).ready(function () {
  // Event handler for the click event of the View Cancellation Policies button.
  $("#policies").click(function () {
    //display the div element with an id of “dialog” as a modal Dialog box.
    $("#dialog").dialog();
  });

  // submit event of form.
  $("#reservation_form").submit(
    function (event) {
      var isValid = true; // return value
      //validate the name entry
      var name = $("#name").val().trim();
      if (name == "") {
        $("#name").next().text("This field is required.");
        isValid = false;
        alert("name is blank");
      } else {
        $("#name").next().text("");
      }
      $("#name").val(name);

      // validating arrival date. 
      var arrivalDate = $("#arrival_date");
      // adapted from https://stackoverflow.com/questions/8305259/check-if-date-is-in-the-past-javascript 
      var datep = arrivalDate.val();
      if (datep == "") {
        $("#arrival_date").next().text("This field is required");
        isValid = false;
      }

      //validate the email entry with a regular expression
      var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}\b/;
      var email = $("#email").val().trim();
      if (email == "") {
        $("#email").next().text("This field is required.");
        isValid = false;
      } else if (!emailPattern.test(email)) {
        $("#email").next().text("Must be a valid email address.");
        isValid = false;
      } else {
        $("#email").next().text("");
      }
      $("#email").val(email);

      //validating phone number
      var phonePattern = /\d{3}[\-]\d{3}[\-]\d{4}/;
      var phone = $("#phone").val().trim();
      if (phone == "") {
        $("#phone").next().text("This field is required.");
        isValid = false;
      } else if (!phonePattern.test(phone)) {
        $("#phone").next().text("Must be a in correct format 555-555-5555.");
        isValid = false;
      } else {
        $("#phone").next().text("");
      }
      $("#phone").val(phone);

      // validating number of nights.
      var nights = $("#nights").val().trim();
      if (nights.toString == "") {
        nights = 0;
        $("#nights").next().text("This field is required.");
        isValid = false;
      } else if (Math.floor(nights) < 1) {
        $("#nights").next().text("Number of Nights must be at least 1.");
        isValid = false;
      }
      $("#nights").val(nights);



      // Display a dialog box indicating the form is valid or not.
      if (isValid) {
        alert("Data in form is valid");
      } else {
        alert("Data in form is not valid");
      }

      // prevent the submission of the form if any entries are invalid 
      if (isValid == false) {
        event.preventDefault();
      }
    });
});
