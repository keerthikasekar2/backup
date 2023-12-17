// var a=Number(document.getElementById("num1").value);
// var b=Number(document.getElementById("num2").value);
// console.log(a,b);

// document.getElementById("add").addEventListener("click",()=>{
//     document.getElementById("result").innerHTML=a+b;
// });
document.getElementById("add").addEventListener("click",()=>{
    let x=Number(document.getElementById("num1").value);
    let y=Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML=x+y;
});
document.getElementById("sub").addEventListener("click",()=>{
    let x=Number(document.getElementById("num1").value);
    let y=Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML=x-y;
});
document.getElementById("mul").addEventListener("click",()=>{
    let x=Number(document.getElementById("num1").value);
    let y=Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML=x*y;
});
document.getElementById("div").addEventListener("click",()=>{
    let x=Number(document.getElementById("num1").value);
    let y=Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML=x/y;
});
