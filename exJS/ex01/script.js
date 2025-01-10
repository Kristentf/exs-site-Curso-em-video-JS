 function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora < 12){
        //manhã
        imagem.src = '/exJS/ex01/imagens/manhaG.jpg' 
    }   else if(hora >= 12 && hora <= 18){
        //tarde 
        imagem.src = '/exJS/ex01/imagens/tardeG.jpg'
    }   else {
        //noite
        imagem.src = '/exJS/ex01/imagens/noiteG.jpg'
    }
    
}