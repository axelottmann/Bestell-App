

let dishes = [
    { name: "Thai Curry mit Gemüse",
      price: 12.50, 
      description: "Ein würziges Curry mit frischem Gemüse und Kokosmilch."
    },
    { name: "Thai Curry mit Garnelen", 
      price: 14.75, 
      description: "Ein scharfes Curry mit Garnelen, Kokosmilch und frischem Gemüse."
    },
    { name: "Thai Curry mit Huhn", 
      price: 13.75,
      description: "Ein mildes Curry mit Hühnchen, Kokosmilch und frischem Gemüse."
    },
    { name: "Pad Thai mit Nudeln",
      price: 11.50,
      description: "Ein traditionelles thailändisches Nudelgericht mit Gemüse und Erdnüssen."
    },
    { name: "Sushi-Platte",
      price: 15.00,
      description: "Eine Auswahl an frischem Sushi mit verschiedenen Füllungen."
    },
];

let drinks = [
    { name: "Thai Eistee",
      price: 3.50,
      description: "Erfrischender Eistee mit einem Hauch von Limette."
    },
    { name: "Kokos Wasser",
      price: 4.00,
      description: "Frisches Wasser aus der jungen Kokosnuss."
    },
    { name: "Limonade",
      price: 2.50,
      description: "Hausgemachte Limonade mit frischen Früchten."
    },
    { name: "Bier",
      price: 4.50,
      description: "Ein kühles Bier, perfekt für den Sommer."
    },
    { name: "Wein",
      price: 5.00,
      description: "Ein Glas erlesener Wein, rot oder weiß."
    },
];

let desserts = [
    { name: "Mango Sticky Rice",
      price: 5.00,
      description: "Klebreis mit frischer Mango und Kokosmilch."
    },
    { name: "Kokosnuss-Pudding",
      price: 4.50,
      description: "Cremiger Kokos Pudding."
    },
    { name: "Frischer Obstsalat",
      price: 4.00,
      description: "Eine Auswahl an frischen tropischen Früchten."
    },
    { name: "Schokoladen Kekse",
      price: 3.50,
      description: "Schoko Kekse."
    },
];

function fertigeBestellung() {
  if (cart.length === 0) {
      alert("Ihr Warenkorb ist leer. Bitte fügen Sie Artikel hinzu, bevor Sie die Bestellung abschließen.");
      return;
    }
    window.location.href = "danke.html";
}

function renderDishes() {
  const dishesContainer = document.getElementById('eat-content');
  if (!dishesContainer) return;

  dishesContainer.innerHTML = "";

  dishes.forEach(dish => {
      const dishElement = document.createElement('div');
      dishElement.classList.add('dish-item');
      dishElement.innerHTML = `
          <h3>${dish.name}</h3>
          <span>${dish.description}</span>
          <p>Preis: €${dish.price.toFixed(2)}</p>
          <button onclick="addToCart('${dish.name}', ${dish.price})">+</button>
      `;
      dishesContainer.appendChild(dishElement);
  });
}


function renderDrinks() {
  const drinksContainer = document.querySelector('.drinks-content');
  if (!drinksContainer) return;

  drinksContainer.innerHTML = ""; 

  drinks.forEach(drink => {
      const drinkElement = document.createElement('div');
      drinkElement.classList.add('drink-item');
      drinkElement.innerHTML = `
          <h3>${drink.name}</h3>
          <span>${drink.description}</span>
          <p>Preis: €${drink.price.toFixed(2)}</p>
          <button onclick="addToCart('${drink.name}', ${drink.price})">+</button>
      `;
      drinksContainer.appendChild(drinkElement);
  });
}


function renderDesserts() {
  const dessertsContainer = document.getElementById('desserts-content');
  if (!dessertsContainer) return;

  dessertsContainer.innerHTML = "";

  desserts.forEach(dessert => {
      const dessertElement = document.createElement('div');
      dessertElement.classList.add('dessert-item');
      dessertElement.innerHTML = `
          <h3>${dessert.name}</h3>
          <span>${dessert.description}</span>
          <p>Preis: €${dessert.price.toFixed(2)}</p>
          <button onclick="addToCart('${dessert.name}', ${dessert.price})">+</button>
      `;
      dessertsContainer.appendChild(dessertElement);
  });
}


function addToCart(itemName, itemPrice) {
  console.log(`Artikel hinzugefügt: ${itemName} - Preis: €${itemPrice.toFixed(2)}`);
}


document.addEventListener('DOMContentLoaded', () => {
  renderDishes();
  renderDrinks();
  renderDesserts();
});

let cart = [];

function addToCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.amount++;
    } else {
        cart.push({ name: itemName, price: itemPrice, amount: 1 });
    }

    renderCart();
}

function renderCategory(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('dish-item'); 

      itemElement.innerHTML = `
          <div class="item-info">
              <h3>${item.name}</h3>
              <span>${item.description}</span>
          </div>
          <div class="item-price">
              <p>€${item.price.toFixed(2)}</p>
          </div>
          <button class="add-to-cart" onclick="addToCart('${item.name}', ${item.price})">+</button>
      `;

      container.appendChild(itemElement);
  });
}

function renderCart() {
    const cartContainer = document.getElementById('cart-content');
    cartContainer.innerHTML = ""; 

    if (cart.length === 0) {
        cartContainer.innerHTML = "<span>Der Warenkorb ist leer.</span>";
        return;
    }

    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>Preis: €${item.price.toFixed(2)}</p>
            <p>Anzahl: ${item.amount}</p>
        `;
        cartContainer.appendChild(itemElement);
        totalPrice += item.price * item.amount;
    });

    const totalElement = document.createElement('div');
    totalElement.classList.add('total-price');
    totalElement.innerHTML = `<h3>Gesamtpreis: €${totalPrice.toFixed(2)}</h3>`;
    cartContainer.appendChild(totalElement);
}
function clearCart() {
    cart = []; 
    renderCart(); 
}

document.addEventListener('DOMContentLoaded', () => {
  renderDishes();
  renderDrinks();
  renderDesserts();
  renderCart(); 
});

function increaseAmount(index) {
  cart[index].amount++;
  renderCart();
}

function decreaseAmount(index) {
  if (cart[index].amount > 1) {
      cart[index].amount--;
  } else {
      removeItem(index);
  }
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById('cart-content');
  cartContainer.innerHTML = cart.length === 0 
      ? "<span>Der Warenkorb ist leer.</span>" 
      : cart.map((item, index) => `
          <div class="cart-item">
              <div class="cart-item-info">
                  <h3>${item.name}</h3>
                  <p>Preis: €${item.price.toFixed(2)}</p>
                  <p>Anzahl: ${item.amount}</p>
              </div>
              <div class="cart-item-actions">
                  <button class="cart-btn" onclick="increaseAmount(${index})">+</button>
                  <button class="cart-btn" onclick="decreaseAmount(${index})">-</button>
                  <button class="cart-btn remove-btn" onclick="removeItem(${index})">x</button>
              </div>
          </div>
      `).join('');

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.amount, 0);
  if (cart.length > 0) {
      cartContainer.innerHTML += `<div class="total-price"><h3>Gesamtpreis: €${totalPrice.toFixed(2)}</h3></div>`;
  }
}

