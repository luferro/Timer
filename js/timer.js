const button = document.getElementById('controls');
const reset = document.getElementById('reset');
const break_time = document.getElementById('break');
const display = document.getElementById('timer');
const session_desc = document.getElementById('session');
const session_end = document.getElementById('endsession');

let countdown = -1;

var time_default = 60 * 25;
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
    startTimer(60*5);
}

break_time.addEventListener("click", e => {
    e.preventDefault();
    breakTime();
})

reset.addEventListener("click", e => {
    e.preventDefault();
    resetTimer();
})

button.addEventListener("click", e => {
    e.preventDefault();
    startTimer(time_left);
})