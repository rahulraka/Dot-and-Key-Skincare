  import {navbarTop,navbar} from "./components/websiteNavbar.js";
  import footer from "./components/footer.js";
 


let bar = document.querySelector("#bar");
bar.innerHTML = navbarTop();
let navbarDiv = document.querySelector("#navbar");
navbarDiv.innerHTML = navbar();

  let footerdiv= document.querySelector("footer")

  footerdiv.innerHTML=footer();
  // -----------------------------------------------
  let cartBox = document.querySelector(".cartBox"); 
  let cartProducts = JSON.parse(localStorage.getItem("cartArr")) || [];

  
  var data1 = JSON.parse(localStorage.getItem("dotAndKeyProducts"))
  let data=[]
  for(let i=0;i<data1.length;i++) {
    if(data1[i].category=="Moisturizer"){

      data.push(data1[i])
    }
  }
  data.map(function (elem) {
    
    let movie = document.createElement("div");
      movie.setAttribute("class", "movie")
  
      let img = document.createElement("img");
      img.src = elem.images[0];
      img.setAttribute("class", "image");

      let image=document.createElement("img");
      image.src="rating.PNG"

  
      let datadiv = document.createElement("div");
      datadiv.setAttribute("class", "datadiv")
      let name = document.createElement("p");
      name.innerText = elem.title;


       let cutprizediv = document.createElement("div")
      let cutprize = document.createElement("s");
      cutprize.innerText = elem.price;
      cutprize.setAttribute("class","pcprice")
      cutprizediv.append(cutprize);

      let button=document.createElement("button");
      button.innerText="Add To Cart";
      button.addEventListener("click",() =>{
        cartArr.push(elem);
        localStorage.setItem("cartProducts",JSON.stringify(cartArr));
        cartProducts = JSON.parse(localStorage.getItem("cartArr"))
        cartBox.innerHTML = null;
        display(cartProducts);
        total();
        cartBox.style.display = "block";
      })


      let pdiv=document.createElement("div");
      let prize=document.createElement("p")
      pdiv.setAttribute("id","pcdiv")
      prize.innerText="Rs." + elem.price;
      prize.setAttribute("class","pcprice")
      pdiv.append(prize)


      let prizediv=document.createElement("div")
      prizediv.setAttribute("id","golu")
      prizediv.append(cutprizediv,pdiv)


      
    //   let rate = document.createElement("p");
    //   rate.innerText = elem.rate;

      datadiv.append(img,image,name,prizediv,button);
      
      document.getElementById("productcontainer").append(datadiv);
  })




display(cartProducts);
function display(data){



  let priceDiv = createTag("div");

let totalPrice = createTag("h2");

  let subTotal = createTag("h3");
  subTotal.innerText = "SUBTOTAL";

  let btn = createTag("button")
  btn.innerText = "Checkout";

  btn.addEventListener("click",()=>{

    window.location.href="../assets/pages/information.html"
    console.log("123")


  })


   let div = createTag("div");
data.map((elem) =>{
  let div2 = createTag("div");
  let img = createTag("img");
  img.src = elem.images[0]
  let price = createTag("p");
  price.innerText ="Rs." + elem.price;
  let itemName = createTag("h4");
  itemName.innerText = elem.title;
  div2.append(img,itemName,price);
  div.append(div2);
})

priceDiv.append(subTotal,totalPrice);

 cartBox.append(div,priceDiv,btn);

}


total();
function total(){
  let totalPriceTag = document.querySelector(".cartBox h2");
  let totalAmount = cartProducts.reduce((a,b) => {
    return a + (+b.price);
  },0);
  totalPriceTag.innerText = null;
  totalPriceTag.innerText = totalAmount.toFixed(2);
  console.log(totalAmount)
  console.log(totalPriceTag)

}

function createTag(tag){
  return document.createElement(tag);
}

let cartBag = document.querySelector(".fa-bag-shopping");
cartBag.addEventListener("click",() =>{
 cartBox.style.display = "block";
})





