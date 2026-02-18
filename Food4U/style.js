@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #f5f7fa;
}

/* HEADER */
header {
  background: linear-gradient(90deg, #ff0066, #ff4d4d);
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav button {
  background: white;
  color: #ff0066;
  border: none;
  padding: 8px 18px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
}

/* SERVICE BOXES */
.service-section {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 40px;
  flex-wrap: wrap;
}

.service-box {
  width: 300px;
  padding: 40px 20px;
  border-radius: 20px;
  color: white;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.service-box:hover {
  transform: translateY(-8px);
}

.delivery {
  background: linear-gradient(135deg, #ff0066, #ff4d4d);
}
.dinein {
  background: linear-gradient(135deg, #ff9900, #ff6600);
}
.pickup {
  background: linear-gradient(135deg, #00b09b, #00d4ff);
}

/* RESTAURANTS & FOOD */
.container {
  padding: 40px;
}

.restaurant-list,
.food-list {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
}

.card {
  background: white;
  width: 250px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-6px);
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.price {
  color: #ff0066;
  font-weight: 600;
  margin: 5px 0;
}

.card button {
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(90deg, #ff0066, #ff4d4d);
  color: white;
  cursor: pointer;
}

/* CART */
.cart {
  position: fixed;
  right: 0;
  top: 0;
  width: 320px;
  height: 100%;
  background: white;
  padding: 20px;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.2);
  overflow: auto;
}

.order-btn {
  background: linear-gradient(90deg, #ff0066, #ff4d4d);
  color: white;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 30px;
  margin-top: 15px;
  cursor: pointer;
}

.hidden {
  display: none;
}

/* LOGIN */
.login-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background: white;
  padding: 30px;
  border-radius: 20px;
  width: 300px;
}





