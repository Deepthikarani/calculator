let ac = document.getElementById("ac");
let clr = document.getElementById("clr");
let display = document.getElementById("displaybox");

ac.onclick = function(){
    display.value = 0;
}

clr.onclick = function(){
    display.value = " ";
}
 
function appendto(input)
{
    display.value = display.value +  input;
}
function calc()
{
    try
    {
        let evaluate = display.value;
        let res = eval(evaluate);
        display.value = res;
    }
    catch(error)
    {
       evaluate = "Error";
       display.value = evaluate;
    }
}

