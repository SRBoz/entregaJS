// ----------------------------------------------------------
// Primer entrega

// let numero = prompt("Ingresa un numero:");
// function esPar(numero) {
//     // verifico si el resto es 0
//     if (numero % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }


// }

// for (let i = 1; i <= numero; i++) {
//     if (esPar(i)) {
//         console.log("El numero " + i + " es par")
//     } else {
//         console.log("El numero " + i + " es impar")
//     }

// }
// ----------------------------------------------------------

// Segunda entrega

let listaTareas = [];
//Funcion para agregar tareas
function agregarTarea() {

    let nuevaTarea = {
        nombre: prompt("Ingrese el nombre de la tarea:"),
        descripcion: prompt("Ingrese la descripcion de la tarea:"),
        fechaVencimiento: prompt("Ingrese la descripcion de la tarea:"),
    };

    listaTareas.push(nuevaTarea);

    // Mostrar las tareas
    console.log("Tarea agregada");


    // Preguntar si desea agregar otra tarea
    let agregarOtra = confirm("¿Desea agregar otra tarea?");
    if (agregarOtra) {
        agregarTarea();
    } else {
        // Preguntar si desea buscar una tarea
        let buscarTarea = confirm("¿Desea buscar una tarea?");
        if (buscarTarea) {
            buscarTareaPorNombre();
        }
    }
}

// Funcion para buscar una tarea por nombre usando el metodo find
function buscarTareaPorNombre() {
    listaTareas.forEach((tarea, index) => {
        console.log((index + 1) + ". " + tarea.nombre);
    });
    let nombreBuscado = prompt("Ingrese el nombre de la tarea que desea buscar:").toLowerCase();

    let tareaEncontrada = listaTareas.find(tarea => tarea.nombre === nombreBuscado);

    if (tareaEncontrada) {
        console.log("Tarea encontrada:");
        console.log("Nombre:", tareaEncontrada.nombre);
        console.log("Descripcion:", tareaEncontrada.descripcion);
        console.log("Fecha de vencimiento:", tareaEncontrada.fechaVencimiento);
    } else {
        console.log("No se encontro ninguna tarea con ese nombre.");
    }
}


agregarTarea()


