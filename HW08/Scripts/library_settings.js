// library_settings.js
// student: Sherrie Teague
// date: 11/27/2018
// class: Client-Side Programming
// assignment: HW08 Pulling It All Together

//The library_settings.js file should create a settings object that keeps track
// of the player name and the number of images used for a game. This object
// should contain the functions that save this data to and retrieve it from
// cookie storage. Because you need just a single instance of the settings
// object and you don’t need to protect any private state, you can create the
// settings object with an object literal.

$(function() {

    var playerName = getCookie("playerName");
    if (playerName.length !== 0) {
        $("playerName").val(playerName);
    } else {
        // we do not have a cookie.
    }

    var numberOfCards = getCookie("numberOfCards");
    if (numberOfCards.length !== 0) {
        $("numberOfCards").val(numberOfCards);
    } else {
        // we do not have a cookie.
    }

    var highScore = getCookie("highScore");
    if (highScore.length !== 0) {
        $("highScore").val(highScore);
    } else {
        // we do not have a cookie.
    }

    $("#saveSettingSubmit").click(function() {
        var value = $("#playerName").val();
        create("playerName", value);
        value = $("numberOfCards").val();
        create("numberOfCards", value);
        // display the correct number of cards.
        let o = document.getElementById('playGame');
        // clearing the contents of playGame
        o.innerHTML = "";
        let p = o.innerHTML;
        var i;
        for (i = 0; i < numberOfCards; i++) {
            p = p.concat("<span>" + face.replace('REPLACEME', thisRoll) + "</span>");
        }
        // updating elements to be displayed
        o.innerHTML = p;
    });
});

function deleteCookie(name) {
    document.cookie = name + "=''; max-age=0; path=/";
}

function getCookie(name) {
    // this returns a string of ALL the cookies for this site!
    // in the form of name=value;....
    var cookies = document.cookie;

    var firstIndex = cookies.indexOf(name + "=");

    if (firstIndex < 0) {
        return ""; // the name does not exists in cookies.
    } else {
        // move the index so the name of the cookie and the
        // = sign are not included. firstIndex is now the first letter
        // of the value.
        firstIndex = firstIndex + (name.length + 1);

        // we need to find the next semi-colon (;)
        var endIndex = cookies.indexOf(";", firstIndex);
        if (endIndex < 0) {
            endIndex = cookies.length;
        } // else we have a valid index doNothing();

        var value = cookies.substring(firstIndex, endIndex);

        return decodeURIComponent(value);
    }
}

function create(name, value, days) {
    var cookie = name + "=" + encodeURIComponent(value);

    if (days !== undefined) {
        // if we actually have a value for days.
        // the lifetime of the cookie is seconds - so we
        // do some math to calculate the number of seconds in the days.
        cookie += "; max-age=" + days * 24 * 60 * 60;
    } // else we have a session cookie (ends when the browser closes)
    // every cookie has a path, the path / means the cookie is available
    // to all pages within the url (example www.nwacc.edu/)
    cookie += "; path=/";
    document.cookie = cookie;
}

