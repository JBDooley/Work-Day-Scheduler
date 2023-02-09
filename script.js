var now = moment()

$("#9hour").attr("timeValue", moment("9", "H"));
$("#10hour").attr("timeValue", moment("10 ", "H"));
$("#11hour").attr("timeValue", moment("11 ", "H"));
$("#12hour").attr("timeValue", moment("12 ", "H"));
$("#13hour").attr("timeValue", moment("13", "H"));
$("#14hour").attr("timeValue", moment("14", "H"));
$("#15hour").attr("timeValue", moment("15", "H"));
$("#16hour").attr("timeValue", moment("16", "H"));
$("#17hour").attr("timeValue", moment("17", "H"));



$(document).ready(function () {

    renderInputs();

function displayTime() {
    var rightNow = moment().format("MMMM Do, YYYY h:mm:ss A");
    $("#currentDay").text(rightNow);
};

setInterval(displayTime, 1000);

function timeBlockStatus() {
    $(".timeBlockInput").each(function() {
        var timeStatus = moment().format("H");
        console.log(timeStatus);
        var inputTime = parseInt($(this).attr("timeValue"));
        if (inputTime < timeStatus) {
            $(this).addClass("past");
        }else if (inputTime == timeStatus) {
            $(this).addClass("present");
        }else if (inputTime > timeStatus) {
            $(this).addClass("future");
        }
    })
}

setInterval(timeBlockStatus, 1000);




$(".saveBtn").on( "click", function() {
    var inputHour = $(this).attr("value");
    var inputData = $("#" + inputHour + "hour").val();
    localStorage.setItem(inputHour, inputData);
});

function renderInputs() {
    for (var i = 0; i <= 24; i++) {
       $("#" + i + "hour").val(localStorage.getItem(i)) 
    }
}

});
