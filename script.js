let cart = [];

const dishes = [
  { name: "Thai Curry mit Gemüse", price: 12.50 },
  { name: "Thai Curry mit Garnelen", price: 14.75 },
  { name: "Thai Curry mit Huhn", price: 13.75 },
  { name: "Pad Thai mit Nudeln", price: 11.50 },
  { name: "Sushi-Platte", price: 15.00 }
];

const drinks = [
  { name: "Thai Eistee", price: 3.50 },
  { name: "Kokos Wasser", price: 4.00 },
  { name: "Limonade", price: 2.50 },
  { name: "Bier", price: 4.50 },
  { name: "Wein", price: 5.00 }
];

const desserts = [
  { name: "Mango Sticky Rice", price: 5.00 },
  { name: "Kokosnuss-Pudding", price: 4.50 },
  { name: "Frischer Obstsalat", price: 4.00 },
  { name: "Schokoladen Kekse", price: 3.50 }
];

function fertigeBestellung() {
  if (cart.length === 0) {
      alert("Ihr Warenkorb ist leer. Bitte fügen Sie Artikel hinzu, bevor Sie die Bestellung abschließen.");
      return;
    }
    window.location.href = "danke.html";
}

document.addEventListener('DOMContentLoaded', () => {
  renderItems(dishes, "eat-content");
  renderItems(drinks, "drinks-content");
  renderItems(desserts, "desserts-content");
  renderCart();
});

function renderItems(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.classList.add("item-row");
  container.innerHTML = items.map(item => `
    <div class="item">
      <h3>${item.name}</h3>
      <p>${item.description || ""}</p>
      <p>Preis: ${item.price.toFixed(2)} €</p>
      <button onclick="addToCart('${item.name}', ${item.price})">+</button>
    </div>
  `).join('');
}

function addToCart(name, price) {
  const found = cart.find(item => item.name === name);
  if (found) {
    found.amount++;
  } else {
    cart.push({ name, price, amount: 1 });
  }
  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById("cart-content");
    if (!cartContainer) {
    return;
  }

  if (cart.length === 0) {
    cartContainer.innerHTML = "Warenkorb ist leer.";
    return;
  }

  cartContainer.innerHTML = "";

  let total = 0;

    cart.forEach((item, index) => {
    total += item.price * item.amount;
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.amount}x ${item.name} – ${(item.price * item.amount).toFixed(2)} €</span>
      <button onclick="increaseAmount(${index})">+</button>
      <button onclick="decreaseAmount(${index})">-</button>
      <button onclick="removeItem(${index})">x</button>
    `;
    cartContainer.appendChild(div);
  });

  const totalDiv = document.createElement("div");
  totalDiv.innerHTML = `<strong>Gesamt: ${total.toFixed(2)} €</strong>`;
  cartContainer.appendChild(totalDiv);
}

function increaseAmount(index) {
  cart[index].amount++;
  renderCart();
}

function decreaseAmount(index) {
  if (cart[index].amount > 1) {
    cart[index].amount--;
  } else {
    cart.splice(index, 1);
  }
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

