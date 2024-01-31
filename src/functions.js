function numPointsScored(name){
    let game = gameObject();
    let homePlayers = game.home.players; //get the list of all the home players
    let awayPlayers = game.away.players; //get the list of all the away players

    let player = homePlayers[name]; //search in the list of home players for the name that has been passed in

    if (player) { //if it isnt undefined and has returned an object
    return player.points; //get the points on the player object
}

player = awayPlayers[name]; //otherwise, search the away players for the name and do the same below

if (player) {
    return player.points;
}

return "could not find player"; //should only reach here is not found in either home or away players
}

function shoeSize(name){
    let game = gameObject();
    let homePlayers = game.home.players; 
    let awayPlayers = game.away.players; 
    
    let player = homePlayers[name]; 
    
    if (player) { 
        return player.shoe; 
    }
    
    player = awayPlayers[name]; 

    if (player) {
        return player.shoe;
    }
    
    return "could not find player"; 
    }

    // function teamColors(team){
    //     let game = gameObject();
        
    //       if (team === "home"){
    //         return game["home"]["colors"];
    //       } else if (team === "away"){
    //         return game["away"]["colors"];
    //       }
    //       else {
    //       return "could not find team";
    //          }
    //     }   

    //take the name of a team as an argument
    //return the colors of that team
    function teamColors(name){
        let game = gameObject();
        for (let key in game) { //this wil loop through the TOP LEVEL keys of the object (home/away)
            let team = game[key]; //this gets the OBJECT that the home/away keys reference
            console.log("This is the key i am comparing: " + key)

            if (team.teamName === name) { //this compares the teamName property on the object with the "name" argument that has been passed in
                console.log("Found it")
                return team.colors //this returns the colors property of the team (which is an array)
            }else{
                console.log("Didnt find it") // logs that we didnt find anything
            }
        }
    }    
        
function teamNames(){
    let game = gameObject();
    let teamNames = [];
    
    for (let key in game) { 
        let team = game[key];
        teamNames.push(team.teamName);
    }
  
    return teamNames;
  }

function playerNumbers(name){
    let game = gameObject();
    let numbers = []
    for (let key in game) { 
        let team = game[key];
        if (team.teamName === name){
            for (let playerName in team.players) {
                let player = team.players[playerName];
                numbers.push(player.number)
            }
        }
    }
        return numbers;
}

function playerStats(playerName){
    let game = gameObject();
    let stats = {};
    for (let key in game) { 
        let team = game[key];
        stats = team.players[playerName]

        if (stats) {
            return stats
        }else{
            console.log("couldnt find player")
        }
    }
}