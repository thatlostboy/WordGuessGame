
// found a site to convert csv to json so it can be searched easily
// https://www.csvjson.com/csv2json
var wordlist = [
    {
        "word": "peppa pig",
        "category": "cartoon",
        "hint": "oink oink oink"
    },
    {
        "word": "mickey mouse",
        "category": "cartoon",
        "hint": "helps run disneyland"
    },
    {
        "word": "dora",
        "category": "cartoon",
        "hint": "she likes adventures"
    },
    {
        "word": "spongebob",
        "category": "cartoon",
        "hint": "lives in the sea"
    },
    {
        "word": "curious george",
        "category": "cartoon",
        "hint": "wonders about a lot of things and loves bananas"
    },
    {
        "word": "charlotte's webb",
        "category": "cartoon",
        "hint": "book that become a cartoon about a pig and a spider"
    },
    {
        "word": "wilbur's great adventure",
        "category": "cartoon",
        "hint": "a pig who takes care of his old friend's children"
    },
    {
        "word": "GI Joe",
        "category": "movie",
        "hint": "real american hero with the rock"
    },
    {
        "word": "Trolls",
        "category": "movie",
        "hint": ""
    },
    {
        "word": "Incredibles",
        "category": "movie",
        "hint": ""
    },
    {
        "word": "elsa",
        "category": "movie",
        "hint": "she can make ice from her fingers"
    },
    {
        "word": "coco",
        "category": "movie",
        "hint": "skeletons in the world"
    },
    {
        "word": "lego movie",
        "category": "movie",
        "hint": ""
    },
    {
        "word": "moana",
        "category": "movie",
        "hint": ""
    },
    {
        "word": "boss baby",
        "category": "movie",
        "hint": ""
    },
    {
        "word": "dark knight",
        "category": "movie",
        "hint": ""
    },
    {
        "word": "frozen",
        "category": "movie",
        "hint": ""
    },
    {
        "word": "legos",
        "category": "toys",
        "hint": ""
    },
    {
        "word": "num noms",
        "category": "toys",
        "hint": ""
    },
    {
        "word": "nintendo",
        "category": "game machine",
        "hint": ""
    },
    {
        "word": "xbox",
        "category": "game machine",
        "hint": ""
    },
    {
        "word": "barbies",
        "category": "toys",
        "hint": ""
    },
    {
        "word": "hatchimals",
        "category": "toys",
        "hint": ""
    },
    {
        "word": "melissa and doug",
        "category": "toys",
        "hint": ""
    },
    {
        "word": "bears",
        "category": "toys",
        "hint": ""
    },
    {
        "word": "little tykes",
        "category": "toys",
        "hint": ""
    },
    {
        "word": "hello kitty",
        "category": "toys",
        "hint": ""
    },
    {
        "word": "ping pong",
        "category": "game",
        "hint": ""
    },
    {
        "word": "monopoly",
        "category": "game",
        "hint": ""
    },
    {
        "word": "cycling",
        "category": "sport",
        "hint": ""
    },
    {
        "word": "jenga",
        "category": "game",
        "hint": ""
    },
    {
        "word": "hotwheels",
        "category": "toys",
        "hint": ""
    },
    {
        "word": "cart",
        "category": "toys",
        "hint": ""
    },
    {
        "word": "steak",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "escargot",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "foie gras",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "shrimp",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "scallop",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "lobster",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "abalone",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "creme brulee",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "macarons",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "sushi",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "salmon",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "tuna",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "bluefin tuna",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "salad",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "egg salad",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "arugula",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "romaine lettuce",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "beets",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "sweet potatoe",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "gelato",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "sorbet",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "asparagus",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "noodle",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "ramen",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "shrimp scampi",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "kabob",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "poke bowl",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "latte",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "orange juice",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "watermelon",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "strawberry",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "dragonfruit",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "logan",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "orange",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "tangerine",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "jujube",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "wax apple",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "pineapple",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "grapes",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "blueberry",
        "category": "foods wendy likes",
        "hint": ""
    },
    {
        "word": "blackberry",
        "category": "foods wendy likes",
        "hint": ""
    }
]


