'use strict'

function validandoNumero(){

    const num1 = parseFloat(document.getElementById('num1').value)
    const calcular = document.getElementById('calcular')
    const resultado = document.getElementById('result')

    let multiplicacao

    if(num1 < 0)
    {
        multiplicacao = num1 * -1
        resultado.textContent = `O número digitado é negativo, positivo fica: ${multiplicacao}`
    }else
    {
        resultado.textContent = 'O número digitado é positivo'
    }
}

document.getElementById('calcular').addEventListener('click', validandoNumero)