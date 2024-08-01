// importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)



function obterUsuario(){
    // quando der algum problema -> reject (erro)
    // quando der sucesso -> resolve

    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function () {
            // return reject(new Error('Deu ruim de verdade!'))
            
            
            return resolve({
                id: 1,
                Nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)

    })
        
 }


 function obterTelefone (idUsuario){
    return new Promise(function resolvePromise(resolve, reject) {

        setTimeout(() =>{
            return resolve({
                telefone: '19971359432',
                ddd: 11
            })
        }, 2000);

    })
    
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

const usuarioPromise = obterUsuario()
// para manupular o sucesso usamos a função .then
// para manipular erros, usamos o .catch
usuarioPromise
    .then(function (usuario){
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result){
                return{
                    usuario: {
                        nome: usuario.Nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result){
            return {
               usuario: resultado.usuario,
               telefone: resultado.telefone,
               endereco: result
            }
        })

    }) 
    .then(function (resultado) {
        console.log(`
            
            Nome: ${resultado.usuario.nome}
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
            
            `)
 
    })
    .catch(function (error){
        console.log('Deu ruim', error)

    })


/*obterUsuario(function resolverUsuario(error, usuario) {
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
}) */



 //const usuario = obterUsuario()

 //console.log('usuario', usuario)