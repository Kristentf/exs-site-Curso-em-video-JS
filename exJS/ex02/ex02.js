function verificar() {
    var nasc = document.getElementById('txtnasc')
    var res = document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()
    var idade = (ano - nasc.value)
    
    var sexo = document.getElementsByName('redsex')

    if (nasc.value > ano){
        alert('[ERRO] tente novamente')

    } else if () {
        alert('[ERRO] tente novamente')
    } else if (idade < 4){
        res.innerHTML = `Detectamos um bebê do sexo ${sexo} com ${idade} anos`
    } else if (idade < 13) {
        res.innerHTML = `Você é criança e tem ${idade} anos`
    } else if (idade < 18) {
        res.innerHTML = `Você é adolecente e tem ${idade} anos`
    } else if (idade < 60) {
        res.innerHTML = `Você é adulto e tem ${idade} anos`
    } else if (idade >= 60 ) {
        res.innerHTML = `Você é idoso e tem ${idade} anos`
    } else{
        res.innerHTML = `FALTA PREENCHER`
    }
}