// TAMBAH KE KERANJANG
function addToCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.name === name);

    if(existing){
        existing.qty += 1;
    }else{
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produk ditambahkan ke keranjang");
}


// TAMPILKAN KERANJANG
function loadCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let list = document.getElementById("cart-list");
    let total = 0;

    if(!list) return;

    list.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        list.innerHTML += `
            <div class="cart-item">
                <p>${item.name}</p>
                <p>Rp ${item.price}</p>
                <p>Qty: ${item.qty}</p>

                <button onclick="removeItem(${index})">
                    Hapus
                </button>
            </div>
        `;
    });

    document.getElementById("total").innerText =
        "Total : Rp " + total;
}


// HAPUS ITEM
function removeItem(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}


// AUTO LOAD
document.addEventListener("DOMContentLoaded", loadCart);
