// Messi's Goal Total

// Use variables to find the sum of the goals Messi scored in 3 competitions
// Information

// Messi goal scoring statistics:
// Competition 	Goals
// La Liga 	43
// Champions League 	10
// Copa del Rey 	5
// Task

//     Create these three variables and store the appropriate values using the table above:

//     laLigaGoals
//     championsLeagueGoals
//     copaDelReyGoals

//     Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

// var laLigaGoals = 43;
// var championsLeagueGoals = 10;
// var copaDelReyGoals = 5;

// var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// another solution by user9639246 which is more dynamic and can account for extra variables by adding objects within the array

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

const goalScoringStatistics = [
    {
        competition: 'La Liga',
        goals: laLigaGoals,
    },
    {
        competition: 'Champions League',
        goals: championsLeagueGoals,
    },
    {
        competition: 'Copa del Ray',
        goals: copaDelReyGoals,
    }
]

const countGoals = arr => {
    let sum = 0;
    arr.forEach((item) => {
        sum += item.goals;
    });
    return sum;
}

var totalGoals = countGoals(goalScoringStatistics)

// very impressive, thank you!