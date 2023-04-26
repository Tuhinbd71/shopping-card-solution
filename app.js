// Shopping cart handles increase & decrease and update price using function
function productQuentity(product, price, isIncreasing) {
    const productIncrease = document.getElementById(product + "-qty");
    let productQty = productIncrease.value;
    if (isIncreasing == true) {
        productQty = parseInt(productQty) + 1;
    }
    else if (productQty > 0) {
        productQty = parseInt(productQty) - 1;
    }
    productIncrease.value = productQty;
    // iPhone total price update section
    const caseTotal = document.getElementById(product + "-total");
    caseTotal.innerText = productQty * price;
    // const iPhonePriceTotal = document.getElementById(product + "-total");
    // iPhonePriceTotal.innerText = productQty * price;

}
// Phone increase & decrease and update price using function
document.getElementById("phone-plusBtn").addEventListener("click", function () {
    productQuentity("phone", 1219, true);
});
document.getElementById("phone-minusBtn").addEventListener("click", function () {
    productQuentity("phone", 1219, false);
});

// Case increase & decrease and update price using function
document.getElementById("case-plusBtn").addEventListener("click", function () {
    productQuentity("case", 59, true);
});
document.getElementById("case-minusBtn").addEventListener("click", function () {
    productQuentity("case", 59, false);
});

