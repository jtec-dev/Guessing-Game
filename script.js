    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let score = 0;
    console.log(randomNumber);
    
    let resultDisplay = document.getElementById('result');
    let scoreDisplay = document.getElementById('score');
    let submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', () => {
        let userGuess = parseInt(document.getElementById('guess').value);

        if (userGuess === randomNumber) {
            resultDisplay.textContent = 'Correct Answer! You WIN!';
            score++;
        } else if(userGuess !== randomNumber) {
            resultDisplay.textContent = 'INCORRECT. we don chop your Money lol.';
        }

        scoreDisplay.textContent = score;
    });