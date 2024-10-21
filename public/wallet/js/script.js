
const deposit_input = document.getElementById('deposit_input');
const deposit = document.getElementById('deposit');
const balance = document.getElementById('balance');

deposit_input.value = 0;


function plus(x){
    console.log('plus');
    const value = parseFloat(deposit_input.value);
    deposit_input.value = value+x;
}
