const body = document.body;
const toggle_mode = document.getElementById('toggle_mode');
const toggle = document.getElementById('toggle');
const color_primary = document.getElementById('primary');
const color_secondary = document.getElementById('secondary');

color_primary.addEventListener('change', function(){
    body.style.setProperty('--light-primary-color', color_primary.value);
})

color_secondary.addEventListener('change', function(){
    body.style.setProperty('--light-secondary-color', color_secondary.value);  
})

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
