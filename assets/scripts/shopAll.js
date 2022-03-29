// slider banner starts here...

let slideIndex = 1;
showSlides(slideIndex);
document.querySelector(".prev").addEventListener("click", function () {
  plusSlides(-1);
});
document.querySelector(".next").addEventListener("click", function () {
  plusSlides(1);
});

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// slider banner ends here...

// content starrts here

const appendAll = (productsContainer, data) => {
  // data.map((el)=>{
  // let main=document.createElement("div");
  // main.setAttribute("id","main");

  // let imgDiv=document.createElement("div");
  // imgDiv.setAttribute("id","imgDiv")
  // let productImg= document.createElement("img");
  // productImg.setAttribute("id","productImg");
  // let allDiv = document.createElement("div");
  // allDiv.setAttribute("id","allDiv")

  // let starDiv= document.createElement("div");
  // starDiv.setAttribute("id","starDiv")

  // let titleDiv = document.createElement("div");
  // titleDiv.setAttribute("id","title");

  // let productTitle = document.createElement("p")
  // productTitle.setAttribute("id","productTitle");

  // let priceDiv=document.createElement("div");
  // priceDiv.setAttribute("id","priceDiv");

  // let price = document.createElement("p");
  // price.setAttribute("id","price");

  // let cartDiv = document.createElement("div");
  // cartDiv.setAttribute("id","cartDiv");

  // let cartBtn=document.createElement("button");
  // cartBtn.setAttribute("id","cartBtn");
  // cartBtn.innerText="ADD TO Cart";

  // allDiv.append(starDiv,titleDiv,priceDiv);
  // titleDiv.append(productTitle);
  // priceDiv.append(price);
  // parent.append(imgDiv,allDiv,titleDiv,cartDiv);

  productsContainer.innerHTML = "";
  if (data.length == 0 || data == undefined || data == null) {
    productsContainer.innerHTML = `<hr><h2>NO Product Found for this search !!!</h2><hr>`;
    productsContainer.style.display = "block";
    productsContainer.style.marginBottom = "100px";
    productsContainer.style.textAlign = "center";
  } else {
    // changing the stars according to rating
    data.forEach((item) => {
      var rating = "";
      if (item.rating < 3.8 && item.rating >= 3.5)
        rating = `
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star-with-right-half-black"></span>  
                <span class="iconify" data-icon="openmoji:black-star"></span>`;
      else if (item.rating < 4.3 && item.rating >= 3.8)
        rating = `
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:black-star"></span>`;
      else if (item.rating < 4.8 && item.rating >= 4.3)
        rating = `
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star-with-right-half-black"></span>`;
      else if (item.rating <= 5 && item.rating >= 4.8)
        rating = `
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> `;

      // calculating sale price on the basis of Orignal price
      var x = Math.floor((item.discount / 100) * item.price).toFixed(2);
      x = (item.price - x).toFixed(2);
      var originalPrice;
      if (item.discount != 0) {
        originalPrice = `Rs. ${item.price}`;
        var disc = `SAVE ${item.discount}%`;
      } else {
        originalPrice = "";
        var disc = "";
      }
      // Appending all the product cards on the main div
      productsContainer.innerHTML += `
            <div class="card">
           <div onclick="redirectToIndividualProductPage('${item.id}')"> 
            <img src="${item.images[0]}">
            <div class="description">
                <label class="rating">${rating} ${item.rating}/5</label>
                <p class="title">${item.title}</p>
                <p class="price"><span class="original-price">${originalPrice}</span><span class="sale-price">Rs: ${x}</span></p>
            </div>
            <div class="discount">${disc}</div>
           </div>
           <button id="cartBtn">Add to Cart</button>
        </div>
           `;
    });
  }
};
let productData = JSON.parse(localStorage.getItem("dotAndKeyProducts"));
console.log(productData);
let parent = document.querySelector("#productsContent");
appendAll(parent, productData);

// onclick="addToCart('${item.id}')"
