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

let tareas = [];

function agregarTarea(nombre, descripcion, fechaVencimiento) {
    do {
        // Pido todos los datos al usuario
        let nuevaTarea = {
            nombre: prompt("Nombre de la tarea:").toLowerCase(),
            descripcion: prompt("Breve descripcion de la tarea:").toLowerCase(),
            fechaVencimiento: prompt("Fecha de vencimiento:(dd/mm)")
        };
        // Agrego la/s tareas a la array
        tareas.push(nuevaTarea);

        // Pregunto si quiere agregar otra tarea (para tener un metodo de salida)
        let otraTarea = prompt("Desea agregar otra tarea?").toLowerCase()
        if (otraTarea !== "si") {
            break
        }

    }
    // Muestro las tareas detalladamente
    while (nombre !== "salir");
    console.log("Lista de tareas:");
    tareas.forEach((tarea, index) => {
        console.log((index + 1) + "- " +
            "Tarea: " + tarea.nombre + ", " +
            "Descripcion: " + tarea.descripcion + ", " +
            "Fecha: " + tarea.fechaVencimiento);
    });
}



agregarTarea()