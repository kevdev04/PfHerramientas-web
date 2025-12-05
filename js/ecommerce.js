var operador1 = 20;
var operador2 = 30;
var dato = "Cadena de Texto";

var carrito = [];
var totalCarrito = 0;

var productosArray = [
	{ id: 1, nombre: "Laptop Pro", precio: 15000, stock: 50 },
	{ id: 2, nombre: "Smartphone Elite", precio: 8500, stock: 30 },
	{ id: 3, nombre: "Auriculares Wireless", precio: 1200, stock: 5 },
	{ id: 4, nombre: "Tablet Pro", precio: 6000, stock: 25 },
	{ id: 5, nombre: "Cámara Digital", precio: 12000, stock: 0 },
	{ id: 6, nombre: "Smartwatch", precio: 3500, stock: 40 }
];

function datos_p(){
	var datos;
	var nombre;
	nombre = prompt("Introduzca su Nombre:");
	if(nombre){
		datos = 'Hola ' + nombre + ", Bienvenido a Ecommerce Kevin García";
		alert(datos);
	}
}

function agregarAlCarrito(id, nombre, precio){
	var producto = {
		id: id,
		nombre: nombre,
		precio: precio,
		cantidad: 1
	};
	
	var existe = false;
	for(var i = 0; i < carrito.length; i++){
		if(carrito[i].id === id){
			carrito[i].cantidad++;
			existe = true;
			break;
		}
	}
	
	if(!existe){
		carrito.push(producto);
	}
	
	actualizarCarrito();
}

function actualizarCarrito(){
	var container = document.getElementById('carritoItems');
	var total = 0;
	
	if(carrito.length === 0){
		container.innerHTML = '<div class="empty-cart"><i class="bi bi-cart-x"></i><p>Tu carrito está vacío</p></div>';
	} else {
		var contenido = "";
		for(var i = 0; i < carrito.length; i++){
			var subtotal = carrito[i].precio * carrito[i].cantidad;
			total += subtotal;
			contenido += '<div class="cart-item">';
			contenido += '<div class="d-flex justify-content-between align-items-start mb-2">';
			contenido += '<div class="flex-grow-1">';
			contenido += '<strong class="d-block">' + carrito[i].nombre + '</strong>';
			contenido += '<small class="text-muted">Cantidad: ' + carrito[i].cantidad + ' x $' + carrito[i].precio.toLocaleString('es-ES') + '</small>';
			contenido += '</div>';
			contenido += '<strong class="text-primary">$' + subtotal.toLocaleString('es-ES') + '</strong>';
			contenido += '</div>';
			contenido += '</div>';
		}
		container.innerHTML = contenido;
	}
	
	totalCarrito = total;
	document.getElementById('totalCarrito').textContent = "$" + total.toLocaleString('es-ES');
}

function vaciarCarrito(){
	if(carrito.length === 0){
		alert("El carrito ya está vacío");
		return;
	}
	
	if(confirm("¿Estás seguro de que deseas vaciar el carrito?")){
		carrito = [];
		actualizarCarrito();
	}
}

function procesarCompra(){
	if(carrito.length === 0){
		alert("Tu carrito está vacío. Agrega productos antes de comprar.");
		return;
	}
	
	var nombre = prompt("Introduce tu nombre para la compra:");
	if(nombre){
		var mensaje = "¡Gracias " + nombre + " por tu compra!\n\n";
		mensaje += "Total a pagar: $" + totalCarrito.toLocaleString('es-ES') + "\n";
		mensaje += "Productos: " + carrito.length + "\n\n";
		mensaje += "Tu pedido será procesado pronto.";
		alert(mensaje);
		vaciarCarrito();
	}
}

window.onload = function(){
	actualizarCarrito();
};
