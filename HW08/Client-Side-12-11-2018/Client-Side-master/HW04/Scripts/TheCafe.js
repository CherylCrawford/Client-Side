// TheCafe.js
// author: Sherrie Teague
// assignment: HW04 Due 10/10/2018 
"use strict";

/*event handler on hover displays price*/
$("#biscotti").hover(
  function () {
    $("#biscotti").attr("src", "Images/biscotti_info.jpg");
  },
  function () {
    $("#biscotti").attr("src", "Images/biscotti.jpg");
  }
);

/*event handler on hover displays price*/
$("#cappuccino").hover(
  function () {
    $("#cappuccino").attr("src", "Images/cappuccino_info.jpg");
  },
  function () {
    $("#cappuccino").attr("src", "Images/cappuccino.jpg");
  }
);

/*event handler on hover displays price*/
$("#coffee").hover(
  function () {
    $("#coffee").attr("src", "Images/coffee_info.jpg");
  },
  function () {
    $("#coffee").attr("src", "Images/coffee.jpg");
  }
);

/*event handler on hover displays price*/
$("#espresso").hover(
  function () {
    $("#espresso").attr("src", "Images/espresso_info.jpg");
  },
  function () {
    $("#espresso").attr("src", "Images/espresso.jpg");
  }
);

/*event handler on hover displays price*/
$("#latte").hover(
  function () {
    $("#latte").attr("src", "Images/latte_info.jpg");
  },
  function () {
    $("#latte").attr("src", "Images/latte.jpg");
  }
);

/*event handler on hover displays price*/
$("#scone").hover(
  function () {
    $("#scone").attr("src", "Images/scone_info.jpg");
  },
  function () {
    $("#scone").attr("src", "Images/scone.jpg");
  }
);


/*Now to add an option into a select list with jQuery $(this).append('<option value="Option Value">Option Name</option>'); and to remove an option from the list by value $('option[value="value-to-search-for"]', this).remove()*/

/*event handler onClick adds item to the list and adds sales amount to the total amount*/
$("#biscotti").click(function () {
  /*appending a sales item to the list */
  $("#myCafeListBox").append("<option value='biscotti'> $1.95 - Biscotti</option>");

  /*adding sales amount to total amount */
  var elem = $("#totalAmount");
  var newTotal = parseFloat(elem.text()) + 1.95;
  elem.text(newTotal.toFixed(2));
});

/*event handler onClick adds item to the list and adds sales amount to the total amount*/
$("#cappuccino").click(function () {
  /*appending a sales item to the list */
  $("#myCafeListBox").append("<option value='cappuccino'> $3.45 - Cappuccino</option>");

  /*adding sales amount to total amount */
  var elem = $("#totalAmount");
  var newTotal = parseFloat(elem.text()) + 3.45;
  elem.text(newTotal.toFixed(2));
});

/*event handler onClick adds item to the list and adds sales amount to the total amount*/
$("#coffee").click(function () {
  /*appending a sales item to the list */
  $("#myCafeListBox").append("<option value='coffee'> $1.75 - Coffee</option>");

  /*adding sales amount to total amount */
  var elem = $("#totalAmount");
  var newTotal = parseFloat(elem.text()) + 1.75;
  elem.text(newTotal.toFixed(2));
});

/*event handler onClick adds item to the list and adds sales amount to the total amount*/
$("#espresso").click(function () {
  /*appending a sales item to the list */
  $("#myCafeListBox").append("<option value='espresso'> $1.95 - Espresso</option>");

  /*adding sales amount to total amount */
  var elem = $("#totalAmount");
  var newTotal = parseFloat(elem.text()) + 1.95;
  elem.text(newTotal.toFixed(2));
});

/*event handler onClick adds item to the list and adds sales amount to the total amount*/
$("#latte").click(function () {
  /*appending a sales item to the list */
  $("#myCafeListBox").append("<option value='latte'> $2.95 - Latte</option>");

  /*adding sales amount to total amount */
  var elem = $("#totalAmount");
  var newTotal = parseFloat(elem.text()) + 2.95;
  elem.text(newTotal.toFixed(2));
});

/*event handler onClick adds item to the list and adds sales amount to the total amount*/
$("#scone").click(function () {
  /*appending a sales item to the list */
  $("#myCafeListBox").append("<option value='scone'> $2.95 - Scone</option>");

  /*adding sales amount to total amount */
  var elem = $("#totalAmount");
  var newTotal = parseFloat(elem.text()) + 2.95;
  elem.text(newTotal.toFixed(2));
});


$(document).ready(function () {
  $("#clearOrderButton").click(function () {
    /* All of the items should be removed from the order list.
     * https://stackoverflow.com/questions/1104662/jquery-select-list-removes-all-options */
    $("#myCafeListBox").empty();

    /* The total should be cleared.*/
    $("#totalAmount").text("0");
  });
  $("#placeOrderButton").click(function () {

    /*If the user clicks the Place Order button, nothing should happen.Later in the semester we will learn how to move the user to another page.*/
  });
});

// an alternative method of assigning functions that I chose not to use
/*
$(document).ready(function () {
  $('.imgh')
    .mouseover(function () {
      $(this).attr("src", "Images/biscotti_info.jpg");
    })
    .mouseout(function () {
      $(this).attr("src", "Images/biscotti.jpg");
    });
});
*/
