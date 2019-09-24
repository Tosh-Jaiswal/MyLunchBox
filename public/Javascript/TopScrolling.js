<!-- script to hide top bar when scrolling down -->

var topBar = document.getElementById("btn-group");
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        if (currentScrollPos<200){
            topBar.style.top = "0";
        }
        topBar.onmouseover = function(){
            topBar.style.top = "0";}
    } else {
        topBar.style.top = "-9vh";
    }
    prevScrollPos = currentScrollPos;
}