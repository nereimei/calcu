function addFunction(num1, num2){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = +num1 + +num2;
    document.getElementById("rslt").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
}

function subFunction(num1, num2){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var diff = num1 - num2;
    document.getElementById("rslt").innerHTML = "The difference between " + num1 + " and " + num2 + " is " + diff;
}

function multFunction(num1, num2){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var prod = num1*num2;
    document.getElementById("rslt").innerHTML = "The product of " + num1 + " and " + num2 + " is " + prod;
}

function divdFunction(num1, num2){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var quot = num1/num2;
    document.getElementById("rslt").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + quot;
}



