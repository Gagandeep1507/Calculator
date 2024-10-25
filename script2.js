let callInput = document.getElementById("text")
function display(value){
    callInput.value += value;
}

function clearScreen(){
    callInput.value="";
}

function solve(){
    let x = callInput.value;
    let answer = eval(x)
    callInput.value = answer;
}