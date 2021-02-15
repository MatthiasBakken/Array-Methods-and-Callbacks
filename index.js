import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

// {
//     "Year": 1930,
//     "Datetime": "13 Jul 1930 - 15:00",
//     "Stage": "Group 1",
//     "Stadium": "Pocitos",
//     "City": "Montevideo",
//     "Home Team Name": "France",
//     "Home Team Goals": 4,
//     "Away Team Goals": 1,
//     "Away Team Name": "Mexico",
//     "Win conditions": "",
//     "Attendance": 4444,
//     "Half-time Home Goals": 3,
//     "Half-time Away Goals": 0,
//     "Referee": "LOMBARDI Domingo (URU)",
//     "Assistant 1": "CRISTOPHE Henry (BEL)",
//     "Assistant 2": "REGO Gilberto (BRA)",
//     "RoundID": 201,
//     "MatchID": 1096,
//     "Home Team Initials": "FRA",
//     "Away Team Initials": "MEX"
//   },

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
let game = fifaData.filter(game => game.Year == 2014 && game.Stage.toLowerCase() == "final")
game = game[0];
console.log(game["Home Team Name"]);
//(b) Away Team name for 2014 world cup final
console.log(game["Away Team Name"]);
//(c) Home Team goals for 2014 world cup final
console.log(game["Home Team Goals"]);
//(d) Away Team goals for 2014 world cup final
console.log(game["Away Team Goals"]);
//(e) Winner of 2014 world cup final */
console.log(game["Home Team Goals"] > game["Away Team Goals"] ? game["Home Team Name"] : game["Away Team Name"])

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(games) {
   return games.filter(game => game.Stage.toLowerCase() == "final")
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(games, callback) {
    let finalGames = callback(games);
    let years = [];
    // console.log(finalGames);
    for (let i = 0; i < finalGames.length; i++) {
        if (years.includes(finalGames[i].Year)) {
            return;
        } else {
            years.push(finalGames[i].Year)
        }
    }
    // console.log(years);
    return years;
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(games, callback) {
    let winners = [];
    let finalGames = callback(games);
    for (let i = 0; i < finalGames.length; i++) {
        finalGames[i]["Home Team Goals"] > finalGames[i]["Away Team Goals"] ? 
        winners.push(finalGames[i]["Home Team Name"]) :
        winners.push(finalGames[i]["Away Team Name"])
    }
    return winners;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(/* code here */) {
    /* code here */
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(/* code here */) {
   /* code here */
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
