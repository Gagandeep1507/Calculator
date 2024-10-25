let calInput = document.getElementById('text')
console.log(calInput)
function display(value){
    
    calInput.value += value;
   
}
function clearScreen(){
    calInput.value = "";
}

function solve(){
    let x = calInput.value;
    let ans = eval(x)
    calInput.value= ans;
}