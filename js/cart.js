function addCart(nama,harga){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({nama,harga});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Produk ditambahkan");
}

function loadCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let list = document.getElementById("cartList");
let total = 0;

if(!list) return;

cart.forEach(item=>{
list.innerHTML += `
<div class="item">
${item.nama} - Rp ${item.harga}
</div>
`;

total += item.harga;
});

document.getElementById("total").innerText = "Total : Rp "+total;
}

function checkout(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let pesan = "Halo saya mau order:%0A";

cart.forEach(item=>{
pesan += "- "+item.nama+" Rp "+item.harga+"%0A";
});

window.open("https://wa.me/6285872031760?text="+pesan);
}

loadCart();
