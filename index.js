//importing 
var chalk = require('chalk');
var readline = require('readline-sync');


var score = 0;
//questions

questions = [
    {
        question: '\nQ:Wanda Maximoff has done some magic on Hulk and he is on his way to destroy a city, whom do you send to stop Hulk ?',
        options: ['Captain America', 'Black Widow', 'Iron Man', 'Ant Man'],
        answer: '2'
    },
    {
        question: '\nQ: Name Thor`s hammer?',
        options: ['Vanir', 'Mjolnir', 'Aesir', 'Norn'],
        answer: '1'
    },
    {
        question: '\nQ:What is Captain America`s shield made off?',
        options: ['Adamantium', 'Vibranium', 'Promethium', 'Carbonadium'],
        answer: '1'
    },
    {
        question: '\nQ:What is the alien race Loki sends to invade Earth in The Avengers?',
        options: ['The Chitauri', 'The Skrulls', 'The Kree', 'The Flerkens'],
        answer: '0'
    },
    {
        question: '\nQ:Who does the Mad Titan sacrifice to acquire the Soul Stone?',
        options: ['Nebula', 'Ebony Maw', 'Cull Obsidian', 'Gamora'],
        answer: '3'
    }
]
//play function
function calcScore(ques, opt, ans) {

    console.log(chalk.bold.green(ques))
    currAns = readline.keyInSelect(opt, chalk.blue.bold('Select Your Option'));

    if (currAns == ans) {
        score++;
        console.log(chalk.black.bold.bgGreen('\nCorrect'))
    }
    else {
        score--;
        console.log(chalk.black.bold.bgRed('\nWrong'))
    }
    console.log(chalk.blue.bold('\nYour Score is : ' + score));

}

//entry point
console.log(chalk.bgYellow.black('Welecome To MarvelIO.\n'));


var nickName = readline.question(chalk.bgGreen.bold.black('\nGreat, tell us your nick-name:'))

console.log(chalk.bgCyan.bold.black('\nHi ') + chalk.bgCyan.bold.white(nickName.toUpperCase()) + chalk.bold.white(' Lets begin! Shall we?'))

for (var i = 0; i < questions.length; i++) {
    var currQuestion = questions[i];
    calcScore(currQuestion.question, currQuestion.options, currQuestion.answer);
}
console.log(chalk.blue('\n-----------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------'))
console.log((chalk.bgCyan.bold.black('\nWell Done ') + chalk.bgCyan.bold.white(nickName.toUpperCase()) + chalk.bgCyan.bold.black(' Your Final Score Is : ') + chalk.bgCyan.bold.white(score)))
console.log(chalk.blue('\n----------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------'))
var highScore = [{
    name: 'Tony',
    points: 5
}, { name: 'Natasha', points: 4 }, { name: 'Steve', points: 3 }]

if (score >= highScore[0].points) {
    console.log(chalk.bgYellow.bold.black('Congratulations!! You became the Highest Scorer. Take a screenshot and send it to me'));
    console.log(chalk.bgGreen.bold.black('\n-----LEADERBOARD-----'));
    console.log(nickName + " " + score)
    for (var i = 0; i < highScore.length; i++) {
        console.log(highScore[i].name + " " + highScore[i].points);
    }
}

console.log(chalk.bgYellow.bold.black('ThankYou For Playing!!!'));


