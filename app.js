// Shopping cart events handle increase & decrease and update price using function
function updateProductInfo(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-qty");
    let productQty = productInput.value;
    if (isIncreasing == true) {
        productQty = parseInt(productQty) + 1;
    }
    else if (productQty > 0) {
        productQty = parseInt(productQty) - 1;
    }
    productInput.value = productQty;
    // iPhone total price update section
    const priceTotal = document.getElementById(product + "-total");
    priceTotal.innerText = productQty * price;
    // Update total
    calculateTotal();
}
// Update total amount
function getProductValue(product) {
    const phoneQty = document.getElementById(product + "-qty");
    const phoneQtyValue = parseInt(phoneQty.value);
    return phoneQtyValue;
}

function calculateTotal() {
    const phoneAmountTotal = getProductValue("phone") * 1219;
    const caseAmountTotal = getProductValue("case") * 59;
    const subTotalAmount = phoneAmountTotal + caseAmountTotal;
    // Update on the html
    const subTotal = document.getElementById("sub-total").innerText = subTotalAmount;

}



// Phone increase & decrease and update price using function
document.getElementById("phone-plusBtn").addEventListener("click", function () {
    updateProductInfo("phone", 1219, true);
});
document.getElementById("phone-minusBtn").addEventListener("click", function () {
    updateProductInfo("phone", 1219, false);
});
// Case increase & decrease and update price using function
document.getElementById("case-plusBtn").addEventListener("click", function () {
    updateProductInfo("case", 59, true);
});
document.getElementById("case-minusBtn").addEventListener("click", function () {
    updateProductInfo("case", 59, false);
});

