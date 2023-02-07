// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// done with $(function () {    at the start of the code.
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Resource for possibly changing color after hour changes current past or future:  https://jqueryui.com/addClass/

$(function () {
  var currentDay = $("#currentDay");
  // Displays the current day and current time in the header section
  $("#currentDay").text(dayjs().format("[Today is]  MMM DD, YYYY [at] hh:mm"));
  // array for hour blocks on left of text area
  // dynamically create the content inside of schedule container:
  // for (i = 0; i < timeBoxes.length; i++) {
  //   var row = $("<div>"); // container for the three boxes: hour, text, and button. <-- append to row later
  //   var timeBox = $("<div>");
  //   var textArea = $("<textarea>");
  //   var button = $("<button>");
  //   var saveIcon = $("<i>");
  //   //add the classes and styling to the elements:
  //   timeBox.addClass("col-2 col-md-1 hour time-block text-center py-3");
  //   // .text(timeBoxes[i]);
  //   textArea
  //     .addClass("col-8 col-md-10 #textArea description rowrows=3")
  //     .attr("rows", "3");

  //   button
  //     .addClass("col-2 col-md-1 btn .saveBtn")
  //     .attr("aria-label", "save", "data-index", i);

  //   saveIcon.addClass("fas fa-save").attr("aria-hidden", "true");

  //   //apend elements to the dom:
  //   container.append(row);
  //   timeBox.append(timeBoxes[i] + ":00"); // displays time in the timeboxes from the array.
  //   row.append(timeBox, textArea, button);
  //   button.append(saveIcon);

  // save button functionality
  // $(row).on("click", "button.saveBtn", function () {
  //   var button = $(this);
  //   console.log(typeof button.attr("data-index"));
  // });
  //   // add class depending on time of the workday
  $(".time-block").each(function () {
    var timeBlockHour = $(this).attr("id").split("-")[1];
    if (timeBlockHour < dayjs().hour()) {
      $(this).addClass("past");
    } else if (timeBlockHour > dayjs().hour()) {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    } else {
      $(this).addClass("present");
      $(this).removeClass("past");
    }
    console.log(timeBlockHour);
  });
  // save button functionality
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    console.log(time);
    var description = $(this).siblings(".description").val();
    console.log(description);

    localStorage.setItem(time, description);
  });
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
});
