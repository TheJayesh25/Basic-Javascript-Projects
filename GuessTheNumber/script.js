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
        // if (noOfAttempts>0){}
        noOfAttempts--;
        // console.log(noOfAttempts);
        prevGuess.push(userGuess);
        if (userGuess === guess){
            console.log('Hurrah!');
            previousGuesses(noOfAttempts);
            updateGuessesRemaining();
            updateResults();
            pausePlay();
        }
        else{
            console.log('noooo');
            previousGuesses(noOfAttempts);
            updateGuessesRemaining();
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

const updateResults = () => {
    const results = document.createElement('p');
    results.setAttribute('id','results');
    results.appendChild(document.createTextNode(`Congratulations you guessed the right number in the ${attempts[10-noOfAttempts]} attempt`));
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


// console.log(guess);



let flag = true;

// console.log(guess);
let i = 10;
let count = 0;
// const game = (flag,i,count) => {
//     if (flag === true && i>=0){
//         document.getElementById('subt').addEventListener('click',function (e){
//             i--;
//             count ++;
//             // console.log(i,count);
//             // console.log(i);
//             // console.log(count);
//             const val = document.getElementById('guessField').value;
//             // console.log(typeof val);
//             console.log(val);
//             console.log(i,count);

//             if (Number(val) === guess){
//                 const results = document.createElement('p');
//                 results.setAttribute('class','result');
//                 results.appendChild(document.createTextNode(`Congratulations you guessed it right in the ${attempts[count]} attempt!`))
//                 // document.querySelector('#guessField').value = '';

//                 const reset = document.createElement('input');
//                 reset.setAttribute('type','button');
//                 reset.setAttribute('class','guessSubmit');
//                 reset.setAttribute('id','reset');
//                 reset.setAttribute('value','Reset');

//                 // reset.appendChild(document.createTextNode(`Congratulations you guessed it right in the ${attempts[count]} attempt!`))
//                 document.querySelector('#subt').parentElement.appendChild(reset);

//                 document.getElementById('reset').addEventListener('click',function (e){
//                     document.querySelector('#guessField').value = '';
//                     document.querySelector('.result').textContent = '';
//                     document.querySelector('.guesses').textContent = '';
//                     document.querySelector('.lastResult').textContent = `10`;

//                     const removeReset = document.querySelector('#reset');
//                     removeReset.remove();
//                 },false)

//                 document.querySelector('.result').replaceWith(results);
//                 document.querySelector('.guesses').textContent = `${val}`;
//                 document.querySelector('.lastResult').textContent = `${i}`;
//                 flag = false;
//             }
//             else{
//                 document.querySelector('.guesses').textContent = `${val}`;
//                 document.querySelector('.lastResult').textContent = `${i}`;
//                 game(flag,i);
//             }
//         },false)
//     }
// }

// game(flag,i,count);





























// const playButton = document.getElementById('playButton');
//     const gameContainer = document.getElementById('gameContainer');
//     const form = document.getElementById('guessForm');
//     const previousGuessesList = document.getElementById('previousGuesses');
//     const guessesRemaining = document.getElementById('guessesRemaining');
//     let randomNum, remainingAttempts;

//     playButton.addEventListener('click', function() {
//       randomNum = Math.floor(Math.random() * 100) + 1;
//       remainingAttempts = 10;
//       playButton.style.display = 'none';
//       gameContainer.style.display = 'block';
//     });

//     form.addEventListener('submit', function(event) {
//       event.preventDefault();
//       const userGuess = parseInt(document.getElementById('userGuess').value);
      
//       if (userGuess === randomNum) {
//         displayResult(`Congratulations! You guessed the correct number: ${randomNum}`);
//         form.style.display = 'none';
//       } else {
//         remainingAttempts--;
//         if (remainingAttempts === 0) {
//           displayResult(`Game over! The correct number was ${randomNum}.`);
//           form.style.display = 'none';
//         } else {
//           displayResult(`Incorrect! ${userGuess} is not the number. Try again.`);
//         }
//       }
      
//       updateGuesses(userGuess);
//       updateGuessesRemaining(remainingAttempts);
//     });
    
//     function displayResult(message) {
//       alert(message);
//     }
    
//     function updateGuesses(guess) {
//       const guessItem = document.createElement('li');
//       guessItem.textContent = `Guess: ${guess}`;
//       previousGuessesList.appendChild(guessItem);
//     }
    
//     function updateGuessesRemaining(remaining) {
//       guessesRemaining.textContent = `Guesses Remaining: ${remaining}`;
//     }