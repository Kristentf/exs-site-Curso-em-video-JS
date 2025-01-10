function verificar() {
    var nasc = document.querySelector('input#txtnasc')
    var res = document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()
    alert(nasc)
    res.innerHTML = `Você nasceu em ${nasc} e estamos em ${ano}`
}