var newgame = new Hangman();
var maxTries = 15;
var wincount = 0;
var losecount = 0;
var placeholder = "_";
var ignorekeys = false;  // used to suppress input to display congrats when they win
newword = randomword(wordlist);
newgame.init(newword['word'], maxTries, placeholder);
updatePage(wincount, newgame.tries, newgame.wrongLettersGuessed, newgame.displayword, newword['category']);


// play game!    if win or lose, reinitalize with new word!   
document.onkeyup = function (event) {
    if (!ignorekeys) {  // while not ignore keys, do this.  
        var keypress = event.key;
        endgame = newgame.guess(keypress);


        if (endgame) {
            // since game ended, suppress keys, and check if they won or lost
            ignorekeys = true;
            if (newgame.win) {
                wincount++;
                updatePage(wincount, newgame.tries, newgame.wrongLettersGuessed, newgame.displayword, newword['category']);
                // play winning message
                document.querySelector("#endmessage").textContent = "You did it!!!  The word was "
                document.querySelector("#revealed").innerHTML = newgame.word;
                document.querySelector("#answer").className="showobject";

                // play applause
                var x = document.querySelector("#audioapplause");
                x.play();


                // change to winning pic
                var y = document.querySelector("#resultPic");
                y.src = "assets/images/" + randompic("win", 8)
                y.alt = "WINNER!!!";

            } else {
                losecount++;
                updatePage(wincount, newgame.tries, newgame.wrongLettersGuessed, newgame.displayword, newword['category']);

                // play winning message
                document.querySelector("#endmessage").textContent = "Awww.  You missed the word.  The word was "
                document.querySelector("#revealed").innerHTML = newgame.word;
                document.querySelector("#answer").className="showobject";

                // play sad song
                var x = document.querySelector("#audiodisappointed");
                x.play();

                //change to sad pic
                var y = document.querySelector("#resultPic");
                y.src = "assets/images/" + randompic("lose", 4)
                y.alt = "LOST!";
            }

            wait6();  // waits for 6 seconds to remove pic, reveal words, pick new word, and finally allow keystrokes

        } else {
            updatePage(wincount, newgame.tries, newgame.wrongLettersGuessed, newgame.displayword, newword['category']);
        }
    }

}

// function called to update the page
function updatePage(wincount, tries, wrongguess, displayword, category) {
    document.querySelector("#wrongguess").innerHTML = wrongguess;
    document.querySelector("#wins").innerHTML = wincount;
    // document.querySelector("#losses").innerHTML = losecount;
    document.querySelector("#tries").innerHTML = tries;

    document.querySelector("#displayword").innerHTML = displayword;
    document.querySelector("#category").innerHTML = category;
}

function wait6() {
    setTimeout(function () {
        ignorekeys = false;
        console.log("waited for 5 seconds");
        var y = document.querySelector("#resultPic");
        y.src = "#";
        y.alt = "";
        document.querySelector("#answer").className="hideobject";

        newword = randomword(wordlist);
        newgame.init(newword['word'], maxTries, placeholder);
        updatePage(wincount, newgame.tries, newgame.wrongLettersGuessed, newgame.displayword, newword['category']);
    }, 6000);
}

//return path of random picture picture winner1 to winnerx
function randompic(winOrLose, range) {
    // choose among file winner1.gif to winnerX.gif where X is the range
    picnum = Math.floor(Math.random() * range) + 1
    if (winOrLose === "win") {
        picFilename = "winner" + picnum + ".gif";
    } else if (winOrLose === "lose") {
        picFilename = "loser" + picnum + ".gif";
    }
    console.log(picFilename);
    return picFilename;
}


function randomword(listObj) {
    // chose a random item from a list of dictionaries
    range = listObj.length;
    arraynum = Math.floor(Math.random() * range);
    console.log("I am in function randomword and assigned ", listObj[arraynum])
    return listObj[arraynum];
}



