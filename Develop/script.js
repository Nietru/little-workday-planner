// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// done with $(function () {    at the start of the code.
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Resource for possibly changing color after hour changes current past or future:  https://jqueryui.com/addClass/

$(function () {
  var currentDay = $("#currentDay");
  // Displays the current day and current time in the header section
  $("#currentDay").text(dayjs().format("[Today is]  MMM DD, YYYY [at] hh:mma"));
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
    // save to local storage
    localStorage.setItem(time, description);
  });
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
