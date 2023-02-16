// Only used by add/remove items
function getPrice(element) {
    let price = element.parentElement.parentElement.getElementsByClassName("price")[0];
    return parseInt(price.innerText.slice(1));
}

// Add listeners to all +/- buttons

let add = document.getElementsByClassName("add");
for (let i = 0; i < add.length; i++) {
    add[i].addEventListener("click", addItem);
}

let subtract = document.getElementsByClassName("subtract");
for (let i = 0; i < subtract.length; i++) {
    subtract[i].addEventListener("click", removeItem);
}

function addItem() {
    let amntHTML = this.parentElement.getElementsByClassName("amount");
    let amount = parseInt(amntHTML[0].innerHTML);
    amount += 1;
    amntHTML[0].innerHTML = amount;
    console.log("add amount: " + amount);
    addSubtotal(getPrice(this));
}

function removeItem() {
    let amntHTML = this.parentElement.getElementsByClassName("amount");
    let amount = parseInt(amntHTML[0].innerHTML);
    if (amount > 0) {
        amount -= 1;
        amntHTML[0].innerHTML = amount;
        console.log("remove amount: " + amount);
        removeSubtotal(getPrice(this));
    }
    
}

function addSubtotal(amount) {
    let subtotal = document.getElementById("subtotal");
    let subAmnt = parseInt(subtotal.innerText.slice(1));
    subAmnt += amount;
    subtotal.innerHTML = "$" + subAmnt;
}

function removeSubtotal(amount) {
    let subtotal = document.getElementById("subtotal");
    let subAmnt = parseInt(subtotal.innerText.slice(1));
    subAmnt -= amount;
    subtotal.innerHTML = "$" + subAmnt;
}

// Add listener to Order button

let order_button = document.getElementById("order");
order_button.addEventListener("click", orderMeals);

function orderMeals() {
    let receipt = "Order received!";
    let amntHTML = document.body.getElementsByClassName("amount");
    let mealHTML = document.body.getElementsByClassName("meal_name");
    let added = false;
    for (let i = 0; i < amntHTML.length; i++) {
        let amount = amntHTML[i].innerHTML;
        if (parseInt(amount) > 0) {
            added = true;
            let mealName = mealHTML[i].innerText;
            console.log("adding amount " + amount + " meal " + mealName);
            receipt += "\n" + amount + "x " + mealName;
        }
    }
    if (added) {
        alert(receipt);
    }
    else {
        alert("No items in cart.")
    }
}

// Add listener to Clear All button

let clear_all = document.getElementById("clear_all");
clear_all.addEventListener("click", clearAllMeals);

function clearAllMeals() {
    let amntHTML = document.body.getElementsByClassName("amount");
    for (let i = 0; i < amntHTML.length; i++) {
        amntHTML[i].innerHTML = 0;
    }
    let subtotal = document.getElementById("subtotal");
    subtotal.innerHTML = "$0";
}