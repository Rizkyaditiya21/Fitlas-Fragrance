let cart = JSON.parse(localStorage.getItem("cart")) || [];

// =================
// TAMBAH PRODUK
// =================
function addToCart(name, price){

    let found = cart.find(item => item.name === name);

    if(found){
        found.qty++;
    }else{
        cart.push({name, price, qty:1});
    }

    saveCart();
    openCart();
}


// =================
// SAVE CART
// =================
function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}


// =================
// RENDER CART
// =================
function renderCart(){

    let container = document.getElementById("cart-items");
    let totalEl = document.getElementById("cart-total");

    if(!container) return;

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index)=>{

        total += item.price * item.qty;

        container.innerHTML += `
            <div class="cart-row">

                <div>
                    <h4>${item.name}</h4>
                    <p>Rp ${item.price}</p>
                </div>

                <div class="qty-control">
                    <button onclick="changeQty(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${index}, 1)">+</button>
                </div>

                <button class="remove-btn"
                    onclick="removeItem(${index})">✕</button>

            </div>
        `;
    });

    totalEl.innerHTML = "Total Rp " + total;
}


// =================
// UBAH QTY
// =================
function changeQty(index, change){

    cart[index].qty += change;

    if(cart[index].qty <= 0){
        cart.splice(index,1);
    }

    saveCart();
}


// =================
// HAPUS ITEM
// =================
function removeItem(index){
    cart.splice(index,1);
    saveCart();
}


// =================
// POPUP CONTROL
// =================
function openCart(){
    document.getElementById("cart-popup").classList.add("active");
    renderCart();
}

function closeCart(){
    document.getElementById("cart-popup").classList.remove("active");
}


// =================
// CHECKOUT WHATSAPP
// =================
function checkoutWA(){

    let message = "Halo, saya ingin order:%0A";

    cart.forEach(item=>{
        message += `• ${item.name} x${item.qty}%0A`;
    });

    let wa = "https://wa.me/628XXXXXXXXXX?text=" + message;

    window.open(wa);
}


// LOAD CART
document.addEventListener("DOMContentLoaded", renderCart);
