let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD CART */
function addCart(name, price){

let found = cart.find(p => p.name === name);

if(found){
found.qty += 1;
}else{
cart.push({name,price,qty:1});
}

saveCart();
alert(name + " added");
}

/* SAVE */
function saveCart(){
localStorage.setItem("cart", JSON.stringify(cart));
renderCart();
}

/* RENDER CART */
function renderCart(){

if(!document.getElementById("cartItems")) return;

let output = "";
let total = 0;

cart.forEach((item,index)=>{

let subtotal = item.price * item.qty;
total += subtotal;

output += `
<div class="cart-item">
<span>${item.name}</span>

<div>
<button onclick="changeQty(${index},-1)">-</button>
${item.qty}
<button onclick="changeQty(${index},1)">+</button>
</div>

<span>Rp ${subtotal}</span>

<button onclick="removeItem(${index})">X</button>
</div>
`;
});

document.getElementById("cartItems").innerHTML = output;
document.getElementById("totalPrice").innerText = "Total : Rp " + total;
}

/* QTY */
function changeQty(index,val){
cart[index].qty += val;

if(cart[index].qty <= 0){
cart.splice(index,1);
}

saveCart();
}

/* DELETE */
function removeItem(index){
cart.splice(index,1);
saveCart();
}

/* CHECKOUT */
function checkout(){

let text = "Halo admin Fitlas saya mau order:%0A";

cart.forEach(item=>{
text += item.name + " x" + item.qty + "%0A";
});

window.open("https://wa.me/6285872031760?text="+text);
}

/* POPUP */
function showDetail(title,desc){
document.getElementById("popup").style.display="flex";
document.getElementById("popupTitle").innerText=title;
document.getElementById("popupDesc").innerText=desc;
}

function closePopup(){
document.getElementById("popup").style.display="none";
}

/* SCROLL ANIMATION */
let faders = document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
faders.forEach(el=>{
let top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 50){
el.classList.add("show");
}
});
});

renderCart();
