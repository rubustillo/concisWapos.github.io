// Función para mostrar el contenido del carrito
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart');
    let totalPrice = 0;
    
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        cart.forEach(item => {
            const productElement = document.createElement('div');
            productElement.className = 'cart-item';
            productElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>Precio: $${item.price}</p>
                <p>Cantidad: ${item.quantity}</p>
                <button onclick="removeFromCart('${item.name}')">Eliminar</button>
            `;
            cartContainer.appendChild(productElement);

            // Calcular el precio total
            totalPrice += item.price * item.quantity;
        });

        // Mostrar el precio total
        const totalElement = document.createElement('div');
        totalElement.className = 'cart-total';
        totalElement.innerHTML = `
            <h3>Precio Total:<br> $${totalPrice.toFixed(2)}</h3>
        `;
        cartContainer.appendChild(totalElement);
    }
}

// Función para eliminar productos del carrito
function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Filtrar el producto que se va a eliminar
    cart = cart.filter(item => item.name !== productName);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Función para vaciar el carrito
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

// Mostrar el contenido del carrito al cargar la página
document.addEventListener('DOMContentLoaded', displayCart);
