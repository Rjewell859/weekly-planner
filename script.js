var currentDayEl = $("#currentDay");
var hourEl = $('.hour');
var descriptionEl = $('.description');
var saveButtonEl = $('.saveButton');
var timeBlockEl = $('.timeBlock');
var button1El = $('#button1');
var desc1El = $('#desc1');
var button2El = $('#button2');
var desc2El = $('#desc2');
var button3El = $('#button3');
var desc3El = $('#desc3');
var button4El = $('#button4');
var desc4El = $('#desc4');
var button5El = $('#button5');
var desc5El = $('#desc5');
var button6El = $('#button6');
var desc6El = $('#desc6');
var button7El = $('#button7');
var desc7El = $('#desc7');
var button8El = $('#button8');
var desc8El = $('#desc8');
var button9El = $('#button9');
var desc9El = $('#desc9');

var today = moment();
var dayWeek = today.format("dddd, MMM Do");

var currentTime = today.format("hhA");
currentDayEl.text(dayWeek);
descriptionEl.text(currentTime);

button1El.on('click', function () {
    var newText = desc1El.val();
    localStorage.setItem('savedText1', newText);
})
button2El.on('click', function () {
    var newText = desc2El.val();
    localStorage.setItem('savedText2', newText);
})
button3El.on('click', function () {
    var newText = desc3El.val();
    localStorage.setItem('savedText3', newText);
})
button4El.on('click', function () {
    var newText = desc4El.val();
    localStorage.setItem('savedText4', newText);
})
button5El.on('click', function () {
    var newText = desc5El.val();
    localStorage.setItem('savedText5', newText);
})
button6El.on('click', function () {
    var newText = desc6El.val();
    localStorage.setItem('savedText6', newText);
})
button7El.on('click', function () {
    var newText = desc7El.val();
    localStorage.setItem('savedText7', newText);
})
button8El.on('click', function () {
    var newText = desc8El.val();
    localStorage.setItem('savedText8', newText);
})
button9El.on('click', function () {
    var newText = desc9El.val();
    localStorage.setItem('savedText9', newText);
})
desc1El.text(localStorage.getItem('savedText1'));
desc2El.text(localStorage.getItem('savedText2'));
desc3El.text(localStorage.getItem('savedText3'));
desc4El.text(localStorage.getItem('savedText4'));
desc5El.text(localStorage.getItem('savedText5'));
desc6El.text(localStorage.getItem('savedText6'));
desc7El.text(localStorage.getItem('savedText7'));
desc8El.text(localStorage.getItem('savedText8'));
desc9El.text(localStorage.getItem('savedText9'));