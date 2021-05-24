$(document).ready(function(){
    // display time
$("#currentDay").text(moment().format("MMMM Do YYYY"));

//current time
var currentTime = moment().format('LT');

//obtain time rows
var hourNine = document.getElementById("nine")
var hourTen = document.getElementById("ten");
var hourEleven = document.getElementById("eleven");
var hourTwelve = document.getElementById("twelve");
var hourOne = document.getElementById("one");
var hourTwo = document.getElementById("two");
var hourThree = document.getElementById("three");
var hourFour = document.getElementById("four");
var hourFive = document.getElementById("five");


// get time blocks per hour
var timeNine = moment().hour(9);
var timeTen = moment().hour(10);
var timeEleven = moment().hour(11);
var timeTwelve = moment().hour(12);
var timeOne = moment().hour(13);
var timeTwo = moment().hour(14);
var timeThree = moment().hour(15);
var timeFour = moment().hour(16);
var timeFive = moment().hour(17);

var time = [timeNine, timeTen, timeEleven, timeTwelve, timeOne, timeTwo, timeThree, timeFour, timeFive]











})
