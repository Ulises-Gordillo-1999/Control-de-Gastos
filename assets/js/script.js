let listaNombresGastos = [];
let listaValoresGastos = [];

//Esta funcion se invoca cuando el usuario hace click en el boton agregar gasto
function clickBoton() {
  let nombreGasto = document.getElementById("nombreGasto").value;
  let valorGasto = document.getElementById("valorGasto").value;

  console.log(nombreGasto);
  console.log(valorGasto);

  console.log(listaNombresGastos);

  listaNombresGastos.push(nombreGasto);
  listaValoresGastos.push(valorGasto);

  console.log(listaNombresGastos);
  console.log(listaValoresGastos);

  //alert("click de usuario");

  actualizarListaGastos();
}

function actualizarListaGastos() {
  const listaElementos = document.getElementById("listaDeGastos");
  const totalElementos = document.getElementById("totalGastos");
  console.log(totalElementos);
  let htmlLista = "";
  let totalGastos = 0;
  listaNombresGastos.forEach((elemento, posicion) => {
    //console.log(elemento), console.log(posicion);
    const valorGasto = Number(listaValoresGastos[posicion]);
    htmlLista += `<li> ${elemento} - ARS ${valorGasto.toFixed(2)} 
    <button  onclick="eliminarGasto(${posicion});">Eliminar Gasto</button>
    </li>`;
    //Calculamos el total de gastos
    totalGastos += Number(valorGasto);
    console.log(totalGastos);
  });
  //console.log(htmlLista);
  listaElementos.innerHTML = htmlLista;
  totalElementos.innerHTML = totalGastos.toFixed(2);
  limpiar();
}

function limpiar() {
  document.getElementById("nombreGasto").value = "";
  document.getElementById("valorGasto").value = "";
}

function eliminarGasto(posicion) {
  listaNombresGastos.splice(posicion, 1);
  listaValoresGastos.splice(posicion, 1);
  actualizarListaGastos();
}
