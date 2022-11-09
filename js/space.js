var boton = document.getElementById("btnBuscar");

boton.addEventListener("click", function(evento){
    var url = "https://images-api.nasa.gov/search?q=" +document.getElementById("inputBuscar").value; 
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then(function(data){
            console.log(data);
            var colocar = ``;
            var info = data.collection.items;
            for(let i = 0; i < data.collection.items.length; i++){
                colocar += `
                
                <div class="col-md-4">
                  <div class="card shadow-sm">
                    <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${info[i].links[0].href}" role="img" aria-label="Marcador de posición: Miniatura" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></img>
        
                    <div class="card-body">
                      <h5>${info[i].data[0].title}</h5>
                      <p class="card-text" style="overflow:auto; max-height:200px"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${info[i].data[0].description}</font><font style="vertical-align: inherit;">Este contenido es un poco más largo.</font></font></p>
                      <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${info[i].data[0].date_created}</font></font></small>
                      </div>
                    </div>
                  </div>
                </div>
                `;
                document.getElementById("contenedor").innerHTML = colocar;
            }
            
        })
})

