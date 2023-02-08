export default function hamburgerMenu(hamburgerStyle,panel,menuLink){
  const d=document;
  d.addEventListener("click",e=>{
    if(e.target.matches(hamburgerStyle)||e.target.matches(`${hamburgerStyle} *`)){
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(hamburgerStyle).classList.toggle("is-active");
    }

    if(e.target.matches(menuLink)||e.target.matches(`${menuLink} *`)){
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(hamburgerStyle).classList.remove("is-active");
    }
  });
}
/*var hamburger = document.querySelector(".hamburger");
const menu=document.querySelector(".cont-menu");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  
  
  // Do something else, like open/close menu
  menu.classList.toggle("active");
});*/