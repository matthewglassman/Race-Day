let raceNumber = Math.floor(Math.random()* 1000);
<<<<<<< HEAD
let registeredEarly = false;
let runnersAge = 13;
=======
let registeredEarly = true;
let runnersAge = 21;
>>>>>>> 45116f227410030a03a76c0c4f0c71b287503402

if (runnersAge >= 18 && registeredEarly === true){
    raceNumber += 1000;
}

console.log(raceNumber);

if (runnersAge >= 18 && registeredEarly === true){
    console.log(`Runner number ${raceNumber} you are racing at 9:30am`);
} else if (runnersAge >= 18 && registeredEarly === false){
    console.log(`Runner number ${raceNumber}, you are racing at 11:00am`);
} else {
    console.log(`Runner number ${raceNumber}, you are racing at 12:30pm`);
}

