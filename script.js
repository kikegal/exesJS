function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 20
msg.innerHTML = `Now is ${hora} hours`
if (hora >=0 && hora < 12){
    img.src='./fotos/sunrise.png'
    document.body.style.background= 'yellow'

}else if (hora >=12 && hora < 18){
    img.src='./fotos/sunset.png'
    document.body.style.background= 'orange'


}else{
    img.src='./fotos/nightfall.png'
    document.body.style.background= 'Smooke'


}

}