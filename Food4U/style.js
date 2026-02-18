
/* Google Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins', sans-serif;
}

body{
    background: linear-gradient(135deg,#fff0f5,#f3f8ff);
    min-height:100vh;
}

/* Header */
header{
    background: linear-gradient(90deg,#ff0066,#ff4d4d);
    color:white;
    padding:20px 50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow:0 4px 20px rgba(0,0,0,0.2);
}

header h1{
    font-size:26px;
    font-weight:700;
}

nav button{
    background:white;
    color:#ff0066;
    border:none;
    padding:8px 18px;
    margin-left:10px;
    border-radius:30px;
    font-weight:600;
    cursor:pointer;
    transition:0.3s;
}

nav button:hover{
    background:#ffe6f0;
}

/* Container */
.container{
    padding:40px;
}

/* Filter Buttons */
.filters{
    text-align:center;
    margin-bottom:30px;
}

.filters button{
    padding:10px 25px;
    margin:5px;
    border:none;
    border-radius:30px;
    background:#e0e0e0;
    cursor:pointer;
    transition:0.3s;
    font-weight:500;
}

.filters button.active,
.filters button:hover{
    background:#ff0066;
    color:white;
}

/* Cards */
.restaurant-list,
.food-list{
    display:flex;
    flex-wrap:wrap;
    gap:25px;
    justify-content:center;
}

.card{
    background:rgba(255,255,255,0.7);
    backdrop-filter: blur(10px);
    width:260px;
    border-radius:20px;
    overflow:hidden;
    box-shadow:0 10px 30px rgba(0,0,0,0.15);
    transition:0.3s;
}

.card:hover{
    transform:translateY(-8px);
    box-shadow:0 15px 35px rgba(0,0,0,0.2);
}

.card img{
    width:100%;
    height:160px;
    object-fit:cover;
}

.card-content{
    padding:15px;
}

.card h3{
    margin-bottom:5px;
    font-size:18px;
}

.card p{
    font-size:14px;
    color:#555;
}

.price{
    color:#ff0066;
    font-weight:600;
    margin:5px 0;
}

.card button{
    width:100%;
    padding:8px;
    border:none;
    border-radius:20px;
    background:linear-gradient(90deg,#ff0066,#ff4d4d);
    color:white;
    cursor:pointer;
    margin-top:8px;
    transition:0.3s;
}

.card button:hover{
    opacity:0.85;
}

/* Cart */
.cart{
    position:fixed;
    right:0;
    top:0;
    width:320px;
    height:100%;
    background:white;
    padding:20px;
    box-shadow:-4px 0 20px rgba(0,0,0,0.2);
    overflow-y:auto;
}

.cart h2{
    margin-bottom:15px;
}

.cart-item{
    display:flex;
    justify-content:space-between;
    margin-bottom:10px;
    font-size:14px;
}

.order-btn{
    background:linear-gradient(90deg,#ff0066,#ff4d4d);
    color:white;
    width:100%;
    padding:10px;
    border:none;
    border-radius:30px;
    margin-top:15px;
    cursor:pointer;
}

/* Login Modal */
.login-modal{
    position:fixed;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.6);
    display:none;
    justify-content:center;
    align-items:center;
}

.login-box{
    background:white;
    padding:30px;
    border-radius:20px;
    width:300px;
    box-shadow:0 10px 30px rgba(0,0,0,0.3);
}

.login-box input{
    width:100%;
    padding:10px;
    margin-bottom:10px;
    border-radius:10px;
    border:1px solid #ccc;
}
