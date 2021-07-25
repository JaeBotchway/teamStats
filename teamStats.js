const team ={
    _players:[
      {firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11},
      {firstName: 'John',
       lastName: 'Williams',
       age: 25},
       {firstName: 'Jones',
       lastName: 'Latte'}
    ],
  
    _games:[
      {opponent: 'Broncos',
       teamPoints: 42,
       opponentPoints: 27
  },
   {opponent: 'Italia',
       teamPoints: 19,
       opponentPoints: 11
  },
   {opponent: 'Viking',
       teamPoints: 60,
       opponentPoints: 32
  }
    ],
  
  get players(){
    return this._players
  },
  get games(){
    return this._games
  },
  
  addPlayer(firstName,lastName,age){
   let player = {
     firstName,
       lastName,
       age,
  }
  this._players.push(player)
  },
  addGame(oppName,teamPoints,opponentPoints){
    let game ={
      opponent:oppName,
      points:teamPoints,
      oppPoints:opponentPoints,
    }
    this._games.push(game)
  }
  }
  
  team.addPlayer('Steph', 'Curry', 28)
  team.addPlayer('Lisa', 'Leslie', 44)
  team.addPlayer('Bugs', 'Bunny', 76)
  
  team.addGame('Giants', 70, 56)
  team.addGame('Warriors', 12, 20)
  team.addGame('Eagles', 100, 100)
  console.log(team.games)