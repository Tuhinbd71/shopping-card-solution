document.getElementById("plus-btn").addEventListener("click", function () {
    const productIncrease = document.getElementById("product-increase");
    const producQty = productIncrease.value;
    productIncrease.value = parseInt(producQty) + 1;
})
document.getElementById("minus-btn").addEventListener("click", function () {
    console.log("Minus btn clicked")
})