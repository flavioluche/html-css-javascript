/* 
*Basics of Javascript
* - Variables
* - Basic operations
*/

//Does Mark has a bigger BMI than John?
var markMass, johnMass, markHeight, johnHeight, markBmi, johnBmi, bmiResult

markHeight = 1.80;
markMass = 83;

johnHeight = 1.73;
johnMass = 62;

markBmi = markMass / (markHeight * markHeight);
console.log('Mark\'s BMI ' + markBmi);

johnBmi = johnMass / (johnHeight * johnHeight);
console.log('John\'s BMI ' + johnBmi);

bmiResult = markBmi > johnBmi;

console.log('Does Mark has a bigger BMI than John? ' + bmiResult);


/* 
*Basics of Javascript
* ++
* - If / Else Statements
* - Boolean logic
* - Switch Statements
*/
//Which teams win by the average

var johnGameOne, johnGameTwo, johnGameThree

johnGameOne = 89; //89

johnGameTwo = 120; //120

johnGameThree = 103; //first test 103



var mikeGameOne, mikeGameTwo, mikeGameThree

mikeGameOne = 116; //116

mikeGameTwo = 94; //94

mikeGameThree = 123; //123


var maryGameOne, maryGameTwo, maryGameThree

maryGameOne = 97; //97

maryGameTwo = 134; //134

maryGameThree = 105; //105

/* //forcing a draw

mikeGameOne = 89;

mikeGameTwo = 120;

mikeGameThree = 200; 

maryGameOne = 89;

maryGameTwo = 120;

maryGameThree = 200; 

johnGameOne = 89;

johnGameTwo = 120;

johnGameThree = 200;  */

teamJohnAvg = (johnGameOne + johnGameTwo + johnGameThree) / 3;
console.log('John ' + teamJohnAvg);
teamMikeAvg = (mikeGameOne + mikeGameTwo + mikeGameThree) / 3;
console.log('Mike ' + teamMikeAvg);
teamMaryAvg = (maryGameOne + maryGameTwo + maryGameThree) / 3;
console.log('Mary ' + teamMaryAvg);

/* //Using if else

if (teamJohnAvg > teamMikeAvg){
    console.log('John\'s Team wins with an win average of ' + teamJohnAvg + ' over ' + teamMikeAvg +  ' of Mike\'s team ');
} else if (teamMikeAvg > teamJohnAvg) {
    console.log('Mike\'s Team wins with an win average of ' + teamMikeAvg + ' over ' + teamJohnAvg + ' of John\'s team ');
} else {
    console.log('Mike\'s Team and John\'s team are with the same wins average of ' + teamMikeAvg);
} */


//using switch case

switch(true){
    case teamJohnAvg > teamMikeAvg && teamJohnAvg > teamMaryAvg:
        console.log('John\'s Team wins with a win average of ' + teamJohnAvg + ' over ' + teamMikeAvg + ' of Mike\'s team, and ' + teamMaryAvg + ' of Mary\'s team.');
        break;
    case teamJohnAvg < teamMikeAvg && teamMaryAvg < teamMikeAvg:
        console.log('Mike\'s Team wins with a win average of ' + teamMikeAvg + ' over ' + teamJohnAvg + ' of John\'s team, and ' + teamMaryAvg + ' of Mary\'s team.');
        break;
    case teamMaryAvg > teamMikeAvg && teamMaryAvg > teamJohnAvg:
        console.log('Mary\'s Team wins with a win average of ' + teamMaryAvg + ' over ' + teamJohnAvg + ' of John\'s team, and ' + teamMikeAvg + ' of Mike\'s team.');
        break;
    case teamJohnAvg == teamMikeAvg && teamJohnAvg == teamMaryAvg && teamMaryAvg == teamMaryAvg:
        console.log('Mike\'s, John\'s and Mary\'s teams have the same average of ' + teamMikeAvg);
        break;
    case teamMikeAvg == teamMaryAvg && (teamMaryAvg && teamMikeAvg) > teamJohnAvg:
        console.log('Mike\'s and Mary\'s teams are tied with an average of ' + teamMikeAvg + ' while John\'s team have an average of ' + teamJohnAvg);
        break;
    case teamMikeAvg == teamJohnAvg && (teamJohnAvg && teamMikeAvg) > teamMaryAvg:
        console.log('Mike\'s and John\'s teams are tied with an average of ' + teamMikeAvg + ' while Mary\'s team have an average of ' + teamMaryAvg);
        break;
    case teamJohnAvg == teamMaryAvg && (teamMaryAvg && teamJohnAvg) > teamMikeAvg:
        console.log('John\'s and Mary\'s teams are tied with an average of ' + teamJohnAvg + ' while Mike\'s team have an average of ' + teamMikeAvg);
        break;
    default:
        console.log('Games aren\'t finished yet!');
}


/* 
*Basics of Javascript
* - Functions
* - Arrays
*/

//tips calculator
function tipsCalculator(bill1, bill2, bill3){

    var tips  = [];

    var totalbill = [];

    
    if (bill1 < 50) {
        tips.push (bill1 * 0.2);
    } else if (bill1 >= 50 && bill1 <= 200){
        tips.push (bill1 * 0.15);
    } else if (bill1 > 200){
        tips.push (bill1 * 0.1);
    }
    totalbill.push(bill1+tips[0]);

    if (bill2 < 50) {
        tips.push (bill2 * 0.2);
    } else if (bill2 >= 50 && bill2 <= 200){
        tips.push (bill2 * 0.15);
    } else if (bill2 > 200){
        tips.push (bill2 * 0.1);
    }
    totalbill.push(bill2+tips[1]);

    if (bill3 < 50) {
        tips.push (bill3 * 0.2);
    } else if (bill3 >= 50 && bill3 <= 200){
        tips.push (bill3 * 0.15);
    } else if (bill3 > 200){
        tips.push (bill3 * 0.1);
    }
    totalbill.push(bill3+tips[2]);

    console.log(tips);
    console.log(totalbill);

    

}

tipsCalculator(124,48,268);