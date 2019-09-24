/* form edit button script it enables input on clicking edit and it resets the entries to original on clicking cancel*/

var isEnab1 = true;
function editing1(e){
    if(isEnab1){

        document.getElementById('inputEmail').removeAttribute('readonly');

        isEnab1 = false;
        e.innerHTML = "Cancel";
        return;
    }

    document.getElementById('inputEmail').readOnly = true;
    document.getElementById('inputEmail').value = '';

    isEnab1 = true;
    e.innerHTML = "Edit";
}

var isEnab2 = true;
function editing2(e){
    if(isEnab2){

        document.getElementById('inputAddress').removeAttribute('readonly');

        isEnab2 = false;
        e.innerHTML = "Cancel";
        return;
    }

    document.getElementById('inputAddress').readOnly = true;
    document.getElementById('inputAddress').value = '';

    isEnab2 = true;
    e.innerHTML = "Edit";
}

var isEnab3 = true;
function editing3(e){
    if(isEnab3){

        document.getElementById('inputAddress2').removeAttribute('readonly');

        isEnab3 = false;
        e.innerHTML = "Cancel";
        return;
    }

    document.getElementById('inputAddress2').readOnly = true;
    document.getElementById('inputAddress2').value = '';

    isEnab3 = true;
    e.innerHTML = "Edit";
}

var isEnab4 = true;
function editing4(e){
    if(isEnab4){

        document.getElementById('inputCity').removeAttribute('readonly');

        isEnab4 = false;
        e.innerHTML = "Cancel";
        return;
    }

    document.getElementById('inputCity').readOnly = true;
    document.getElementById('inputCity').value = '';

    isEnab4 = true;
    e.innerHTML = "Edit";
}
// resets the state dropdown to the option with index 0
var isEnab5 = true;
function editing5(e){
    if(isEnab5){

        document.getElementById('inputState').removeAttribute('disabled');

        isEnab5 = false;
        e.innerHTML = "Cancel";
        return;
    }

    document.getElementById('inputState').disabled = true;
    document.getElementById('inputState').selectedIndex = "0";

    isEnab5 = true;
    e.innerHTML = "Edit";
}

var isEnab6 = true;
function editing6(e){
    if(isEnab6){

        document.getElementById('inputZip').removeAttribute('readonly');

        isEnab6 = false;
        e.innerHTML = "Cancel";
        return;
    }

    document.getElementById('inputZip').readOnly = true;
    document.getElementById('inputZip').value = '';

    isEnab6 = true;
    e.innerHTML = "Edit";
}
var isEnab7 = true;
function editing7(e){
    if(isEnab7){

        document.getElementById('inputFirst').removeAttribute('readonly');

        isEnab7 = false;
        e.innerHTML = "Cancel";
        return;
    }

    document.getElementById('inputFirst').readOnly = true;
    document.getElementById('inputFirst').value = '';

    isEnab7 = true;
    e.innerHTML = "Edit";
}
var isEnab8 = true;
function editing8(e){
    if(isEnab8){

        document.getElementById('inputLast').removeAttribute('readonly');

        isEnab8 = false;
        e.innerHTML = "Cancel";
        return;
    }

    document.getElementById('inputLast').readOnly = true;
    document.getElementById('inputLast').value = '';

    isEnab8 = true;
    e.innerHTML = "Edit";
}
/* Gender radio button script on clicking cancel it resets it to originally selected gender */
var isEnab9 = true;
//below code will disable radio by default
document.getElementById('male').disabled = true;
document.getElementById('female').disabled = true;
document.getElementById('othergender').disabled = true;
// below code will store which was originally selected
if (document.getElementById('male').checked===true){
    var male = true;
}
if (document.getElementById('female').checked===true){
    var female = true;
}
if (document.getElementById('other').checked===true){
    var othergender = true;
}

//below code will be executed on clicking edit
function editing9(e){
    if(isEnab9){

        document.getElementById('male').disabled = false;
        document.getElementById('female').disabled = false;
        document.getElementById('othergender').disabled = false;

        isEnab9 = false;
        e.innerHTML = "Cancel";
        return;
    }
    // below code will check the original option on clicking cancel
    if (male){
        document.getElementById('male').checked = true;
    }
    if (female){
        document.getElementById('female').checked = true;
    }
    if (othergender){
        document.getElementById('othergender').checked = true;
    }
    document.getElementById('male').disabled = true;
    document.getElementById('female').disabled = true;
    document.getElementById('othergender').disabled = true;


    isEnab9 = true;
    e.innerHTML = "Edit";
}
//end radio buttons


/* End */