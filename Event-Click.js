//Exericio para prática e entendimento de eventos.
//Simulando em uma aplicação console a interação do usuario com clicks.


const EventEmitter = require('events')
class MeuEmissor extends EventEmitter{

}
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuarioClick'
meuEmissor.on(nomeEvento, function(click){
    console.log('um usuario clicou', click)
})

meuEmissor.emit(nomeEvento, 'na barra de rolagem')
meuEmissor.emit(nomeEvento, 'no ok')

let count = 0
setInterval(function (){

    meuEmissor.emit(nomeEvento, 'no ok' + (count++))
    
}, 1000)
