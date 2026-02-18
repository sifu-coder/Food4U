body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f5f5f5;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background: #ff4d4d;
    color: white;
}

header h1 {
    margin: 0;
}

nav button {
    margin-left: 10px;
    padding: 8px 15px;
    border: none;
    background: white;
    color: #ff4d4d;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
}

.hero {
    text-align: center;
    padding: 60px;
    background: linear-gradient(to right, #ff4d4d, #ff944d);
    color: white;
}

.restaurants, .menu, .cart {
    padding: 40px;
    text-align: center;
}

.card-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    background: white;
    padding: 20px;
    width: 250px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
}

.card button {
    background: #ff4d4d;
    color: white;
    border: none;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 5px;
}

.cart ul {
    list-style: none;
    padding: 0;
}

.cart button {
    padding: 10px 20px;
    background: green;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.hidden {
    display: none;
}

.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 30px;
    border-radius: 10px;
}
