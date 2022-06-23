// ejercicio 1 y 2
/* 1. Escribir una función en JavaScript que calcule la versión que suma en la ecuación
 * Cuadrática */
function cuadradoPositivo(a, b, c) {
    return (-b + Math.sqrt(b ^ 2 - 4 * a * c)) / (2 * a)
}
/* 2. Escribir una función en JavaScript que calcule la versión que resta en la ecuación
 * cuadrática*/
function cuadradoNegativo(a, b, c) {
    return (-b - Math.sqrt(b ^ 2 - 4 * a * c)) / (2 * a)
}

function myFunction() {
    var a, b, c, texto;

    a = document.getElementById("a").value
    b = document.getElementById("b").value
    c = document.getElementById("c").value

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        texto = "Es necesario que los datos introducidos sean numéricos."
    } else {
        texto = a + "X^2+" + b + "X+" + c + "=0 ; X1 = " + cuadradoPositivo(2, 6, -6) + " ; "
        texto += "X2 = " + cuadradoNegativo(2, 6, -6)
    }

    document.getElementById("resultado").innerHTML = texto

}

// ejercicio 3
/* Escribir una función en JavaScript que reciba un id y un string y ponga como innerHTML
 * del elemento con el id referenciado el valor del string */
function recibirID(id, texto) {
    document.getElementById(id).innerHTML = texto
}

function myFunction2() {
    let id = document.getElementById("aa").value
    let texto = document.getElementById("bb").value

    recibirID(id, texto)
}

// ejercicio 4
/* 4. Escribir una función en JavaScript que reciba un id, y ponga en el innerHTML del
 * elemento con el id referenciado un número aleatorio entre 1 y 100*/
function myFunction3() {
    let id = document.getElementById("aaa").value
    let valor = parseInt(Math.random() * 100) + 1;

    recibirID(id, valor)
}
