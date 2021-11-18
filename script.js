let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let switchButton = document.getElementById('switch');

function switchText() {
    let a = input1.value;
    input1.value = input2.value;
    input2.value = a;
}

switchButton.addEventListener("click", switchText);