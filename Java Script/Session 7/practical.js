
const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const save = document.getElementById("save");
const reset = document.getElementById("reset");
const load = document.getElementById("load");
let number = 0;
let saved = 0;

function updateCounter(number) {
    const content = document.createTextNode(number);
    counter.innerHTML = "";
    counter.appendChild(content);
}

increase.addEventListener('click', function () {
    number++;
    updateCounter(number);
});

decrease.addEventListener('click', function () {
    number--;
    if(number < 0) {
        number = 0;
        return;
    }
    updateCounter(number);
});

save.addEventListener('click', function () {
    saved = number;
});

reset.addEventListener('click', function () {
    saved = 0;
    number = 0;
    updateCounter(number);
});

load.addEventListener('click', function () {
    number = saved;
    updateCounter(number);
});