
let numero = prompt("Pon un numero");
function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
        // console.log("El numero " + numero + " es par");
    } else {
        return false;
        // console.log("El numero " + numero + " es impar");
    }


}

for (let i = 1; i <= numero; i++) {
    if (esPar(i)) {
        console.log("El numero " + i + " es par")
    } else {
        console.log("El numero " + i + " es impar")
    }

}