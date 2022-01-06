const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'Henry',
        lastName: 'Winkler',
        age: 13
      },
      {
        firstName: 'Case',
        lastName: 'Miller',
        age: 12
      }
    ],
    _games: [
      {
        opponent: 'Mustangs',
        teamPoints: 31,
        opponentPoints: 12
      },
      {
        opponent: 'Broncos',
        teamPoints: 13,
        opponentPoints: 27
      },
      {
        opponent: 'Eagles',
        teamPoints: 18,
        opponentPoints: 18
      }
    ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints){
    let newGame = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this.games.push(newGame);
  }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Flamingos', 16, 32);
  team.addGame('Bears', 56, 21);
  team.addGame('Cats', 2, 43);
  
  console.log(team._games);
  
  