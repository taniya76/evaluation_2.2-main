var hamburger=document.querySelector(".hamburger");
console.log(hamburger);
var sidebar=document.querySelector(".side-bar");
console.log(sidebar);

// hamburger.addEventListener("click",function(){
//     sidebar.style.display = "flex";

// })

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }