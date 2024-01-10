document.getElementById('guessForm').addEventListener('submit', function(e) {
    // search(document.getElementById('searchText'));
    e.preventDefault();
}, false);

let attempts = {
    1:'first',
    2:'second',
    3:'third',
    4:'fourth',
    5:'fifth',
    6:'sixth',
    7:'seventh',
    8:'eigth',
    9:'ninth',
    10:'last'
}

let won = false;

const playButton = document.querySelector('#playButton');
const gameContainer = document.querySelector('#gameContainer');

let guess, noOfAttempts;
playButton.addEventListener('click', function (e){
    guess = Math.floor(Math.random()*100)+1;
    noOfAttempts = 10;
    playButton.style.display = 'none';
    gameContainer.style.display = 'block';
    console.log(guess);
    // return [guess,noOfAttempts]
})

const submit =  document.querySelector('#submit');
let prevGuess = [];
submit.addEventListener('click', function(e){
    const userGuess = parseInt(document.querySelector('#userGuess').value);
    if (userGuess>=1 && userGuess<=100){
        if (noOfAttempts>0){
            noOfAttempts--;
            // console.log(noOfAttempts);
            prevGuess.push(userGuess);
            if (userGuess === guess){
                console.log('Hurrah!');
                previousGuesses(noOfAttempts);
                updateGuessesRemaining();
                won = true;
                updateResults(won);
                pausePlay();
                playAgain();
            }
            else{
                console.log('noooo');
                previousGuesses(noOfAttempts);
                updateGuessesRemaining();
            }
        }
        else{
            pausePlay();
            updateResults(won);
            playAgain();
        }

    }
    
    // console.log(userGuess);
})
// console.log(submit);

const previousGuesses = (noOfAttempts) => {
    const previousGuesses = document.createElement('p');
    previousGuesses.setAttribute('id','previousGuesses');
    previousGuesses.style.display = 'inline';
    if (noOfAttempts === 9){
        previousGuesses.appendChild(document.createTextNode(`${prevGuess[prevGuess.length-1]}`));        
    }
    else{
        previousGuesses.appendChild(document.createTextNode(`, ${prevGuess[prevGuess.length-1]}`));
    }
    // previousGuesses.appendChild(document.createTextNode(`${prevGuess[prevGuess.length-1]}`));
    document.querySelector('#previousGuesses').append(previousGuesses);
}

const updateGuessesRemaining = () => {
    // noOfAttempts-- ;
    const guessesRemaining = document.createElement('p');
    guessesRemaining.setAttribute('id','guessesRemaining');
    guessesRemaining.appendChild(document.createTextNode(`Guesses Remaining: ${noOfAttempts}`));
    document.querySelector('#guessesRemaining').replaceWith(guessesRemaining);
}

const updateResults = (won) => {
    const results = document.createElement('p');
    results.setAttribute('id','results');
    if (won){
        results.appendChild(document.createTextNode(`Congratulations you guessed the right number in the ${attempts[10-noOfAttempts]} attempt 🎉`));
    }
    else{
        results.appendChild(document.createTextNode(`Oops you ran out of attempts 😕`));
    }
    
    document.querySelector('#results').replaceWith(results);
}

const pausePlay = () => {
    const submit = document.createElement('input');
    submit.setAttribute('type','submit');
    submit.setAttribute('class','submit');
    submit.setAttribute('id','submit2');
    submit.setAttribute('value','Submit');
    document.querySelector('#submit').replaceWith(submit);
    document.getElementById('submit2').addEventListener('click',function(e){
        document.querySelector('.submit').setCustomValidity('Please click on Play Again if you want to continue!')
        document.querySelector('.submit').reportValidity();
    })
}

const playAgain = () =>{
    const playAgain = document.createElement('input');
    playAgain.setAttribute('type','button');
    playAgain.setAttribute('class','play');
    playAgain.setAttribute('id','play');
    playAgain.setAttribute('value','Play Again?');
    document.querySelector('#results').parentElement.appendChild(playAgain);
    // document.getElementById('submit2').addEventListener('click',function(e){
    //     document.querySelector('.submit').setCustomValidity('Please click on Play Again if you want to continue!')
    //     document.querySelector('.submit').reportValidity();
    // })
}