
$(document).ready(function() {


var slider = document.getElementById('sliderRegular');

noUiSlider.create(slider, {
    start: [100,1000],
    connect: true,
    step: 100,
    range: {
        min: 100,
        max: 1000
    }
});
    var select1 = document.getElementById('input-select1');

// Append the option elements
    for (var i = 0; i <= 1000; i=i+100) {

        var option1 = document.createElement("option");
        option1.text = i;
        option1.value = i;

        select1.appendChild(option1);
    }
    var select2 = document.getElementById('input-select2');

// Append the option elements
    for (var j = 0; j <= 1000; j=j+100) {

        var option2 = document.createElement("option");
        option2.text = j;
        option2.value = j;

        select2.appendChild(option2);
    }



    slider.noUiSlider.on('update', function (values, handle) {

        var value = values[handle];

        if (handle) {
            select2.value = Math.round(value);
        } else {
            select1.value = Math.round(value);
        }
    });

    select1.addEventListener('change', function () {
        slider.noUiSlider.set([this.value, null]);
    });

    select2.addEventListener('change', function () {
        slider.noUiSlider.set([null, this.value]);
    });
});