//variable
const BaseDeDatos = [
    { id: 1, nombre: 'NIKE AIR FORCE 07', precio: 65000, imagen: 'img/AIR FORCE 1 07.png'},
    { id: 2, nombre: 'NIKE MAX PREY-DAY', precio: 70000, imagen: 'img/AIR MAX PREY-DAY.png'},
    { id: 3, nombre: 'NIKE LOW NATURE', precio: 65000, imagen: 'img/DUNK LOW RETRO NATURE.png'},
    { id: 4, nombre: 'NIKE DUNK LOW RETRO', precio: 70000, imagen: 'img/DUNK LOW RETRO.png'},
    { id: 5, nombre: 'NIKE LEBRON WHITE', precio:70000, imagen:'img/LEBRON XIX WHITE.png'},
    { id: 6, nombre: 'NIKE ALPHINA 5000', precio:65000, imagen:'img/NIKE ALPHINA 5000.png'},
    { id: 7, nombre: 'NIKE LEBRON XIX', precio:65000, imagen:'img/NIKE LEBRON XIX.png'},
    { id: 8, nombre: 'NIKE AIR FORCE 1 HI SE', precio:70000, imagen:'img/AIR FORCE 1 HI SE.png'},
    { id: 9, nombre: 'NIKE BLAZER PLATFORM', precio:7000, imagen:'img/NIKE BLAZER LOW PLATFORM SE.png'}


];

let carrito = [];
const moneda = '$';
const Product = document.querySelector('#Product');
const CarCompra = document.querySelector('#carrito');
const Totales = document.querySelector('#total');
const Vaciar = document.querySelector('#boton-vaciar');

function renderizarProductos() {
    BaseDeDatos.forEach((info) => {
        const tarjeta = document.createElement('div');           
        tarjeta.classList.add('card','col-sm-4');             //<div class="card col-sm-4"></div>
        const tarjetaBody = document.createElement('div');
        tarjetaBody.classList.add('card-body');                //<div class="card-body"></div>
        const tarjetaTitulo = document.createElement('h5');    
        tarjetaTitulo.classList.add('card-title');              //<h5 class="card-title"></h5>
        tarjetaTitulo.textContent = info.nombre
        const tarjetaimagen = document.createElement('img');      //<img class="img-fluid" src="">
        tarjetaimagen.classList.add('img-fluid');
        tarjetaimagen.setAttribute('src', info.imagen);
        const tarjetaprecio = document.createElement('p');          //<p class="card-text">$91.000</p>
        tarjetaprecio.classList.add('card-text');
        tarjetaprecio.textContent = `${info.precio}${ moneda}`; 
        const tarjetaBotton = document.createElement('button');      //<button class="btn btn-dark" marcador="1" onclick="agregarProducto()">+</button>
        tarjetaBotton.classList.add('btn','btn-dark','mx-5');  
        tarjetaBotton.textContent = 'Agregar';
        tarjetaBotton.setAttribute('marcador', info.id);
        tarjetaBotton.addEventListener('click',agregarproducto);
        
        tarjetaBody.appendChild(tarjetaimagen);
        tarjetaBody.appendChild(tarjetaTitulo);
        tarjetaBody.appendChild(tarjetaprecio);
        tarjetaBody.appendChild(tarjetaBotton);
        tarjeta.appendChild(tarjetaBody);
        Product.appendChild(tarjeta);
    });
}

function agregarproducto(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    renderizarCarrito();

}
function renderizarCarrito() {
    CarCompra.textContent = '';
    
    const Duplicados = [...new Set(carrito)];    //[1,2,1,4]
    Duplicados.forEach((item) => {
        const miItem = BaseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const tarjeta = document.createElement('li');
        tarjeta.classList.add('list-group-item', 'text-right', 'mx-2');
        tarjeta.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${moneda}`;

        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-dark', 'mx-5');
        miBoton.textContent = 'Borrar';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        tarjeta.appendChild(miBoton);
        CarCompra.appendChild(tarjeta);
    });
    Totales.textContent = calcularTotal();
}
function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    renderizarCarrito();
}
function calcularTotal() {
    return carrito.reduce((total, item) => {
        const miItem = BaseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}
function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
}
Vaciar.addEventListener('click', vaciarCarrito);

renderizarProductos();
renderizarCarrito();

