// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDay = $('#currentDay');
// Displays the current day and current time in the header section
$("#currentDay").text(dayjs().format("[Today is]  MMM DD, YYYY [at] h:mm a"));

let timeBoxes = [
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
]
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

 // Resource for possibly changing color after hour changes current past or future:  https://jqueryui.com/addClass/

/** FUNCTIONS */
$(function () {
  var container = $('#container-lg');
  // dynamically create the content inside of schedule container:
  for (i=0; i < timeBoxes.length; i++) {
  var row = $('div'); // container for the three boxes: hour, text, and button. <-- append to row later
  var timeBox = $('<div>');
  var textArea = $('<textarea>');
  var button = $('<button>');
  var saveIcon = $('<i>');
  //add the classes and styling to the elements:
  timeBox.addClass('col-2 col-md-1 #hour text-center py-3');

  textArea.addClass('col-8 col-md-10 #textArea description rows=3').attr('rows', '3');

  button.addClass('col-2 col-md-1 btn .saveBtn').attr('aria-label', "save");

  saveIcon.addClass('fas fa-save').attr('aria-hidden', "true");

  //append elements to the dom:
  container.append(row);
  row.append(timeBox, textArea, button);
  button.append(saveIcon);

  // save button functionality
    $('.saveBtn').on("click", function(){
      let userInput = $(this).siblings("#textArea").val();
      let timeBox = $(this).siblings("#textArea").attr("id");
    
      localStorage.setItem(timeBox, userInput);
    });

   //Loop pulls from local storage.
    for (i=9; i<=17; i++) {
      $("#hour-"+i).text(localStorage.getItem("hour-"+i))
    }
  }
});

/** APP INIT */