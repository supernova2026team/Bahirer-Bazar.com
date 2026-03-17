const container = document.querySelector(".product-container"); //main section dhorlam
const cart = document.getElementById("empty-section"); //hidden div dhorlam


//main div er jekhane add cart button pabe shetake dhorlam
container.addEventListener("click", function (e) {
  if (e.target.classList.contains("quick-add")) {
    const card = e.target.closest(".product-item");

    
    e.target.innerText = "Added";
    e.target.disabled = true; //button disable koram jeno abaro add korte na pare

    const clone = card.cloneNode(true); //jei card er button click korse hetake puro copy korlam

    const cloneBtn = clone.querySelector(".quick-add"); //copy kora card er vitor button ta ke dhorlam
    cloneBtn.innerText = "Added";
    cloneBtn.disabled = true;

    

  
    cart.appendChild(clone);
  }
});
document.querySelector(".fa-shopping-cart").addEventListener("click", function(){
    cart.classList.toggle("hidden"); //toggle kore korlam jeo cart icon click korle kaj hoy.
})