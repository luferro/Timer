const button = document.getElementById('controls');
const reset = document.getElementById('reset');
const display = document.getElementById('timer');
const session_desc = document.getElementById('session');
const session_end = document.getElementById('endsession');
const work_custom = document.getElementById('work_custom');
const break_custom = document.getElementById('break_custom');
const session_custom = document.getElementById('session_custom');

let countdown = -1;

var time_default = 60 * 25;
var time_default_break; 60 * 5;
var time_left = time_default;
var session = 0;

function startTimer(duration) {
    if(countdown == -1) {
        clearInterval(countdown);        
        var start = Date.now();

        button.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';

        countdown = setInterval(function() {
            var diff = duration - (((Date.now() - start) / 1000) | 0);

            time_left = diff;

            var minutes = (diff / 60) | 0;
            var seconds = (diff % 60) | 0;

            if(minutes < 10) minutes = "0" + minutes;
            if(seconds < 10) seconds = "0" + seconds;

            display.textContent = minutes + ":" + seconds; 
            document.title = display.textContent;

            if (diff <= 0) {
                session_end.play()
                if(session % 2 == 0) 
                    breakTime();
                else
                    resetTimer();
                session++;
            }
        }, 1000);
    }
    else {
        clearInterval(countdown);
        countdown = -1;
        button.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
}

function resetTimer() {
    clearInterval(countdown);
    countdown = -1;
    session_desc.innerHTML = "Work time!";
    startTimer(time_default);
}

function breakTime() {
    clearInterval(countdown);
    countdown = -1;
    session_desc.innerHTML = "Break time!";
    session++;
    startTimer(time_default_break);
}

reset.addEventListener("click", e => {
    e.preventDefault();
    resetTimer();
})

session_custom.addEventListener("click", e => {
    if(work_custom.value != '')
        time_default = work_custom.value * 60;
    if(break_custom.value != '')
        time_default_break = break_custom.value * 60;
    $(".close").click();
    session = 0;
    resetTimer();
})

button.addEventListener("click", e => {
    e.preventDefault();
    startTimer(time_left);
})