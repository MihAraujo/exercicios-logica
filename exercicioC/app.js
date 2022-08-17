'use strict'

function mostrarMedia(){

    const num1 = parseFloat(document.getElementById('num1').value) 
    const num2 = parseFloat (document.getElementById('num2').value)
    const num3 = parseFloat (document.getElementById('num3').value)
    const num4 = parseFloat (document.getElementById('num4').value)
    const calcular = document.getElementById('calcular')
    const formExerc = document.getElementById('form-exerc')
    const resultado = document.getElementById('result')

    let media

    if(formExerc.reportValidity())
    {
        if(num1 == '' || num2 == '' || num3 == '' || num4 == '')
        {
            resultado.textcontent = 'É necessário que seja digitado todos os números'
        }else
        {
            media = (num1 + num2 + num3 + num4)/4
        }

        if(media > 5)
        {
            resultado.textContent = `A sua média é: ${media}, você está APROVADO!`
        }else
        {
            resultado.textContent = `A sua média é: ${media}, você está REPROVADO!`
        }
    }
}

document.getElementById('calcular').addEventListener('click',mostrarMedia)