function Hangman() {
    // example usage:
    //  newgame = new Hangman();
    //  newgame.init("rabbit", 10, "*");
    //  two methods: init and guess
    //  properties should be monitorted for status
    this.word;  /// original word with original case

    this.testword;
    this.displayword;  // word with placeholder that is displayed on screen such as for rabbit.  it will dispaly r_bb_t 
    this.win = false;
    this.tries;
    this.wrongLettersGuessed = [];  // array to hold values of all letters guessed that is incorrect
    this.placeholder;

    // this will initialize all values to start a new game..  
    this.init = function (word, maxguess, placeholder) {

        this.word = word;  /// original word with original case

        this.testword = word.toLowerCase();
        this.displayword = this.testword;  // word with placeholder that is displayed on screen
        this.win = false;
        this.tries = maxguess;
        this.wrongLettersGuessed = [];
        this.placeholder = placeholder;  // this is the character displayd insead of the word
        var a2zPattern = new RegExp("[a-z]", "g"); // look for all a-z
        this.displayword = this.displayword.replace(a2zPattern, this.placeholder); // change all alphabet's to placeholer
        return this.displayword;
    }

    this.guess = function (letterguess) {
        // returns true if game is over.  Game is over when all the letters are revealed or when out of tries
        // returns false if game is not over.   Still have tries left and/or word is still not revealed  


        // make sure it's an alphabet key that was pressed to process guess. case insensitive search of a-z
        letterguess = letterguess.toLowerCase();
        if (letterguess.match(/^[a-z]$/i)) {  //case insensitive search for letter
            console.log("Valid Letter from a-z")
            // let's see if the letter is already in the displayword, if so, ignore guess and return false (game is not over)
            if (this.displayword.indexOf(letterguess) > -1) {
                console.log(letterguess, " is already in ", this.displayword, "win: ", this.win, " tries: ", this.tries, " guesses: ", this.wrongLettersGuessed);
                return false;

                // if not in the displayword, let's see if the guess was already made, 
            } else if (this.wrongLettersGuessed.indexOf(letterguess) > -1) {
                console.log(letterguess, " doesnt work! ", this.displayword, "win: ", this.win, " tries: ", this.tries, " guesses: ", this.wrongLettersGuessed);
                return false;

                // if not in display word and guess not already made, let's see if it's part of the atual word.   
            } else if (this.testword.indexOf(letterguess) > -1) {
                console.log(letterguess, " is in ", this.word, "!");

                // create an array to represent displayword since strings are immutable.   will rejoin into string later
                var newdisplaywordArray = [];

                // update the displayword with the the letter replacing the placehoder
                // eg.  * * * * * becomes * e * * *
                for (i = 0; i < this.testword.length; i++) {
                    // checking each charcter for matching
                    if (this.testword[i] === letterguess) {
                        newdisplaywordArray[i] = this.word[i];  // to preserve original case
                    } else {
                        newdisplaywordArray[i] = this.displayword[i];
                    }
                    // console.log(i, " testing: ", newdisplaywordArray);
                }

                // recombine to share displayword
                this.displayword = newdisplaywordArray.join("");

                // check if we have won, if so, mark the win flag
                console.log(letterguess, " looks good! ", this.displayword, "win: ", this.win, " tries: ", this.tries, " guesses: ", this.wrongLettersGuessed);
                // this confirms that there are no "placeholders" in the word, if there is no placeholder, then the game is over 
                if (this.displayword.indexOf(this.placeholder) > -1) {
                    return false;
                } else {
                    this.win = true;
                    return true;
                }


            } else { // looks like the guess is not in the actual word, so we're going to lose a tries attempt
                // decrement tries counter
                this.tries--;
                // append to list of wrong letters
                this.wrongLettersGuessed.push(letterguess);
                console.log(letterguess, " isn't one! ", this.displayword, "win: ", this.win, " tries: ", this.tries, " guesses: ", this.wrongLettersGuessed);

                //if out of tries, then game should be over
                if (this.tries === 0) {
                    return true;
                } else {
                    return false;
                }
            }

        } else {
            console.log("Not a letter");
        }
    }
}


