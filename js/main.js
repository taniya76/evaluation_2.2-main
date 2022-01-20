let buyGet = window.localStorage.getItem("items")
  ? JSON.parse(window.localStorage.getItem("items"))
  : [];

buyGet = [{
  id: 7,
  category: "Buy1Get1",
  imgSrc: "./images/categories/1.jpg",
  name: " Non-veg pizzaa @275",
  price: 275,
  veg: false
},
{
  id: 8,
  category: "Buy1Get1",
  imgSrc: "./images/categories/2.jpg",
  name: " Non-veg pizza @375",
  price: 375,
  veg: false
}, {
  id: 9,
  category: "Buy1Get1",
  imgSrc: "./images/categories/3.jpg",
  name: "Non-veg pizza @175",
  price: 175,
  veg: false
}, {
  id: 10,
  category: "Buy1Get1",
  imgSrc: "./images/categories/4.jpg",
  name: "Non-veg pizza @375 ",
  price: 575,
  veg: false
}, {
  id: 11,
  category: "sideAndBeverage",
  imgSrc: "./images/categories/beverages1.jpg",
  name: "Coke(475ml) ",
  price: 60,
  veg: true
},{
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
  veg: true
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



//   buyGet.forEach(element => {
//       console.log(element);
//     displayBuyCard(element);
//   });



function displayBuyCard(buyGet) {
  // console.log(buyGet);
  var card = `<div id = ${buyGet.id} class="card col-lg-3 col-md-6 cards-image" " style="width: 15rem;">
    <img class="card-img-top" src="${buyGet.imgSrc}" id="${buyGet.id}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${buyGet.name}</h5>
      <p class="card-text"><em>Some quick example text to build on the card title.</em></p>
      <div class="d-flex justify-content-between align-items-center">
      <div class=""><i class="far fa-dot-circle text-danger"></i><p> ₹${buyGet.price}</p></div>
      
      <button id = ${buyGet.id} class="btn btn-outline-danger">Add</button>
      </div>
      
    </div>
  </div>`

  document.getElementById("buy1-get1").innerHTML += card;
}

function displayCokesCard(buyGet) {
  // console.log(buyGet);
  var card = `<div ${buyGet.id} class="card col-lg-3 col-md-6 cards-image"" style="width: 15rem;">
    <img class="card-img-top" src="${buyGet.imgSrc}" id="${buyGet.id}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${buyGet.name}</h5>
      <p class="card-text"><em>Some quick example text to build on the card title.</em></p>
      <div class="d-flex justify-content-between align-items-center">
      <div class=""><i class="far fa-dot-circle text-success"></i><p> ₹${buyGet.price}</p></div>
      <button id = ${buyGet.id} class="btn btn-outline-danger">Add</button>
      </div>
    </div>
  </div>`;

  document.getElementById("side_cokes").innerHTML += card;
}

function displayDessertsCard(buyGet) {
  // console.log(buyGet);
  var card = `<div ${buyGet.id} class="card col-lg-3 col-md-6 cards-image" style= "width: 15rem;">
    <img class="card-img-top" src="${buyGet.imgSrc}" id="${buyGet.id}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${buyGet.name}</h5>
      <p class="card-text"><em>Some quick example text to build on the card title.</em></p>
      <div class="d-flex justify-content-between align-items-center">
      <div class=""><i class="far fa-dot-circle text-success"></i><p> ₹${buyGet.price}</p></div>
      <button id = ${buyGet.id} class="btn btn-outline-danger">Add</button>
      </div>
    </div>
  </div>`;

  document.getElementById("desserts").innerHTML += card;
}

for (var i = 0; i < buyGet.length; i++) {
  if (buyGet[i].category === "Buy1Get1") {
    displayBuyCard(buyGet[i]);
  } else if (buyGet[i].category === "sideAndBeverage") {
    displayCokesCard(buyGet[i]);
  } else if (buyGet[i].category === "Desserts") {
    displayDessertsCard(buyGet[i]);
  }
}


var numOfCards = document.querySelectorAll(".card").length;
console.log(numOfCards);


for (var i = 0; i < numOfCards; i++) {
  document.querySelectorAll(".card")[i].addEventListener("click", function (e) {
    // var newArray = [];
    console.log(e.target.id);
    console.log(buyGet);
    for (var j = 0; j < buyGet.length; j++) {
      if (buyGet[j].id == e.target.id) {
        // console.log(buyGet[j]);
        addToCart(buyGet[j]);
      }
    }
  });
}



function fiterType(){
  // var type = e.target.value;
  // veg = document.getElementsByClassName("veg");
  // veg.classlist.add("d-none");
  document.getElementById("buy1-get1").innerHTML = "";
  document.getElementById("side_cokes").innerHTML = "";
  document.getElementById("desserts").innerHTML = "";

  for(var i = 0; i<buyGet.length; i++){
    if(buyGet[i].category === "Buy1Get1" && buyGet[i].veg == true){
      displayBuyCard(buyGet[i])
    }else if (buyGet[i].category === "sideAndBeverage" && buyGet[i].veg == true){
      displayCokesCard(buyGet[i])
    } else if(buyGet[i].category === "Desserts" && buyGet[i].veg == true){
      displayDessertsCard(buyGet[i])
    }
  }
}

function fiterRefresh(){
  window.location.reload(true);
}


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

// function addToCart(item) {
//   console.log(item);
//   console.log("adding item");

//   var cartItem = `<div ${item.id} class="cart-item" style=width: 18rem;">
//       <div class="card-body d-flex justify-content-between ">
//         <p class="card-title">${item.name}</p>
//         <h6 class="card-title">₹ ${item.price}</h6>
//       </div>
//     </div>`;

//     if(document.getElementById("cartBar").innerText.slice(0,10)=="Empty Cart"){
//       document.getElementById("cartBar").innerHTML = cartItem;
//     } else{
//       document.getElementById("cartBar").innerHTML += cartItem;
//     }
//    document.getElementById("cartBar").innerHTML = cartItem;
// }

function increase(){
  var value = document.getElementById("quantity-input").value;
  value = parseFloat(value)+1;
  document.getElementById("quantity-input").value = value;
}

function decrease(){
  var value = document.getElementById("quantity-input").value;
  value = parseFloat(value)-1;
  document.getElementById("quantity-input").value = value;
}

// var value = document.querySelector("#quantity-input");
// value.addEventListener("change", function(){
//   if (value.value == 0){
//     document.getElementById("cartBar").innerHTML = "";
//   }
// })

function addToCart(item){
  var cartItem = `<div ${item.id} class="cart-item" style=width: 18rem;">
  <div class="card-body d-flex justify-content-between ">
    <p class="card-title">${item.name}</p>
    <h6 class="card-title">₹ ${item.price}</h6>
  </div>
  <div class="quantity">
  <button class=" decrease" onclick ="decrease()">-</button>
  <input  class="qty-input" type="text" id="quantity-input" value ="1">
  <button class="decrease" onclick ="increase()">+</button>
  </div>
</div>`;

if(document.getElementById("cartBar").innerText.slice(0,10)=="Empty Cart"){
  document.getElementById("cartBar").innerHTML = cartItem;
}else{
  document.getElementById("cartBar").innerHTML += cartItem;
}

}






var catRefresh = document.getElementById("checkout");

catRefresh.addEventListener("click", function(){
    window.location.reload(true);
})



