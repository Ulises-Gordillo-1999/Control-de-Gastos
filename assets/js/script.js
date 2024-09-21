let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = [];
let posicionActual = null; // Variable para rastrear el gasto que se está editando

// Esta función se invoca cuando el usuario hace click en el botón agregar gasto
function clickBoton() {
  let nombreGasto = document.getElementById("nombreGasto").value;
  let descripcionGasto = document.getElementById("descripcionGasto").value;
  let valorGasto = Number(document.getElementById("valorGasto").value);

  if (!nombreGasto || !descripcionGasto || valorGasto <= 0) {
    alert("Por favor, completa todos los campos con valores válidos.");
    return;
  }

  // Validar si el valor del gasto es mayor a 150
  if (valorGasto > 150) {
    alert("¡Atención! Has registrado un gasto mayor a US$ 150.");
  }

  // Guardar el gasto
  listaNombresGastos.push(nombreGasto);
  listaValoresGastos.push(valorGasto);
  listaDescripcionesGastos.push(descripcionGasto);

  // Actualizar la lista de gastos
  actualizarListaGastos();
}

function actualizarListaGastos() {
  const listaElementos = document.getElementById("listaDeGastos");
  const totalElementos = document.getElementById("totalGastos");
  let htmlLista = "";
  let totalGastos = 0;

  listaNombresGastos.forEach((elemento, posicion) => {
    const valorGasto = Number(listaValoresGastos[posicion]);
    const descripcionGasto = listaDescripcionesGastos[posicion];

    htmlLista += `<li>
                    <strong>${elemento}</strong> - ARS ${valorGasto.toFixed(2)} 
                    <br> Descripción: ${descripcionGasto}
                    <button onclick="eliminarGasto(${posicion});">Eliminar Gasto</button>
                    <button onclick="modificarGasto(${posicion});">Modificar Gasto</button>
                  </li>`;

    totalGastos += valorGasto;
  });

  listaElementos.innerHTML = htmlLista;
  totalElementos.innerHTML = totalGastos.toFixed(2);
  limpiar();
}

function limpiar() {
  document.getElementById("nombreGasto").value = "";
  document.getElementById("descripcionGasto").value = "";
  document.getElementById("valorGasto").value = "";
  document.getElementById("botonFormulario").style.display = "inline";
  document.getElementById("botonGuardarCambios").style.display = "none";
  posicionActual = null; // Limpiamos la posición actual
}

function eliminarGasto(posicion) {
  listaNombresGastos.splice(posicion, 1);
  listaValoresGastos.splice(posicion, 1);
  listaDescripcionesGastos.splice(posicion, 1);
  actualizarListaGastos();
}

function modificarGasto(posicion) {
  // Mostrar el gasto actual en los campos del formulario para su edición
  document.getElementById("nombreGasto").value = listaNombresGastos[posicion];
  document.getElementById("descripcionGasto").value =
    listaDescripcionesGastos[posicion];
  document.getElementById("valorGasto").value = listaValoresGastos[posicion];

  // Ocultar el botón "Agregar Gasto" y mostrar "Guardar Cambios"
  document.getElementById("botonFormulario").style.display = "none";
  document.getElementById("botonGuardarCambios").style.display = "inline";

  // Guardar la posición actual que estamos modificando
  posicionActual = posicion;
}

function guardarCambios() {
  if (posicionActual !== null) {
    const nuevoNombre = document.getElementById("nombreGasto").value;
    const nuevaDescripcion = document.getElementById("descripcionGasto").value;
    const nuevoValor = Number(document.getElementById("valorGasto").value);

    if (!nuevoNombre || !nuevaDescripcion || nuevoValor <= 0) {
      alert("Por favor, completa todos los campos con valores válidos.");
      return;
    }

    // Actualizar los valores del gasto modificado
    listaNombresGastos[posicionActual] = nuevoNombre;
    listaDescripcionesGastos[posicionActual] = nuevaDescripcion;
    listaValoresGastos[posicionActual] = nuevoValor;

    actualizarListaGastos();
    limpiar();
  }
}
