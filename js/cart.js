let cart = [];

function addCart(nama, harga){

cart.push({nama,harga});
renderCart();

}

function renderCart(){

let list = document.getElementById("cart-list");
let total = 0;
list.innerHTML = "";

cart.forEach(item=>{
list.innerHTML += `<li>${item.nama} - Rp${item.harga}</li>`;
total += item.harga;
});

document.getElementById("total").innerText =
"Total : Rp" + total;

}

function checkoutWA(){

let pesan = "Halo saya mau order:%0A";

cart.forEach(item=>{
pesan += `- ${item.nama}%0A`;
});

window.open(
`https://wa.me/625872031760?text=${pesan}`
);

}
