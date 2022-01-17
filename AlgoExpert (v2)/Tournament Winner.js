function tournamentWinner(competitions, results) {
    const teams = {};
      
      for(let i = 0 ; i < competitions.length ; i++){
          const result = results[i] === 1 ? 0 : 1;
          const winningTeam = competitions[i][result];
          if(!teams[winningTeam]) teams[winningTeam] = 0;
          teams[winningTeam]++;
      }
      
      let winnerTeam, maxPoints = -Infinity;
      
      for(let team in teams){
          if(teams[team] > maxPoints){
              maxPoints = teams[team];
              winnerTeam = team;
          }
      }
      
    return winnerTeam;
  }
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;
  