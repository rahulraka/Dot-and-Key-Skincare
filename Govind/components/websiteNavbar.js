function navbarTop(){
    return `  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <small class="d-block w-100" alt="...">FREE LAVENDER VANITY POUCH ABOVE 1499</small>
      </div>
      <div class="carousel-item">
        <small class="d-block w-100" alt="...">FREE VITAMIN C SUMMERY LOCATION ABOVE 999</small>
      </div>
      <div class="carousel-item">
        <small class="d-block w-100" alt="..."> UPTO 20% OFF SITEWIDE</small>
      </div>
      <div class="carousel-item">
        <small class="d-block w-100" alt="...">  3% OFF ON PREPAID ORDERS</small>
      </div>
      <div class="carousel-item">
        <small class="d-block w-100" alt="...">  10% CASHBACK ON ALL ORDERS</small>
      </div>
    </div>
  </div>`
}

function navbar(){
    return `      <div>
    <i class="fa-solid fa-bars" id="button" onclick="navFunc()"></i>
  </div>

  <div>
  <a href="http://127.0.0.1:5501/index.html">
  <img
      src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348"
      alt="navabr pic"
    /></a>
  </div>

  <div>
    <div>
      <input type="search" placeholder="Search" />
    </div>
 
  
    <i class="fa-solid fa-bag-shopping"></i>
    <i class="fa-solid fa-user"></i>
    <div class="cartBox">
  
    
    </div>
  </div>`
}

export {navbarTop,navbar};