// ------- ADD TO CART FUNCTIONALITY
function triggerPulse() {
    var t = document.getElementById("targetEl");
    t.classList.add("set-ripple");

    setTimeout(function() {
        t.classList.remove('set-ripple');
    }, 600);

    setTimeout(function() {
        t.classList.add("add-new-color");
    }, 100);

};

var b = document.getElementById("triggerEl");
b.addEventListener("click", triggerPulse, false);


// ------- INCREMENT BADGE NUMBER
function incrementValue() {
    var x = document.getElementById("targetEl");
    x.innerHTML = parseInt(x.innerHTML)+1;
}

var b3 = document.getElementById("triggerEl");
b3.addEventListener("click", incrementValue, false);


// ------- RESET BADGE
// function restart() {
//     var r = document.getElementById("targetEl");
//     r.classList.remove("add-new-color");
//     r.innerHTML = '0'
// }
//
// var b2 = document.getElementById("reset");
// b2.addEventListener("click", restart, false);



