var now = moment()

function displayTime() {
    var rightNow = moment().format("MMMM Do, YYYY h:mm:ss A");
    $("#currentDay").text(rightNow);
};

setInterval(displayTime, 1000);

function timeBlockStatus() {
    $(".timeBlockInput").each(function() {
        var timeStatus = moment().format("H");
        console.log(timeStatus);
        var inputTime = parseInt($(this).attr("value"));
        // Compare each timeblock to current hour and change color
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
