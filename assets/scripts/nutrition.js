// console.log("hii")
function shop(shop_image){
    this.shop_image = shop_image
    
}
let img1 = new shop("https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner5_1.jpg?v=1647001914")
let img2 = new shop("https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner_1_1.png?v=1647001785")
let img3 = new shop("https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desktop-banner-.2_1_1.png?v=1647001813")
let img4 = new shop("https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner2_2.png?v=1647001557")
let img5 = new shop("https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner4_2.png?v=1647001964")
let img6 = new shop("https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner1_1.png?v=1647002025")
let img7 = new shop("https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner3.png?v=1647002060")

let img_arr = [];
img_arr.push(img1,img2,img3,img4,img5,img6,img7)
let img_div = document.querySelector("#shop_div")



          let count = 0;
          image_append()

           setInterval(function(){
                        count++;
                    image_append()
                    },3000)
                        
                function image_append(){
            if(count>img_arr.length)
                {
                    count = 0;
                
                }
                if(count<img_arr.length)
                {
                    img_div.innerHTML="";
                    let shop_img = document.createElement("img")
                    shop_img.src=img_arr[count].shop_image
                    shop_img.setAttribute("id","shop_img")
                    img_div.append(shop_img)
                    shop_img.addEventListener("click",clicker)
                    function clicker(){
                        if(count==0)
                        {
                            window.location.href="index1.html"
                        }
                        if(count==1)
                        {
                            window.location.href="index1.html"
                        }
                        if(count==2)
                        {
                            window.location.href="index1.html"
                        }
                        if(count==3)
                        {
                            window.location.href="index1.html"
                        }
                        if(count==4)
                        {
                            window.location.href="index1.html"
                        }
                        if(count==5)
                        {
                            window.location.href="index1.html"
                        }
                        if(count==6)
                        {
                            window.location.href="index1.html"
                        }
                        if(count==7)
                        {
                            window.location.href="index1.html"
                        }
                    }
                       
    
                }
            }
       
       
       let lemon = document.createElement("img")
       lemon.src = "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/482-x-574-daily-balance-image_ec7ee15e-7131-4ea7-999b-3581c401bfdf.png?v=1628254032"
       document.querySelector("#lemon").append(lemon)
        
      let lemon1 = document.createElement("img")
      lemon1.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/310X642_slider-claim-image.png?v=1626112083"
      document.querySelector("#daily").append(lemon1)

       
      let word_count = 0;
      let change = ()=>{
          
        document.querySelector("#change").innerHTML="";
       if(word_count>3)
        {
            word_count=0;
        }
        if(word_count==0)
        {
           
          
           document.querySelector("#change").innerHTML = "nutritional balance"
          
         
        }
        if(word_count==1)
        {
           
           document.querySelector("#change").innerHTML = "lifestyle balance"
          
         
        }
         if(word_count==2)
        {
           
           document.querySelector("#change").innerHTML = "wellness balance"
          
         
        }
        if(word_count==3)
        {
            
           document.querySelector("#change").innerHTML = "health balance"
          
         
        }
        
    }
    
     setInterval(function(){
          word_count++;
          change()
      },1000)
     


      function pro(name1,quantity,price,rating,out, product_image)
      {
          this.name1 = name1;
          this.quantity = quantity;
          this.price = price;
          this.rating = rating;
          this.out = out;
          this.product_image = product_image ;
      }
    
    
   let product_arr=[];
   product_arr.push(new pro("IKWI GLOW MELTABLES","30","495.00","4.9","19","https://cdn.shopify.com/s/files/1/0361/8553/8692/files/280-x171-4.png?v=1626112370"))
   product_arr.push(new pro("IKWI HAPPY HAIR GUMMIES","30","645.00","5.0","16","https://cdn.shopify.com/s/files/1/0361/8553/8692/files/IKWI_Gummies_Happy-Hair_Box_3D_Final-_2.png?v=1637837508"))
   product_arr.push(new pro("IKWI STRESS LESS GUMMIES","30","595.00","4.9","15","https://cdn.shopify.com/s/files/1/0361/8553/8692/files/stress_bd483231-e6f1-4041-8897-dba7f96bafa1.png?v=1637835959"))
   product_arr.push(new pro("IKWI SNOOZE PRO MELTABLES","30","525.00","4.7","17","https://cdn.shopify.com/s/files/1/0361/8553/8692/files/280-x171-2.png?v=1626112375"))
   product_arr.push(new pro("IKWI HAPPY HAIR MELTABLES","30","525.00","4.8","24","https://cdn.shopify.com/s/files/1/0361/8553/8692/files/280-x171-3.png?v=1626112383"))
   


   product_arr.forEach(function(el){
       
       let pro_div  = document.createElement("div")
       pro_div.setAttribute("id","pro_div")
       document.querySelector(".products").append(pro_div)

       let img_div = document.createElement("div")
       img_div.setAttribute("id","img_div")
       pro_div.append(img_div)

       let pro_img  = document.createElement("img")
       pro_img.src = el.product_image
       pro_img.setAttribute("id","pro_img")
        img_div.append(pro_img)
       
        let name_div = document.createElement("div")
        name_div.setAttribute("id","name_div")
        name_div.innerText=el.name1
        pro_div.append(name_div)

        let qty_div = document.createElement("div")
        qty_div.setAttribute("id","qty_div")
        qty_div.innerText=`${el.quantity} stripes`
        pro_div.append(qty_div)


        let div1 = document.createElement("div")
       div1.setAttribute("id","div1")
        pro_div.append(div1) 
        let div2 = document.createElement("div")
       div2.setAttribute("id","div2")
        pro_div.append(div2) 

        let div11 = document.createElement("div")
       div11.setAttribute("id","div11")
       div11.innerText=`Rs. ${el.price}`
        div1.append(div11)
        let div12 = document.createElement("div")
       div12.setAttribute("id","div12")
       let star = document.createElement("img")
        star.src = "https://dictionary.cambridge.org/images/thumb/star_noun_001_16391.jpg?version=5.0.230"
        div12.append(star)
        let p = document.createElement("p")
        p.innerText = `${el.rating}/5(${el.out}) `
        div12.append(p)
      
        div1.append(div12)
       

        let div21 = document.createElement("div")
        div21.setAttribute("id","div21")
       let shop_bag= document.createElement("img")
       shop_bag.setAttribute("id","shop_bag")
       shop_bag.src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQyvUGj6QoWzWISchsQ88zisQiZ3_Po46z5hrSEbGyMscIUJ-wX"
       div21.append(shop_bag)
       
        

         div2.append(div21)
         let div22 = document.createElement("div")
        div22.setAttribute("id","div22")
        let heart1 = document.createElement("img")
        heart1.src="https://img.icons8.com/ios/50/000000/like--v1.png"
        heart1.setAttribute("id","heart1")
        div22.append(heart1)
         div2.append(div22)
         let h = 0;
         heart1.addEventListener("click",heart_fun)
         function heart_fun(){
             div22.innerHTML="";
             h++;
             if(h%2!=0)
             {
                heart1.src = "https://img.icons8.com/material-rounded/48/like--v1.png"
                div22.append(heart1)
                div2.append(div22)
             }
             else{
                heart1.src="https://img.icons8.com/ios/50/000000/like--v1.png"
                heart1.setAttribute("id","heart1")
                div22.append(heart1)
                 div2.append(div22)
             }
            
         } 
         
       
         let cart_arr =  [];
         const add = ()=>{
           
             cart_arr =  JSON.parse(localStorage.getItem("cart"))||[];
            cart_arr.push(el)
            localStorage.setItem("cart",JSON.stringify(cart_arr))

        
          let cart_div =  document.querySelector("#cart_div")
          
          let cart_num = document.createElement("div")
          cart_num.setAttribute("id","cart_num")
          cart_div.append(cart_num)
          cart_num.innerText= `Bag (${cart_arr.length})`  
          let underline = document.createElement("div")
          underline.setAttribute("id","underline")
          cart_div.append(underline)

          if(cart_arr.length==0)
          {
              cart_div.innerText= "YOUR BAG IS EMPTY. LET'S FILL IT UP!"
          }
          else{
           
          let des =  document.createElement("div")
          des.setAttribute("id","des")
          des.innerText="Add products worth Rs. 999 or more & get a Vitamin C Summer Body Lotion worth Rs. 595 for FREE Oops! Offer not applicable on some products in your cart"
          cart_div.append(des)
          let pro_append=document.createElement("div")
          pro_append.setAttribute("id","pro_append")
          cart_div.append(pro_append)
          cart_arr.forEach(function(ele){
              let div = document.createElement("div")
              div.setAttribute("id","cart_added")
              pro_append.append(div)
          })
          }

         }

        
         shop_bag.addEventListener("click",add)

   })



   const last1_fun= ()=>{
    window.location.href="index1.html"
}
   let last1 = document.querySelector("#last1")
   last1.addEventListener("click",last1_fun)

  
   const last2_fun= ()=>{
    window.location.href="index1.html"
}
   let last2 = document.querySelector("#last2")
   last2.addEventListener("click",last2_fun)

  


