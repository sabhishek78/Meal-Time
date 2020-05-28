function timeToEat(inputString){
  let inputArray=inputString.split(':');
  let hrs=inputArray[0];
  let [min,ampm]=inputArray[1].toString().split(' ');
  let timeInMinutes=convertTimeToMinutes(hrs,min,ampm);
  let timeToMeal=0;
  if(timeInMinutes<420 && timeInMinutes>=0){
    timeToMeal=420-timeInMinutes;
  }
  else if(timeInMinutes>=420 && timeInMinutes<720){
    timeToMeal=720-timeInMinutes;
  }
  else if(timeInMinutes>=720 && timeInMinutes<1140){
    timeToMeal=1140-timeInMinutes;
  }
   else if(timeInMinutes>=1140 && timeInMinutes<1440){
    timeToMeal=1440-timeInMinutes+420;
  }
  return [parseInt(timeToMeal/60),timeToMeal%60];
}
function convertTimeToMinutes(hrs,min,ampm){
  let start=0;
  if(ampm==="a.m."){
    start=start+parseInt(hrs)*60;
  }
  else if(ampm==="p.m." && hrs==="12"){
    start=0;
  }
  else if(ampm==="p.m." && hrs!=="12"){
    start=start+parseInt(hrs)*60+12*60;
  }
  return start+parseInt(min);
}
// console.log(timeToEat("2:00 p.m."));
// console.log(timeToEat("5:50 a.m."));
// console.log(timeToEat("00:00 a.m."));
console.log(timeToEat("12:00 p.m."));
// console.log(timeToEat("11:59 p.m."));
// console.log(timeToEat("7:00 a.m."));
// console.log(timeToEat("12:00 p.m."));
// console.log(timeToEat("7:00 p.m."));
// console.log(timeToEat("6:59 p.m."));
// console.log(timeToEat("7:01 p.m."));
// Jake's Meal Time

// Time Allowed: 45 minutes

// Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00 p.m., and dinner at 7:00 p.m. in the evening.

// Create a function that takes in the current time as a string and determines the duration of time before Jake's next meal. Represent this as an array with the first and second elements representing hours and minutes, respectively.

// Examples

// timeToEat("2:00 p.m.") ➞ [5, 0]
// // 5 hours until the next meal, dinner

// timeToEat("5:50 a.m.") ➞ [1, 10]
// // 1 hour and 10 minutes until the next meal, breakfast



// Notes:
// - Jake lives in a timezone without daylight savings time but we cannot assume that our computer's timezone will match Jake's timezone.  Therefore do not use any libraries or classes for date: just parse the time 'manually' to get the hour and minute and am/pm flag. 

