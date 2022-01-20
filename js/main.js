let buyGet = window.localStorage.getItem("items")
  ? JSON.parse(window.localStorage.getItem("items"))
  : [];


//Data of Site  
buyGet = [{
  id: 7,
  category: "Buy1Get1",
  imgSrc: "./images/categories/1.jpg",
  name: " Non-veg pizzaa",
  price: 275,
  veg: false
},
{
  id: 8,
  category: "Buy1Get1",
  imgSrc: "./images/categories/2.jpg",
  name: "Veg pizza",
  price: 375,
  veg: true
}, {
  id: 9,
  category: "Buy1Get1",
  imgSrc: "./images/categories/3.jpg",
  name: "Non-veg pizza",
  price: 175,
  veg: false
}, {
  id: 10,
  category: "Buy1Get1",
  imgSrc: "./images/categories/4.jpg",
  name: "Non-veg pizza ",
  price: 575,
  veg: false
}, {
  id: 11,
  category: "sideAndBeverage",
  imgSrc: "./images/categories/beverages1.jpg",
  name: "Coke(475ml) ",
  price: 60,
  veg: true
}, {
  id: 19,
  category: "sideAndBeverage",
  imgSrc: "./images/categories/beverages1.jpg",
  name: "Coke (375ml)",
  price: 50,
  veg: true
}, {
  id: 12,
  category: "sideAndBeverage",
  imgSrc: "./images/categories/beverages2.jpg",
  name: "Cocktail",
  price: 75,
  veg: true
}, {
  id: 13,
  category: "sideAndBeverage",
  imgSrc: "./images/categories/beverages3.jpg",
  name: "Lemon Juice",
  price: 85,
  veg: true
},
{
  id: 14,
  category: "Desserts",
  imgSrc: "./images/categories/Desserts1.jpg",
  name: "Chocolate Crusted Cheesecake",
  price: 575,
  veg: true
},
{
  id: 15,
  category: "Desserts",
  imgSrc: "./images/categories/Desserts2.jpg",
  name: "Rich Red Velvet Pastry",
  price: 575,
  veg: true
},
{
  id: 16,
  category: "Desserts",
  imgSrc: "./images/categories/Desserts3.jpg",
  name: "Hazelnut Brownie Dark choco cake",
  price: 575,
  veg: false
},
{
  id: 17,
  category: "Desserts",
  imgSrc: "./images/categories/Desserts4.jpg",
  name: "Hazelnut Chocolate Cake",
  price: 575,
  veg: true
},
{
  id: 18,
  category: "Desserts",
  imgSrc: "./images/categories/Desserts4.jpg",
  name: "Chocolate Cake",
  price: 575,
  veg: true
},
{
  id: 20,
  category: "Desserts",
  imgSrc: "./images/categories/Desserts1.jpg",
  name: "Milk Cake",
  price: 275,
  veg: true
}];

localStorage.setItem("items", JSON.stringify(buyGet));


//function to display all items that will make a card and append it in my HTML

function displayCard(buyGet,id) {
  // console.log(buyGet);
  var card = `<div id = ${buyGet.id} class="card col-lg-3 col-md-6 cards-image" style= "width: 15rem;">
    <img class="card-img-top" src="${buyGet.imgSrc}" id="${buyGet.id}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${buyGet.name}</h5>
      <p class="card-text"><em>Some quick example text to build on the card title.</em></p>
      <div class="d-flex justify-content-between align-item-center">
      <div class="d-flex">
        <div style= "color: ${buyGet.veg ? "green" : "red"}"><i class="far fa-dot-circle me-2"></i></div>
        <p> ₹${buyGet.price}</p>
      </div>
      
      <button id = ${buyGet.id} class="btn btn-outline-danger">Add</button>
      </div>
      
    </div>
  </div>`

  document.getElementById(id).innerHTML += card;
}

//to store count of dishes and display them according to their type
var coke = 0, pizza = 0, deserts = 0;

for (var i = 0; i < buyGet.length; i++) {

  if (buyGet[i].category === "Buy1Get1") {
    displayCard(buyGet[i],"buy1-get1");
    pizza++;
    document.getElementsByClassName("product")[0].innerHTML = pizza + " products";
  } else if (buyGet[i].category === "sideAndBeverage") {
    displayCard(buyGet[i],"side_cokes");
    coke++;
    document.getElementsByClassName("product")[1].innerHTML = coke + " products";
  } else if (buyGet[i].category === "Desserts") {
    displayCard(buyGet[i],"desserts");
    deserts++;
    document.getElementsByClassName("product")[2].innerHTML = deserts + " products";
  }

}

