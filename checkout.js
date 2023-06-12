
console.log("errormessge")


const button = document.getElementById("js-toggle-button");
const checkout = document.getElementById("js-checkout");

button.addEventListener("click", () => {
  console.log("testingtosee")
  checkout.classList.toggle("is-visible");
});

