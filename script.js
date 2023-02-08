var now = moment()

function displayTime() {
    var rightNow = moment().format("MMMM Do, YYYY h:mm:ss A");
    $("#currentDay").text(rightNow);
};

setInterval(displayTime, 1000);
