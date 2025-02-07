const numero = document.getElementById('numero')
const tab = document.getElementById('tab')

function tabuada(){
    if (numero.value = ' ') {
        alert('Por favor digite um número')
    }else{
        let c = 0
        let num = numero.value
        while (c <= 10){
            let item = document.createElement('option')
            item.innerText = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}