  import {navbarTop,navbar} from "./components/navbar.js";
  import footer from "./components/footer.js";
 


let bar = document.querySelector("#bar");
bar.innerHTML = navbarTop();
let navbarDiv = document.querySelector("#navbar");
navbarDiv.innerHTML = navbar();

  let footerdiv= document.querySelector("footer")

  footerdiv.innerHTML=footer();




  
  var data = []
  function moviesdata(imgurl, name, cutprize,prize ) {
      this.imgurl = imgurl;
      this.name = name;
      this.cutprize = cutprize;
      this.prize=prize;
      
  }
  var one = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_78dd953a-9e91-4c53-8127-68f733ff8f8c_360x.jpg?v=1646474987", "Vitamin C+E Super Bright Moisturizer", "RS. 595","565")
  var two = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_2_360x.jpg?v=1646475136", "Cica Calming Anti-Acne Night Gel ","RS. 595","565")
  var three = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/pro_360x.png?v=1646543242", "72 Hr Hydrating Gel with Probiotics ", "RS. 595","565")
  var four = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-12_360x.jpg?v=1646474736", "Retinol + Ceramide Night Cream", "RS. 595","565")
  var five = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-10_360x.jpg?v=1646475087", "Watermelon SuperGlow Matte ", "RS. 595","565")
  var six = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_2_720x.jpg?v=1646475136 ", "AVOCADO SMOOTHIE DAY CREAM SPF 20", "RS. 595","565")
  var seven = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/day-night_1800x1800_1_360x.png?v=1628595712", "DAY & NIGHT CARE COMBO", "RS. 595","565")
  var eight = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-L_360x.jpg?v=1638974908", "HAND CREAM + SANITIZER, LAVENDER", "RS. 595","565")
  var nine = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/FootCream-Lav_Pep_540x.jpg?v=1638974857", "FOOT CREAM + DEODORIZER, MINT", "RS. 595"," 565")
  var Ten = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-Rose_360x.jpg?v=1644862602", "HAND CREAM + SANITIZER, ROSE", "RS. 595","565")
  var Eleven = new moviesdata("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-M_360x.jpg?v=1644916543", "FOOT CREAM + DEODORIZER, MINT", "RS. 595","565")
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
      cutprizediv.append(cutprize);

      let button=document.createElement("button");
      button.innerText="ADD TO CART";
      button.addEventListener("click",() =>{
        cartArr.push(elem);
        localStorage.setItem("cartProducts",JSON.stringify(cartArr));

      })


      let pdiv=document.createElement("div");
      let prize=document.createElement("p")
      prize.innerText="Rs." + elem.prize
      pdiv.append(prize)


      let prizediv=document.createElement("div")
      prizediv.setAttribute("id","golu")
      prizediv.append(cutprizediv,pdiv)


      
    //   let rate = document.createElement("p");
    //   rate.innerText = elem.rate;

      datadiv.append(img,image,name,prizediv,button);
      
      document.getElementById("productcontainer").append(datadiv);
  })

