// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
 // Resource for possibly changing color after hour changes current past or future:  https://jqueryui.com/addClass/

$(function () {
  var currentDay = $('#currentDay');
// Displays the current day and current time in the header section
  $("#currentDay").text(dayjs().format("[Today is]  MMM DD, YYYY [at] h:mm a"));
  // array for hour blocks on left of text area
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
  ];
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