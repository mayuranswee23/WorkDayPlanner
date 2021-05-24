$(document).ready(function(){
    // display time
$("#currentDay").text(moment().format("MMMM Do YYYY"));

//current time
// var currentTime = moment().format ("LT");
var currentTime = moment().hours();
// currentTime = 11;
// var roundedTime = currentTime.startOf ("hour");

//obtain time rows
// var hourNine = document.getElementById("9")
// var hourTen = document.getElementById("10");
// var hourEleven = document.getElementById("eleven");
// var hourTwelve = document.getElementById("twelve");
// var hourOne = document.getElementById("one");
// var hourTwo = document.getElementById("two");
// var hourThree = document.getElementById("three");
// var hourFour = document.getElementById("four");
// var hourFive = document.getElementById("five");


// get time blocks per hour
// var timeNine = moment().hour(9)
// var timeTen = moment().hour(10);
// var timeEleven = moment().hour(11);
// var timeTwelve = moment().hour(12);
// var timeOne = moment().hour(13);
// var timeTwo = moment().hour(14);
// var timeThree = moment().hour(15);
// var timeFour = moment().hour(16);
// var timeFive = moment().hour(17);

// check time to see if it's in the past, present or future

function checkTime () {
    $("textarea").each(function(){
        var timeFromCalender = parseInt($(this).parent().attr("id"));
        if (currentTime === timeFromCalender){
            $(this).addClass("present")
        }
        else if (currentTime > timeFromCalender){
            $(this).addClass("past")
        }
        else {
            $(this).addClass("future")
        }
    })
}

checkTime();

// click on paragraph text to enter input
$(".btn").on("click", function(){
    var text = $(this).parent().siblings(".taskText").children().val();
    var calenderTime = $(this).parent().siblings(".taskText").attr("id");
   
    localStorage.setItem(calenderTime, text);
    // var text = $(this).text().trim();
    // var textInput = $("<textarea>").addClass("textarea").val(text);
    // $(this).replaceWith(textInput);
    // textInput.trigger("focus");
});

//save to local storage

$("#9").children().val(localStorage.getItem("9"));
$("#10").children().val(localStorage.getItem("10"))
$("#11").children().val(localStorage.getItem("11"))
$("#12").children().val(localStorage.getItem("12"))
$("#13").children().val(localStorage.getItem("13"))
$("#14").children().val(localStorage.getItem("14"))
$("#15").children().val(localStorage.getItem("15"))
$("#16").children().val(localStorage.getItem("16"))
$("#17").children().val(localStorage.getItem("17"))




// var saveButton = document.querySelector(".btn");
// saveButton.addEventListener("click", function(){
//     console.log("hi")
// })

// $(".btn").on("click", "button", function(){
//     console.log("hi");
// })




})
