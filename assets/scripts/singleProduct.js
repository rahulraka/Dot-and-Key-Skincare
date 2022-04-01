var obj={
    title: "DAMASK ROSE RESURFACING GEL MASK",
    images: [
      
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_0805e21b-6e8f-4afb-8efb-4736d3995fc3_360x.jpg?v=1646054218",
    ],
    size: ["25ml"],
    description: [
      "Give your skin a luxe glow treatment to reveal plump, dewy glowing skin with Damask Rose Resurfacing Gel Mask.",
      "A 15-min wash off soft gel mask featuring real rose petals, ideal for dry, dull and dehydrated skin.",
      "Infused with Damask Rose extract (rose oil+rose water+dry rose petals), it boosts collagen synthesis to enhance elasticity and firmness for petal-soft, youthful skin.",
      "With the goodness of chamomile extract and aloe vera, it helps soothe inflammation, reduces redness and retains moisture for nourished skin with a refined texture.",
      "The additional infusion of hyaluronic acid intensely hydrates skin and locks-in moisture for supple & bouncy skin.",
    ],
    perks: [
      "Get Silicone Applicator Free with this product",
      "FREE Hand Foot duo on orders above 899",
      "Pick your FREE 5-in-1 kit above 1899",
      "FREE Face Roller + Face Oil above 2799",
      "Additionally, Free Body Lotion on all orders above 899",
      "Buy 2 Get 2 FREE on Bodycare Range",
      "BUY 3 Get 25% of on Ikwi products",
      "Extra 3% off on all prepaid orders",
      "20% Cashback on all orders",
    ],
    category: "Skin Glow",
    price: "918.19",
    discount: 0,
    rating: "4.3",
    id: "DK0151",
  };

  let desc=document.getElementById("description");
let perks=document.getElementById("perkslist");
console.log(obj)


obj.description.map((item)=>{
let li=document.createElement("li");
li.textContent=item;
desc.append(li)
})


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
        let cartArray=JSON.parse(localStorage.getItem("cartItem"))||[];
        
            cartArray.push(item);
         localStorage.setItem("cartItem",JSON.stringify(cartArray));
})