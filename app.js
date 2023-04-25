// Shopping cart handles increase & decrease and update price using function
function productQty(isIncreasing) {
    const productIncrease = document.getElementById("product-qty");
    let productQty = productIncrease.value;

    if (isIncreasing == true) {
        productQty = parseInt(productQty) + 1;
    }
    else if (productQty > 0) {
        productQty = parseInt(productQty) - 1
    }
    productIncrease.value = productQty;
    // iPhone total price update section
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

