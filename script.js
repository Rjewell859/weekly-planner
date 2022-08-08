var today = moment();
var dayWeek = today.format("dddd, MMM Do")

var currentTime = today.format("hhA");
$("#currentDay").text(dayWeek);
$('.description').text(currentTime);

