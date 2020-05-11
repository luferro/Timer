const body = document.body;
const toggle_mode = document.getElementById('toggle_mode');
const toggle = document.getElementById('toggle');

var active = false;

window.onload = function(){
    var active_status = localStorage.getItem("theme_status");
    if(active_status == "dark") {
        body.classList.add("dark");
        active = true;
        toggle.classList.remove("fa-moon-o");
        toggle.classList.add("fa-sun-o");
    }
    else 
        if(localStorage.getItem("theme_status") == "light") 
            body.classList.remove("dark");
}

toggle_mode.addEventListener("click", e => {
    e.preventDefault();

    if(active) {
        localStorage.setItem("theme_status", "light");
        body.classList.remove("dark");
        active = false;
        toggle.classList.add("fa-moon-o");
        toggle.classList.remove("fa-sun-o");
    }
    else {
        localStorage.setItem("theme_status", "dark");
        body.classList.add("dark");
        active = true;
        toggle.classList.remove("fa-moon-o");
        toggle.classList.add("fa-sun-o");
    }
})
