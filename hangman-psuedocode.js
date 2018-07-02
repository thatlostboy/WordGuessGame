




initialize document screen

wordlist = array;

wincount = 0
losecount = 0

endless loop start:  


    get random word from list. (splice it off so the words are unique)
    if no word from list, reset.  
      
    initialize screen

    gamecontinue = true

    var currentgame  = hangmanobject(word, maxguess, placeholer = "_")

    while (gamecontinue):
        input = keyboardvalue
        gamecontinue = not (currentgame.guess(input))  //if not complete, continue
        update HTML with:
            currentgame.displayword
            currentgame.tries count
            currentgame.lettersguessed

    if (currentgame.win):
        wincount ++
        update HTML with fun SVG  
    else:
         losecount ++
         update HTML with depressing lost and depressing giphy
        

endless loo end:
        





class hangman  (word, maxguess, placeholder)

     this.word = word;
     this.maxguess: maxguess;

     this.testword = word.tolowercase()   # ignores capital 
     this.displayword = word;
     this.win = false
     this.tries = maxguess
     this.lettersguessed = ""
     this.placeholder = "_"

[a-z]/
        returns true if game is done
        returns false if game is not done

         letterguess = x
         if it's a letter (a-z)
            if (this.displayword.indexOf(letter)):  
               console.log("already in hangman. use another guess");
               return false
           
            else if (this.lettersguessed.indexof(letter)): // not on list of unmatched
               console.log("already guessed and didn't work.  use another guess");
               return false
          
            else if (this.testword.indexOf(letter)): // check if it's on the word
                pattern = ""
                result = testword.match(pattern)
                console.log('nice job. you found a letter!')
                    regex = new RegExp (letter, "g")
                    result = str.match(regex)
                update the displayword with new character 
                    for (i=0; i<length, i++)
                        if testword[i] === letter:  
                             displayword[i] = word[i]

                if (this.displaword.indexof(this.placeholder of "_") > -1) 
                    console.log("okay.  still some more to go!  ") 
                    return false  (there re still some underscores left to flip)
                else 
                    console.log("you are done! you win!")
                    this.win = true   (if no more underscores, player wins!)
                    return true
            else {
              append letter to lettersguessed
              this.tries = --
              console("nope.  will add it to list of stuff already checked and dcrement tries")
              if this.tries === 0:   // game ends out of tries
                  return true
            } 
        message = keypressed + displayword + testword + tries + lettersguessed
        console.log(message)
        
     }
 	
      








// Constructor function for Person objects
function testcounter(count) {
    this.counter = count;
    this.decrement = function() {
        this.counter--;
        return(this.counter);
    };
}
