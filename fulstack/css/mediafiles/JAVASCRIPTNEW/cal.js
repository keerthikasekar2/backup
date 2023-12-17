

document.getElementById("clear").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML="";
});
document.getElementById("btn1").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn1").value;
});
document.getElementById("btn2").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn2").value;
});
document.getElementById("btn3").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn3").value;
});
document.getElementById("btn+").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn+").value;
});
document.getElementById("btn4").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn4").value;
});
document.getElementById("btn5").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn5").value;
});
document.getElementById("btn6").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn6").value;
});
document.getElementById("btn-").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn-").value;
});
document.getElementById("btn7").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn7").value;
});
document.getElementById("btn8").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn8").value;
});
document.getElementById("btn9").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn9").value;
});
document.getElementById("btn*").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn*").value;
});
document.getElementById("btn0").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn0").value;
});
document.getElementById("btn.").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn.").value;
});
document.getElementById("btn=").addEventListener("click",()=>{
    let result=document.getElementById("inputbar").innerText;
    document.write(result);
    // document.write(Math(result));
    // document.getElementById("inputbar").innerHTML=Math.result;

});
document.getElementById("btn/").addEventListener("click",()=>{
    document.getElementById("inputbar").innerHTML+=document.getElementById("btn/").value;
});
