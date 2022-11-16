let valueInput = document.querySelector("#inval");
console.log(valueInput.value);

function calculate(number){
    valueInput.value+=number
}
function result(){
   valueInput.value = eval(valueInput.value)
}

function off (){
    valueInput.value = "Off"
    valueInput.style.color = "red"
}

function del (){
    valueInput.value = ""
    valueInput.style.color = "orange"
}