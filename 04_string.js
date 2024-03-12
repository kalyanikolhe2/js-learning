
var greet = "Good Morning";
var totalChars = greet.length;
console.log("Total number of chars is:", totalChars);

var charAt0 = greet.charAt(0);
console.log(" character at index  0 is:", charAt0);

var charAt6 = greet.charAt(6);
console.log(" character at index 6 is:", charAt6);

var charAt11 = greet.charAt(11);
console.log(" character at index  11 is:", charAt11);

var sentence = "when you join meetings, webinars, chats or channels is hosted on zoom, your pc"
var totalChars = sentence.length;
console.log("totalChars is:", totalChars);
var lastChar = sentence.charAt(totalChars-1);
console.log(" last char is:", lastChar);

console.log("======== IndexOf()========");
var greet = "Good Morning";
var indexOfM = greet.indexOf("M");
console.log(" indexof char m is:", indexOfM);

console.log("======= concat() ========");
var firstName = "Kalyani";
var lastName ="Kolhe";
var resultConcat = firstName.concat(lastName);
console.log("Concat result is :", resultConcat);


console.log("======= replace() ========");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is : ${afterReplace}`);


console.log(`========= toUpperCase()=========`);
var greet = "Good Morning";
 var greetInUpperCase = greet.toUpperCase();
 console.log(`${greet} in upper case is: ${greetInUpperCase}`);

 console.log(`========= trim()=========`);
 var greet = "  Good Morning  ";
 console.log(`${greet} its's length is: ${greet.length} `);
 var len = greet.length;
 greet.trim();
 //console.log(greet.trim());


 console.log(`=========includes()=========`);
 var greet = "  Good Morning  ";
 console.log(greet.includes("Good"));

 console.log(`=========slice(start, end)=========`);
 var greet = "Good Morning";
 console.log(greet.slice(0,10));














