const numbergenerator_div = document.getElementById("numbergenerator");
const teamgenerator_div = document.getElementById("teamgenerator");
const drinkgenerator_div = document.getElementById("drinkgenerator");
const result_div = document.getElementById("result");

function generateNumber() {
  var num = parseInt(prompt("Generate a random number from 1 to ?"));
  if (num < 2) {
  	window.alert("Pick a whole number greater than 1");
  }
  else if (num === null) {
    return;
  }
  else {
  	const Http = new XMLHttpRequest();
  	const url = 'https://www.random.org/integers/?num=1&min=1&max=' + num + '&col=1&base=10&format=plain&rnd=new';
  	Http.open("GET", url);
  	Http.send();
  	Http.onreadystatechange=function(){
  		if(this.readyState==4 && this.status==200){
        result_div.innerHTML = "Random number between 1 and " + num + ": " + Http.responseText;
  		}
  	}
  }
}

function generateTeam() {
  var numPlayers = parseInt(prompt("Enter the number of players:\n"));
  console.log(numPlayers);
  if (numPlayers === null) {
    return;
  }
  else if (Number.isNaN(numPlayers)) {
    result.innerHTML = "Number of players is invalid, try again."
    return;
  }
  var numTeams = parseInt(prompt("Enter the number of teams:\n"));
  if (numTeams === null) {
    return;
  }
  else if (Number.isNaN(numTeams)) {
    result.innerHTML = "Number of teams is invalid, try again."
    return;
  }
  if (numTeams > numPlayers) {
    result.innerHTML = "Number of teams is greater than number of players, try again."
    return;
  }
  var players = [];
  var teams = [];
  for (i = 0; i < numPlayers; i++){
    var phrase = "Enter player " + (i+1).toString() + "'s name:\n";
    player = prompt(phrase);
    players.push(player);
  }
  for (i = 0; i < numTeams; i++){
    teams.push([]);
  }
  for (i = 0; i < numPlayers; i++){
    var p = players[Math.floor(Math.random() * players.length)];
    var ind = players.indexOf(p);
    players.splice(ind, 1);
    var index = Math.floor(i/(numPlayers/numTeams));
    teams[index].push(" " + p);
  }
  var teamMessage = "";
  for (i = 0; i < numTeams; i++){
    teamMessage = teamMessage + "Team " + (i+1) + ":" + teams[i];
    if (i < numTeams - 1) {
      teamMessage = teamMessage + " | "
    }
  }
  result_div.innerHTML = teamMessage;
}

function main() {
  numbergenerator_div.addEventListener('click', function() {
    generateNumber();
  });

  teamgenerator_div.addEventListener('click', function() {
    generateTeam();
  });

  drinkgenerator_div.addEventListener('click', function() {
    result_div.innerHTML = "Try again tomorrow...";
  });
}

main();
