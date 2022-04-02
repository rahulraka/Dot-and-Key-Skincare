var hideNav=document.querySelector("#dropdownC");
var category=document.querySelector("#button").addEventListener("click",hideFunc);
function hideFunc(){
// hideNav.style.top="-10px"
if(hideNav.style.display==="none"){
hideNav.style.display="flex"
} 
else {
    hideNav.style.display="none"
}
}







let  bestSellers = [
    {
        img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-7_9a3af011-3356-4242-82df-c04322d27a6a.jpg?v=1646475324",
        rating:"4.6/5" ,
        title:"10% NIACINAMIDE DAR SPOT CORRECTING SERUM",
        strikeTh:"Rs: 1095.00",
        price: 930.00 ,
        btn:"ADD TO CART"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_2.jpg?v=1646475136",
        rating:"4.8/5" ,
        title:"CICA CALMING ANTIACNE NIGHT GEL WITH NIACINAMIDE",
        strikeTh:"Rs: 565.00",
        price:565.00,
        btn:"ADD TO CART"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-8.jpg?v=1646475626",
        rating:"4.7/5",
        title:"VITAMIN C SERUM FOR GLOWING SKIN BEST SKIN",
        strikeTh:"Rs: 975.00",
        price:828.06,
        btn:"ADD TO CART"
    },
    // {
    //     img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-12.jpg?v=1646474736",
    //     rating:"4.7/5",
    //     title:"RETINOL + CERAMIDE NIGHT CREAM",
    //     strikeTh:"Rs: 945.00",
    //     price:850.00,
    //     btn:"ADD TO CART"
    // },
    // {
    //     img:"https://www.dotandkey.com/products/lip-plumping-sleeping-mask",
    //     rating:"4.7/5",
    //     title:"LIP SLEEPING MASK WITH VITAMIN C",
    //     strikeTh:"Rs: 645.00",
    //     price:612.04,
    //     btn:"ADD TO CART"
    // },
    // {
    //   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_78dd953a-9e91-4c53-8127-68f733ff8f8c.jpg?v=1646474987",
    //   rating:"4.8/5",
    //   title:"VITAMIN C+E SUPER BRIGHT MOISTURIZER",
    //   strikeTh: "Rs: 595.00",
    //   price:565.00 ,
    //   btn:"ADD TO CART"
  
    // }
  
  ]
   
  localStorage.setItem("bestSellers",JSON.stringify(bestSellers))
  
  let summerPics=[
    {
      img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/pro.png?v=1646543242",
      rating:"4.7/5",
      title:"72 HR HYDRATING GEL WITH PROBIOTICS | FOR OILY SKIN",
      strikeTh:"Rs 745.00",
      price:670.00 ,
      btn:"ADD TO CART"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Green-Clay-Listing_1.jpg?v=1648088706",
      rating:"4.7/5",
      title:"ACNE DEFENSE GREEN CLAY MASK | WITH SALICYLIC ACID",
      strikeTh:"Rs 695.00",
      price:625.00 ,
      btn:"ADD TO CART"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_86414d7e-8242-4895-bdf3-4a85fee6de1d.jpg?v=1646475842",
      rating:"4.7/5",
      title:"WATERMELON + VITAMIN C SUPERGLOW FACE WASH",
      strikeTh:"Rs 430.00",
      price:395.00 ,
      btn:"ADD TO CART"
    }
    // {
    //   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1.png?v=1646973657",
    //   rating:"4.7/5",
    //   title:"SUNSCREEN SPF 50 PA+++| ULTRALIGHT, OIL-FREE | NO WHITE CAST",
    //   strikeTh:"Rs 795.00",
    //   price:636.00 ,
    //   btn:"ADD TO CART"
    // },
    // {
    //   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CLEANSER.png?v=1646547021",
    //   rating:"4.7/5",
    //   title:"CICA CALMING ACNE FIGHTING FACEWASH WITH SALICYLIC | SULPHATE-FREE, SOAP-FREE",
    //   strikeTh:"Rs 495.00",
    //   price:470.00 ,
    //   btn:"ADD TO CART"
    // },
    // {
    //   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HTONER_6028d509-a7a2-48e9-b91e-73958c8f7639.png?v=1647236759",
    //   rating:"4.7/5",
    //   title:"RICE WATER PROBIOTICS HYDRATING TONER | ALCOHOL-FREE",
    //   strikeTh:"Rs 595.00",
    //   price:565.00 ,
    //   btn:"ADD TO CART"
    // }
  ]
  

  localStorage.setItem("summerPics",JSON.stringify(summerPics))

  let newestArrivals = [
    {
      img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/TOBER.png?v=1646547062",
      rating:"4.9/5",
      title:"CICA CALMING ANTIACNE NIACINAMIDE TONER ",
      strikeTh:"Rs: 495.00",
      price: 470.00,
      btn:"ADD TO CART"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CLEANSER.png?v=1646547021",
      rating:"4.9/5",
      title:"CICA CALMING ACNE FIGHTING FACEWASH WITH SALICYLIC | SULPHATE-FREE, SOAP-FREE",
      strikeTh:"Rs: 495.00",
      price: 470.00,
      btn:"ADD TO CART"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HTONER_6028d509-a7a2-48e9-b91e-73958c8f7639.png?v=1647236759",
      rating:"4.9/5",
      title:"RICE WATER PROBIOTICS HYDRATING TONER ",
      strikeTh:"Rs: 595.00",
      price: 565.00,
      btn:"ADD TO CART"
    }
    // {
    //   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/TOBER.png?v=1646547062",
    //   rating:"4.9/5",
    //   title:"CICA CALMING ANTIACNE NIACINAMIDE TONER WITH GREEN TEA | ALCOHOL FREE",
    //   strikeTh:"Rs: 495.00",
    //   price: 470.00,
    //   btn:"ADD TO CART"
    // },
    // {
    //   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-12.jpg?v=1646474736",
    //   rating:"4.9/5",
    //   title:"RETINOL + CERAMIDE NIGHT CREAM",
    //   strikeTh:"Rs: 945.00",
    //   price: 850.00,
    //   btn:"ADD TO CART"
    // },
    // {
    //   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/lipf_360x.png?v=1646980857",
    //   rating:"4.9/5",
    //   title:"LIP SLEEPING MASK WITH VITAMIN C",
    //   strikeTh:"Rs: 645.00",
    //   price: 612.04,
    //   btn:"ADD TO CART"
    // }
  ]
  
   
