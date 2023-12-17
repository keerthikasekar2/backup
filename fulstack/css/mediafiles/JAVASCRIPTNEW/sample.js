function sample(){
    let a=document.querySelector(".d1");
   let b= new Image(300,300);
   b.src="img/adopt5.jpg";
   console.log(a.appendChild(b));

// sample();
}
function show(){
    let x=Number(document.getElementById("num1").value);
    let y=Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML=(`addition:${x+y}`);
}
let result=(c,d)=>{//spread operator
    let x=Number(document.getElementById("num1").value);
    let y=Number(document.getElementById("num2").value);
    document.getElementById("result1").innerHTML=x-y*c+d;
}
//addeventliseneer
// document.addEventListener(type,listener);
let result1=()=>{
    let x=Number(document.getElementById("num1").value);
    let y=Number(document.getElementById("num2").value);
    document.getElementById("result2").innerHTML=x*y;

}

document.getElementById("div").addEventListener("click",()=>{
    let x=Number(document.getElementById("num1").value);
    let y=Number(document.getElementById("num2").value);
    document.getElementById("result3").innerHTML=x/y;
});

let obj={itemId:1,itemName:"mobile",modelName:"samsung A31",price:20000,imgUrl:"img/adopt5.jpg"};

    document.getElementById("img1").addEventListener("click",()=>{
        document.getElementById("division").innerHTML=(`<br>Item Id:${obj.itemId}<br>Item Name:${obj.itemName}
    <br>model name:${obj.modelName}<br>pricedetail:${obj.price}<br><img src="${obj.imgUrl}"width=100 height=100>`);
});
    