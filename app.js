// iPhone update section
function productQty(isIncreasing) {
    const productIncrease = document.getElementById("product-qty");
    const productQty = productIncrease.value;

    if (isIncreasing == true) {
        productIncrease.value = parseInt(productQty) + 1;
    }
    else if (productQty > 0) {
        productIncrease.value = parseInt(productQty) - 1
    }
    // iPhone price update
    const iPhonePriceTotal = document.getElementById("price-total");
    iPhonePriceTotal.innerText = productQty * 1219;
}
document.getElementById("plus-btn").addEventListener("click", function () {
    productQty(true);
})
document.getElementById("minus-btn").addEventListener("click", function () {
    productQty(false);
})

// Case update section

