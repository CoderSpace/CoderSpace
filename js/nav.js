let icon = document.getElementById("icon");;
let navbar =
  document.getElementById("myTopNav");

icon.addEventListener("click", () => {
  if (!navbar.classList.contains("responsive")) {
    navbar.classList.add("responsive")
  }
  else {
    navbar.classList.remove("responsive")
  }

});


;
// (
//   console.log(sections)
//   //creating a function that will run anytime the window scrolls
//   window.onscroll = function() {
//     //creating a variable that finds out your scroll postion
//     var scrollPosition =
//       document.documentElement.scrollTop || document.body.scrollTop;
//     //creating a variable that with find the html element that has the id of nav
//     var nav = document.getElementById("navbar");
//     //taking the items in the object and checking them against the rulseset
//     for (i in sections) {
//       //if statement that will compare your location within a section with your scroll position
//       if (sections[i] <= scrollPosition) {
//         //this will find the html elment currently using the active class and remove the class from that html element
//         document.querySelector(".active").setAttribute("class", " ");
//         document
//           //finds the section that matches your scroll position  
//           .querySelector("a[href*=" + i + "]")
//           //adds the class active to the next nav item that matches scroll position and section      
//           .setAttribute("class", "active");
//       }
//     }

//     if (window.pageYOffset > 165) {
//       nav.classList.add("navbar");
//     }
//     else {
//       nav.classList.remove("navbar");
//     }
//   };
