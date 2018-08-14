let icon = document.getElementById("icon");
let nav = document.getElementById("myTopNav");
let nav2 = document.getElementById("myTopNav2");
icon.addEventListener("click",() =>{
  if (!nav.classList.contains("responsive")){
  nav.classList.add("responsive")
} else{
  nav.classList.remove("responsive")
}

});

icon.addEventListener("click",() =>{
  if (!nav2.classList.contains("responsive")){
  nav2.classList.add("responsive")
} else{
  nav2.classList.remove("responsive")
}

});

window.addEventListener("scroll" ,() =>{
  if (window.pageYOffset > 165) {
    nav2.classList.add("stickynav");
  } else {
    nav2.classList.remove("stickynav");
  }
});