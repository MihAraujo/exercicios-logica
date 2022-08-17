'use strict'

function validandoNumero(){

    const num1 = parseFloat(document.getElementById('num1').value)
    const calcular = document.getElementById('calcular')
    const formExerc = document.getElementById('form-exerc')
    const resultado = document.getElementById('result')

    if(formExerc.reportValidity())
    {
        if(num1 < 1 || num1 > 9)
        {
            resultado.textContent = 'O valor está fora da faixa permitida'
        }else
        {
            resultado.textContent = 'O valor está na faixa permitida'
        }
    }
}

document.getElementById('calcular').addEventListener('click',validandoNumero)