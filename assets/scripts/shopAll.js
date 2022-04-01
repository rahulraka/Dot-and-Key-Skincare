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

const appendAll = (parent, data) => {
  parent.innerHTML = "";

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
    let main = document.createElement("div");
    main.className = "main";
    let itemDiv = document.createElement("div");
    itemDiv.addEventListener("click", () => {
      redirect(item);
    });
    let image = document.createElement("img");
    image.src = item.images[0];
    let desc = document.createElement("div");
    desc.className="description"
    let ratingD = document.createElement("div");
    ratingD.className = "rating"
    let insideRating = document.createElement("div");
    
    insideRating.innerHTML = `${rating}  ${item.rating}`;
    
    let title = document.createElement("p");
    title.className = "title";
    title.textContent = item.title;

    let price = document.createElement("p");
    price.className = "price";
    let orgPrice = document.createElement("span");
    orgPrice.className = "original-price";
    orgPrice.textContent = originalPrice;
    let salePrice = document.createElement("span");
    salePrice.className = "sale-price";
    salePrice.textContent = x;
    let heart = document.createElement("span");
    heart.innerHTML = `<i class="fa-regular fa-heart fa-2x"></i>`;

    let discount = document.createElement("div");
    discount.className = "discount";
    discount.textContent = disc;

    let cartBtn = document.createElement("button");
    cartBtn.className = "cartBtn";
    cartBtn.innerText = "Add to Cart";
    cartBtn.addEventListener("click", () => {
      addToCart(item);
    });

    itemDiv.append(image, desc, discount);

    ratingD.append(insideRating,heart);
    price.append(orgPrice, salePrice);
    desc.append(ratingD, title, price);
    main.append(itemDiv, cartBtn);

    parent.append(main);
  });
};
function redirect(item) {
  localStorage.setItem("singleProduct",JSON.stringify(item))
  window.location.href="./singleProduct.html";
}

function addToCart(item) {

  console.log("added");
}

let productData = JSON.parse(localStorage.getItem("dotAndKeyProducts"));
console.log(productData);
let parent = document.querySelector("#productsContent");
appendAll(parent, productData);

// sort and filter js starts healer

var categoryFilter = document.getElementById("category-filter");
categoryFilter.addEventListener("change", () => {
  filter(categoryFilter.value, productData);
});
var sorting = document.getElementById("sorting-filter");
sorting.addEventListener("change", () => {
  sortingFilter(sorting.value, productData);
});

var filteredData = productData;
// Filter function will work according to passed product category
function filter(e, data) {
  var category = e;
  filteredData = data;
  console.log(category);
  if (category == "default") {
    appendAll(parent, filteredData);
  } else {
    var temp = [];
    filteredData.forEach((item) => {
      if (item.category == category) {
        temp.push(item);
      }
    });
    filteredData = temp;
    console.log(filteredData);

    appendAll(parent, filteredData);
    var sortingTitle = sorting.value;
    sortingFilter(sortingTitle, filteredData);
  }
}
// Sorting Filter
function sortingFilter(e, data) {
  var sortingTitle = e;
  if (sortingTitle == "default") {
    filteredData = data;
    appendAll(parent, filteredData);
  } else {
    // sort by price low to high
    if (sorting.value == "price-low-high") {
      filteredData.sort(function (a, b) {
        return (
          Math.floor(a.price - (a.price * a.discount) / 100) -
          Math.floor(b.price - (b.price * b.discount) / 100)
        );
      });
      appendAll(parent, filteredData);
    }

    // sort by price high to low
    else if (sorting.value == "price-high-low") {
      filteredData.sort(function (a, b) {
        return (
          Math.floor(b.price - (b.price * b.discount) / 100) -
          Math.floor(a.price - (a.price * a.discount) / 100)
        );
      });
      appendAll(parent, filteredData);
    }
    // sort by rating low to high
    else if (sorting.value == "rating-low-high") {
      filteredData.sort(function (a, b) {
        return a.rating - b.rating;
      });
      appendAll(parent, filteredData);
    }

    // sort by price high to low
    else if (sorting.value == "rating-high-low") {
      filteredData.sort(function (a, b) {
        return b.rating - a.rating;
      });
      appendAll(parent, filteredData);
    }

    // sort by A-Z
    else if (sorting.value == "A-Z") {
      filteredData.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
      appendAll(parent, filteredData);
    }
    // sort by Z-A
    else if (sorting.value == "Z-A") {
      filteredData.sort(function (a, b) {
        return b.title.localeCompare(a.title);
      });
      appendAll(parent, filteredData);
    }
  }
}
