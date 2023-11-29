
let c = document.getElementById("Celcius");
let f = document.getElementById("Fahrenheit");
let k = document.getElementById("Kelvin");

function compute(event) {
    let currentValue = event.target.value;

    switch (event.target.name) {
        case "Celcius":
            f.value = (currentValue * 9 / 5) + 32;
            k.value = parseFloat(currentValue) + 273.15;
            break;

        case "Fahrenheit":
            c.value = (currentValue - 32) * 5 / 9;
            k.value = (currentValue - 32) * 5 / 9 + 273.15;
            break;

        case "Kelvin":
            c.value = currentValue - 273.15;
            f.value = (currentValue - 273.15) * 9 / 5 + 32;
            break;

        default:
            break;
    }
}

function Reset() {
    c.value = "";
    f.value = "";
    k.value = "";

}