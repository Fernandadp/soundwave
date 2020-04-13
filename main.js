//const landing = document.getElementById('landing');
//const discover = document.getElementById('discover');
//const join = document.getElementById('join');
//const footer = document.getElementById('footer');

function myFunction() {
    var x = document.getElementById("mobileMenu");
    var nav = document.getElementById("mobileIcon");
    
    if (x.style.display === "block") {
        x.style.display = "none";
        nav.classList.remove("open");
    } else {
        x.style.display = "block";
        nav.classList.add("open");
    }
}