var currentDayEl = $("#currentDay");
var hourEl = $('.hour');
var descriptionEl = $('.description');
var saveButtonEl = $('.saveButton');
var timeBlockEl = $('.timeBlock');
var button1El = $('#button1');
var desc1El = $('#desc1');

var today = moment();
var dayWeek = today.format("dddd, MMM Do");

var currentTime = today.format("hhA");
currentDayEl.text(dayWeek);
descriptionEl.text(currentTime);

button1El.on('click', function(){
    console.log(desc1El.value);
    var newText = localStorage.getItem('savedText') + desc1El.text();
    localStorage.setItem('savedText', newText);
    console.log(localStorage.getItem('savedText'));
    desc1El.text(newText);
    
})
