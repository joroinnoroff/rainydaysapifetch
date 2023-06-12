
const hamburgerbutton = document.getElementById("hamburger");
const menu = document.getElementById("dropdowncont");

hamburgerbutton.addEventListener("click", () => {
  console.log("testingtosee")
  menu.classList.toggle("is-visible");
});