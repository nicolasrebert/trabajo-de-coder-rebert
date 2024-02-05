document.addEventListener('DOMContentLoaded', function() {
    // Obtengo una referencia al contenedor de botones y al contador del carrito
    const contenedorCarrito = document.getElementById('contenedor-carrito');
    const mostrarCarritoBtn = document.getElementById('mostrar-carrito');
    const cantidadProductosSpan = document.getElementById('cantidad-productos');
  
    // Inicio el carrito desde localStorage o creo un array vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
    // Actualiza la cantidad de productos en el botón del carrito
    function actualizarCantidadProductos() {
      cantidadProductosSpan.textContent = carrito.length;
    }
  
    // Función para agregar un producto al carrito
    function agregarProductoAlCarrito(producto) {
      carrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      actualizarCantidadProductos();
    }
  
    // Eventos para los botones de productos
    contenedorCarrito.addEventListener('click', function(event) {
      if (event.target.classList.contains('producto')) {
        const idProducto = event.target.id;
        agregarProductoAlCarrito(idProducto);
      }
    });
  
    // Evento para mostrar el carrito
    mostrarCarritoBtn.addEventListener('click', function() {
      alert('Productos en el carrito: ' + carrito.join(', '));
    });
  
    // Actualiza la cantidad de productos al cargar la página
    actualizarCantidadProductos();
  });
  