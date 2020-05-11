const body = document.body;
const toggle_mode = document.getElementById('toggle_mode');
const toggle = document.getElementById('toggle');
const color_primary = document.getElementById('primary');
const color_secondary = document.getElementById('secondary');
const reset_button = document.getElementById('reset-theme');

var active = false;

reset_button.addEventListener('click', e => {
    body.style.setProperty('--dark-primary-color', "rgb(255, 255, 255, 1)");
    localStorage.setItem("color_secondary_dark", "rgb(255, 255, 255, 1)");
    body.style.setProperty('--dark-secondary-color', "rgb(0, 0, 0, 1)"); 
    localStorage.setItem("color_secondary_dark", "rgb(0, 0, 0, 1)");
    body.style.setProperty('--light-primary-color', "rgba(238,174,202,1)");
    localStorage.setItem("color_secondary_dark", "rgba(238,174,202,1)");
    body.style.setProperty('--light-secondary-color', "rgba(148,233,225,1)"); 
    localStorage.setItem("color_secondary_dark", "rgba(148,233,225,1)");
})

window.onload = function(){
    var active_status = localStorage.getItem("theme_status");
    console.log(active_status);
    if(active_status == "dark") {
        body.classList.add("dark");
        active = true;
        toggle.classList.remove("fa-moon-o");
        toggle.classList.add("fa-sun-o");

        body.style.setProperty('--dark-primary-color', localStorage.getItem("color_primary_dark"));
        body.style.setProperty('--dark-secondary-color', localStorage.getItem("color_secondary_dark")); 
    }
    else 
        if(localStorage.getItem("theme_status") == "light") {
            body.classList.remove("dark");
                
            body.style.setProperty('--light-primary-color', localStorage.getItem("color_primary_light"));
            body.style.setProperty('--light-secondary-color', localStorage.getItem("color_secondary_light")); 
        }
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

color_primary.addEventListener('change', function(){
    if(body.classList.contains('dark')) {
        var color_primary_dark = color_primary.value;
        localStorage.setItem("color_primary_dark", color_primary_dark);
        body.style.setProperty('--dark-primary-color', color_primary_dark);
    }
    else {
        var color_primary_light = color_primary.value;
        localStorage.setItem("color_primary_light", color_primary_light);
        body.style.setProperty('--light-primary-color', color_primary_light);
    }
})

color_secondary.addEventListener('change', function(){
    if(body.classList.contains('dark')) {
        var color_secondary_dark = color_secondary.value;
        localStorage.setItem("color_secondary_dark", color_secondary_dark);
        body.style.setProperty('--dark-secondary-color', color_secondary_dark); 
    }
    else {
        var color_secondary_light = color_secondary.value;
        localStorage.setItem("color_secondary_light", color_secondary_light);
        body.style.setProperty('--light-secondary-color', color_secondary_light); 
    }  
})

