const contenedor_cartas= document.getElementById("container-cards");

var todos_los_productos= [];
var productos_filtrados= [];

const createCard=(productos)=> {
  contenedor_cartas.innerHTML= '';
    productos.forEach(producto => {
      const cardProducto = document.createElement('div');
      var prod_item= `${producto.item}`
      cardProducto.setAttribute("data-prod", prod_item);

      cardProducto.setAttribute("class", "card");
      var prodCategoria= `${producto.categoria}`;
      cardProducto.setAttribute("data-item", prodCategoria);
      cardProducto.innerHTML += `
        <div class="card-imageContainer">
          <img src="${producto.imagen}" alt="" id="card-img">
        </div>
        <div class="card-body border-top">
          <div class="card-heading">
            <a href="" class="text-decoration-none" class="card-tittle">${producto.nombre}</a>
          </div>
          <div class="card-text d-flex justify-content-around" id="card-prices">
            <p class="fs-4" id="price">$ ${producto.precio}</p>
            <p class="text-success" id="discount">${producto.descuento}</p>
          </div>
        </div>
        <a class="prod-link bg-danger text-center text-decoration-none" onclick="sendProduct(${producto.item})" href="./product-page.html">
          <p class="card-button text-white">Comprar</p> 
        </a>`;
      contenedor_cartas.appendChild(cardProducto);
    });
}

const getCardData=()=>{
  fetch("https://bruno1084.github.io/TpMaquina-DW.github.io/Json/Productos.json")
  .then(res => res.json())
  .then(res => {
    todos_los_productos= res;
    createCard(todos_los_productos);
  })
}

function sendProduct(item){
  localStorage.setItem("producto", JSON.stringify(todos_los_productos[item]));
}



getCardData();

