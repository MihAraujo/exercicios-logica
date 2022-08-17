'use strict'

function mostrarResultado(){

    const num1 = parseFloat(document.getElementById('num1').value) 
    const num2 = parseFloat (document.getElementById('num2').value)
    const calcular = document.getElementById('calcular')
    const formExerc = document.getElementById('form-exerc')
    const resultado = document.getElementById('result')

    let valorFinal

    if(formExerc.reportValidity())
    {
        if (num1 < num2){
            valorFinal = num2 - num1
            resultado.textContent = ` A diferença é: ${valorFinal}`
        }else if(num2 < num1){
            valorFinal = num1 - num2
            resultado.textContent = ` A diferença é: ${valorFinal}`
        }
    }
}

document.getElementById('calcular').addEventListener('click', mostrarResultado)