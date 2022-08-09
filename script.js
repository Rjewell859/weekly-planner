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
var savedEl = $('#saved');
var localEl = $('#local');
var hour1El = $('#hour1');
var hour2El = $('#hour2');
var hour3El = $('#hour3');
var hour4El = $('#hour4');
var hour5El = $('#hour5');
var hour6El = $('#hour6');
var hour7El = $('#hour7');
var hour8El = $('#hour8');
var hour9El = $('#hour9');

var today = moment();
var dayWeek = today.format("dddd, MMM Do");
var currentTime = today.format("hhA");
currentDayEl.text(dayWeek);

var savedDisplay = function () {
    savedEl.text("Event saved in ");
    localEl.text("local storage ✔");
    savedEl.append(localEl);
    setTimeout(function () {
        savedEl.text('')
    }, 2000);
}

var momentCompare = function () {
    var currentMinutes = today.format("HH");
    var hour1time = moment("9:00 AM", "h:mm A").format("HH");
    if(hour1time == currentMinutes) {
        desc1El.css('background-color', 'red');
    }
    else if (hour1time > currentMinutes) {
        desc1El.css('background-color', 'green')
    }
    else { desc1El.css('background-color', 'gray')}
    
    var hour2time = moment("10:00 AM", "h:mm A").format("HH");
    if(hour2time == currentMinutes) {
        desc2El.css('background-color', 'red');
    }
    else if (hour2time > currentMinutes) {
        desc2El.css('background-color', 'green')
    }
    else { desc2El.css('background-color', 'gray')}

    var hour3time = moment("11:00 AM", "h:mm A").format("HH");
    if(hour3time == currentMinutes) {
        desc3El.css('background-color', 'red');
    }
    else if (hour3time > currentMinutes) {
        desc3El.css('background-color', 'green')
    }
    else { desc3El.css('background-color', 'gray')}

    var hour4time = moment("12:00 AM", "h:mm A").format("HH");
    if(hour4time == currentMinutes) {
        desc4El.css('background-color', 'red');
    }
    else if (hour4time > currentMinutes) {
        desc4El.css('background-color', 'green')
    }
    else { desc4El.css('background-color', 'gray')}

    var hour5time = moment("1:00 PM", "h:mm A").format("HH");
    if(hour5time == currentMinutes) {
        desc5El.css('background-color', 'red');
    }
    else if (hour5time > currentMinutes) {
        desc5El.css('background-color', 'green')
    }
    else { desc5El.css('background-color', 'gray')}

    var hour6time = moment("2:00 PM", "h:mm A").format("HH");
    if(hour6time == currentMinutes) {
        desc6El.css('background-color', 'red');
    }
    else if (hour6time > currentMinutes) {
        desc6El.css('background-color', 'green')
    }
    else { desc6El.css('background-color', 'gray')}

    var hour7time = moment("3:00 PM", "h:mm A").format("HH");
    if(hour7time == currentMinutes) {
        desc7El.css('background-color', 'red');
    }
    else if (hour7time > currentMinutes) {
        desc7El.css('background-color', 'green')
    }
    else { desc7El.css('background-color', 'gray')}

    var hour8time = moment("4:00 PM", "h:mm A").format("HH");
    if(hour8time == currentMinutes) {
        desc8El.css('background-color', 'red');
    }
    else if (hour8time > currentMinutes) {
        desc8El.css('background-color', 'green')
    }
    else { desc8El.css('background-color', 'gray')}

    var hour9time = moment("5:00 PM", "h:mm A").format("HH");
    if(hour9time == currentMinutes) {
        desc9El.css('background-color', 'red');
    }
    else if (hour9time > currentMinutes) {
        desc9El.css('background-color', 'green')
    }
    else { desc9El.css('background-color', 'gray')}
}


button1El.on('click', function () {
    var newText = desc1El.val();
    localStorage.setItem('savedText1', newText);
    savedDisplay();
})
button2El.on('click', function () {
    var newText = desc2El.val();
    localStorage.setItem('savedText2', newText);
    savedDisplay();
})
button3El.on('click', function () {
    var newText = desc3El.val();
    localStorage.setItem('savedText3', newText);
    savedDisplay();
})
button4El.on('click', function () {
    var newText = desc4El.val();
    localStorage.setItem('savedText4', newText);
    savedDisplay();
})
button5El.on('click', function () {
    var newText = desc5El.val();
    localStorage.setItem('savedText5', newText);
    savedDisplay();
})
button6El.on('click', function () {
    var newText = desc6El.val();
    localStorage.setItem('savedText6', newText);
    savedDisplay();
})
button7El.on('click', function () {
    var newText = desc7El.val();
    localStorage.setItem('savedText7', newText);
    savedDisplay();
})
button8El.on('click', function () {
    var newText = desc8El.val();
    localStorage.setItem('savedText8', newText);
    savedDisplay();
})
button9El.on('click', function () {
    var newText = desc9El.val();
    localStorage.setItem('savedText9', newText);
    savedDisplay();
})

loadSaved = function() {
    desc1El.text(localStorage.getItem('savedText1'));
    desc2El.text(localStorage.getItem('savedText2'));
    desc3El.text(localStorage.getItem('savedText3'));
    desc4El.text(localStorage.getItem('savedText4'));
    desc5El.text(localStorage.getItem('savedText5'));
    desc6El.text(localStorage.getItem('savedText6'));
    desc7El.text(localStorage.getItem('savedText7'));
    desc8El.text(localStorage.getItem('savedText8'));
    desc9El.text(localStorage.getItem('savedText9'));
}

momentCompare();
loadSaved();
