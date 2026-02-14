const ringButton = document.querySelectorAll(".ring-button");
for (let i = 0; i < ringButton.length; i++) {
  const ringBtn = ringButton[i];
  ringBtn.addEventListener("click", function (event) {
    const color = event.target.id.replace("-color", "");
    for (let j = 0; j < ringButton.length; j++) {
      ringButton[j].classList.remove("border-purple-700");
      ringButton[j].classList.add("border-gray-300");
    }
    event.target.classList.add("border-purple-700");
    event.target.classList.remove("border-gray-300");
    const productImage = document.getElementById("product-image");
    productImage.src = "../images/" + color + ".png";
  });
}

function selectWristSize(size) {
  const sizes = ["S", "M", "L", "XL"];
  for (let i = 0; i < sizes.length; i++) {
    const button = document.getElementById("size-" + sizes[i]);
    const element = sizes[i];
    if (size === element) {
      button.classList.add("border-purple-700");
    } else {
      button.classList.remove("border-purple-700");
    }
  }
}

const quantityElements = document.querySelectorAll(".quantity-button");
for (let btn of quantityElements) {
  btn.addEventListener("click", function (event) {
    const amount = event.target.innerText === "+" ? 1 : -1;
    console.log(amount);
    const quantityElement = document.getElementById("quantity");
    const currentQuantity = parseInt(quantityElement.innerText);
    const newQuantity = Math.max(0, currentQuantity + amount);
    quantityElement.innerText = newQuantity;
  });
}