localStorage.setItem("newestArrivals",JSON.stringify(newestArrivals))

  let reviews =[
    {
      img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/AHASleepMask1.jpg?v=1635159675",
      desc:"This is my 2nd purchase & I love how it makes me glow in the morning after a long & tiring day at work.",
      name:"Rashmi Shrivastav"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_2.png?v=1634903414",
      desc:"My acne-prone & oily skin issues are finally sorted. Thanks, Dot & Key for this amazing launch.",
      name:"Ankita Pugalia"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Artboard1_2.jpg?v=1635157945",
      desc:"I love this moisturiser. It keeps my skin so soft and supple and it's not oily or sticky at all.",
      name:"Charu Gupta"
    },
    // {
    //   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/a.jpg?v=1634903074",
    //   desc:"Plumping Lip mask is just amazing makes lips smooth and naturally pink.",
    //   name:"Dipshi Thapa"
    // },
    // {
    //   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/nightresetretinolcream_f7f3a49c-5a22-4173-81a7-6aad8d00fe8d.jpg?v=1634903102",
    //   desc:"I was searching for good night gel and was even searching for retinol for beginners. This cream was a solution.",
    //   name:"Divya Sai Nemmani"
    // },
    // {
    //   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/image-2.png?v=1635158596",
    //   desc:"I ordered 72 hour hydrating gel + probiotics, I found it very relaxing and soothing on my skin. I love it so much.",
    //   name:"Anuradha Iyer"
    // }
  
  ]
   
  
  
  localStorage.setItem("reviews",JSON.stringify(reviews))
  
  
  


