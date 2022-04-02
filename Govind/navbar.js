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
  let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

  // ------------------------------------------------
  
  var data = []
  function moviesdata(imgurl, name, cutprize,prize ) {
      this.imgurl = imgurl;
      this.name = name;
      this.cutprize = cutprize;
      this.prize=prize;
      
  }
  var one = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_78dd953a-9e91-4c53-8127-68f733ff8f8c_360x.jpg?v=1646474987", "Vitamin C+E Super Bright Moisturizer", "RS. 595","565")
  var two = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_2_360x.jpg?v=1646475136", "Cica Calming Anti-Acne Night Gel ","RS. 595","565")
  var three = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/pro_360x.png?v=1646543242", "72 Hr Hydrating Gel with Probiotics ", "RS. 745","670")
  var four = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-12_360x.jpg?v=1646474736", "Retinol + Ceramide Night Cream", "RS. 945","850")
  var five = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-10_360x.jpg?v=1646475087", "Watermelon SuperGlow Matte ", "RS. 695","590")
  var six = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_2_720x.jpg?v=1646475136 ", "AVOCADO SMOOTHIE DAY CREAM SPF 20", "RS. 845","676")
  var seven = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/day-night_1800x1800_1_360x.png?v=1628595712", "DAY & NIGHT CARE COMBO", "RS. 1790","1611")
  var eight = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-L_360x.jpg?v=1638974908", "HAND CREAM + SANITIZER, LAVENDER", "RS. 850","720")
  var nine = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/FootCream-Lav_Pep_540x.jpg?v=1638974857", "FOOT CREAM + DEODORIZER, MINT", "RS. 425","395")
  var Ten = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-Rose_360x.jpg?v=1644862602", "HAND CREAM + SANITIZER, ROSE", "RS. 455","395")
  var Eleven = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-M_360x.jpg?v=1644916543", "FOOT CREAM + DEODORIZER, MINT", "RS. 445","385")
  data.push(one, two, three, four, five, six, seven, eight, nine,Ten,Eleven)
  localStorage.setItem("movies", JSON.stringify(data))
  
  let cartArr = JSON.parse(localStorage.getItem("cartProducts")) || [];
  data.map(function (elem) {
  
      let movie = document.createElement("div");
      movie.setAttribute("class", "movie")
  
      let img = document.createElement("img");
      img.src = elem.imgurl;
      img.setAttribute("class", "image");

      let image=document.createElement("img");
      image.src="rating.PNG"

  
      let datadiv = document.createElement("div");
      datadiv.setAttribute("class", "datadiv")
      let name = document.createElement("p");
      name.innerText = elem.name;


       let cutprizediv = document.createElement("div")
      let cutprize = document.createElement("s");
      cutprize.innerText = elem.cutprize;
      cutprize.setAttribute("class","pcprice")
      cutprizediv.append(cutprize);

      let button=document.createElement("button");
      button.innerText="ADD TO CART";
      button.addEventListener("click",() =>{
        cartArr.push(elem);
        localStorage.setItem("cartProducts",JSON.stringify(cartArr));
        cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
        cartBox.innerHTML = null;
        display(cartProducts);
        total();
        cartBox.style.display = "block";
      })


      let pdiv=document.createElement("div");
      let prize=document.createElement("p")
      pdiv.setAttribute("id","pcdiv")
      prize.innerText="Rs." + elem.prize;
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
data.map(({imgurl,name,prize}) =>{
  let div2 = createTag("div");
  let img = createTag("img");
  img.src = imgurl
  let price = createTag("p");
  price.innerText ="Rs." + prize;
  let itemName = createTag("h4");
  itemName.innerText = name;
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
    return a + (+b.prize);
  },0);
  totalPriceTag.innerText = null;
  totalPriceTag.innerText = totalAmount;
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





