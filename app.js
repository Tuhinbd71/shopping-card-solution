document.getElementById("plus-btn").addEventListener("click", function () {
    const productIncrease = document.getElementById("product-increase");
    const producQty = productIncrease.value;
    productIncrease.value = parseInt(producQty) + 1;
})