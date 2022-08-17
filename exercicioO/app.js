'use strict'

function multiplicacao30(){

    const num1 = parseFloat(document.getElementById('num1').value)
    const calcular = document.getElementById('calcular')
    const formExerc = document.getElementById('form-exerc')
    const resultado = document.getElementById('result')

    let multiplicacao
    multiplicacao = parseInt(num1) * 2

    if(formExerc.reportValidity())
    {
        if(multiplicacao > 30)
        {
            resultado.textContent = `O resultado da multiplicação por dois é: ${multiplicacao}`
        }else if (multiplicacao < 30)
        {
            resultado.textContent = 'Só é possível apresentar um resultado se a multiplicação por dois do número digitado for maior que 30'
        }
    }
}

document.getElementById('calcular').addEventListener('click', multiplicacao30)