let myDishes = [
    {
        name: "Spaghetti Carbonara",
        price: 12.99,
        "description": "Cremige Pasta mit Speck und Parmesan, verfeinert mit Eiern und Sahne.",
        "amount": 0
    },
    {
        name: "Vegetarische Lasagne",
        price: 10.50,
        "description": "Herzhafte Lasagne mit frischem Gemüse und Käse überbacken.",
        "amount": 0
    },
    {
        name: "Gegrilltes Hähnchen mit Quinoa",
        price: 14.20,
        "description": "Saftiges Hähnchenbrustfilet mit Quinoa und frischem Salat.",
        "amount": 0
    },
    {
        name: "Thai Curry mit Garnelen",
        price: 13.75,
        "description": "Ein scharfes Curry mit Garnelen, Kokosmilch und frischem Gemüse.",
        "amount": 0
    },
    {
        name: "Pizza Margherita",
        price: 9.99,
        "description": "Klassische Pizza mit Tomatensoße, Mozzarella und Basilikum.",
        "amount": 0
    },
    {
        name: "Rinderfilet mit Kartoffelgratin",
        price: 19.50,
        "description": "Saftiges Rinderfilet mit Kartoffelgratin und frischem Gemüse.",
        "amount": 0
    },
    {
        name: "Griechischer Salat",
        price: 8.50,
        "description": "Frischer Salat mit Tomaten, Gurken, Oliven und Schafskäse.",
        "amount": 0
    },
    {
        name: "Pasta mit Pesto",
        price: 11.25,
        "description": "Pasta mit frischem Pesto, verfeinert mit Pinienkernen und Parmesan.",
        "amount": 0
    }
];

const dishesContainer = document.getElementById('dishes-container');

myDishes.forEach(dish => {
    const dishElement = document.createElement('div');
    dishElement.classList.add('dish-item');
    dishElement.innerHTML = `
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
        <p><strong>Preis:</strong> €${dish.price.toFixed(2)}</p>
    `;
    dishesContainer.appendChild(dishElement);
});