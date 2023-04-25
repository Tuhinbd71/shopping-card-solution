// Shopping cart handles increase & decrease and update price using function
function iPhoneQty(isIncreasing) {
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
    iPhoneQty(true);
})
document.getElementById("minus-btn").addEventListener("click", function () {
    iPhoneQty(false);
})

// Case increase & decrease and update price using function
function caseQty(isIncrease) {
    // case increase update
    const caseQty = document.getElementById("case-qty");
    const caseQtyValue = caseQty.value;
    if (isIncrease == true) {
        caseQty.value = parseInt(caseQtyValue) + 1;
    }
    else if (caseQtyValue > 0) {
        caseQty.value = parseInt(caseQtyValue) - 1;
    }

}
document.getElementById("case-plusBtn").addEventListener("click", function () {
    // // case increase update
    // const caseQty = document.getElementById("case-qty");
    // const caseQtyValue = caseQty.value;
    // caseQty.value = parseInt(caseQtyValue) + 1;
    caseQty(true);
})
// case decrease update
document.getElementById("case-minusBtn").addEventListener("click", function () {
    // case increase update
    // const caseQty = document.getElementById("case-qty");
    // const caseQtyValue = caseQty.value;
    // caseQty.value = parseInt(caseQtyValue) - 1;
    caseQty(false);
})
