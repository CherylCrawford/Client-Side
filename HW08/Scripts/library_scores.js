// library_scores.js
// student: Sherrie Teague
// date: 11/27/2018
// class: Client-Side Programming
// assignment: HW08 Pulling It All Together




/**
 * Class Scores Object that keeps track of the score for each game.
 */
class Scores {
    /**
     * constructor Scores Initialize three variables
     */
    constructor() {
        /**
         * numberOfTurns Keeps track of the number of turns.
         * @type {number}
         */
        this.numberOfTurns = 0;

        /**
         * numberOfMatches Saves number of turns that result in matches.
         * @type {number}
         */
        this.numberOfMatches = 0;

        /**
         * allScores List of all the scores.
         * @type {Array}
         */
        this.allScores = [];
    }
    /**
     * method saveScores Saves the scores from local storage.
     */
    saveScores() {
        // create allScores cookie
        create("allScores", this.allScores)
    };


    /**
     * method retrieveScores Retrieves scores from local storage.
     */
    retrieveScores() {
        // getting allScores cookie
        let allScores = getCookie("allScores");
        if (allScores.length !== 0) {
            this.allScores = allScores;
            alert("allScores:=" + allScores);
        } else {
            // we do not have a cookie.
        }
    };


    /**
     * method compareScores Compares scores from local storage.
     * @return {Number} Returns max score.
     */
    compareScores() {
        return Math.max(this.allScores);
    };


    // Displays player's high score.
    /**
     * method displayHighScore Displays player's high score.
     * @return {String}
     */
    displayHighScore() {
        let retVal = "  0%";
        let hs = this.compareScores();
        if (hs > 0) {
            retVal = hs.toString() + "%";
            while (retVal.length < 4) {
                retVal = " " + retVal;
            }
        }
        return retVal;
    };
}


/**
 * function incInt Increments the integer variables.
 * @param {Number} theVar The variable that is being incremented.
 * @return {Number} Incremented results.
 */
function incInt(theVar) {
    return theVar++;
}


/**
 * function isBoardEmpty Checks if all the cards have been removed from the
 * board.
 * @return {boolean} Returns true if all cards have been matched.
 */
function isBoardEmpty() {
    return false;
}


/**
 * function percentCorrect Calculates the percentage of correct selections.
 * @return {Number} Return percent correct formatted as Int.
 */
function percentCorrect() {
    let retVal = 0;

    if (scores.numberOfTurns > 0) {
        retVal = Math.floor(100.0 * scores.numberOfMatches / scores.numberOfTurns);
    } else {
        // Do not divide by 0.
    }

    return retVal;
}

