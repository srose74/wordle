//set the Wordle Word of the Day Randomly
let wordleWord = randomWordle();
console.log (wordleWord);

//Event listener for Row 1
const row1 = document.querySelector('input[id="14"]')
row1.addEventListener('input', (event) => {
    const row = '1';
    let guess = getWordleGuess(row);

    //if a valid guess, i.e. in Wordle List
    if (guess){
        updateClues(compareWords(guess, wordleWord), row);
    }
    
});

//Event listener for Row 2
const row2 = document.querySelector('input[id="24"]')
row2.addEventListener('input', (event) => {
    const row = '2';
    let guess = getWordleGuess(row);
    
    //if a valid guess, i.e. in Wordle List
    if (guess){
        updateClues(compareWords(guess, wordleWord), row);
    }
});

//Event listener for Row 3
const row3 = document.querySelector('input[id="34"]')
row3.addEventListener('input', (event) => {
    const row = '3';
    let guess = getWordleGuess(row);
    
    //if a valid guess, i.e. in Wordle List
    if (guess){
        updateClues(compareWords(guess, wordleWord), row);
    }
});

//Event listener for Row 4
const row4 = document.querySelector('input[id="44"]')
row4.addEventListener('input', (event) => {
    const row = '4';
    let guess = getWordleGuess(row);
    
    //if a valid guess, i.e. in Wordle List
    if (guess){
        updateClues(compareWords(guess, wordleWord), row);
    }
});

//Event listener for Row 5
const row5 = document.querySelector('input[id="54"]')
row5.addEventListener('input', (event) => {
    const row = '5';
    let guess = getWordleGuess(row);
    
    //if a valid guess, i.e. in Wordle List
    if (guess){
        updateClues(compareWords(guess, wordleWord), row);
    }
});

//Event listener for Row 6
const row6 = document.querySelector('input[id="64"]')
row6.addEventListener('input', (event) => {
    const row = '6';
    let guess = getWordleGuess(row);
    
    //if a valid guess, i.e. in Wordle List
    if (guess){
        updateClues(compareWords(guess, wordleWord), row);
    }
});

//Gets the Wordle Guess from the Wordle Interface
//Pass in the row of the wordle to check
function getWordleGuess(row){
    
    //creates an array to capture the guess
    let guess = [];
    
    //gets each letter from the boxes in the row
    for(let i = 0;i<5;i++){
        let id = row + i.toString();
        guess[i] = document.getElementById(id).value;
    }

    //check if guess is in the list of wordle words
    if(checkWordleList(guess)){
        //return the guess
        return guess; 
    }else {
            console.log('Not in word list')
    
            for(let i = 0;i<5;i++){
                let id = row + i.toString();
                document.getElementById(id).value = '';
            }
        return false;
    }  
}

//updates the colour of the boxes on the wordle input based on correct letters
function updateClues(result, row){
    for (let i = 0;i<5;i++){
        let id = row + i.toString();
        let box = document.getElementById(id);
        if(result[i].inPosition){
            box.setAttribute('class', 'green');
        }else if(result[i].exists){
            box.setAttribute('class', 'yellow');
        }else{
            box.setAttribute('class', 'grey');
        }   
    }
}

//Select a random wordle word
function randomWordle (){
    
    //get wordle list
    const words = wordleList();
    //generate a random Wordle Word
    const randomWordle = words[Math.floor(Math.random() * words.length)];
    //return Wordle Word
    return randomWordle;
}

//compares guesses against the wordle word of the day
function compareWords (guess, wordleWord){
    
    //create an array of objects to capture results of comparison
    const result = [
        {letter: '', inPosition: false , exists: false},
        {letter: '', inPosition: false , exists: false},
        {letter: '', inPosition: false , exists: false},
        {letter: '', inPosition: false , exists: false},
        {letter: '', inPosition: false , exists: false}
    ];

    //loop through every letter in the word and capture result    
    for (let i = 0;i<wordleWord.length;i++){
        if (guess[i].toLowerCase() === wordleWord[i] ){
            result[i].letter = guess[i].toUpperCase();
            result[i].inPosition = true;
        } else if (wordleWord.match(guess[i].toLowerCase())){
                result[i].letter = guess[i].toUpperCase();
                result[i].exists = true;
        } else {
            result[i].letter = guess[i].toUpperCase();
        }
    }
        //return result of comparison
        return result;
}

//check if guess is in the Wordle List
function checkWordleList(guess){
    const words = wordleList();

    //create found boolean
    let found = false;
    
    //check if the word exists in the Wordle list
    for (let word of words){ 
        if (word === guess.join('')){    
            found = true;
        }
    }

    //return result of found
    return found;
}

//returns the Wordle List
function wordleList (){

    let words = ["aback","abase","abate","abbey","abbot","abhor",
    "abide","abled","abode","abort","about","above","abuse",
    "abyss","acorn","acrid","actor","acute","adage","adapt",
    "adept","admin","admit","adobe","adopt","adore","adorn",
    "adult","affix","afire","afoot","afoul","after","again",
    "agape","agate","agent","agile","aging","aglow","agony",
    "agora","agree","ahead","aider","aisle","alarm","album",
    "alert","algae","alibi","alien","align","alike","alive",
    "allay","alley","allot","allow","alloy","aloft","alone",
    "along","aloof","aloud","alpha","altar","alter","amass",
    "amaze","amber","amble","amend","amiss","amity","among",
    "ample","amply","amuse","angel","anger","angle","angry",
    "angst","anime","ankle","annex","annoy","annul","anode",
    "antic","anvil","aorta","apart","aphid","aping","apnea",
    "apple","apply","apron","aptly","arbor","ardor","arena",
    "argue","arise","armor","aroma","arose","array","arrow",
    "arson","artsy","ascot","ashen","aside","askew","assay",
    "asset","atoll","atone","attic","audio","audit","augur",
    "aunty","avail","avert","avian","avoid","await","awake",
    "award","aware","awash","awful","awoke","axial","axiom",
    "axion","azure","bacon","badge","badly","bagel","baggy",
    "baker","baler","balmy","banal","banjo","barge","baron",
    "basal","basic","basil","basin","basis","baste","batch",
    "bathe","baton","batty","bawdy","bayou","beach","beady",
    "beard","beast","beech","beefy","befit","began","begat",
    "beget","begin","begun","being","belch","belie","belle",
    "belly","below","bench","beret","berry","berth","beset",
    "betel","bevel","bezel","bible","bicep","biddy","bigot",
    "bilge","billy","binge","bingo","biome","birch","birth",
    "bison","bitty","black","blade","blame","bland","blank",
    "blare","blast","blaze","bleak","bleat","bleed","bleep",
    "blend","bless","blimp","blind","blink","bliss","blitz",
    "bloat","block","bloke","blond","blood","bloom","blown",
    "bluer","bluff","blunt","blurb","blurt","blush","board",
    "boast","bobby","boney","bongo","bonus","booby","boost",
    "booth","booty","booze","boozy","borax","borne","bosom",
    "bossy","botch","bough","boule","bound","bowel","boxer",
    "brace","braid","brain","brake","brand","brash","brass",
    "brave","bravo","brawl","brawn","bread","break","breed",
    "briar","bribe","brick","bride","brief","brine","bring",
    "brink","briny","brisk","broad","broil","broke","brood",
    "brook","broom","broth","brown","brunt","brush","brute",
    "buddy","budge","buggy","bugle","build","built","bulge",
    "bulky","bully","bunch","bunny","burly","burnt","burst"];
   
    return words;

}








