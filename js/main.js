var allProducts = document.querySelectorAll(
  ".porduct-card .product-details h4"
);

var productBox = document.querySelector("#content");

var btn = document.querySelector("#btn");


var price1 = document.querySelector("#total-price")


var totalPrice = 0


allProducts.forEach(function (item){
  item.onclick = function(){
    price1.innerHTML += item.textContent + "  "


    totalPrice += +(item.getAttribute("price"))

    if(productBox.innerHTML != ""){
      btn.style.display = "block"
      price1.style.display = "block"
    }
  }
})


btn.onclick = function(){
  
  price1.innerHTML =  +(totalPrice) 



  
}

