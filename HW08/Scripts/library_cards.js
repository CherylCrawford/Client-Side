// library_cards.js
// student: Sherrie Teague
// date: 11/27/2018
// class: Client-Side Programming
// assignment: HW08 Pulling It All Together

// The library_cards.js file should create a cards object that works with
// the cards.


/**
 * class
 */
class libraryCards {
    // The application should use strings throughout the application
    // to specify the src attributes for the card back and blank card,
    // these attributes are stored in variables in this library.
    /**
     * constructor libraryCards Works with cards.
     */
    constructor() {
        this.cardsArray = [];
        this.imgArray = [
            'images/card_1.png',
            'images/card_2.png',
            'images/card_3.png',
            'images/card_4.png',
            'images/card_5.png',
            'images/card_6.png',
            'images/card_7.png',
            'images/card_8.png',
            'images/card_9.png',
            'images/card_10.png',
            'images/card_11.png',
            'images/card_12.png',
            'images/card_13.png',
            'images/card_14.png',
            'images/card_15.png',
            'images/card_16.png',
            'images/card_17.png',
            'images/card_18.png',
            'images/card_19.png',
            'images/card_20.png',
            'images/card_21.png',
            'images/card_22.png',
            'images/card_23.png',
            'images/card_24.png',
            'images/back.png',
            'images/blank.png'
        ];

        this.back = this.imgArray[24];
        this.blank = this.imgArray[25];

    }


    /**
     * method preload Preload and store images
     */
    preload() {
        // adapted from https://stackoverflow.com/questions/476679/preloading-images-with-jquery
        $.each(this.imgArray,(function () {
            $('<img />').attr('src', this).appendTo('body').css('display', 'none');
        }));
    }

    /**
     * method storeSrc Store attributes for the cards.
     */
    storeSrc() {
        // Clearing the array.
        this.cardsArray = [];

        // Building the array.
        for (let i = 0; i < (librarySettings.numberOfCards / 2); i++) {
            this.cardsArray.push(this.imgArray[i]);
            this.cardsArray.push(this.imgArray[i]);
        }

        // Shuffle the deck.
        this.cardsArray = shuffle(this.cardsArray);
    }

    /**
     * method createHTML creates the HTML for the cards.
     */
    createHTML() {
        // Empties the divs in #cards.
        $("#cards > div").each(function () {
            this.innerHTML = "";
        });

        // Create each card.
        let count = 0;
        $.each(this.cardsArray,(function () {
            //  Need to count 8 cards and go to the next div inside of cards.
            let divNum = count % 8;
            let divObj = $("#cards > div").get(divNum);
            $('<a href="#" />').attr('id', this).appendTo(divObj);
            count = incInt(count);
        }));

        // Turning all cards on to their back.
        $("#cards a").prop(innerHTML, '<img  src="images/back.png" alt="">');
    }

    /**
     * method fade Flips a card using a fade effect.
     * @param {libraryCard} card The card that needs to fade out.
     */
    fade(card) {
        // Card fades-out in half a second.
        card.imgObject.fadeOut(500);

        // Card flips over.
        if (card.isValid()) {
            // Switch from back to front.
            let src = "images/" + card.imgValue + ".png";
            card.imgObject.attr("src", src);
        } else {
            // Switch from front to back.
            card.imgObject.attr("src", this.back);
        }

        // Card fades-in in half a second.
        card.imgObject.fadeIn(500);
    }

    /**
     * method slide Flips a card using a slide effect.
     * @param {libraryCard} card The card that needs to slide away.
     */
    slide(card) {
        card.imgObject.animate({
            left: '-50%'
        }, 500, function () {
            card.imgObject.attr("src", this.blank);
            card.imgObject.css('left', '150%');
        });

        card.imgObject.next().animate(
            {left: '50%'},
            500
        );
    }
}

