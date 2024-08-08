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


// Primeiro passo - adicionar  palavra chve async -> automaticamente ela retornará uma Promise

main()
async function main () {
    
    try{
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]



        console.log(`
            
            Nome: ${usuario.Nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            Endereco: ${endereco.rua}, ${endereco.numero}
            
            `)
        console.timeEnd('medida-promise')

    } catch (error) {
        console.error('Deu ruim'. error)
    }
}
