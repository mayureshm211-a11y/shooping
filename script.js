document.getElementById("year").textContent = new Date().getFullYear();

function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
}

let form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting Saraschan Joyera! We will get back to you soon.");
    this.reset();
  });
}

let cart = [];
function addToCart(name, price) {
  cart.push({ name, price });
  displayCart();
}

function displayCart() {
  const list = document.getElementById("cartItems");
  const total = document.getElementById("total");
  list.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    list.appendChild(li);
    sum += item.price;
  });
  total.textContent = sum;
}

function proceedToBuy() {
  document.getElementById("paymentBox").style.display = "block";
}

function confirmOrder() {
  const payment = document.querySelector('input[name="payment"]:checked');
  if (!payment) return alert("Please select a payment method!");
  alert(`Thank you! Payment method: ${payment.value}`);
  window.location.href = "thankyou.html";
}
