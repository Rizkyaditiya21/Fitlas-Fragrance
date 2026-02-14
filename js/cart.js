let cart = [];

function toggleCart(){
document.querySelector(".cart").classList.toggle("active");
}

function addToCart(name, price){

let item = cart.find(p => p.name === name);

if(item){
item.qty++;
}else{
cart.push({name, price, qty:1});
}

renderCart();
}

function renderCart(){

let container = document.getElementById("cart-items");
container.innerHTML="";

let total = 0;

cart.forEach(item => {

total += item.price * item.qty;

container.innerHTML += `
<div class="cart-item">
<span>${item.name} (${item.qty})</span>
<span>Rp ${item.price * item.qty}</span>
</div>
`;

});

document.getElementById("total").innerText = total;
}

function checkout(){

let message = "Halo saya mau order:%0A";

cart.forEach(item=>{
message += `${item.name} x${item.qty}%0A`;
});

window.open(`https://wa.me/62882000111956?text=${message}`);

}
