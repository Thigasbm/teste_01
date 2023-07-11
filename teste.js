function aplicarDesconto(valor, desconto){
    return valor - desconto
}
function validaNumero(valor){
return isNaN(valor) //valida se é um numero
}

console.log ('app funcionando');
console.log (aplicarDesconto())


module.exports = {aplicarDesconto} //funções publicas: posso ultilizar a função em outro arquivo. funçoes privadas: apenas no arquivo de origem
module.exports = {validaNumero}