const productList = document.getElementById('product-list');
const productForm = document.getElementById('product-form');
const noProductsMessage = document.getElementById('no-products-message');

// Mostrar mensaje si no hay productos
function toggleNoProductsMessage() {
  noProductsMessage.style.display = productList.children.length === 0 ? 'block' : 'none';
}

// Agregar evento al formulario
productForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtener datos del formulario
  const name = document.getElementById('product-name').value;
  const price = document.getElementById('product-price').value;
  const image = document.getElementById('product-image').value;

  // Crear tarjeta de producto
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  productCard.innerHTML = `
    <img src="${image}" alt="${name}">
    <div class="card-container--info">
      <p>${name}</p>
      <div class="card-container--value">
        <p>$${price}</p>
        <button onclick="this.parentElement.parentElement.parentElement.remove(); toggleNoProductsMessage();">🗑️</button>
      </div>
    </div>
  `;

  productList.appendChild(productCard);
  toggleNoProductsMessage();
  productForm.reset();
});

toggleNoProductsMessage();
