"use strict";



function insert(num) {
    document.form.input.value = document.form.input.value + num;     
}

function clean() {
    document.form.input.value = " ";
}
function back() {
    document.form.input.value = document.form.input.value.substring(0, document.form.input.value.length-1);
}
function equal() {
    document.form.input.value = eval(document.form.input.value);
}