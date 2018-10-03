//array that user input will be stored in
const err = "Invalid integer input, please reload and try again.";

//request start input
const q1 = "Enter the start";
var start = prompt(q1);
var x =parseInt(start, 10);

//double checks if the value is an integer and also not equal to 0
if (Number.isInteger(x) && x != 0)
{
    x = x;
}
else
{
    document.getElementById("fourth").innerHTML = err;
}

//request end input
const q2 = "Enter the end";
var end = prompt(q2);
var y =parseInt(end, 10);

if (Number.isInteger(y) && y != 0)
{
    y = y;
}
else
{
    document.getElementById("fourth").innerHTML = err;
}

//request step input
const q3 = "Enter the step";
var step = prompt(q3);
var z =parseInt(step, 10);

if (Number.isInteger(z) && z != 0)
{
    z = z;
}
else
{
    document.getElementById("fourth").innerHTML = err;
}

//for if the step is positive but start is larger than the end
if (x>y && z>0)
{
    document.getElementById("fourth").innerHTML = err;
}

//push values to array and display array
genArray = [];

if (y>x)
{
    for (let i = x; i <= y;)
    {
        genArray.push(i);
        i = i+Math.abs(z);
    }
}
else 
{
    for (let i = x; i >= y;){
        genArray.push(i);
        i = i-Math.abs(z);
}
}


//converting array to binary
binArray = [];

genArray.forEach(function(element){
    elem1 = Math.abs(element)
    binArray.push((elem1).toString(2));
})

if (document.getElementById("fourth").innerHTML != err)
{
document.getElementById("first").innerHTML = "The generated array is " + genArray;
document.getElementById("second").innerHTML = "The sum is " + genArray.reduce(function(a,b){return a+b});
document.getElementById("third").innerHTML = "The binaries of absolut element values are: " + binArray;
}

