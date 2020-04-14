function showMobileMenu(id) {
    var x = document.getElementById(id);
    var nav = document.getElementById("mobileIcon");

    if (x.style.display === "block") {
        x.style.display = "none";
        nav.classList.remove("open");
    } else {
        x.style.display = "block";
        nav.classList.add("open");
    }
}

function showDiv(id) {
    var landing = document.getElementById('landing');
    var discover = document.getElementById('discover');
    var join = document.getElementById('join');
    var footer = document.getElementById('footer');


    if (id === 'discover') {
        landing.style.display = 'none';
        discover.style.display = 'flex';
        join.style.display = 'none';
        footer.style.display = 'flex';
    } else if (id === 'join') {
        landing.style.display = 'none';
        discover.style.display = 'none';
        join.style.display = 'flex';
        footer.style.display = 'flex';
    } else {
        landing.style.display = 'flex';
        discover.style.display = 'none';
        join.style.display = 'none';
        footer.style.display = 'none';
    }
};
