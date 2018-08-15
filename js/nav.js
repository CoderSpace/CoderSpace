let icon = document.getElementById("icon");
let nav = document.getElementById("myTopNav");
icon.addEventListener("click", () => {
  if (!nav.classList.contains("responsive")) {
    nav.classList.add("responsive");
  }
  else {
    nav.classList.remove("responsive");
  }

});
let nav2 = document.getElementById("myTopNav2");
window.addEventListener("scroll" ,() =>{
  if (window.pageYOffset > 165) {
    nav2.classList.add("stickynav");
  }
  else {
    nav2.classList.remove("stickynav");
  }
});