//This will take care of Click event, whenever "Add to cart" button is pressed we will handle it here 
//and add that particular item in cart
var numOfCards = document.querySelectorAll(".card").length;
console.log(numOfCards);

for (var i = 0; i < numOfCards; i++) {
  document.querySelectorAll(".card")[i].addEventListener("click", function (e) {

    console.log(e.target.id);

    for (var j = 0; j < buyGet.length; j++) {
      if (buyGet[j].id == e.target.id) {
        //passing my object in a function 
        addToCart(buyGet[j]);
      }
    }
  });
}


//This function will filter my data and display only those item which are veg
function fiterType() {

  document.getElementById("buy1-get1").innerHTML = "";
  document.getElementById("side_cokes").innerHTML = "";
  document.getElementById("desserts").innerHTML = "";
  var coke = 0, pizza = 0, deserts = 0;

  for (var i = 0; i < buyGet.length; i++) {
    if (buyGet[i].category === "Buy1Get1" && buyGet[i].veg == true) {
      displayCard(buyGet[i],"buy1-get1");
      pizza++;
      document.getElementsByClassName("product")[0].innerHTML = pizza + " products";
    } else if (buyGet[i].category === "sideAndBeverage" && buyGet[i].veg == true) {
      displayCard(buyGet[i],"side_cokes");
      coke++;
      document.getElementsByClassName("product")[1].innerHTML = coke + " products";
    } else if (buyGet[i].category === "Desserts" && buyGet[i].veg == true) {
      displayCard(buyGet[i],"desserts");
      deserts++;
      document.getElementsByClassName("product")[2].innerHTML = deserts + " products";
    }
  }
}

//To get all items back
function fiterRefresh() {
  window.location.reload(true);
}

//used in search bar and show items according to user demand
document.querySelector("#search").addEventListener("input", filterCards);

function filterCards() {
  const searchInput = document.querySelector("#search");
  const filter = searchInput.value.toLowerCase();
  const titles = document.querySelectorAll(".cards-image");
  titles.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

//to change the total value 
function changeTotal(val) {

  if (document.getElementsByClassName("totalBill")[0].innerHTML == "") {
    document.getElementsByClassName("totalBill")[0].value = parseFloat(val);
    document.getElementsByClassName("totalBill")[0].innerHTML = "Total: " + document.getElementsByClassName("totalBill")[0].value;
  } else {
    document.getElementsByClassName("totalBill")[0].value = parseFloat(document.getElementsByClassName("totalBill")[0].value) + (val);
    document.getElementsByClassName("totalBill")[0].innerHTML = "Total: " + parseFloat(document.getElementsByClassName("totalBill")[0].value);
  }

}

//if we want to increase the amount of a particular item
function increase(id) {
  var numItemsInCart = document.getElementsByClassName("cart-item").length;
  for (var i = 0; i < numItemsInCart; i++) {
    if (document.getElementsByClassName("cart-item")[i].id == id) {
      var value = document.getElementsByClassName("qty-input")[i].value;
      value = parseFloat(value) + 1;
      document.getElementsByClassName("qty-input")[i].value = value;
    }
  }
}

//if we want to decrease the amount of a particular item
function decrease(id) {
  var numItemsInCart = document.getElementsByClassName("cart-item").length;
  for (var i = 0; i < numItemsInCart; i++) {
    if (document.getElementsByClassName("cart-item")[i].id == id) {
      var value = document.getElementsByClassName("qty-input")[i].value;
      value = parseFloat(value) - 1;
      document.getElementsByClassName("qty-input")[i].value = value;
    }
  }
}

//This will append items in my cart
function addToCart(item) {
  var cartItem = `<div id=${item.id} class="cart-item" style=width: 18rem;">
  <div class="card-body d-flex justify-content-between ">
    <p class="card-title">${item.name}</p>
    <h6 class="card-title">₹ ${item.price}</h6>
  </div>
  <div class="quantity">
    <button class="change_qty" onClick="decrease(${item.id}), changeTotal(${-item.price})">-</button>
    <input  class="qty-input" type="text" value ="1">
    <button class="change_qty" onClick="increase(${item.id}), changeTotal(${item.price})">+</button>
  </div>
</div>`;

  if (document.getElementById("cartBar").innerText.slice(0, 10) == "Empty Cart") {
    document.getElementById("cartBar").innerHTML = cartItem;
  } else {
    document.getElementById("cartBar").innerHTML += cartItem;
  }
  changeTotal(item.price);
}


//called when user press checkout
//we can add payment methods here:)
var catRefresh = document.getElementById("checkout");

catRefresh.addEventListener("click", function () {
  window.location.reload(true);
})



