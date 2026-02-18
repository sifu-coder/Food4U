let restaurants = [
  {
    name: "Chillox (Inspired)",
    mode: "Delivery",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Fuoco (Inspired)",
    mode: "Dine-In",
    image:
      "https://images.unsplash.com/photo-1548365328-8b849b2b4d97?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kacchi Bhai (Inspired)",
    mode: "Delivery",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sultan's Dine (Inspired)",
    mode: "Pickup",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
  },
];

let foods = [
  {
    name: "Kacchi Biriyani",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Beef Burger",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Chicken Pizza",
    price: 500,
    image:
      "https://images.unsplash.com/photo-1548365328-8b849b2b4d97?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Pasta Alfredo",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=600&q=80",
  },
];

let cart = [];

function filterMode(mode) {
  loadRestaurants(mode);
}

function loadRestaurants(filter = "All") {
  let container = document.getElementById("restaurants");
  container.innerHTML = "";
  document.getElementById("foods").classList.add("hidden");

  restaurants
    .filter((r) => filter === "All" || r.mode === filter)
    .forEach((r) => {
      container.innerHTML += `
        <div class="card" onclick="showFoods()">
            <img src="${r.image}" alt="${r.name}" />
            <div class="card-content">
                <h3>${r.name}</h3>
                <p>${r.mode}</p>
            </div>
        </div>`;
    });
}

function showFoods() {
  document.getElementById("restaurants").innerHTML = "";
  let foodDiv = document.getElementById("foods");
  foodDiv.classList.remove("hidden");
  foodDiv.innerHTML = "";

  foods.forEach((f) => {
    foodDiv.innerHTML += `
        <div class="card">
            <img src="${f.image}" alt="${f.name}" />
            <div class="card-content">
                <h3>${f.name}</h3>
                <p class="price">৳ ${f.price}</p>
                <button onclick="addToCart('${f.name}',${f.price})">Add to Cart</button>
            </div>
        </div>`;
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  let cartDiv = document.getElementById("cartItems");
  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    cartDiv.innerHTML += `<div>${item.name} - ৳ ${item.price}</div>`;
  });

  document.getElementById("total").innerText = total;
}

function placeOrder() {
  if(cart.length === 0){
    alert("Your cart is empty!");
    return;
  }
  alert("Order Placed Successfully!");
  cart = [];
  updateCart();
}

function openLogin() {
  document.getElementById("loginModal").classList.remove("hidden");
}

function closeLogin() {
  document.getElementById("loginModal").classList.add("hidden");
}

loadRestaurants();
