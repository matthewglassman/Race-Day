let raceNumber = Math.floor(Math.random()* 1000);
let registeredEarly = True;
let runnersAge = 21;

if (runnersAge >= 18 && registeredEarly === True){
    raceNumber += 1000;
}

console.log(raceNumber);

if (runnersAge >= 18 && registeredEarly === True){
    console.log(`Runner number ${raceNumber} you are racing at 9:30am`);
} else if (runnersAge >= 18 && registeredEarly === False){
    console.log(`Runner number ${raceNumber}, you are racing at 11:00am`);
} else {
    console.log(`Runner number ${raceNumber}, you are racing at 12:30pm`);
}

