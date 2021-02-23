function tournamentWinner(competitions, results) {
    let teams = {};
      let max = 0;
      let winnerTeam = '';
      
      for(let i = 0 ; i < competitions.length ; i++){
          let index = results[i] == 1 ? 0 : 1;
          let team = competitions[i][index];
          
          if(teams[team]) teams[team] += 3;
          else teams[team] = 3;
      }
      
      for(let team in teams){
          if(teams[team] > max){
              max = teams[team];
              winnerTeam = team;
          }
      }
      
    return winnerTeam;
  }
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;
  