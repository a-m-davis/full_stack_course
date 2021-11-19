const getUserChoice = (userInput) => { 
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log('ERROR: Must input rock, paper, or scissors.');
    }
  }
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'The game is a tie.';
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'The computer has won.';
      } else { 
         return 'You won!';
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'You won!';
      } else {
        return 'The computer has won.';
      }
    }
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'The computer has won.';
      } else {
          return 'You won!';
      }
    }
    if (userChoice === 'bomb'){
      return 'You won!';
    }
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  
  