// CUANDO TERMINE DE CARGAR HTML | CSS | IMG | JS DEL CLIENTE | ETC 
fetch('/listado-productos')
  .then(response => response.json())
  .then(function(productos){
      //Obtengo el conteneder
      let contenedor = document.getElementById('misproductos');
      
      productos.forEach(function(producto){
        //crear h3
        //innerText producto.titulo
        //contenedor.appendChild(h3)
        contenedor.innerHTML = contenedor.innerHTML  + '<h3>' + producto.titulo + '</h3>';
    });
  });

