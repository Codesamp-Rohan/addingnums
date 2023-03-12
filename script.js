function reset(){
    document.getElementById("textnum1").value = "0";
    document.getElementById("textnum2").value = "0";
    document.getElementById("textsum").value = "0";
}

function add(){
    const num1 = Number(document.getElementById("textnum1").value);
    const num2 = Number(document.getElementById("textnum2").value);
    const sum = num1 + num2;
    document.getElementById("textsum").value = String(sum);
}