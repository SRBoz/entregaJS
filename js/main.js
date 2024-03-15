
let numero = prompt("Ingresa un numero:");
function esPar(numero) {
    // verifico si el resto es 0
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }


}

for (let i = 1; i <= numero; i++) {
    if (esPar(i)) {
        console.log("El numero " + i + " es par")
    } else {
        console.log("El numero " + i + " es impar")
    }

}