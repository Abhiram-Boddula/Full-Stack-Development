function showMenu(id) {
    let menuContainer = document.getElementById(id);
    menuContainer.style.visibility = "visible"
    menuContainer.style.opacity="1"
}
function hideMenu(id) {
    let menuContainer = document.getElementById(id);
    menuContainer.style.visibility = "hidden"
    menuContainer.style.opacity="0"
} 
var counter = 1;
setInterval(function () {
    document.getElementById('D' + counter).checked = true;
   counter++;
    if (counter > 2 ) {
        counter = 1;
    }
}, 1000);