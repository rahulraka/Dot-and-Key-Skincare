let obj=JSON.parse(localStorage.getItem("singleProduct"))

  let desc=document.getElementById("description");
let perks=document.getElementById("perkslist");
console.log(obj)


obj.description.map((item)=>{
let li=document.createElement("li");
li.textContent=item;
desc.append(li)
})
let cart=JSON.parse(localStorage.getItem("cartArr"))||[]



let x=Math.floor((obj.discount/100)*obj.price)
x=obj.price-x;
x=x.toFixed(2)
document.getElementById("disc").textContent=`RS:  ${x}`;

obj.perks.map((item)=>{
let li=document.createElement("li");
li.textContent=item;
perks.append(li)
})

let title=document.getElementById("title");
title.textContent=obj.title;

let imgs=document.getElementById("bigImage")

imgs.src=obj.images[0];

document.getElementById("addToCartBtn").addEventListener("click",()=>{
  // addToCart(item)
    cart.push(obj)
    localStorage.setItem("cartArr",JSON.stringify(cart))
    console.log("added");
})