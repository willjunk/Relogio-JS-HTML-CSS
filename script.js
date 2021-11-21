function carregar() {
    var msg = document.getElementById('msg2')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    setInterval(carregar, 500)

    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`
    if (hora >= 0 && hora < 12) {

        msg2.innerHTML = `Bom Dia !`
        img.src = 'Imagens/fotomanha.png'
        document.body.style.background = '#e2cd9f'


    }
    else if (hora >= 12 && hora <= 18) {
        msg2.innerHTML = `Boa Tarde !`
        img.src = 'Imagens/fototarde.png'
        document.body.style.background = '#b9846f'
    }
    else {
        msg2.innerHTML = `Boa Noite !`
        img.src = 'Imagens/fotonoite.png'
        document.body.style.background = '#515154'
    }

}