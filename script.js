function showMenu() {
    const menu = document.getElementById("menuItems");

    const foodItems = [
        { name: "Cheese Burger", price: 120 },
        { name: "Veg Pizza", price: 250 },
        { name: "Creamy Pasta", price: 180 },
        { name: "Healthy Salad", price: 150 },
        { name: "French Fries", price: 90 },
        { name: "Cold Coffee", price: 110 }
    ];

    menu.innerHTML = "";

    foodItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
        `;
        menu.appendChild(div);
    });
}

function submitForm() {
    alert("Thank you for contacting Food Fiesta! 🍕");
}
