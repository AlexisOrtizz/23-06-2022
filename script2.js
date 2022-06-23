/* 
    1. Calculadora infija
    Hacer una página WEB (HTML) que sea una Calculadora Infija simple en JavaScript. No se
    puede usar nada que no hayamos visto aun en el Bootcamp al respecto. Hay que
    implementar las operaciones de:
    Suma (+)
    Resta (‒)
    Multiplicación (*)
    División (/)
    La calculadora tiene que soportar números decimales (con .).
    Sugerencia: Dibujar con HTML una tabla con los números y usar los eventos del DOM para
    poder identificar las acciones del usuario con nuestra calculadora.
*/

num1 = 0
num2 = 0
operacion = ""

function agregar(x) {
    resul = document.getElementById("resultado")
    numero = resul.innerHTML

    if(x === 'sumar' || x === 'resta' || x === 'multiplicacion' || x === 'division') {
        num1 = numero;
        operacion = x;
        resul.innerHTML = "0"
    } else if(x === 'igual') {
        num2 = numero
        calcular()
    } else{
        if(numero !== '0' || x === '.') {
            aux = numero + x
        } else {
            aux = x
        }
        
        resul.innerHTML = aux
    }

}

function calcular() {
    if(operacion === 'sumar') {
        sumar(num1, num2)
    } else if(operacion === 'resta') {
        restar(num1, num2)
    } else if(operacion === 'multiplicacion') {
        multiplicacion(num1, num2)
    } else if(operacion === 'division') {
        division(num1, num2)
    }

    num1 = num2
    num2 = 0
}

function sumar(a, b) {
    x = parseFloat(a)
    y = parseFloat(b)

    suma = x + y

    document.getElementById("resultado").innerHTML = suma
}

function restar(a, b) {
    x = parseFloat(a)
    y = parseFloat(b)

    resta = x - y

    document.getElementById("resultado").innerHTML = resta
}

function division(a, b) {
    x = parseFloat(a)
    y = parseFloat(b)

    if(y  !== 0) {
        resul = x / y
        document.getElementById("resultado").innerHTML = resul
    } else {
        document.getElementById("resultado").innerHTML = "Syntax error"
    }
    
}

function multiplicacion(a, b) {
    x = parseFloat(a)
    y = parseFloat(b)

    resul = x * y

    document.getElementById("resultado").innerHTML = resul
}