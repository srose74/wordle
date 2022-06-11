let wordleWord = randomWordle();


console.log (wordleWord);
console.log (compareWords('drone', 'aback'));
console.log (compareWords('board', 'aback'));
console.log (compareWords('aback', 'aback'));


const row1 = document.querySelector('input[id="14"]')
row1.addEventListener('input', (event) => {
    let guess = [];
    let row = '1';
    for(let i = 0;i<5;i++){
        let id = row + i.toString();
        guess[i] = document.getElementById(id).value;
    }
    updateClues(compareWords(guess, wordleWord));
});


function updateClues(result){
    for (let i = 0;i<5;i++){
        let row = '1'
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
    //Wordle Words
    let words = ["aback","abase","abate","abbey","abbot","abhor","abide","abled","abode","abort","about","above","abuse","abyss","acorn","acrid","actor","acute","adage","adapt","adept","admin","admit","adobe","adopt","adore","adorn","adult","affix","afire","afoot","afoul","after","again","agape","agate","agent","agile","aging","aglow","agony","agora","agree","ahead","aider","aisle","alarm"];
    const randomElement = words[Math.floor(Math.random() * words.length)];
    return randomElement;
}

//compares guesses against the wordle word of the day
function compareWords (guess, wordleWord){
    const result = [
        {letter: '', inPosition: false , exists: false},
        {letter: '', inPosition: false , exists: false},
        {letter: '', inPosition: false , exists: false},
        {letter: '', inPosition: false , exists: false},
        {letter: '', inPosition: false , exists: false}
    ];

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








