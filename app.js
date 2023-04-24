function producQty(isIncreasing) {
    const productIncrease = document.getElementById("product-qty");
    const producQty = productIncrease.value;

    if (isIncreasing == true) {
        productIncrease.value = parseInt(producQty) + 1;
    }
    else if (producQty > 0) {
        productIncrease.value = parseInt(producQty) - 1
    }
}



document.getElementById("plus-btn").addEventListener("click", function () {
    producQty(true);
})
document.getElementById("minus-btn").addEventListener("click", function () {
    producQty(false);
})
