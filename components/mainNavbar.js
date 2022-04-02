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
    <img
      src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348"
      alt="navabr pic"
    />
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

// export {navbarTop,navbar};








//=================================Footer==========================================================//








 
const footer = () => {
    return ` 
      <div id="solution">
                  <h2>GET TO KNOW US</h2>
                  <p><a href="">ABOUT US</a></p>
                  <p><a href="">CONTACT US</a></p>
                  <p><a href="">EARTHCARE</a></p>
                  <p><a href="">AFFILIATE PROGRAM</a></p>
                  <p><a href="">TERMS & CONDITION</a></p>
                  <p><a href="">REFUND & CANCELLATION</a></p>
                  <p><a href="">PRIVACY POLICY</a></p>
                  <p><a href=""> ORDER & SHIPPING</a></p>
                 
                  <p><a href="">PAYMENT TERMS</a></p>
                  <p><a href="">TERMS OF SERVICE</a></p>
                  <p><a href="">REFUND POLICY</a></p>
  
              </div>
              <!-- platform column -->
              <div id="platform">
                  <h2>ALSO AVAILABLE ON</h2>
                  <p><a href="https://www.nykaa.com">NYKAA</a></p>
                  <p><a href="https://www.amazon.in/">AMAZON</a></p>
                  <p><a href="https://www.flipkart.com/">FLIPKART</a></p>
                  <p><a href="https://www.myntra.com/">MYNTRA</a></p>
                  <p><a href="https://www.foxy.in/brands/dot-key">FOXY</a></p>
                  
              </div>
              <!-- company column -->
              <div id="company">
                  <h2>STAY UPDATED</h2>
               <input type="email" value placeholder="email@example.com" name="email"/>  
               <button type="submit">SUBMIT</button>
  
          <div>
              <p>FOLLOW US</p>
              <div class="icon">
                  <a href="https://business.facebook.com/dotandkey"><i class="fa-brands fa-facebook-f "></i></a>
                  <a href="https://www.instagram.com/dotandkey.skincare/"><i class="fa-brands fa-instagram"></i> </a>
                 <a href="https://www.youtube.com/channel/UCD7U0EUBYg9YlL-zVZjkjfA"><i class="fa-brands fa-youtube"></i></a>
              </div>
          </div>
             
          <p>© 2022 Dot & Key</p>
      </div>
  `
  
  }
  

  
  



  
  
export {navbarTop,navbar,footer};