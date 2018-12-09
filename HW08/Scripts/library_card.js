// library_card.js
// student: Sherrie Teague
// date: 11/27/2018
// class: Client-Side Programming
// assignment: HW08 Pulling It All Together

// The library_card.js file should create a Card object for
// working with a single card when it’s clicked.
/**
 * class libraryCard Attributes and methods that work with each card.
 */
class libraryCard {
    /**
     * constructor libraryCard Creates a card Object
     * @param {object} thisTag  Represents the tag that was clicked.
     */
    constructor(thisTag) {
        // The img tag that is a child of the tag.
        this.imgObject = thisTag.find("img");

        // the value in the id attribute of the tag.
        this.imgValue = thisTag.attr("id");
    }

    /**
     * method IsValid Check whether the user has clicked on a card
     * that is blank or has already been revealed.
     * @returns {boolean} Returns true if its a valid choice.
     */
    isValid() {
        return (this.imgValue === libraryCards.back);
    }

    /**
     * method isMatch
     * @param {string} thatImgValue Represents the first card that is
     * clicked.
     * @returns {boolean} Returns true if the cards are a match.
     */
    isMatch(thatImgValue) {
        // check if the id attribute of the tag for this card is
        // equal to the id attribute of the tag for the current card.
        return (thatImgValue === this.imgValue);
    }
}

