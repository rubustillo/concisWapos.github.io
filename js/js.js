_toggle.onclick = () =>{
    _items.classList.toggle("open")
    _toggle.classList.toggle("close")
  }

  /*---------------INICIO CALENDARIOS---------------------*/
  document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.querySelector('.days');
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    // Primer día del mes
    const firstDay = new Date(year, month, 1).getDay();
    // Número de días en el mes
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Rellenar los días anteriores al primer día del mes
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        daysContainer.appendChild(emptyDiv);
    }
    
    // Rellenar los días del mes
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        daysContainer.appendChild(dayDiv);
    }
});


document.addEventListener('DOMContentLoaded', () => {
  const daysContainer = document.querySelector('.days2');
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  
  // Primer día del mes
  const firstDay = new Date(year, month, 1).getDay();
  // Número de días en el mes
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // Rellenar los días anteriores al primer día del mes
  for (let i = 0; i < firstDay; i++) {
      const emptyDiv = document.createElement('div');
      daysContainer.appendChild(emptyDiv);
  }
  
  // Rellenar los días del mes
  for (let day = 1; day <= daysInMonth; day++) {
      const dayDiv = document.createElement('div');
      dayDiv.textContent = day;
      daysContainer.appendChild(dayDiv);
  }
});

/*---------------FIN CALENDARIOS---------------------*/

/*---------------INICIO CArrito---------------------*/


function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Buscar si el producto ya está en el carrito
    const index = cart.findIndex(item => item.name === productName);
    if (index !== -1) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        cart[index].quantity += 1;
    } else {
        // Si el producto no está en el carrito, agregarlo
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} ha sido agregado al carrito.`);
    
}

/*---------------FIN CARRITO---------------------*/



