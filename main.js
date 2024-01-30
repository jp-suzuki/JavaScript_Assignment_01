let hours = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let timerRunning = null;

//１桁の場合に10の位をゼロで埋める
function zeroPadding(inputValue){
    let outputValue = null;
    if(inputValue / 10 < 1){
        outputValue = "0" + inputValue;
    }else{
        outputValue = inputValue;
    }
    return outputValue;
}

//時計画面表示の更新
function displayTimes(){
    $(".hoursDisplay").text(zeroPadding(hours) + ":");
    $(".minutesDisplay").text(zeroPadding(minutes) + ":");
    $(".secondsDisplay").text(zeroPadding(seconds) + ":");
    $(".milliSecondsDisplay").text(zeroPadding(milliSeconds));
}

//時間単位の繰り上げ変換
function timerCountUp(){
    milliSeconds += 1;
    if(milliSeconds == 100){
        milliSeconds = 0;
        seconds += 1;
    }
    if(seconds == 60){
        seconds = 0;
        minutes += 1;
    }
    if(minutes == 60){
        minutes = 0;
        hours += 1;
    }
    displayTimes();
}

$(document).ready(function(){
    $(".buttonStart").click(function() {
        timerRunning = setInterval(timerCountUp, 10);
        $("button.buttonStart").prop("disabled", true);
        $("button.buttonStop").prop("disabled", false);
        $("button.buttonReset").prop("disabled", false);
    });
    $(".buttonStop").click(function(){
        clearInterval(timerRunning);
        $("button.buttonStart").prop("disabled", false);
        $("button.buttonStop").prop("disabled", true);
        $("button.buttonReset").prop("disabled", false);
    });
    $(".buttonReset").click(function(){
        hours = 0;
        minutes = 0;
        seconds = 0;
        milliSeconds = 0;
        clearInterval(timerRunning);
        displayTimes();
        $("button.buttonStart").prop("disabled", false);
        $("button.buttonStop").prop("disabled", true);
        $("button.buttonReset").prop("disabled", true);
    });
});