// ================================ //




let mybestSellers = JSON.parse(localStorage.getItem("bestSellers"))
let myreviews = JSON.parse(localStorage.getItem("reviews"))
let mynewestArrivals = JSON.parse(localStorage.getItem("newestArrivals"))
let mysummerPics = JSON.parse(localStorage.getItem("summerPics"))
console.log(summerPics)
console.log(bestSellers)
console.log(newestArrivals)
console.log(reviews)

let products1 = document.querySelector(".products1")
let products2 = document.querySelector(".products2")


bestS(mybestSellers)

function bestS(mybestSellers){

  mybestSellers.forEach(function(elem){


    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = elem.img ;

    let rating = document.createElement("h5")
    rating.innerText = elem.rating ;

    let title = document.createElement("h3")

    title.innerText = elem.title ;
 
    let div1 = document.createElement("div")
div1.setAttribute("class","div1")

    let strikeTh = document.createElement("h6")
    strikeTh.innerText = elem.strikeTh ;

    let price = document.createElement("h4")
    price.innerText = `Rs: ${elem.price}`
    price.style.color = "#ff6781"
    price.style.fontWeight = "600"
    price.style.fontSize="20px"


    div1.append(strikeTh,price)

    let btn = document.createElement("div")
    btn.innerText = elem.btn ;
    btn.setAttribute("class","divButton")


div.append(img,rating,title,div1,btn)

products1.append(div)

  })

}






summerP(mysummerPics)

function summerP(mysummerPics){

  mysummerPics.forEach(function(elem){


    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = elem.img ;

    let rating = document.createElement("h5")
    rating.innerText = elem.rating ;

    let title = document.createElement("h3")

    title.innerText = elem.title ;
 
    let div1 = document.createElement("div")
div1.setAttribute("class","div1")

    let strikeTh = document.createElement("h6")
    strikeTh.innerText = elem.strikeTh ;

    let price = document.createElement("h4")
    price.innerText = `Rs: ${elem.price}`
    price.style.color = "#ff6781"
    price.style.fontWeight = "600"
    price.style.fontSize="20px"


    div1.append(strikeTh,price)

    let btn = document.createElement("div")
    btn.innerText = elem.btn ;
    btn.setAttribute("class","divButton")


div.append(img,rating,title,div1,btn)

products2.append(div)

  })

}


let products3 = document.querySelector(".products3")



newestA(newestArrivals)

function newestA(newestArrivals){

  newestArrivals.forEach(function(elem){


    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = elem.img ;

    let rating = document.createElement("h5")
    rating.innerText = elem.rating ;

    let title = document.createElement("h3")

    title.innerText = elem.title ;
 
    let div1 = document.createElement("div")
div1.setAttribute("class","div1")

    let strikeTh = document.createElement("h6")
    strikeTh.innerText = elem.strikeTh ;

    let price = document.createElement("h4")
    price.innerText = `Rs: ${elem.price}`
    price.style.color = "#ff6781"
    price.style.fontWeight = "600"
    price.style.fontSize="20px"


    div1.append(strikeTh,price)

    let btn = document.createElement("div")
    btn.innerText = elem.btn ;
    btn.setAttribute("class","divButton")


div.append(img,rating,title,div1,btn)

products3.append(div)

  })

}















let products4 = document.querySelector(".products4")



review(reviews)

function review(reviews){

  reviews.forEach(function(elem){

    let mainDiv = document.createElement("div")

    let div = document.createElement("div")
    div.setAttribute("class","reviewImg")

    let img = document.createElement("img")
    img.src = elem.img ;

    div.append(img)

    let div2 = document.createElement("div")
    div2.setAttribute("class","reviewText")

    let title = document.createElement("p")

    title.innerText = elem.desc ;
    let h3 = document.createElement("h3")
    h3.innerText = elem.name ;

    div2.append(title,h3)
 



mainDiv.append(div,div2)
products4.append(mainDiv)

  })

}