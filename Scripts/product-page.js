const sec_product= document.getElementById('product-page');
const producto= JSON.parse(localStorage.getItem("producto"));


function createPageCard(){
    var prod_container= document.createElement('div');
    prod_container.setAttribute('id', 'prod-container');
    prod_container.setAttribute('class', 'container row');
    prod_container.innerHTML=
    `
        <div class="prod-img col-md-7">
            <div class="prod-img-container">
            <img src="${producto.imagen}" alt="productoImagen" class="img-fluid">
                
            </div>
        </div>
        <div class="prod-text col-md-5">
            <h3 class="text-center fs-2">${producto.nombre}</h3>
            <h2 class="price fs-1 text-center text-danger">$${producto.precio}</h2>
            <form action="./Scripts/form-control.js">
                <div class="formGroup row ">
                    <div class="offset-3 col-3">
                    <select name="fTalla" id="fTalla">
                        <option value="">Talla</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                    </div>
                    <div class="col-3">
                    <select name="fCantidadfinal" id="fCantidadfinal">
                        <option value="">Cantidad</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    
                </div>
                <div class="container-descripcion">
                    <h6>Descripción del producto</h6>
                    <p>${producto.descripción}</p>
                </div>
                <div id="container-buttons" class="formGroup row">
                    <button type="button" id="btnCompra" class="col-sm-3" onclick="showModal()">Comprar</button>
                    <button type="button" id="btnCarrito" class="col-sm-3" onclick="carritoAlert()">Añadir al Carrito</button>   
                </div>
            </form>                        
        </div>
    `
    sec_product.appendChild(prod_container);
}

function showModal(){
    var cantidadTotal = document.getElementById('fCantidadfinal').value;
    const mensaje = document.getElementById('total-pagar');
    var costoTotal = producto.precio * cantidadTotal;
    mensaje.textContent = "El monto final es de: $" + costoTotal;
    const modal= document.getElementById('modal');
    modal.style.display= 'flex';
}

function showModalSalir(){
    const modal= document.getElementById('modal');
    modal.style.display= 'none';
}


createPageCard();
