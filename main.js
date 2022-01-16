// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("element1").innerHTML = currentDate;
}


// Write a JavaScript program to convert a number to a string.

const numToString = () => {
  let x = 44
  let result = "My number: " + String(x) + " is now a string.";
  document.getElementById("element2").innerHTML = result;
  return result;
}



// Write a JavaScript program to convert a string to the number.
const strToNumber = () => {
  let x = "42";
  let result2 = Number(x);
  document.getElementById("element3").innerHTML = result2;
  return result2;
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String
const typeOfVariable = () => {
  a = typeof true;
  b = typeof null;
  c = typeof undefined;
  d = typeof 12.011;
  e = typeof NaN;
  f = typeof "Flurff Nurghet";
  types = String(a) + "<br>" + String(b) + "<br>" + String(c) + "<br>" + String(d) + "<br>" + String(e) + "<br>" + String(f);
  document.getElementById("element4").innerHTML = types;
  return types;
}


// Write a JavaScript program that adds 2 numbers together.
const addNumbers = () => {
  let num1 = 8;
  let num2 = 92;
  sum = num1 + num2;
  document.getElementById("element5").innerHTML = sum;

}



// Write a JavaScript program that runs only when 2 things are true.
const billsArePaid = true;
const foodAtHome = true;
const canIGoShopping = () => {
  if (billsArePaid && foodAtHome) {
    document.getElementById("element6").innerHTML = "Kandi can go shopping!";
  } else {
    document.getElementById("element6").innerHTML = "Kandi is not shopping";
  }
}



// Write a JavaScript program that runs when 1 of 2 things are true.
const husbandIsPaying = true;
const anyThingToEat = false;
const orderTakeout = () => {
  if (husbandIsPaying || anyThingToEat) {
    document.getElementById("element7").innerHTML = "Kandi is ordering takeout";
  } else {
    document.getElementById("element7").innerHTML = "Kandi will not order takeout.";
  }
}


// Write a JavaScript program that runs when both things are not true.
const houseIsClean = false;
const haveCleaner = false;
const doIHaveToClean = () => {
  if (!houseIsClean && !haveCleaner) {
    document.getElementById("element8").innerHTML = "better clean then";
  }
}
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
