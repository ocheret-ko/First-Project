document.getElementById("menu-burger").onclick = function() {menuOpen()};

function menuOpen() {
    document.getElementById("nav").classList.toggle("show");
    document.getElementById("menu-burger__section").classList.toggle("show");
}