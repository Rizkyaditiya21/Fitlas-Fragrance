let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD CART */

function addCart(name,price){

let item = cart.find(p => p.name === name);

if(item){
item.qty +=1;
}else{
cart.push({name,price,qty:1});
}

save();
alert(name+" added to cart");
}

/* SAVE */
function save(){
localStorage.setItem("cart",JSON.stringify(cart));
render();
}

/* RENDER CART */

function render(){

if(!document.getElementById("cartItems")) return;

let html="";
let total=0;

cart.forEach((item,index)=>{

let sub=item.price*item.qty;
total+=sub;

html+=`
<div class="cart-item">
<span>${item.name}</span>

<div>
<button onclick="qty(${index},-1)">-</button>
${item.qty}
<button onclick="qty(${index},1)">+</button>
</div>

<span>Rp ${sub}</span>

<button onclick="removeItem(${index})">X</button>
</div>
`;
});

document.getElementById("cartItems").innerHTML=html;
document.getElementById("total").innerText="Total Rp "+total;
}

/* QTY */

function qty(i,val){
cart[i].qty+=val;

if(cart[i].qty<=0){
cart.splice(i,1);
}

save();
}

/* DELETE */

function removeItem(i){
cart.splice(i,1);
save();
}

/* CHECKOUT */

function checkout(){

let text="Halo admin Fitlas saya mau order:%0A";

cart.forEach(p=>{
text+=p.name+" x"+p.qty+"%0A";
});

window.open("https://wa.me/6285872031760?text="+text);
}

/* POPUP */

function detail(title,desc){
document.getElementById("popup").style.display="flex";
document.getElementById("popTitle").innerText=title;
document.getElementById("popDesc").innerText=desc;
}

function closePop(){
document.getElementById("popup").style.display="none";
}

render();
