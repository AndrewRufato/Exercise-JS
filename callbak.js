function obterUsuario(callback){
    setTimeout(function () {
    return callback (null, {
        id: 1,
        Nome: 'Aladin',
        dataNascimento: new Date()
    })
    }, 1000)
 }


 function obterTelefone (idUsuario, callback){
    setTimeout(() =>{
        return callback(null, {
            telefone: '19971359432',
            ddd: 11
        })
    }, 2000);
 }


 function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: "Rua dos bobos",
            numero:0,

        }  )
    }, 2000);
 }


function resolverUsuario (erro, usuario){
    console.log('usuario', usuario)


}

obterUsuario(function resolverUsuario(error, usuario) {
    if(error) {
        console.log ('Deu erro em usuario', error)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if (error1) {
            console.error('deu erro em telefone', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco ){
            if (error2) {
                console.error('deu erro em telefone', error)
                return;
            }
            console.log(`
             Nome: ${usuario.Nome},
             Endereco: ${endereco.rua},${endereco.numero}
             Telefone: ${telefone.ddd},${telefone.telefone}

            `)
    })
    }) 
})



 //const usuario = obterUsuario()

 //console.log('usuario', usuario)