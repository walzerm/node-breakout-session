/**
 * @constructor
 * A mole object represents a mole in the game.
 *
 * Moles need 3 variables
 *  - this.timeSpentUp: the amount of time a mole spends on the board before being removed
 *
 *  - this.occupiedHole: A DOM element representing the hole that a mole occupies
 *
 *  - this.moleElement: A DOM element that is created when a mole is created. This element
 *                 should be appended to occupiedHole when a mole emerges
 *
 */
function Mole(minUpTime, maxUpTime){

    // Give this.timeSpentUp a number value between minUpTime and maxUpTime.
    // HINT: use Mole.prototype.getRandomBetween
    /* YOUR CODE HERE */
    this.timeSpentUp = this.getRandomBetween(minUpTime, maxUpTime);
    // this.removed needs a value
    /* YOUR CODE HERE */
    this.removed = false;
    // this.occupiedHole needs a value. it should be a DOM element
    // HINT: use Mole.prototype.selectHole
    /* YOUR CODE HERE */
    this.occupiedHole =  this.selectHole();
    // Create an HTML element to represent the Mole
    // and save it into this.moleElement
    // Don't forget to give our mole a proper css class!
    // Don't forget to call whackThisMole if the mole is clicked!
    /* YOUR CODE HERE */
    this.moleElement = $("<div class='mole'></div>")[0];
    $(this.moleElement).on("click", this.whackThisMole);

    // Moles always emerge when they are created.
     this.emerge();
}

/**
 * A mole emerges from it's mole hole!
 * This function must:
 *   mark that hole as occupied usinew ng the data-hole-occupied attribute.
 *   add the mole to the DOM. 
 *   use setTimeout() to remove the mole after this.timeSpentUp milliseconds
 *
 */
Mole.prototype.emerge = function() {
    $(this.occupiedHole).attr("data-hole-occupied", "true");
    $(this.occupiedHole).append(this.moleElement);
    var mole = this;
    setTimeout(function() {
        mole.removeMole()}, this.timeSpentUp);
    

};

/**
 * This function should change a mole from the default state, to the
 * whacked state.
 * 
 * It should use the global variable scoreBoard to update the score.
 * This should change the data-score attribute, as well as what the 
 * user can see on the screen.
 *
 * It should cause the foundLove.png heart to appear behind the mole.
 * 
 * Then after one second it should remove the mole from the DOM.
 */
Mole.prototype.whackThisMole = function() {
    var score = scoreBoard.attr("data-score");
    if (!this.removed){
        score++;
    }
    this.removed = true;
    scoreBoard.attr("data-score", score);
    scoreBoard.html(score);
    var moleInLove = $("<div class='in-love'></div>");
    $(this.parentElement).prepend(moleInLove);
    var mole = this;
    setTimeout(function() {
        $(mole.parentElement).slideUp()}, 1000);

};

/**
 * This function should remove the moleElement from the DOM.
 * It should also change the data-hole-occupied attribute back to
 * false so that other moles can occupy the hole. 
 */
Mole.prototype.removeMole = function() {

    $(this.occupiedHole).attr("data-hole-occupied", "false");
    $(this.occupiedHole).empty();

};
/**
 * Select an element from the DOM. The element must be one of the 
 * mole holes and it must have an attriute data-hole-occupied with
 * a value of false. 
 * 
 * If all those conditions are met, return an HTML element. 
 * If those conditions cannot be met (i.e. every hole is already occupied)
 * then return undefined.
 */
Mole.prototype.selectHole = function() {
    var tempArr = [];
    var randomHole = this.getRandomIntBetween(0, 9);

    for (var i = 0; i < $(".mole-hole").length; i++) {
        if ($(".mole-hole")[i].dataset.holeOccupied === 'false') {
            tempArr.push($(".mole-hole")[i]);
        }
    }
    if (tempArr.length === 0) {
        return undefined;
    } else {
        return tempArr[randomHole];
    }
};

/**
 * This must return a random number in between min and max.
 */
Mole.prototype.getRandomBetween = function(min, max) {
    return Math.random() * (max - min) + min;
};

/**
 * This must return an integer in between min and max
 */
Mole.prototype.getRandomIntBetween = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


