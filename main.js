var num1 = 10;
var num2 = 30;
console.log(num1 == 10 && num2 == 30);
var num3 = 20;
var num4 = 40;
console.log(num3 == 20 || num4 == 40);
var num5 = 15;
var num6 = 50;
console.log(!(num5 == num6));
// Example: Greetings based on time
var time = 15; // Assume time is in 24-hour format
var greeting;
if (time < 10) {
    greeting = 'Good morning';
}
else if (time < 20) {
    greeting = 'Good day';
}
else {
    greeting = 'Good evening';
}
console.log(greeting);
//
var num7 = 20;
if (num7 < 6) {
    console.log("number is 6");
}
else if (num7 < 8) {
    console.log("number is not 8");
}
else if (num7 > 8) {
    console.log("number is right");
}
else {
    console.log("number is above");
}
