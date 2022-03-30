console.log("Hello World!");
let data = JSON.parse(localStorage.getItem("DotAndKeyProducts"))

let bestSellers = JSON.parse(localStorage.getItem("bestSellers"))
console.log(data)
console.log(bestSellers)


import {dataRetrieve} from "../scripts/components/jsonData.js"
console.log(dataRetrieve)