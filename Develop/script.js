// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

/** JQUERY VARIABLES: */
// var container = $('#container-lg'); declared below
var currentDay = $('#currentDay');
// var saveBtn = $('.saveBtn');
// var hourBox = $('.hour');
// var textArea = $('.description');
// var textAreaPast = $('#text-area-past');
// var textAreaPresent = $('#text-area-present');
// var textAreaFuture = $('#text-area-future');


var currentTime = dayjs().hour(); // to go with if statement below:

let workHours = {   // created an array for working hours, hours are 0-23.
  // i think i need to do something with day js... and then a jquery object loop?..
  hourBox1: dayjs(09),
  hourBox2: "9am",
  hourBox3: "10am",
  hourBox4: "11am",
  hourBox5: "12am",
  hourBox6: "1pm",
  hourBox7: "2pm",
  hourBox8: "3pm",
  hourBox9: "4pm",
}

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


 // Resource for possibly changing color after hour changes current past or future:  https://jqueryui.com/addClass/


/** FUNCTIONS */

$(function () {
  var header = $('')  //do header part after body is finished!!
  var container = $('#container-lg');

// dynamically create the content inside of schedule container:
  var row = $('div');   // container for the three boxes: hour, text, and button. <-- append to row later
  var hour = $('<div>');
  var textArea = $('<textarea>');
  var button = $('<button>');
  var saveIcon = $('<i>');

  //add the styling to the elements:
  

  //append elements to the dom:
  container.append(row);

//   function renderSchedule() {        // ---------- TRYING TO FIGURE THIS OUT!! ----------
//   $.each(hourBox, function() { 
//     $(this).text(workHours.length());
//   });
// }  

//   console.log(hourBox);

// function to handle displaying the day in the header of the app
function dayToday() {
  var rightNow = dayjs().format('hh:mm [on] dddd MM/DD/YY');    //dayjs() means current day/time
  currentDay.text(rightNow);
}
  

/** EVENT LISTENERS */          // ---------- TRYING TO FIGURE THIS OUT!!! ----------

// this is working to store user input in the text-area of the html once i gave the textAreas unique IDs.
$(textArea).each(function(){
  $(this).val(localStorage.getItem(this.id));
});

$(textArea).on("change", function () {

  localStorage.setItem(this.id, $(this).val());
});


})

/** APP INIT */
// runs dayToday function giving us the current date/day of the week in the header section.
dayToday();
// renderSchedule();